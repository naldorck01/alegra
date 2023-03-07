import st from "@css/NotFound.module.css"

const NotFound = () => {
  return (
    <div className={st.container}>
      <div className={st.container_content}>
        <p className={st.mr_4}>4</p>
        <span>😔</span>
        <div className={st.search}>
          🔎
        </div>
        <p className={st.ml_4}>4</p>
      </div>
      <p className={st.text}>No encontramos resultados.</p>
    </div>
  )
}

export default NotFound

