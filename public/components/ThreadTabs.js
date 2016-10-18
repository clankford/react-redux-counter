import React from 'react';
// Redux
import store from '../store';
import {connect} from 'react-redux';
// Components
import Tabs from './Tabs';

// const ThreadTabs = React.createClass({
//     componentDidMount: function() {
//         store.subscribe(() => this.forceUpdate());
//     },
//
//     render: function() {
//         const state = store.getState();
//         const tabs = state.threads.map(t => (
//             {
//                 title: t.title,
//                 active: t.id === state.activeThreadId,
//                 id: t.id,
//             }
//         ));
//
//         return (
//             <Tabs
//                 tabs={tabs}
//                 onClick={(id) => (
//                     store.dispatch({
//                         type: 'OPEN_THREAD',
//                         id: id,
//                     })
//                 )}
//             />
//         );
//     },
// });



const mapStateToTabsProps = (state) => {
    const tabs = state.threads.map(t => (
        {
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id,
        }
    ));

    return {
        // ES6 shorthand (prop name = variable name).
        tabs,
    };
};

const mapDispatchToTabProps = (dispatch) => (
    {
        onClick: (id) => (
            dispatch({
                type: 'OPEN_THREAD',
                id: id,
            })
        ),
    }
);

const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabProps
)(Tabs);


export default ThreadTabs;
