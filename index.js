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
      signedIn: false,
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
    if (newTokens === false)
      newTokens = {
        accessToken: false,
        refreshToken: false,
        idToken: false
      };
    this.on("tokenChange", newTokens);
    this.config.tokens = { ...this.config.tokens, ...newTokens };
    this.config.signedIn = !!newTokens.accessToken;
  }
  getConfig() {
    return this.config;
  }
}

let DevCloud = new DevCloudClass();
export { DevCloud, Authentication, Customer };
