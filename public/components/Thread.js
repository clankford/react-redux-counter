import React from 'react';
// Redux store
import store from '../store'
// Components
import MessageInput from './MessageInput';

const Thread = React.createClass({
    handleClick: function(id) {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            id: id,
        });
    },

    render: function() {
        const messages = this.props.thread.messages.map((message, index) => (
            <div
                className='comment'
                key={index}
                onClick={()=> this.handleClick(message.id)}
            >
                <div className='text'>
                    {message.text}
                    <span className='metadata'>@{message.timestamp}</span>
                </div>
            </div>
        ));

        return (
            <div className='ui center aligned basic segment'>
                <div className='ui comments'>
                    {messages}
                </div>
                <MessageInput threadId={this.props.thread.id} />
            </div>
        );
    },
});

export default Thread;
