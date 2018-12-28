import services from "./../config/services";
import { DevCloud } from "./../";
import Connector from "./helper/Connector";
// used for communication with authentication service
export default class Authentication {
  constructor(config = {}) {
    this.user = {
      pool: getUserPool(config.user)
    };
  }
  /**
   * Promise
   * @param {Object} params
   * @return {Promise}
   */
  async login(username, password) {
    const connector = new Connector(services.authentication.address, true);
    const resp = await connector.call({
      method: "POST",
      function: "/login",
      data: {
        username,
        password,
        pool: this.user.pool
      }
    });
    if (resp.accessToken && resp.idToken && resp.refreshToken) {
      DevCloud.setTokens({ ...resp });
    }

    return resp;
  }

  logout() {
    DevCloud.setTokens(false);
  }

  async challenge(challenges, session) {
    const connector = new Connector(services.authentication.address);
    const resp = await connector.call({
      method: "POST",
      function: "/challenge",
      data: {
        session,
        challenges
      }
    });

    if (resp.accessToken && resp.idToken && resp.refreshToken) {
      DevCloud.setTokens({ ...resp });
    }

    return resp;
  }
  async resetPassword(email) {
    const connector = new Connector(services.authentication.address);
    return await connector.call({
      method: "POST",
      function: "/password/reset",
      data: {
        email,
        pool: this.user.pool
      }
    });
  }
  async resetAccount(email) {
    const connector = new Connector(services.authentication.address);
    return await connector.call({
      method: "POST",
      function: "/account/reset",
      data: {
        email,
        pool: this.user.pool
      }
    });
  }
  getPool() {
    return this.user.pool;
  }
}
const getUserPool = (config = {}) => {
  if (config.pool) return config.pool;
  const { authentication } = DevCloud.getConfig().services;
  if (
    authentication.user &&
    authentication.user.pool &&
    authentication.user.pool.length === 1
  ) {
    return authentication.user.pool[0];
  }
};
