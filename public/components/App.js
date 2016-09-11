import React from 'react';
// Components
import ThreadTabs from './ThreadTabs';
import Thread from './Thread';
// Redux store
import store from '../store';

const App = React.createClass({
    componentDidMount: function() {
        store.subscribe(() => this.forceUpdate());
    },

    render: function() {
        const state = store.getState();
        const activeThreadId = state.activeThreadId;
        const threads = state.threads;
        const activeThread = threads.find((t) => t.id === activeThreadId);

        const tabs = threads.map(t => (
            {
                title: t.title,
                active: t.id === activeThreadId,
                id: t.id,
            }
        ));

        return (
            <div className='ui segment'>
                <ThreadTabs tabs={tabs} />
                <Thread thread={activeThread} />
            </div>
        );
    },
});

export default App;
