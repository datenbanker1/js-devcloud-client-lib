import { Authentication } from "./../../";

export default async () => {
  const auth = new Authentication();
  const tests = [
    async () => {
      let resp;
      try {
        resp = await auth.login("Max", "Test");
      } catch (err) {
        resp = err;
      }
      console.log("login", resp);
    }
  ];

  return tests.map(async test => {
    return test();
  });
};
