function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else {
        return state;
    }
}

const incrementAction = { type: 'INCREMENT' };

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const unknownAction = { type: 'FAKEACTION' };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));