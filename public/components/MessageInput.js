import React from 'react';
// Redux store
import store from '../store'

const MessageInput = React.createClass({
    handleSubmit: function() {
        store.dispatch({
            type: 'ADD_MESSAGE',
            text: this.refs.messageInput.value,
            threadId: this.props.threadId,
        });
        this.refs.messageInput.value = '';
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

export default MessageInput;
