import Authenticaion from "../Authentication";
import Customer from "../Customer";
import Art from "../Art";
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
            { key: "username", error: "notValid" },
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
  },
  {
    name: "Customer/Person - history",
    function: Customer.Person.history,
    scenarios: [
      {
        name: "Success",
        params: {
          id: "c7354e29-b610-45e6-a5c9-642c620fbfbe"
        },
        response: {
          start: "eyJlbnRyeSI6MH0=",
          previouse: Boolean,
          events: [
            {
              requestId: String,
              app: String,
              ip: String,
              creatrionDate: String
            }
          ]
        }
      }
    ]
  },
  {
    name: "Art - pool/my",
    function: Art.Pool.my,
    scenarios: [
      {
        name: "Success",
        params: {},
        response: []
      }
    ]
  },
  {
    name: "Art - pool/all",
    function: Art.Pool.all,
    scenarios: [
      {
        name: "Success",
        params: {},
        response: []
      }
    ]
  },
  {
    name: "Art - pool/add",
    function: Art.Pool.add,
    scenarios: [
      {
        name: "Success",
        params: {
          name: "Test - Pool",
          displayName: "Test",
          type: "rent"
        },
        response: []
      }
    ]
  },
  {
    name: "Art - pool/delete",
    function: Art.Pool.delete,
    scenarios: [
      {
        name: "Success",
        params: {
          id: "67ce20b8-eb6f-4705-9876-da5f5bf48683"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - pool/user/add",
    function: Art.Pool.userAdd,
    scenarios: [
      {
        name: "Success",
        params: {
          user: "79b95b80-a284-4aa1-b789-175ef88f001e",
          pool: "cf1233b6-34d9-4ff9-ba6a-0f230794281f"
        },
        response: {
          action: "added"
        }
      }
    ]
  },
  {
    name: "Art - pool/user/delete",
    function: Art.Pool.userDelete,
    scenarios: [
      {
        name: "Success",
        params: {
          user: "79b95b80-a284-4aa1-b789-175ef88f001e",
          pool: "cf1233b6-34d9-4ff9-ba6a-0f230794281f"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - pool/art/add",
    function: Art.Pool.artAdd,
    scenarios: [
      {
        name: "Success",
        params: {
          art: "ccfeecb4-acfd-4dd0-a1ac-f02780a293d9",
          pool: "cf1233b6-34d9-4ff9-ba6a-0f230794281f"
        },
        response: {
          action: "added"
        }
      }
    ]
  },
  {
    name: "Art - pool/user/delete",
    function: Art.Pool.artDelete,
    scenarios: [
      {
        name: "Success",
        params: {
          art: "ccfeecb4-acfd-4dd0-a1ac-f02780a293d9",
          pool: "cf1233b6-34d9-4ff9-ba6a-0f230794281f"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - artist/get",
    function: Art.Artist.get,
    scenarios: [
      {
        name: "Success",
        params: {
          id: "b021e6e9-e853-4a01-9a8e-5de0b1cfd204"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - artist/all",
    function: Art.Artist.all,
    scenarios: [
      {
        name: "Success",
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - artist/added",
    function: Art.Artist.add,
    scenarios: [
      {
        name: "Success",
        params: {
          name: "Muenchausen, Herbert",
          birthDate: 500012231234,
          placeOfBirth: "Munchen",
          mainPlaceOfResidence: "Berlin",
          education: "Schule",
          awards: "Preise"
        },
        response: {
          action: "added"
        }
      }
    ]
  },
  {
    name: "Art - artist/delete",
    function: Art.Artist.delete,
    scenarios: [
      {
        name: "Success",
        params: {
          id: "6beaad69-dbff-4c7d-aaf5-d5b42914a0ac"
        },
        response: {
          action: "deleted"
        }
      }
    ]
  },
  {
    name: "Art - artist/all",
    function: Art.Art.all,
    scenarios: [
      {
        name: "Success",
        params: {
          pool: "cf1233b6-34d9-4ff9-ba6a-0f230794281f"
        },
        response: []
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
