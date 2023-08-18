import axios from "axios";
import config from "../config";

export const getCats = async (number: number) => {
  try {
    const result = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${number}&api_key=${config.cats.catApiKey}`
    );
    return result.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
