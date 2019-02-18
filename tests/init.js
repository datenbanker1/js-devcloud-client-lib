import React, { Component } from "react";
import ReactDOM from "react-dom";
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/monikai";
import { DevCloud } from "../src";
import Storage from "@datenbanker/storage";
import tests from "./config/tests";

const storage = new Storage();

DevCloud.init({
  apiToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyNjYwZDcxNC1lOGQ4LTQ1MTYtYTcyMS05MTc0NTEzZDg2ZTciLCJzY29wZXMiOlsiZDJmNGY0NzEtOGNhZi00NjAxLThhYzgtOGJkYWE3MmI4YWI2Il19.lpvOSk_nYLyeO9KMSe8qIhS9rh_K7gFGhiKPOkZKOUU",
  services: {
    authentication: {
      user: {
        pool: ["5502787c-879e-4bb5-b9fa-7fc59920ad91"] // 0231a2b2-e877-4636-86d2-1e20b4d91838
      }
    },
    customer: {
      person: {
        pool: ["188b39f6-e9a0-4814-9312-adff54aa820f"]
      },
      opportunity: {
        pool: ["46321b9c-7abd-4c7d-8e1e-3c2c96e20c96"]
      },
      task: {
        pool: ["46321b9c-7abd-4c7d-8e1e-3c2c96e20c96"]
      }
    }
  },
  handler: {
    tokenChange: tokens => {
      storage.set("user:accessToken", tokens.accessToken);
      storage.set("user:idToken", tokens.idToken);
      storage.set("user:refreshToken", tokens.refreshToken);
    }
  }
});

class UI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests
    };
    this.validateResult = this.validateResult.bind(this);
    this.setPendingFactory = this.setPendingFactory.bind(this);
    this.setResultFactory = this.setResultFactory.bind(this);
    this.print = this.print.bind(this);
  }
  validateResult(result, response) {
    const errors = Object.keys(response).filter(key => {
      // wil not work for Date and is not recursive on objects
      if (
        typeof response[key] === "function" &&
        typeof response[key](result[key]) === typeof result[key]
      )
        return false;
      else if (typeof response[key] !== typeof result[key]) return true;
      else if (Array.isArray(response[key]) && Array.isArray(result[key]))
        return !!response[key].filter((responseItem, index) =>
          this.validateResult(responseItem, result[key][index])
        ).length;
      else if (response[key] === result[key]) return false;
      else return true;
    });
    return !!errors.length;
  }
  setPendingFactory(testIndex, scenarioIndex) {
    return () => {
      let newState = { ...this.state };
      const scenario = this.state.tests[testIndex].scenarios[scenarioIndex];
      newState.tests[testIndex].scenarios[scenarioIndex] = {
        ...scenario,
        result: null,
        error: null
      };
      this.setState(newState);
    };
  }
  setResultFactory(testIndex, scenarioIndex) {
    return (result, error) => {
      let newState = { ...this.state };
      const scenario = this.state.tests[testIndex].scenarios[scenarioIndex];
      newState.tests[testIndex].scenarios[scenarioIndex] = {
        ...scenario,
        result,
        error
      };
      this.setState(newState);
    };
  }
  async runTest(promise, response, setResult, setPending) {
    setPending();
    let result;
    try {
      result = await promise;
    } catch (error) {
      result = error;
      console.log(error);
    }
    const error = this.validateResult(result, response);
    setResult(result, error);
  }
  print(object) {
    const mapper = value => {
      if (typeof value === "function") return "Function::" + value.name;
      else if (typeof value === "object") return this.print(value);
      else return value;
    };
    if (Array.isArray(object)) {
      return object.map(mapper);
    } else {
      let helper = {};
      Object.keys(object).forEach(key => {
        helper[key] = mapper(object[key]);
      });
      return helper;
    }
  }
  scenarios(test, index) {
    return test.scenarios.map((scenario, i) => {
      const { name, params, result, response, error } = scenario;
      Object.keys(response).forEach(key => {
        if (typeof response[key] === "function") {
        }
      });
      return (
        <li key={"test-" + index + "-scenario-" + i}>
          <span
            style={{
              color: error === true ? "red" : error === false ? "green" : "#000"
            }}
          >
            {name}
          </span>
          <button
            onClick={() =>
              this.runTest(
                test.function(params),
                response,
                this.setResultFactory(index, i),
                this.setPendingFactory(index, i)
              )
            }
          >
            Testen
          </button>
          {!!result && (
            <table>
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Expected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ display: "block", maxWidth: "500px" }}>
                      <JSONPretty
                        id="json-pretty"
                        theme={JSONPrettyMon}
                        data={result}
                      />
                    </div>
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <JSONPretty
                      id="json-pretty"
                      theme={JSONPrettyMon}
                      data={this.print(response)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </li>
      );
    });
  }
  render() {
    const { tests } = this.state;
    return (
      <ul>
        {tests.map((test, index) => {
          // do not sort or change tests array while ui is mounted (no unique keys
          return (
            <li key={"test" + index}>
              {test.name} <ul>{this.scenarios(test, index)}</ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(<UI />, document.getElementById("root"));
