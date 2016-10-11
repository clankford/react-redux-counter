import React from 'react';

const TextFieldSubmit = (props) => {
    let input;

    return (
        <div className='ui input'>
            <input
                ref={node => input = node}
                type='text'
            >
            </input>
            <button
                onClick={() => {
                    props.onSubmit(input.value);
                    input.value = '';
                }}
                className='ui primary button'
                type='submit'
            >
                Submit
            </button>
        </div>
    );
}

export default TextFieldSubmit;
