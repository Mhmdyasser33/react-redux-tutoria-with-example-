
import './App.css';
import Cake from './components/Cake';
import DynamicCakeNumber from './components/DynamicCakeNumber';
import IceCream from './components/IceCream';
import TestCake from './components/TestCake';
import TestComp from './components/TestComp';
import TestIceCream from './components/TestIceCream';
import UserDate from './components/UserDate';
function App() {
  return (
    <div className="App">
     {/*  <TestComp cake/>
      <TestComp iceCream/>
     <Cake/>
     <TestCake/>
     <IceCream/>
     <TestIceCream/>
     <DynamicCakeNumber/> */}
     <UserDate/>
    </div>
  );
}

export default App;
