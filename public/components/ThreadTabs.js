import React from 'react';
// Redux
import {connect} from 'react-redux';
import {openThread} from '../actions';
// Components
import Tabs from './Tabs';

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
            dispatch(openThread(id))
        ),
    }
);

const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabProps
)(Tabs);

export default ThreadTabs;
