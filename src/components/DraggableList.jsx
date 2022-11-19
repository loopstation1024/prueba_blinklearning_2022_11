import React from 'react';
import { useState } from "react";
import DnDList from 'react-dnd-list'
import DraggableItem from './DraggableItem';
import SaveButton from './SaveButton';
import '../css/draggableList.css';
import { connect } from 'react-redux';

const DraggableList = ({items}) => {
    const [list, setList] = useState(items);

    return (
        <div id="draggable-list-container">
            <ul id="draggable-list">
                <DnDList items={list} itemComponent={DraggableItem} setList={setList} />
            </ul>
            <SaveButton list={list} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.exerciseReducer.exerciseElements
    }
}

export default connect(mapStateToProps)(DraggableList);