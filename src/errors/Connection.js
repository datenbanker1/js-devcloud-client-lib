export function ConnectionError(code, errors, msg = "") {
  this.name = "connectionError";
  this.code = code;
  this.errors = errors;
  this.message = msg;
}

export function ServerError(code, errors, msg = "") {
  this.name = "serverError";
  this.code = code;
  this.errors = errors;
  this.message = msg;
}

export function UnknownError() {
  this.code = "unknownError";
  this.errors = [];
  this.name = "unknownConnectionError";
}
