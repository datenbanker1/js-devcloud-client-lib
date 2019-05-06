import { apiTokenNotSetError } from "./../errors/General";
import endPoints from "./../config/services";
import Storage from "@datenbanker/storage";
const storage = new Storage();

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
      groupsAlias: params.groups || {},
      signedIn: false,
      services: params.services || {},
      endPoints: params.endPoints || endPoints,
      handler: params.handler || {},
      handlerList: ["tokenChange", "notAuthorized"]
    };
    this.config = config;
    this.setTokens({
      accessToken: storage.get("user:accessToken"),
      refreshToken: storage.get("user:idToken"),
      idToken: storage.get("user:refreshToken")
    });
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
      this.config.groups = data.scopes.map(
        scope => this.config.groupsAlias[scope] || scope
      );
    } else {
      this.config.groups = [];
    }

    storage.set("user:accessToken", newTokens.accessToken);
    storage.set("user:idToken", newTokens.idToken);
    storage.set("user:refreshToken", newTokens.refreshToken);

    this.on("tokenChange", newTokens);
    this.config.tokens = { ...this.config.tokens, ...newTokens };
    this.config.signedIn = !!newTokens.accessToken;
  }
  getIdToken() {
    return this.config.tokens.idToken;
  }
  getGroups() {
    return this.config.groups;
  }
  getConfig() {
    return this.config;
  }
  getEndPoints() {
    return this.config.endPoints;
  }
}

let DevCloud = new DevCloudClass();

export default DevCloud;
