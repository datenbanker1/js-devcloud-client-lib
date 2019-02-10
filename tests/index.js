import React from "react";
import ReactDOM from "react-dom";

import { DevCloud, Customer } from "../src";
import Storage from "@datenbanker/storage";
const storage = new Storage();

DevCloud.init({
  apiToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI1YjcyMjk1Zi0xNTg1LTQwYmEtYTRiNC04NjBkYmJhYjZkNGYiLCJzY29wZXMiOlsiYzIzNjAzZGMtZDVmNS00YmU4LWE4NzUtZDYzNTFhNzBmYTM5Il19.BnIyRjScYBeK-3OrkYNJtGP1ov2nwI-tk8B6thoYQ6Y",
  services: {
    authentication: {
      user: {
        pool: ["afaf03b3-7fed-4680-b00a-fd907c6ed696"] // 0231a2b2-e877-4636-86d2-1e20b4d91838
      }
    },
    customer: {
      person: {
        pool: ["97378976-b084-4c31-9ee2-071f5cad0868"]
      },
      opportunity: {
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

try {
  const customer = new Customer();
  const persons = customer.person.getAll();
  console.log(persons);
} catch (error) {
  console.log(error);
}

ReactDOM.render(<p>TEST RUNNING...</p>, document.getElementById("root"));
