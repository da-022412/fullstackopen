const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((x, y) => {
                <p key={y}>
                    {x.part} {x.exercises}
                </p>;
            })}
        </>
    );
};

/*
const Total = () => {
    return (
        <>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
            {parts.map((x, y) => {
                <p key={y}>
                    {parts.part} {parts.exercises}
                </p>;
            })}
        </>
    );
};
*/

const App = () => {
    const parts = [
        {
            id: 0,
            part: 'Fundamentals of React',
            exercises: 10,
        },
        {
            id: 1,
            part: 'Using props to pass data',
            exercises: 7,
        },
        {
            id: 2,
            part: 'State of a component',
            exercises: 14,
        },
    ];
    return (
        <div>
            <Header course='Half Stack application development' />
            <Content parts={parts} />
        </div>
    );
};

export default App;
