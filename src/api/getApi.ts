import axios from "axios";

const BASE_URL = "https://api-jobtest.json2bot.chat/";
const HEADERS = {
  "Content-Type": "application/json",
};

class getApi {
  axiosClient;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: BASE_URL,
      headers: HEADERS,
    });
  }

  async getData() {
    try {
      const { data } = await this.axiosClient.get(`/test`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const api = new getApi();
