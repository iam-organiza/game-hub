import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "910fa151ca754c9eb46fcb7b8f348d9a",
  },
});

export { CanceledError };
