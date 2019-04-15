import { apiTokenNotSetError } from "./../errors/General";

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
      groups: [],
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
  setTokens(newTokens = false) {
    if (newTokens === false)
      newTokens = {
        accessToken: false,
        refreshToken: false,
        idToken: false
      };
    if (newTokens.accessToken) {
      const data = JSON.parse(window.atob(newTokens.accessToken.split(".")[1]));
      this.config.groups = data.scopes;
    } else {
      this.config.groups = [];
    }
    this.on("tokenChange", newTokens);
    this.config.tokens = { ...this.config.tokens, ...newTokens };
    this.config.signedIn = !!newTokens.accessToken;
  }
  getIdToken() {
    return this.config.tokens.idToken;
  }
  getGroups() {
    return this.groups;
  }
  getConfig() {
    return this.config;
  }
}

let DevCloud = new DevCloudClass();

export default DevCloud;
