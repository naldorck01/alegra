import { useEffect } from "react"
import "@/App.css"
import styles from "@components/SearchBarImages/SearchBarImages.module.css"
import { useForm, useGetGoogleImages } from "@hooks"
import { Loading } from "@components/Loading"

interface ISearchBarImages {
  setImages: (data: string[]) => void
}

const SearchBarImages = ({setImages}: ISearchBarImages) => {
  const { form_input, handle_input_change } = useForm()
  const { data, loading, searchImages } = useGetGoogleImages()

  useEffect(() => {
    !!data && setImages(data)
  }, [data])

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    console.log("search", form_input.search)
    searchImages(form_input.search, {})
  }

  return (
    <>
      {loading && <Loading defaultOpened={loading} />}
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchQueryInput}
            type="text"
            required
            placeholder="Im&aacute;genes del mundo"
            name="search"
            onChange={handle_input_change}
          />
          <button className={styles.searchQuerySubmit} type="submit" name="searchQuerySubmit">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBarImages