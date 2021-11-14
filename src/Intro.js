import './Intro.css'
import sun from './sp/sun.png';
import cloud from './sp/cloud.png';
import rabbit from './sp/rabbit.png';
import turtle from './sp/turtle.png';
import rabbitframe from './sp/rabbitframe.png';
import turtleframe from './sp/turtleframe.png';
import bg from './sp/background.png';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Frame = styled.div`
width: 30vw;
height: 18vw;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
img {
    width: 70%;
    z-index: -1;
    position: absolute;
}
`

const Frame1 = styled.div`
width: 30vw;
height: 18vw;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
img {
    width: 60%;
    z-index: -1;
    position: absolute;
}
`

  function Intro() {
    useEffect(()=>{
      AOS.init();
   },[])
    return (
      <div className="Intro">
        {/* <div style={{backgroundImage:`url(${back})`,height:'800vh',backgroundSize:'contain'},backgroundRepeat:'no-repeat';}></div> */}
          <div className="header">
            <img id="elementToAnimatesp" className="sun" src={sun} alt="sun"/>
            <img className="cloud" src={cloud} alt="cloud"/>
          </div>
          <div className="Rabbit">
            <img className="rabbit" src={rabbit} alt="rabbit"/>
          </div>
          <div className="Turtle">
              <img className="turtle" src={turtle} alt="turtle"/>
          </div>
          <div className="boxrabbit">
              <Frame><img src={rabbitframe}/><h2>สวัสดีเราคือกระต่าย เราวิ่งเร็วมาก<br/>นิสัยของเราคือชอบดูถูกคนอื่น<br/>ยินดีที่ได้รู้จักทุกคนนะ</h2></Frame>  
          </div> 
          <div className="boxturtle">
              <Frame1><img src={turtleframe}/><h2>เราเต่าเอง เราเดินช้าแต่<br/>เรามีความพยายามนะ<br/>สู้ไปด้วยกันนะ แง่มๆ</h2></Frame1>  
          </div>
          <div className="sun" data-aos="fade-down-left">
              <img className="sun" src={sun} alt="sun"/>
          </div>    
      </div>
    );
  }
  
  export default Intro;