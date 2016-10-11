import React from 'react';
// Redux store
import store from '../store'
// Components
import Thread from './Thread';

const ThreadDisplay = React.createClass({
    componentDidMount: function() {
        store.subscribe(() => this.forceUpdate());
    },

    render: function() {
        const state = store.getState();
        const activeThreadId = state.activeThreadId;
        const activeThread = state.threads.find(
            t => t.id === activeThreadId
        );

        return (
            <Thread
                thread={activeThread}
                onMessageClick={(id) => (
                    store.dispatch({
                        type: 'DELETE_MESSAGE',
                        id: id,
                    })
                )}
                onMessageSubmit={(text) => (
                    store.dispatch({
                        type: 'ADD_MESSAGE',
                        text: text,
                        threadId: activeThreadId,
                    })
                )}
            />
        );
    },
});

export default ThreadDisplay
