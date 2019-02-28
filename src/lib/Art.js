import services from "../config/services";
import Connector from "../helper/Connector";

//used for communication with Customer service
export default class Art {
  constructor() {
    this.config = {};
  }
  pool = {
    my: async () => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "GET",
        function: "/pool/my"
      });
    },
    all: async () => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "GET",
        function: "/pool/all"
      });
    },
    add: async pool => {
      console.log({
        ...pool
      });
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/pool/add",
        data: {
          ...pool
        }
      });
    },
    delete: async id => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/pool/delete",
        data: {
          id
        }
      });
    },
    user: {
      add: async (user, pool) => {
        const connector = new Connector(services.art.address);
        return await connector.call({
          method: "POST",
          function: "/pool/user/add",
          data: {
            pool,
            user
          }
        });
      },
      delete: async (user, pool) => {
        const connector = new Connector(services.art.address);
        return await connector.call({
          method: "POST",
          function: "/pool/user/delete",
          data: {
            pool,
            user
          }
        });
      }
    },
    art: {
      add: async (art, pool) => {
        const connector = new Connector(services.art.address);
        return await connector.call({
          method: "POST",
          function: "/pool/art/add",
          data: {
            pool,
            art
          }
        });
      },
      delete: async (art, pool) => {
        const connector = new Connector(services.art.address);
        return await connector.call({
          method: "POST",
          function: "/pool/art/delete",
          data: {
            pool,
            art
          }
        });
      }
    }
  };
  artist = {
    get: async id => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/artist",
        data: { id }
      });
    },
    all: async () => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "GET",
        function: "/artist/all"
      });
    },
    add: async artist => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/artist/add",
        data: { ...artist }
      });
    },
    delete: async id => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/artist/delete",
        data: { id }
      });
    }
  };
  art = {
    all: async pool => {
      const connector = new Connector(services.art.address);
      return await connector.call({
        method: "POST",
        function: "/art/all",
        data: { pool }
      });
    }
  };
}
