import axios from "axios";

export default {
    getBooks: function(query) {
      return axios.post("/api/", { query: query });
    },

    saveBook: function(data) {
      return axios.post("/api/books", data);
    },

    getSaved: function() {
      return axios.get("/api/books");
    },

    removeSaved: function(id) {
      return axios.delete(`/api/books/${id}`);
    }
};