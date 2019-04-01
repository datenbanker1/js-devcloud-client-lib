import { Authentication } from "../../src";

export default {
  add: async params => {
    const auth = new Authentication();
    console.log(auth);
    return auth.user.add(
      params.username,
      params.email,
      params.group,
      params.person
    );
  }
};
