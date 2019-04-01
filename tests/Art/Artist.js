import { Art } from "../../src";

export default {
  get: async params => {
    const art = new Art();
    return art.artist.get(params.id);
  },
  all: async params => {
    const art = new Art();
    return art.artist.all();
  },
  add: async params => {
    const art = new Art();
    return art.artist.add({ ...params });
  },
  delete: async params => {
    const art = new Art();
    return art.artist.delete(params.id);
  },
  history: async params => {
    const art = new Art();
    return art.artist.history(params.id);
  }
};
