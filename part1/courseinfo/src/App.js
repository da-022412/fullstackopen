const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    );
};

const Content = () => {
    return (
        <div>
            <Part part={'Fundamentals of React'} exercises={10} />
            <Part part={'Using props to pass data'} exercises={7} />
            <Part part={'State  of a component'} exercises={14} />
        </div>
    );
};

const Total = ({ parts }) => {
    let x = [];
    parts.map((a) => x.push(a.exercises));

    const y = x.reduce((z, b) => z + b, 0);

    return (
        <>
            <p>Number of exercises {y}</p>
        </>
    );
};

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
            <Total parts={parts} />
        </div>
    );
};

export default App;
