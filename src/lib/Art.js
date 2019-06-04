import { DevCloud } from "./../";
import Connector from "../helper/Connector";

//used for communication with Customer service
export default class Art {
  constructor() {
    this.config = {};
  }
  pool = {
    myAll: async () => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "GET",
        function: "/my/pools"
      });
    },
    my: async id => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "GET",
        function: "/my/pool/" + id
      });
    },
    get: async id => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/pool",
        data: { id }
      });
    },
    getByUser: async id => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/users/pools",
        data: { id }
      });
    },
    all: async () => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "GET",
        function: "/pool/all"
      });
    },
    add: async pool => {
      console.log({
        ...pool
      });
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/pool/add",
        data: {
          ...pool
        }
      });
    },
    myUpdate: async (id, data) => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/my/pool/update",
        data: {
          ...data,
          id
        }
      });
    },
    delete: async id => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/pool/delete",
        data: {
          id
        }
      });
    },
    member: {
      add: async (user, pool) => {
        const connector = new Connector(DevCloud.getEndPoints().art.address);
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
        const connector = new Connector(DevCloud.getEndPoints().art.address);
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
        const connector = new Connector(DevCloud.getEndPoints().art.address);
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
        const connector = new Connector(DevCloud.getEndPoints().art.address);
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
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/artist",
        data: { id }
      });
    },
    getByPerson: async person => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/artist",
        data: { person }
      });
    },
    all: async () => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "GET",
        function: "/artist/all"
      });
    },
    add: async artist => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/artist/add",
        data: { ...artist }
      });
    },
    update: async artist => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return connector.call({
        method: "POST",
        function: "/artist/update",
        data: { ...artist }
      });
    },
    delete: async id => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/artist/delete",
        data: { id }
      });
    },
    history: async (id = false, position, amount = 10) => {
      if (!id) throw new IdException("Please set an id in Artist.history()");
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/artist/history",
        data: {
          id,
          position: position || "eyJlbnRyeSI6MH0=",
          amount
        }
      });
    }
  };
  art = {
    all: async pool => {
      const connector = new Connector(DevCloud.getEndPoints().art.address);
      return await connector.call({
        method: "POST",
        function: "/art/all",
        data: { pool }
      });
    }
  };
}
