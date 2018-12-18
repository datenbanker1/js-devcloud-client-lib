import { DevCloud, Authentication } from "./../../";
import { ConnectionError, ServerError, UnknownError } from "./../../errors/Connection";
import request from "request-promise-native";
/** Used to build a connection to all services **/
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
    const options = {
      method: params.method,
      url: this._api + params.function,
      headers: {
        Authorization: "Bearer " + this._authorization,
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: params.data,
      json: true
    };

    let response;
    try {
      response = await request(options);
      console.log(response);
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
          return await this.call(params);
          // retry with new tokens
        } else if (resp.status === 403) {
          DevCloud.on("notAuthorized");
        }
        if (resp) {
          throw new ServerError(
            resp.body.code,
            resp.body.errors,
            resp.body.message
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
      body: {
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
