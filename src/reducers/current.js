

const initialState = {
    page:            0,
};

export default function current(state = initialState, action){

    switch (action.type) {
        case 'curr_page_changed': {
            return {
                ...state,
                page: action.payload,
            };
        }
        
        default:
            return state;
    }
}