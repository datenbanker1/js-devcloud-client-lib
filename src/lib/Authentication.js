import services from "./../config/services";
import { DevCloud } from "./../";
import Connector from "./../helper/Connector";
// used for communication with authentication service
export default class Authentication {
  constructor(config = {}) {
    this.config = {
      user: { pool: getUserPool(config.user) }
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
        pool: this.config.user.pool
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
    return connector.call({
      method: "POST",
      function: "/password/reset",
      data: {
        email,
        pool: this.config.user.pool
      }
    });
  }
  async resetAccount(email) {
    const connector = new Connector(services.authentication.address);
    return connector.call({
      method: "POST",
      function: "/account/reset",
      data: {
        email,
        pool: this.config.user.pool
      }
    });
  }
  getPool() {
    return this.config.user.pool;
  }
  user = {
    add: async (username, email, groups = [], person, pool = false) => {
      const connector = new Connector(services.authentication.address);
      if (pool === false) pool = this.config.user.pool;
      let data = { username, groups, pool };
      if (email) data.email = email;
      if (person) data.person = person;
      return connector.call({
        method: "POST",
        function: "/user/add",
        data
      });
    },
    update: async (set, id, pool) => {
      const connector = new Connector(services.authentication.address);
      if (pool === false) pool = this.config.user.pool;
      return connector.call({
        method: "POST",
        function: "/user/update",
        data: {
          ...set,
          id,
          pool
        }
      });
    }
  };
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
