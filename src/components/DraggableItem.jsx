import React from 'react'

const DraggableItem = props => {
    const dnd = props.dnd;
    return (
        <li
            style={{ ...dnd.item.styles, ...dnd.handler.styles }}
            className={dnd.item.classes}
            ref={dnd.item.ref}
            {...dnd.handler.listeners}
        >
            {props.item}
        </li>
    )
}

export default DraggableItem;
