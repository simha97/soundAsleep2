import axios from "axios";

const url = "http://localhost:3000";

export default async function postData(collection, formData) {
  try {
    const response = await axios.post(`${url}/${collection}/posts`, formData);
    console.log("Successfully posted:", response.data);
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
}
