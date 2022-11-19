import React from 'react';
import { connect } from 'react-redux'  
import { Navigate } from 'react-router-dom';
import '../css/draggableList.css';

const ExerciseReadOnly = ({exerciseIsDone, exerciseElements, exerciseIsCorrect}) => {
  if (!exerciseIsDone) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      <h2>Show Results</h2>
      <div id="draggable-list-container">
        <ul id="draggable-list">
          {
            exerciseElements.map( (item, index) => (
              <li 
                key={index}
                className={"dnd-list__draggable " + (String.fromCharCode(65 + index) === item ? "right-answer" : "wrong-answer")}
              >{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    exerciseIsDone: state.exerciseReducer.exerciseIsDone,
    exerciseElements: state.exerciseReducer.exerciseElements,
    exerciseIsCorrect: state.exerciseReducer.exerciseIsCorrect
  }
}

export default connect(mapStateToProps)(ExerciseReadOnly);
