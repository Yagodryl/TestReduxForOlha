import CookBookService from './CoolBookService'

//actions types
export const GET_List_STARTED = "cookBookList/GET_List_STARTED";
export const GET_List_SUCCESS = "cookBookList/GET_List_SUCCESS";
export const GET_List_FAILED = "cookBookList/GET_List_FAILED";


//initialState
const initialState = {
    data: [],
    loading: false,
    error: false
    
}


//rducer
export const cookBookListReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case GET_List_STARTED: {
            newState = {
                ...state,
                loading: true,
                error: false
            }
            break;
        }
        case GET_List_SUCCESS: {
            newState = {
                ...state,
                data: action.payload,
                loading: false,
            }
            break;
        }
        case GET_List_FAILED: {
            newState = {
                ...state,
                loading: false,
                error: true
            }
            break;
        }
        default:
            return newState;
    }
    return newState;
}



//actions creator
export const getCookList = () => {
    return (dispatch) => {
        dispatch(getCookListActions.started());
        CookBookService.getCookList()
            .then((response) => {
                setTimeout(()=>{
                    dispatch(getCookListActions.success(response.data));

                }, 3000)
            })
            .catch(()=>{
                dispatch(getCookListActions.failed());
            })
    }
}

const getCookListActions = {

    started: () => {
        return {
            type: GET_List_STARTED
        }
    },
    success: (data) => {
        return {
            type: GET_List_SUCCESS,
            payload: data
        }
    },
    failed: () => {
        return {
            type: GET_List_FAILED,
        }
    }
}






