import {Greetings} from '../data/greeting'

const Greeting: React.FC<Greetings>= ({name, age}) => {

    return (
    <div>
        <h1>Hello {name}</h1>
        <p>You are {age} years old </p>
    </div>
    ); 
}

export default Greeting; 