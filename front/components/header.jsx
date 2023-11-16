import logo from "../src/assets/image/logo.svg";
import photo from "../src/assets/image/Phone.svg";

export default function Header() {
  return (
    <header className="b-black">
      <div className="conteiner flex jc-sb ai-c">
        <a className="logo" href="#">
          <img src={logo} alt="" />
        </a>
        <nav className="ai-c">
          <a className="c-w" href="#description">
            Описание
          </a>
          <a className="c-w" href="#program">
            Программа
          </a>
          <a className="c-w" href="#advantage">
            Преимущества
          </a>
          <a className="c-w" href="#main-application-form">
            Зарегистрироваться
          </a>
          <a className="c-w" href="#contact">
            Контакты
          </a>
        </nav>
        <div className="contact-nav flex">
          <img src={photo} alt="photo" />
          <p className="c-w">+7 (3522) 25-45-35</p>
        </div>
      </div>
    </header>
  );
}
