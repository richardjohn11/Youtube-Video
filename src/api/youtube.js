import axios from "axios";

const KEY = "AIzaSyCBWpH7Puawbxhikwu6w_3thFgw0s3nrSc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
