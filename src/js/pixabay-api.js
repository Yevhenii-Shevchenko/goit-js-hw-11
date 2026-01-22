import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54321560-f6f3fd1bbb688b32de8acdaed";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}