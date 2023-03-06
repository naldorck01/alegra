import { useState } from "react"

const endpoint = "https://www.googleapis.com";
const apiKey = "AIzaSyD0ZYYQXYwusz0k1vJmXeJwf252H3sLs2w";
const id = "c568e1a511f9a4307";

interface IOptionsRequestImgs {
  [key: string]: string | number
}

export const useGetGoogleImages = () => {
  const [data, set_data] = useState<string[]>([])
  const [loading, set_loading] = useState<boolean>(false)

  const searchImages = async (query: string, options: IOptionsRequestImgs) => {
    try {
      if (!query) {
        throw new TypeError("Expected a query");
      }
      const url = `${endpoint}/customsearch/v1?${buildQuery(query, options)}`;
      set_data([])
      set_loading(true)
      const result = await (await fetch(url)).json();
      set_data(result.items)
      set_loading(false)
    } catch (error: any) {
      set_loading(false)
      return error.response.data.error.message;
    }
  }

  const buildQuery = (query: any, options: any) => {
    options = options || {};
    let result: any = {
      q: query.replace(/\s/g, "+"),
      searchType: "image",
      cx: id,
      key: apiKey,
    };
    if (options.skipRecords) {
      result.start = options.skipRecords;
    }
    return new URLSearchParams(result).toString();
  }

  return {
    data,
    loading,
    searchImages,
  }
}

export default useGetGoogleImages