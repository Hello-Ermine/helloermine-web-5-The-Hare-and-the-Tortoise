import logo from './logo.svg';
import './App.css';
import g1 from './gu/Ellipse79.png';
import g2 from './gu/Ellipse80.png';
import g3 from './gu/Ellipse81.png';
import g4 from './gu/Ellipse82.png';
import g5 from './gu/Ellipse83.png';
import g6 from './gu/Ellipse84.png';
import back from './gu/background.png';
import styled from 'styled-components';
const Photo =styled.div` 
  background-image:url(${back});
  height:10000px;
  background-size: contain;
  background-repeat: no-repeat;
`
function App() {
  return (
    <div className="App">
      {/* <div style={{backgroundImage:`url(${back})`,height:'800vh',backgroundSize:'contain'},backgroundRepeat:'no-repeat';}></div> */}
        <Photo/>
        <div className="g"> 
        <img src={g1} alt=""/>
        <img src={g2} alt=""/>
        <img src={g3} alt=""/>
        <img src={g4} alt=""/>
        <img src={g5} alt=""/>
        <img src={g6} alt=""/>
        </div>

    </div>
  );
}

export default App;
