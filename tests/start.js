import config from "./config";
import { DevCloud } from "./../";
import AuthenticationTests from "./Authentication";

console.log("####Start Testing######");
DevCloud.init({
  apiToken: config.accessToken.admin,
  services: {
    authentication: {
      user: {
        pool: ["5502787c-879e-4bb5-b9fa-7fc59920ad91"]
      }
    },
    customer: {
      person: {
        pool: ["188b39f6-e9a0-4814-9312-adff54aa820f"]
      },
      opportunity: {
        pool: ["a5452ff8-189d-4b9d-96b2-525179f921a9"]
      },
      task: {
        pool: ["3b955ad1-db47-4d70-94a3-d0623f907cee"]
      }
    }
  },
  handler: {
    tokenChange: tokens => {}
  }
});
console.log("init success");
// start testing
(async () => {
  try {
    const result = await AuthenticationTests();
  } catch (err) {
    console.log(err);
  }
})();
