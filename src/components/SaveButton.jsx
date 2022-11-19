import React from 'react';
import '../css/saveButton.css';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { saveExerciseAction } from '../redux/actions/exerciseAction'; 


const SaveButton = ({list, saveExerciseAction}) => {
    const navigate = useNavigate();

    const saveExercise = (list) =>  {
        const isCorrect = ["A", "B" , "C", "D"].toString() === list.toString();
        saveExerciseAction({
            exerciseIsDone: true,
            exerciseElements: list,
            exerciseIsCorrect: isCorrect
        });

        navigate('/');
    } 

    return (
        <button id="save-button" onClick={() => saveExercise(list)}>Save</button>
    );
}

const mapDispatchToProps = (dispatch) => { 
    return {
        saveExerciseAction: (exercise) => {
            dispatch(saveExerciseAction(exercise))
        }
    }
};

export default connect(null, mapDispatchToProps)(SaveButton);