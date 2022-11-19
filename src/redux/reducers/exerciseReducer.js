import { SAVE_EXERCISE } from "../actions/exerciseAction"
import { LOAD_EXERCISE } from "../actions/exerciseAction"

const items = ["A", "B" , "C", "D"].sort(() => Math.random() - 0.5);;
const INIT_STATE = {
    exerciseIsDone: false,
    exerciseElements: items,
    exerciseIsCorrect: false
}

const exerciseReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SAVE_EXERCISE:
            return {
                ...state,
                exerciseIsDone: action.payload.exerciseIsDone,
                exerciseElements: action.payload.exerciseElements,
                exerciseIsCorrect: action.payload.exerciseIsCorrect
            }
        case LOAD_EXERCISE:
            return {
                ...state,
                exerciseIsDone: state.exerciseIsDone,
                exerciseElements: state.exerciseElements,
                exerciseIsCorrect: state.exerciseIsCorrect
            }
        default:
            return state;
    }
}

export default exerciseReducer;