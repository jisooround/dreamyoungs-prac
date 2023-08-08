import axios from "axios";
import { IFormData } from "../types/data";

const BASE_URL = "https://api-jobtest.json2bot.chat/";
const HEADERS = {
  "Content-Type": "application/json",
};

class apiControl {
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

  async postData(data: IFormData) {
    try {
      console.log("data", data);
      const response = await this.axiosClient.post(`/test`, data);
      console.log(response.data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const api = new apiControl();
