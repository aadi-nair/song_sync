import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@/utils/url";

export function fetchSongs(title: string): Promise<AxiosResponse> {
  return axios.get(BASE_URL + "songs/", {
    params: {
      title,
    },
  });
}
