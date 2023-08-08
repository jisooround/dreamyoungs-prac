// api 관리
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
      if (data.ok && data.httpcode === 200) return data;
    } catch (error) {
      alert(`❌ 에러 발생 : ${error}`);
      throw error;
    }
  }

  async postData(formData: IFormData) {
    try {
      const { data } = await this.axiosClient.post(`/test`, formData);
      if (data.ok && data.httpcode === 200) {
        alert(`🆗 Post 성공 : ${data.data.message}`);
        return data;
      }
    } catch (error) {
      alert(`❌ 에러 발생 : ${error}`);
      throw error;
    }
  }
}

export const api = new apiControl();
