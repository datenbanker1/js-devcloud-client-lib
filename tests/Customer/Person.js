import { Customer } from "../../src";

export default {
  add: async person => {
    const customer = new Customer();
    return customer.person.add(person);
  },
  delete: async ({ id }) => {
    const customer = new Customer();
    return customer.person.delete(id);
  },
  getAllUsersForUserPool: async ({ id }) => {
    const customer = new Customer();
    return customer.person.getAllUsersForUserPool(id);
  },
  history: async ({ id }) => {
    const customer = new Customer();
    return customer.person.history(id);
  }
};
