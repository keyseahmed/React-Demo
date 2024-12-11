import Greeting from "./components/greeting";
import { ProfileCard } from "./components/ProfileCard";
function App() {

  return (
    <div>
      <Greeting name = 'ahmed' age={30}/>
      <ProfileCard name="ahmed" age={30} isOnline={false} ></ProfileCard>
    </div>
  ); 
}


export default App; 