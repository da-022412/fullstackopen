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

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((x) => (
                <Part part={x.name} exercises={x.exercises} key={x.id} />
            ))}
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
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
