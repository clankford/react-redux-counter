function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];

    const getState = () => (state);

    const subscribe = (listener) => (listeners.push(listener));

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    };

    return {
        subscribe,
        getState,
        dispatch,
    };
}

function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message),
        };
    } else if (action.type === 'DELETE_MESSAGE') {
        return {
            messages: [
                ...state.messages.slice(0, action.index),
                ...state.messages.slice(action.index + 1, state.messages.length),
            ],
        };
    } else {
        return state;
    }
}

const App = React.createClass({
    componentDidMount: function() {
        store.subscribe(() => this.forceUpdate());
    },

    render: function() {
        const messages = store.getState().messages

        return (
            <div className='ui segment'>
                <MessageView messages={messages} />
                <MessageInput />
            </div>
        );
    },
});

const MessageInput = React.createClass({
    handleSubmit: function() {
        store.dispatch({
            type: 'ADD_MESSAGE',
            message: this.refs.messageInput.value,
        });
    },
    
    render: function() {
        return (
            <div className='ui input'>
                <input ref='messageInput' type='text' />
                <button 
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        );
    },
});

const initialState = { messages: [] };

const store = createStore(reducer, initialState);
