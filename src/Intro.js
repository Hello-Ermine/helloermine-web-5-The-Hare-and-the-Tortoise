import './Intro.css'
import sun from './sp/sun.png';
import cloud from './sp/cloud.png';
import rabbit from './sp/rabbit.png';
import turtle from './sp/turtle.png';
import rabbitframe from './sp/rabbitframe.png';
import turtleframe from './sp/turtleframe.png';
import bg from './sp/background.png';
import styled from 'styled-components';
const Frame = styled.div`
width: 30vw;
height: 15vw;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
img {
    width: 100%;
    z-index: -1;
    
}
`

  function Intro() {
    return (
      <div className="Intro">
        {/* <div style={{backgroundImage:`url(${back})`,height:'800vh',backgroundSize:'contain'},backgroundRepeat:'no-repeat';}></div> */}
          <div className="header">
            <img className="sun" src={sun} alt="sun"/>
            <img className="cloud" src={cloud} alt="cloud"/>
          </div>
          <div className="Rabbit">
            <img className="rabbit" src={rabbit} alt="rabbit"/>
            <div className="script">
                <img className="rabbitframe" src={rabbitframe} alt="rabbitframe"/>
                <p>สวัสดีเราคือกระต่าย เราวิ่งเร็วมาก<br/>นิสัยของเราคือชอบดูถูกคนอื่น<br/>ยินดีที่ได้รู้จักทุกคนนะ</p>
            </div>
          </div>
          <div className="Turtle">
              <img className="turtle" src={turtle} alt="turtle"/>
              <div className="script turtleframe">
                  <img src={turtleframe} alt="turtleframe"/>
                  <p>เราเต่าเอง เราเดินช้าแต่<br/>เรามีความพยายามนะ<br/>สู้ไปด้วยกันนะ แง่มๆ</p>
              </div>
          </div>
                      
      </div>
    );
  }
  
  export default Intro;