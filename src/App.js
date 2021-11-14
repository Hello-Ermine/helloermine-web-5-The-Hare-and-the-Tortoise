import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import g1 from './gu/Ellipse79.png';
import g2 from './gu/Ellipse80.png';
import g3 from './gu/Ellipse81.png';
import g4 from './gu/Ellipse82.png';
import g5 from './gu/Ellipse83.png';
import g6 from './gu/Ellipse84.png';
import tu1 from './gu/tu1.png';
import tu2 from './gu/tu2.png';
import tu3 from './gu/tu3.png';
import tur from './gu/tur.png';
import tur2 from './gu/tur2.png';
import kou from './gu/kou.png';
import kou1 from './gu/kou1.png';
import tree from './gu/tree.png';
import pt1 from './gu/pt1.png';
import pt2 from './gu/pt2.png';
import pt3 from './gu/pt3.png';
import rat from './gu/rat.png';
import tao from './gu/tao.png';
import back from './gu/Background1.png';
import Header from './Header'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
const Photo = styled.img` 
  width: 100%;
  z-index: -9999999999;
  position: relative;
`
const Hot = styled.div` 
  width: 30vw;
  height: 15vw;
  display: flex ;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:292%;
  left: 64%;
  img{
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`
const Hot2 = styled.div` 
  width: 30vw;
  height: 15vw;
  display: flex ;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:360%;
  left: 10%;
  img{
    width: 100%;
    position: absolute;
    z-index: -2;
  }
`
const Hot3 = styled.div` 
  width: 30vw;
  height: 15vw;
  display: flex ;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:460%;
  left: 48%;
  img{
    width: 100%;
    position: absolute;
    z-index: -2;
  }
`

function App() {
  useEffect(()=>{
     AOS.init();
  },[])
  return (
    <div className="App">
      <Intro/>
      <Photo src={back} />
      <Header></Header>
      <div className="g">
        <div id="elementToAnimate" className="tu3">
          <img id="p1" src={tu3} alt="" />
        </div>
        <div id="elementToAnimate1" className="tu1">
          <img className="tu1" src={tu1} alt="" />
        </div>
        <div id="elementToAnimate" className="tu2">
          <img className="tu2" src={tu2} alt="" />
        </div>
        <div className="hun">
          <img className="tur" src={tur} alt="" />
          <img className="tur2" src={tur2} alt="" />
        </div>
        <div className="yu1"><a href="https://www.instagram.com/evekmp_/" target="_blank" id="devteam"><img src={g1} alt="" /><h1>EVE </h1><h2>Web Design</h2></a></div>
        <div className="yu1"><a href="https://www.instagram.com/kenwrp/" target="_blank"><img src={g2} alt="" /><h1>KEN </h1><h2>Web Design</h2></a></div>
        <div className="yu1"><a href="https://www.instagram.com/warittinan_t/" target="_blank"><img src={g3} alt="" /><h1>TLE </h1><h2>Front End</h2></a></div>
        <div className="yu1"><a href="https://www.instagram.com/onyourp__parn/" target="_blank"><img src={g5} alt="" /><h1>SAIPARN </h1><h2>Front End</h2></a></div>
        <div className="yu1"><a href="https://www.instagram.com/nattaphattxz/" target="_blank"><img src={g4} alt="" /><h1>P </h1><h2>Front End</h2></a></div>
        <div className="yu1"><a href="https://www.instagram.com/ppiinntch/" target="_blank"><img src={g6} alt="" /><h1>PIN </h1><h2>Infrastructure</h2></a></div>
      </div>
        <Hot data-aos="fade-right"><img className="to1" id="story" src={kou} alt="" /><h2 className="t1">กระต่ายตัวหนึ่งมั่นใจในความเร็วของตัวมัน<br />มันท้าทายสัตว์ทุกตัวให้แข่งกับมัน<br />ไม่มีสัตว์ตัวใดรับคำท้า<br />เต่าตัวหนึ่งนึกสนุกจึงรับคำท้าเจ้ากระต่าย</h2></Hot>
        <Hot2 data-aos="fade-left"><img className="to2" src={kou1} alt="" /><h2 className="t1">เมื่อการแข่งเริ่มต้น กระต่ายน้อยวิ่ง<br />นำเต่าไปสุดลูกหูลูกตา</h2></Hot2>
        <Hot3 data-aos="fade-right"><img className="to3" src={kou} alt="" /><h2 className="t1">มันไม่เห็นเจ้าเต่าจึงงีบหลับลง<br />จนเต่าน้อยคลานมาถึงตัวกระต่าย<br />กระต่ายก็ไม่รู้ตัว เมื่อกระต่ายตื่นขึ้นมา<br />เจ้าเต่าก็เข้าเส้นชัยเสียแล้ว</h2></Hot3>
      <div className="to10">
        <img src={tree} alt="" />
      </div>
      <div className="to22" data-aos="fade-right">
        <img className="to22"  src={pt1} alt="" />
      </div> 
      <div className="to33"  data-aos="fade-left">
        <img className="to33" src={pt2} alt="" />
      </div>
      <div className="to44"  data-aos="fade-right">
        <img className="to44" src={pt3} alt="" />
      </div>
      <div className="to55"  data-aos="fade-right">
        <img className="to55" src={rat} alt="" />
      </div>
      <div className="to66"  data-aos="fade-right">
        <img className="to66" src={tao} alt="" />
      </div>
      <h2 className="t2" data-aos="fade-right">“ ความประมาท<br />ย่อมนำมาซึ่งล้มเหลว ”</h2>
    </div>
  );
}

export default App;
