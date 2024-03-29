/**
 * Component: SearchBarImages
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useEffect } from "react"
import st from "@css/SearchBarImages.module.css"
import { Loading } from "@components/Loading"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { useForm, useGetGoogleImages, useAlegraContext } from "@hooks"

const SearchBarImages = () => {
  const { search, sellers } = useAlegraContext()
  const { form_input, event_set_manually_input, handle_input_change } = useForm()
  const { data, loading, searchImages } = useGetGoogleImages()

  useEffect(() => {
    !!data &&
      sellers.dispatch({
        type: AlegraActionTypes.seller_add_img,
        payload: {
          images: data,
        },
      })
  }, [data])

  useEffect(() => {
    !search.state.word && event_set_manually_input(search.state.word, "search")
  }, [search.state.word])

  const event_submit = (event: React.FormEvent): void => {
    event.preventDefault()
    searchImages(form_input.search, {})
    search.dispatch({
      type: AlegraActionTypes.search_set,
      payload: {
        word: form_input.search,
      },
    })
  }

  return (
    <>
      {loading && <Loading defaultOpened={loading} />}
      <form className={st.wrapper} onSubmit={event_submit}>
        <div className={st.searchBar}>
          <input
            className={st.searchQueryInput}
            type="text"
            required
            placeholder="Im&aacute;genes del mundo"
            name="search"
            onChange={handle_input_change}
            value={form_input.search}
          />
          <button className={st.searchQuerySubmit} type="submit" name="searchQuerySubmit">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBarImages
