import { apiTokenNotSetError } from "./errors/General";
import Authentication from "./lib/Authentication";
import Customer from "./lib/Customer";

class DevCloudClass {
  init(params) {
    if (!params.apiToken) throw apiTokenNotSetError("Please set an apiToken");
    let config = {
      tokens: {
        app: params.apiToken,
        accessToken: false,
        refreshToken: false,
        idToken: false
      },
      services: params.services || {},
      handler: params.handler || {},
      handlerList: ["tokenChange", "notAuthorized"]
    };
    this.config = config;
  }
  changeAppToken(token) {
    this.config.tokens.app = token;
  }
  registerHandler(handler) {
    this.config.handler = { ...this.config.handler, ...handler };
  }
  on(event, params = {}) {
    if (this.config.handler[event]) this.config.handler[event](params);
  }
  setTokens(newTokens) {
    this.on("tokenChange", newTokens);
    this.config.tokens = { ...this.config.tokens, ...newTokens };
  }
  getConfig() {
    return this.config;
  }
}

let DevCloud = new DevCloudClass();
export { DevCloud, Authentication, Customer };
