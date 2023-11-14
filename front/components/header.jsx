export default function Header() {
  return (
    <header className="b-black">
      <div className="conteiner flex jc-sb ai-c">
        <a href="#">
          <h1 class="c-w">SuperGEEK</h1>
        </a>
        <nav>
          <a className="c-w" href="#description">
            Описание
          </a>
          <a className="c-w" href="#program">
            Программа
          </a>
          <a className="c-w" href="#">
            Контакты
          </a>
          <a className="c-w btn-main" href="#">
            Зарегистрироваться
          </a>
        </nav>
        <div className="contact-nav flex">
          <img src="image/Phone.svg" alt="photo" />
          <p className="c-w">+7 (3522) 25-45-35</p>
        </div>
      </div>
    </header>
  );
}
