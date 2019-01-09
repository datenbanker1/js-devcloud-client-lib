export function apiTokenNotSetError(msg) {
  this.message = msg;
  this.name = "apiTokenNotSet";
}

export function apiNotSetError(msg) {
  this.message = msg;
  this.name = "apiNotSet";
}

export function AuthorizerError(msg) {
  this.message = msg;
  this.name = "authorizerNotSet";
}

export function requestError(code, errors, msg) {
  this.message = msg || "";
  this.errors = errors;
  this.name = code;
}

export function PoolException(message) {
  this.message = message;
  this.name = "PoolException";
}

export function IdException(message) {
  this.message = message;
  this.name = "IdException";
}

