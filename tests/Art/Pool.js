import { Art } from "../../src";

export default {
  my: async params => {
    const art = new Art();
    return art.pool.my();
  },
  all: async params => {
    const art = new Art();
    return art.pool.all();
  },
  add: async params => {
    const art = new Art();
    return art.pool.add(params);
  },
  delete: async params => {
    const art = new Art();
    return art.pool.delete(params.id);
  },
  userAdd: async params => {
    const art = new Art();
    return art.pool.user.add(params.user, params.pool);
  },
  userDelete: async params => {
    const art = new Art();
    return art.pool.user.delete(params.user, params.pool);
  },
  artAdd: async params => {
    const art = new Art();
    return art.pool.art.add(params.art, params.pool);
  },
  artDelete: async params => {
    const art = new Art();
    return art.pool.art.delete(params.art, params.pool);
  }
};
