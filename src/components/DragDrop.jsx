import React, { useState } from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'

const DragDrop = () => {

  const pictures = [
    {
      id: 1,
      url: 'https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A'
    },
    {
      id: 2,
      url: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
    },
    {
      id: 3,
      url: 'https://images.freeimages.com/images/previews/3f7/box-shape-1641877.png'
    },
  ]

  const [board, setBoard] = useState([])


  const [{isOver}, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) =>{
      addImageToBoard(item.id)},
    collect: (monitor) => ({
      isOver:  !!monitor.isOver(),
    }),
  }))

  const addImageToBoard = (id) => {

    const boardImages = pictures.filter(picture => picture.id===id)

    // pass function in setBoard so that it is using the lastest version of state Board
    setBoard(board => [...board, ...boardImages])


  }


  return (
    <>
      <div className="pictures">
        {pictures.map(({url, id}) => {
          return <Picture url={url} id={id} key={id} />
        })}
      </div>
      <div ref={drop} className="board">
        {board.map(({url, id}) => {
          return <Picture url={url} id={id} key={id} />
        })}
      </div>
    </>
  )
}

export default DragDrop
