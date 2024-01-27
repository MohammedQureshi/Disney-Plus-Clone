type Props = {
    params: {
        id: String
    },
    searchParams: {
        genre: String
    }
}

function GenrePage({params: {id}, searchParams: {genre}} : Props) {
  return (
    <div>Welcome to the genre with ID: {id} and name: {genre}</div>
  )
}

export default GenrePage