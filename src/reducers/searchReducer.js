import {
  SET_LAST_NAME,
  SET_FIRST_NAME,
  SET_EDUCATION,
  DELETE_STUDY,
  FETCH_ALL_SCHOOLS,
  CLEAR_ALL_SCHOOLS,
} from '../actions/types';

const initialState = {
    firstName: '',
    lastName: '',
    searchSchools: [],
    education: [
      {
        school: '', 
        degree: '', 
        startYear: '', 
        endYear: '', 
        awards: [],
        grade: '',
        description: '' ,
      }
    ],
};

export default function(state = initialState, action) {
  switch (action.type) {

    case SET_LAST_NAME:
      return {...state, lastName: action.data}

    case SET_FIRST_NAME:
      return {...state, firstName: action.data}

      case SET_EDUCATION:
        const newArr = state.education.concat(action.data)
        return {...state, education: newArr}

    case FETCH_ALL_SCHOOLS:
      return { ...state, searchSchools: action.data};

    case CLEAR_ALL_SCHOOLS:
          return { ...state, searchSchools: null};

    case DELETE_STUDY:
      const deletedArray = state.education.filter(m => m !== action.data)
      return {...state, education: deletedArray}

    default:
      return state;
  }
}
