import React from 'react';
// Redux store
import store from '../store'

const ThreadTabs = React.createClass({
    handleClick: function(id) {
        store.dispatch({
            type: 'OPEN_THREAD',
            id: id,
        });
    },

    render: function() {
        const tabs = this.props.tabs.map((tab, index) => (
            <div
                key={index}
                className={tab.active ? 'active item' : 'item'}
                onClick={() => this.handleClick(tab.id)}
            >
                {tab.title}
            </div>
        ));
        return (
            <div className='ui top attached tabular menu'>
                {tabs}
            </div>
        );
    },
});

export default ThreadTabs;
