import p01 from './p/book.png';
import p2 from './p/Group 42.png';
import p3 from './p/logo_nav.png';
import p4 from './p/rabbit_hello.png';
import p5 from './p/turtle_hello.png';
import p6 from './p/กระต่ายกับเต่าฟ้อนต์.png';
import p7 from './p/opacity_navbar.png';
import p8 from './p/Untitled-1.gif';
import back from './gu/background.png';
import styled from 'styled-components';
import indexstyle from './indexnew.css';
import { Navbar , Container } from 'react-bootstrap';
import Particle from './Particle';

const Photo =styled.div` 
  background-image:url(${back});
  height:10000px;
  background-size: contain;
  background-repeat: no-repeat;
`

function Header() {
    return (
      <div className="Header">
        <img src={p3} alt="logo_navbar" id="p3"/>
        <Navbar expand="lg" variant="light" fixed="top" id="navbar">
        <Container>
            <Navbar.Brand href="#p3" id="nav">หน้าหลัก</Navbar.Brand>
            <Navbar.Brand href="#carter" id="nav">ตัวละคร</Navbar.Brand>
            <Navbar.Brand href="#story" id="nav">เนื้อเรื่อง</Navbar.Brand>
            <Navbar.Brand href="#credit" id="nav">ผู้จัดทำ</Navbar.Brand>
        </Container>
        </Navbar>

        <div className="hun1">
        
        <img src={p8} alt="animaion" id="p8"/>
       
        <img src={p4} id="p4" alt="RABBIT"/>
        <img src={p5} alt="TURTLE" id="p5"/>
        <img src={p01} alt="book" id="p01"/>
        </div>
        <div>
            <img src={p6} id="p6" alt="center_font"/>
        </div>
    </div>

    );
    
  }
  
  export default Header;