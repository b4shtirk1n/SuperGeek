import Header from "../Components/header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="main-info">
          <div className="conteiner-info conteiner ">
            <div className="item-date"></div>
          </div>
        </section>
        <section id="form-reg">
          <div className="conteiner-reg conteiner flex">
            <div className="item-reg flex column">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Отчество" />
            </div>
            <div className="item-reg flex column">
              <input type="text" placeholder="электронная почта" />
              <input type="text" placeholder="номер телефон" />
              <div className="btn-reg">
                <a href="№">Отправить</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
