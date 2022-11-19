import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DraggableList  from './DraggableList';

const Exercise = ({exerciseIsDone}) => {
  if (exerciseIsDone) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
        <h2>Exercise</h2>
        <h3>Sort in alphabetical order!</h3>
        <DraggableList />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    exerciseIsDone: state.exerciseReducer.exerciseIsDone
  }
}

export default connect(mapStateToProps)(Exercise);