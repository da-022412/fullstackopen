import { useState } from 'react';

const Display = ({ counter }) => {
    return <div>{counter}</div>;
};

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const App = () => {
    const [counter, setCounter] = useState(0);

    const plusOne = () => setCounter(counter + 1);
    const minusOne = () => setCounter(counter - 1);
    const toZero = () => setCounter(0);

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={plusOne} text='plus' />
            <Button onClick={toZero} text='zero' />
            <Button onClick={minusOne} text='minus' />
        </div>
    );
};

export default App;
