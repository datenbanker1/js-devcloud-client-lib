import { ServerError, UnknownError } from "./../errors/Connection";
import { DevCloud, Authentication } from "./../";
import axios from "axios";
export default class Connector {
  /**
   * object
   * @param {Object} req
   * @param {String} api
   * @param {Boolean} useAppToken
   * @param {String|Boolean} token
   */
  constructor(api, useAppToken = false) {
    this.useAppToken = useAppToken;
    this.refreshConfig(api);
  }
  refreshConfig(api) {
    this._config = DevCloud.getConfig();
    console.log(DevCloud.getConfig());
    const { accessToken, app } = this._config.tokens;
    if (this.useAppToken) this._authorization = app;
    else this._authorization = accessToken || app;
    this._api = api;
    this.reconnected = false;
  }
  /**
   * Promise
   * @param {Object} params
   * @return {Promise}
   */
  async call(params) {
    if (!params.data) {
      params.data = {};
    }
    const request = {
      method: params.method,
      url: this._api + params.function,
      headers: {
        Authorization: "Bearer " + this._authorization,
        accept: "application/json",
        "Content-Type": "application/json"
      },
      data: params.data,
      json: true
    };

    let response;
    try {
      response = await axios(request);
    } catch (error) {
      if (error.response) {
        const resp = error.response;
        // reconnect if access token expired
        if (
          resp.status === 403 &&
          resp.data.code === "accessTokenExpired" &&
          this.reconnected === false
        ) {
          try {
            await this.reconnect();
            this.reconnected = true;
          } catch (error) {
            DevCloud.on("notAuthorized");
          }
          this.refreshConfig(this._api);
          return this.call(params);
          // retry with new tokens
        } else if (resp.status === 403) {
          DevCloud.on("notAuthorized");
        }
        if (resp) {
          throw new ServerError(
            resp.data.code,
            resp.data.errors,
            resp.data.message
          );
        } else {
          console.log(error);
          throw new UnknownError();
        }
      } else {
        throw error;
      }
    }
    return response.data;
  }
  async reconnect() {
    const { tokens } = DevCloud.getConfig();

    const authentication = new Authentication();
    const pool = authentication.getPool();
    const request = {
      method: "POST",
      url: "https://authentication.datenbanker.at/token/refresh",
      headers: {
        Authorization: "Bearer " + tokens.app,
        accept: "application/json",
        "Content-Type": "application/json"
      },
      data: {
        pool,
        token: tokens.refreshToken
      }
    };

    let response;
    response = await axios(request);
    DevCloud.setTokens(response.data);
    return response.data;
  }
}
