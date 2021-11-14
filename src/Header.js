import p01 from './p/book.png';
import p2 from './p/Group 42.png';
import p3 from './p/logo_nav.png';
import p4 from './p/rabbit_hello.png';
import p5 from './p/turtle_hello.png';
import p6 from './p/กระต่ายกับเต่าฟ้อนต์.png';
import p7 from './p/opacity_navbar.png';
import p8 from './p/layer1.png';
import p9 from './p/layer2.png';
import p10 from './p/layer3.png';
import p11 from './p/layer4.png';
import back from './gu/background.png';
import styled from 'styled-components';
import indexstyle from './indexnew.css';
import { Navbar , Container } from 'react-bootstrap';

const Photo =styled.div` 
  background-image:url(${back});
  height:10000px;
  background-size: contain;
  background-repeat: no-repeat;
`

function Header() {
    return (
      <div className="App">
        <img src={p3} alt="logo_navbar" id="landing"/>
        <img src={p8} id="p8"/>
        <img src={p10} id="p10"/>
        <img src={p9} id="p9"/>
        <img src={p11} id="p11"/>

        <img src={p8} id="l8"/>
        <img src={p10} id="l10"/>
        <img src={p9} id="l9"/>
        <img src={p11} id="l11"/>
        <Navbar expand="lg" variant="light" fixed="top" id="navbar">
        <Container>
            <Navbar.Brand href="#landing" id="nav">หน้าหลัก</Navbar.Brand>
            <Navbar.Brand href="#charactors" id="nav">ตัวละคร</Navbar.Brand>
            <Navbar.Brand href="#story" id="nav">เนื้อเรื่อง</Navbar.Brand>
            <Navbar.Brand href="#devteam" id="nav">ผู้จัดทำ</Navbar.Brand>
        </Container>
        </Navbar>
        
        <img src={p4} id="p4" alt="RABBIT"/>
        <img src={p5} alt="TURTLE" id="p5"/>
        <img src={p01} alt="book" id="p01"/>
        <div>
            <img src={p6} id="p6" alt="center_font"/>
        </div>
    </div>

    );
    
  }
  
  export default Header;