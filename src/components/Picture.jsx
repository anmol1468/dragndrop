import React from 'react'
import { useDrag } from 'react-dnd'

function Picture({id, url}) {

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'image',

    //the drop in useDrop can using this name 'item' to access the data
    item: {id:id},
    //this i think is to check if the element is being dragged right now
    collect: (monitor) => ({
      isDragging:  !!monitor.isDragging(),
    }),
  }))

  return (
    <img ref={drag} style={{
      width: '4rem',
      height: '4rem',
      border: isDragging? 'solid 2px pink': 'none'
    }} src={url} id={id} alt="image" />
  )
}

export default Picture