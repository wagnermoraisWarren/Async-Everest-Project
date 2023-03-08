import { http } from "./config";

export default {

  get: async () => {
    const response = await http.get("/list");
    return response;
  },

  delete: async (id) => {
    return http.delete(`/list/${id}`);
  },

  post: async (request) => {
    const response = await http.post("/list/", request)
    return response
  },
  
  put: async (request) => {
    const response = await http.put(`/list/${request.id}/`, request)
    return response
  }
};