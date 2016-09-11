import uuid from 'uuid';

export default function messagesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            return state.concat(newMessage);
        }
        case 'DELETE_MESSAGE': {
            const messageIndex = state.findIndex((m) => m.id === action.id);
            return [
                ...state.slice(0, messageIndex),
                ...state.slice(
                    messageIndex + 1, state.length
                ),
            ];
        };
        default: {
            return state;
        }
    }
}
