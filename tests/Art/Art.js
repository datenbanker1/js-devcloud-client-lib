import { Art } from "../../src";

export default {
  all: async params => {
    const art = new Art();
    return art.art.all(params.pool);
  }
};
