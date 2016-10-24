export const deleteMessage = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id,
    };
};

export const addMessage = (text, threadId) => {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId,
    };
};

export const openThread = (id) => {
    return {
        type: 'OPEN_THREAD',
        id: id,
    };
};
