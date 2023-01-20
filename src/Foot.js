import './Foot.css';
import './Responsive.css';
import Logo from './media/Logo1.png';
import whats from './media/f_whatsapp.png';
import face from './media/f_facebook.png';
import insta from './media/f_instagram.png';

function Foot() {
  return (
    <footer>
      <div className="ft1">
        <a><img src={Logo} className="ft-logo"></img></a>
        <hr></hr>
      </div>

      <div className="ft2">
        <div className="sobre">
          <a>SOBRE</a>
          <p>Esse projeto de uma Loja de Tênis foi criado de autoria própria, com a finalidade de desenvolver e consolidar conhecimentos em: ReactJS | JavaScript | CSS | HTML.</p>
        </div>
        <div className="contato">
          <ul className="ft2-ul">
              <a className="cont">CONTATO</a>
            <li>
              <a className="whats"><img src={whats}></img></a>
            </li>
            <li>
              <a className="insta"><img src={insta}></img></a>              
            </li>
            <li>
              <a className="face"><img src={face}></img></a>              
            </li>
          </ul>
        </div>
      </div>

      <div className="ft3">
        <p> © Daniel Toledo. </p>
      </div>
    </footer>
  );
}

export default Foot;