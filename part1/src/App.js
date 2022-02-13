import React from 'react';
const Hello = (props) => {
    return (
        <div>
            Hello {props.name}, you are {props.age} years old
        </div>
    );
};

const App = () => {
    const name = 'Dennis';
    const age = 35;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={name} age={age + 10} />
        </div>
    );
};

export default App;
