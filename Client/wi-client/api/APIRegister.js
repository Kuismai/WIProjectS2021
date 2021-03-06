import axios from "axios";
import constants from "../constants.json";


export default function APIRegister(username, password) {
  return axios.post(constants.baseAddress + "/api/users",  { username, password })
  .then(result => result)
  .catch(error => error);
}