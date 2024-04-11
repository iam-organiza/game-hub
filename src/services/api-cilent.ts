import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "811897ccad674f29a661a618c0ddeddc",
  },
});

export { CanceledError };
