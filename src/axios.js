import axios from 'axios'
import { baceUrl } from "./Constent/Constent";
const instance = axios.create({
    baseURL: baceUrl
   
  });

export default instance