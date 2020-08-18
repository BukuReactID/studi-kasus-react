import { 
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT, 
  SUCCESS_FETCHING_PRODUCT, 
  SET_PAGE, 
  SET_CATEGORY,
  SET_KEYWORD,
  SET_TAGS,
  NEXT_PAGE, 
  PREV_PAGE,
  TOGGLE_TAG
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success', 
  error: 'error',
}

const initialState = {
  data: [],
  currentPage: 1, 
  totalItems: -1,
  perPage: 6,
  keyword: '',
  category: '',
  tags: [],
  status: statuslist.idle
};

export default function reducer(state = initialState, action){

  switch(action.type){

    case START_FETCHING_PRODUCT:
      return {...state, status: statuslist.process, data: []}

    case SUCCESS_FETCHING_PRODUCT:
      return {...state, data: action.data, totalItems: action.count, status: statuslist.success}

    case ERROR_FETCHING_PRODUCT:
      return {...state, status: statuslist.error}

    case SET_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_KEYWORD:
      return {...state, keyword: action.keyword, category: '', tags: []}

    case SET_CATEGORY: 
      return {...state, currentPage: 1, tags: [], category: action.category, keyword: ''}

    case SET_TAGS:
      return {...state, tags: action.tags}

    case TOGGLE_TAG:
      if(!state.tags.includes(action.tag)){
        return {...state, currentPage: 1, tags: [...state.tags, action.tag]}
      } else {
        return {...state, currentPage: 1, tags: state.tags.filter(tag => tag !== action.tag)}
      }

    case NEXT_PAGE:
      return {...state, currentPage: state.currentPage + 1}

    case PREV_PAGE:
      return {...state, currentPage: state.currentPage - 1}

    default:
      return state;

  }
}

