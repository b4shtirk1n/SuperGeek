export default function Footer() {
  return (
    <footer className="b-black">
      <div className="footer-conteiner conteiner">
        <div className="footer-item flex ai-c jc-sb">
          <div className="logo">
            <h1 className="c-w">SuperGEEK</h1>
          </div>
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
