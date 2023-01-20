import "./App.css";
import "./Responsive.css";
import BackToTopButton from "./BackToTopButton";
import Logo from "./media/Logo1.png";
import Shoes1 from "./media/Shoes1.jpg";
import Shoes2 from "./media/Shoes2.jpg";
import Shoes3 from "./media/Shoes3.jpg";
import Shoes4 from "./media/Shoes4.jpg";
import Shoes5 from "./media/Shoes5.jpg";
import Shoes6 from "./media/Shoes6.jpg";
import Shoes7 from "./media/Shoes7.jpg";
import Shoes8 from "./media/Shoes8.jpg";
import Shoes9 from "./media/Shoes9.jpg";
import Shoes10 from "./media/Shoes10.jpg";
import Shoes11 from "./media/Shoes11.jpg";
import Shoes12 from "./media/Shoes12.jpg";

function App() {
  const colors = [
    ["black", "Preto"],
    ["white", "Branco"],
    ["blue", "Azul"],
    ["red", "Vermelho"],
    ["pink", "Rosa"],
    ["gray", "Cinza"],
  ];
  const sizes = ["36", "37", "38", "39", "40", "41", "42", "43"];

  return (
    <div className="nav">
      <BackToTopButton />
      <nav>
        <a className="logo">
          <img src={Logo}></img>
        </a>
        <ul className="nav-ul">
          <li>
            <a href="#">PRODUTOS</a>
          </li>
          <li>
            <a href="#">SOBRE</a>
          </li>
          <li>
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </nav>

      <section className="sect1">
        <div>
          <div className="filter">
            <div className="marca">
              <h3>MARCAS</h3>
              <a>Nike</a>
              <a>Adidas</a>
              <a>Vans</a>
            </div>

            <div className="circ">
              <div>
                <h3>CORES</h3>
              </div>
              {colors.map((color) => {
                return (
                  <div key={color[0]} className="cor_select">
                    <a style={{ backgroundColor: color[0] }}></a>
                    <div>{color[1]}</div>
                  </div>
                );
              })}
            </div>

            <div className="quad">
              <div>
                <h3>TAMANHOS</h3>
              </div>

              {sizes.map((size) => {
                return (
                  <div key={size} className="tam_select">
                    <a>{size}</a>
                  </div>
                );
              })}
            </div>

            <div className="marca">
              <h3>GÊNERO</h3>
              <a>Masculino</a>
              <a>Femino</a>
            </div>
          </div>

          <div className="allShoes">
            <ul className="shoes">
              <li>
                <img src={Shoes1}></img>
              </li>
              <li>
                TÊNIS NIKE AIR FORCE 1´07 LV8 MASCULINO
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 499,90</p>
                <p className="prazo">ou 6x de R$ 93,35</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes2}></img>
              </li>
              <li>
                TÊNIS ADIDAS NMD R1
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 699,90</p>
                <p className="prazo">ou 10x de R$ 72,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes10}></img>
              </li>
              <li>
                TÊNIS VANS OLD SKOOL STACKFORM
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 399,90</p>
                <p className="prazo">ou 6x de R$ 74,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes4}></img>
              </li>
              <li>
                TÊNIS VANS OLD SKOOL
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 389,90</p>
                <p className="prazo">ou 10x de R$ 38,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes5}></img>
              </li>
              <li>
                TÊNIS AIR JORDAN 1 RETRO HIGH OG
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 649,90</p>
                <p className="prazo">ou 10x de R$ 64,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes6}></img>
              </li>
              <li>
                TÊNIS ADIDAS SUPERSTAR
                <p>FEMININO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 299,90</p>
                <p className="prazo">ou 10x de R$ 29,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes7}></img>
              </li>
              <li>
                TÊNIS ADIDAS NMD R1
                <p>FEMININO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 599,90</p>
                <p className="prazo">ou 10x de R$ 59,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes8}></img>
              </li>
              <li>
                TÊNIS NIKE AIR FORCE 1 ´07 PRM
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 699,90</p>
                <p className="prazo">ou 10x de R$ 69,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes9}></img>
              </li>
              <li>
                TÊNIS ADIDAS OZNOVA
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 899,90</p>
                <p className="prazo">ou 10x de R$ 89,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes3}></img>
              </li>
              <li>
                NIKE AIR FORCE 1 '07 LV8
                <p>FEMININO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 299,90</p>
                <p className="prazo">ou 4x de R$ 84,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes11}></img>
              </li>
              <li>
                TÊNIS NIKE AIR FORCE REACT
                <p>MASCULINO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 999,90</p>
                <p className="prazo">ou 4x de R$ 99,99</p>
              </li>
            </ul>
            <ul className="shoes">
              <li>
                <img src={Shoes12}></img>
              </li>
              <li>
                TÊNIS VANS OLD SKOOL STACKFORM
                <p>FEMININO</p>
                <p className="frete">FRETE GRÁTIS</p>
                <p className="vista">R$ 499,90</p>
                <p className="prazo">ou 10x de R$ 49,99</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
