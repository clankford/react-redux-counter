import React from 'react';
// Redux store
import store from '../store';
// Components
import Tabs from './Tabs';

const ThreadTabs = React.createClass({
    componentDidMount: function() {
        store.subscribe(() => this.forceUpdate());
    },

    render: function() {
        const state = store.getState();
        const tabs = state.threads.map(t => (
            {
                title: t.title,
                active: t.id === state.activeThreadId,
                id: t.id,
            }
        ));

        return (
            <Tabs
                tabs={tabs}
                onClick={(id) => (
                    store.dispatch({
                        type: 'OPEN_THREAD',
                        id: id,
                    })
                )}
            />
        );
    },
});

export default ThreadTabs;
