const initialState = {
    afc:            1,
    notE:           0,
    isUiEnabled:    false,
    dialogs:        {
        warning:    undefined,
        error:      undefined,
    },
};

export default function general(state = initialState, action){

    switch (action.type) {
        case 'AFC_CHANGED': {
            return {
                ...state,
                afc: action.payload,
            };
        }
        case 'NOT_E_CHANGED': {
            return {
                ...state,
                notE: action.payload,
            };
        }
        case 'UI_ENABLED': {
            return {
                ...state,
                isUiEnabled: action.payload,
            };
        }        
        case 'OPEN_WARNING': {
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    warning: action.payload,
                },
            };
        }        
        case 'CLOSE_WARNING': {
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    warning: undefined,
                },
            };
        }        
        case 'OPEN_ERROR': {
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    error: action.payload,
                },
            };
        }        
        case 'CLOSE_ERROR': {
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    error: undefined,
                },
            };
        }        
        // case 'SET_DIALOG': {
        //     const theme = action.payload.theme;

        //     let newDialogs = {...state.dialogs};
        //     newDialogs[theme] = action.payload;
        //     return {
        //         ...state,
        //         dialogs: newDialogs,
        //     };
        // }        
        default:
            return state;
    }
}