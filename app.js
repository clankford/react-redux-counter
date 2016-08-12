function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

const incrementAction = { 
    type: 'INCREMENT',
    amount: 5,
};

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(9999, incrementAction));

const unknownAction = { type: 'FAKEACTION' };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));

const decrementAction = { 
    type: 'DECREMENT',
    amount: 32,
};

console.log(reducer(10, decrementAction));
console.log(reducer(10000, decrementAction));
console.log(reducer(0, decrementAction));