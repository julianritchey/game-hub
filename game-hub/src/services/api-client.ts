import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2436ee47285e40ca97b94c7a8b1c4bc2",
  },
});
