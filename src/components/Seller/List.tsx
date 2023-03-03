const List = (props: any) => {
  const { data } = props

  const template = (
    <>
      <ul>
        {data.map((item: any, index: number) => (
          <li key={index}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  )

  return template
}

export default List
