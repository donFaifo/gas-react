import Board from "./Main/Board";

export default function Main() {
  return (
    <div className="grid grid-cols-2 mt-4 gap-4">
      <Board title={'Título 1'}>
          Contenido
      </Board>
      <Board title={'Título 2'}>
          Contenido
      </Board>
    </div>
  )
}