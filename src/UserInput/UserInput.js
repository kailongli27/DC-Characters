import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    const style = {
        border: '1.3px solid black'
    };

    return (
        <div className='userInput'>
            <input
                type="text"
                style={style}
                onChange={props.changed}
                value={props.currentName}></input>
        </div>
    )
};

export default userInput; 