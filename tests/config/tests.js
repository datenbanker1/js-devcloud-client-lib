import Authenticaion from "../Authentication";
import Customer from "../Customer";
import access from "./access";
export default [
  {
    name: "Authentication - login",
    function: Authenticaion.login,
    scenarios: [
      {
        name: "Success",
        params: access.admin,
        response: {
          accessToken: String,
          idToken: String,
          refreshToken: String
        }
      },
      {
        name: "Wrong Password",
        params: { username: "Maximilian", password: "asd" },
        response: {
          name: "serverError",
          code: "forbidden",
          errors: [
            { key: "username", error: "anotValid" },
            { key: "password", error: "notValid" }
          ]
        }
      }
    ]
  },
  {
    name: "Customer/Person - add",
    function: Customer.Person.add,
    scenarios: [
      {
        name: "Success",
        params: {
          firstName: "Maximilian",
          lastName: "Mustermann",
          gender: "m",
          birthDate: +new Date(),
          types: { type1: { typeCustom1: "customType test" } },
          custom1: "test custom field"
        },
        response: {
          action: "added",
          id: String
        }
      }
    ]
  },
  {
    name: "Customer/Person - delete",
    function: Customer.Person.delete,
    scenarios: [
      {
        name: "Success",
        params: {
          id: "6e61141d-6dba-41bb-a26e-735c40920c43"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  }
].map(test => {
  return {
    ...test,
    scenarios: test.scenarios.map(scenario => ({
      ...scenario,
      error: null,
      result: null
    }))
  };
});
