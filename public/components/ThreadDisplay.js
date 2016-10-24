import React from 'react';
// Redux store
import {connect} from 'react-redux';
// Components
import Thread from './Thread';

const mapStateToThreadProps = (state) => (
    {
        thread: state.threads.find(
            t => t.id === state.activeThreadId
        ),
    }
);

const mapDispatchToThreadProps = (dispatch) => (
    {
        onMessageClick: (id) => (
            dispatch({
                type: 'DELETE_MESSAGE',
                id: id,
            })
        ),
        dispatch: dispatch,
    }
);

const mergeThreadProps = (stateProps, dispatchProps) => (
    {
        ...stateProps,
        ...dispatchProps,
        onMessageSubmit: (text) => (
            dispatchProps.dispatch({
                type: 'ADD_MESSAGE',
                text: text,
                threadId: stateProps.thread.id,
            })
        ),
    }
);

const ThreadDisplay = connect(
    mapStateToThreadProps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay
