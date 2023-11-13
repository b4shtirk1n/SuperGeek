export default function Header() {
  return (
    <header>
      <div className="nav-main conteiner flex jc-sb ai-c">
        <div className="logo">
          <a href="#">Супер ГИК</a>
        </div>
        <nav>
          <a href="#">Описание</a>
          <a href="#">Программа</a>
          <a href="#">Контакты</a>
        </nav>
        <div className="btn-nav">
          <a href="#">Зарегистрироваться</a>
        </div>
      </div>
    </header>
  );
}
