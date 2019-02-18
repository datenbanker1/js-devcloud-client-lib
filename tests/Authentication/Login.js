import { Authentication } from "../../src";

export default async ({ username, password }) => {
  const auth = new Authentication();
  return auth.login(username, password);
};
