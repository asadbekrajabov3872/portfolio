import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import img1 from './images/bohemian-man-with-his-arms-crossed-removebg-preview (1).png'
import Typed from 'react-typed';
import portfolio2 from './images/portfolio2.png'
import portfolio3 from './images/portfolio3.png'
import portfolio4 from './images/portfolio4.png'
import portfolio5 from './images/posrtfolio5.png'
import portfolio6 from './images/portfolio6.png'
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faCodepen, faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'

const textLines = [
  `Front-End Developer`,
  `UI/UX Designer`,
  `3D SPECIALIST`
];

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
function NavBar() {
  return (
    <div className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Portfolio.</h1>
      <div className="navlist">
        <Link className="Link" to="/home">Home</Link>
        <Link className="Link" to="/about">About</Link>
        <Link className="Link" to="/portfolio">Portfolio</Link>
        <Link className="Link" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="homequote">
        <h1>Hello Portfolio.</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s, when an unknown printer took a galley of type and<br /> scrambled it to make a type specimen book.</p>
        <a href="App" download='' style={{ textDecoration: 'none', color: '#000' }}><button className="homebutton" style={{ width: '200px', height: '35px', borderRadius: '20px', backgroundColor: '#fff' }}>DOWNLOAD CV</button></a>
      </div>
      <div class="spinner-box">
        <div class="blue-orbit leo">
        </div>

        <div class="green-orbit leo">
        </div>

        <div class="red-orbit leo">
        </div>

        <div class="white-orbit w1 leo">
        </div><div class="white-orbit w2 leo">
        </div><div class="white-orbit w3 leo">
        </div>
      </div>
    </>
  );
}


function About() {
  return (
    <div className="about">
      <div className="restangle"></div>
      <div className="imgcontainer">
        <img src={img1} alt='' />
      </div>
      <div className="aboutquote">
        <div className="aboutheader">
          <h1>About Me</h1>
          <img src="https://technext.github.io/unfold/images/divider.png" alt="" />
        </div>
        <h2>Hello My Name is Asadbek</h2>
        <h3>I am a <Typed strings={textLines} typeSpeed={60} loop /></h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
          when an unknown printer took a galley of type and scrambled it to make a type<br />
          specimen book. It has survived not only five centuries, but also the leap into electronic<br />
          typesetting, remaining essentially unchanged. It was popularised in the 1960s<br />
          with the release of Letraset sheets containing Lorem Ipsum passages, and more<br />
          recently with desktop publishing software like Aldus PageMaker including<br /> versions of Lorem Ipsum.</p>
        <h1 className="gg">ABOUT</h1>
      </div>
    </div>
  );
}
function Portfolio() {
  return (
    <div>
      <div className="portfolioheader">
        <h1>Portfolio</h1>
        <hr />
      </div>
      <div id="gallery">

        <div className="card">
          <a href="https://threejs.org/examples/?q=cube#webxr_vr_cubes" target='_blank'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6M9Wwi7J_VdnsOvE3QXmBvI2lp6AUXebrg&usqp=CAU" />
            <h3>3D CUBE</h3>
          </a>
        </div>

        <div className="card">
          <a href='https://codepen.io/Asadbek1337/pen/WNMLjVv' target='_blank'>
            <img src={portfolio2} />
            <h3>3D  PARTICLE</h3>
          </a>
        </div>
        <div className="card">
          <a href="https://threejs.org/examples/webgl_loader_gltf_variants.html" target='_blank'>
            <img src={portfolio3} />
            <h3>3D SNEAKERS</h3>
          </a>
        </div>
      </div>
      <div id="gallery">
        <div className="card">
          <a href="https://codesandbox.io/s/react-counter-forked-d99u8n" target='_blank'>
            <img src={portfolio4} />
            <h3>React JS Counter</h3>
          </a>
        </div>
        <div className="card">
          <a href="https://codesandbox.io/s/light-dark-mode-background-vsptf1" target='_blank'>
            <img src={portfolio5} />
            <h3>React JS Light & Dark</h3>
          </a>
        </div>
        <div className="card">
          <a href="https://codesandbox.io/s/to-do-list-app-in-react-js-43dvzr" target='_blank'>
            <img src={portfolio6} />
            <h3>React JS To Do List</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};


function Contact() {
  return (
    <div className="contact">
      <div className="contacthead">
        <h1>Contact Me</h1>
      </div>
      <form>
        <Input size="large" placeholder="Name" />
        <Input size="large" placeholder="Email" />
      </form>
      <textarea maxLength='200' minLength='20' placeholder="Message"></textarea>
      <div className="contactsubmit">
        <button>Submit</button>
      </div>
      <div className="contactabout">
        <div>
          <p><FontAwesomeIcon icon={faLocationDot} /> Uzbekistan, Khorezm, Gurlen, Al-Khorezmiy-3</p>
          <p><FontAwesomeIcon icon={faPhone} /> +998 94 314 08 31</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> asadbekrajabov3872@gmail.com</p>
        </div>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookF} className='faicon' />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCodepen} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;