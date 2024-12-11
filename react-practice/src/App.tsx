import Greeting from "./components/greeting";
import { ProfileCard } from "./components/ProfileCard";
import { GreetingsProps } from "./data/greeting";
function App() {

  return (
    <div>
      <Greeting name={GreetingsProps.name} age={GreetingsProps.age} />
      <ProfileCard name="ahmed" age={30} isOnline={false} ></ProfileCard>
    </div>
  ); 
}


export default App; 