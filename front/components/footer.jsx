export default function Footer() {
  return (
    <footer className="b-black">
      <div className="footer-conteiner conteiner">
        <div className="footer-item flex ai-c jc-sb">
          <a className="logo" href="#">
            <img src="../src/assets/image/Logo.svg" alt="" srcset="" />
          </a>
          <nav>
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
        </div>
        <a className="Copyright c-w" href="#">
          © Официальный сайт форума «Супер гик
        </a>
        <a href="#" className="c-w">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
