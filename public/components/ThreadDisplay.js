import React from 'react';
// Redux
import {connect} from 'react-redux';
import {deleteMessage, addMessage} from '../actions';
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
            dispatch(deleteMessage(id))
        ),
        dispatch: dispatch,
    }
);

const mergeThreadProps = (stateProps, dispatchProps) => (
    {
        ...stateProps,
        ...dispatchProps,
        onMessageSubmit: (text) => (
            dispatchProps.dispatch(
                addMessage(text, stateProps.thread.id)
            )
        ),
    }
);

const ThreadDisplay = connect(
    mapStateToThreadProps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay
