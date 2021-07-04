import courseTabListState from './states';

 const courseTabListReducer = function (state = courseTabListState, action) {
    switch(action.type) {
        case 'CHANGE_COURSE_FIELD':
            return {
                ...courseTabListState,
                currentField: action.field
            }
        default:
            return state;
    }
}

export default courseTabListReducer;