import axios from "axios";

const instance = axios.create({
  baseURl: "http:localhost:3000",
});

export default instance