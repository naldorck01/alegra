import { useState } from "react"
import { google_images } from "@config/api.json"
import { google } from "@config/credentials.json"
import { useAlegraContext } from "@hooks"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"

interface IOptionsRequestImgs {
  [key: string]: string | number
}

export const useGetGoogleImages = () => {
  const { apiKey, id } = google
  const { search } = useAlegraContext()
  const [data, set_data] = useState<string[]>([])
  const [loading, set_loading] = useState<boolean>(false)

  const searchImages = async (query: string, options: IOptionsRequestImgs) => {
    try {
      if (!query) {
        throw new TypeError("Expected a query")
      }
      const url = `${google_images}/customsearch/v1?${buildQuery(query, options)}`
      set_data([])
      set_loading(true)
      const result = await (await fetch(url)).json()
      search.dispatch({
        type: AlegraActionTypes.search_set_status,
        payload: {
          status: result.items ? 200 : 404,
        },
      })
      set_data(result.items)
      set_loading(false)
    } catch (error: any) {
      set_loading(false)
      return error.response.data.error.message
    }
  }

  const buildQuery = (query: any, options: any) => {
    options = options || {}
    const result: any = {
      q: query.replace(/\s/g, "+"),
      searchType: "image",
      cx: id,
      key: apiKey,
    }
    if (options.skipRecords) {
      result.start = options.skipRecords
    }
    return new URLSearchParams(result).toString()
  }

  return {
    data,
    loading,
    searchImages,
  }
}

export default useGetGoogleImages
