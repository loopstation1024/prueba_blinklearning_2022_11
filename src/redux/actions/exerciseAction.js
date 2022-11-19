export const SAVE_EXERCISE = "SAVE_EXERCISE";
export const LOAD_EXERCISE = "LOAD_ECERCISE";

export const saveExerciseAction = (exercise) => {
    return {
        type: SAVE_EXERCISE,
        payload: exercise
    }
}

export const loadExerciseAction = () => {
    return {
        type: LOAD_EXERCISE,
    }
}