import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import axios from "../api/request";

export default function App() {
  const singUpURL = "/User/SingUp";

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [policy, setPolicy] = useState(false);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg("");
  }, [email, phone, firstName, lastName, patronymic, policy]);

  const data = JSON.stringify({
    email,
    phone,
    firstName,
    lastName,
    patronymic,
  });

  async function onSingUp() {
    if (policy !== true)
      return setMsg("Примите соглашение с политикой конфиденциальности");

    try {
      const response = await axios.post(singUpURL, data, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (ex) {
      if (ex.response) {
        setMsg("Сервер недоступен!");
      } else if (ex.response.status === 503) {
        setMsg("Технические неполадки, повторите попытку позже!");
      } else if (ex.response.status === 300) {
        setMsg("Данный пользователь уже зарегистрирован!");
      } else {
        setMsg("Данные введены неверно!");
      }
    }
  }

  async function handleClick(e) {
    e.preventDefault();
    console.log(policy);
    console.log(email);
    console.log(msg);
    await onSingUp();
    setEmail("");
    setPhone("");
    setFirstName("");
    setLastName("");
    setPatronymic("");
  }

  return (
    <>
      <Header />
      <main>
        <section id="geek-action">
          <div class="main-info conteiner flex column ">
            <h2 class="c-w">
              Супер гик — <br />
              форум для студентов
            </h2>
            <p class="c-w">
              Уважаемые IT-специалисты, приглашаем вас на грандиозный форум,
              который состоится в нашем городе! Этот форум будет особенным,
              поскольку он соберет лучших из лучших представителей IT-индустрии
              со всего региона.
            </p>
            <div class="btn-main">
              <a href="#">Зарегистрироваться</a>
            </div>
          </div>
        </section>
        <section id="description">
          <div class="desc-conteiner conteiner">
            <h3>О нас</h3>
            <div class="desc-item flex">
              <div class="desc">
                <p>
                  Мероприятие пройдет в течение двух дней и включает в себя
                  множество интересных и полезных секций, мастер-классов и
                  воркшопов. Вы сможете обменяться опытом с коллегами, узнать о
                  новых технологиях и трендах, а также найти новые возможности
                  для развития вашей карьеры.
                </p>
                <p>
                  Мы хотим, чтобы этот форум стал местом, где каждый специалист
                  сможет раскрыть свой потенциал и получить максимум пользы от
                  участия. Для этого мы предлагаем вам зарегистрироваться на
                  форуме уже сейчас.
                </p>
                <p class="c-blue">
                  Чтобы зарегистрироваться, просто заполните форму и укажите
                  свои контактные данные. После регистрации вы получите
                  подтверждение и информацию о мероприятии.
                </p>
              </div>
              <div class="photo">
                <img src="image/aboutUs.svg" alt="photo" srcset="" />
              </div>
            </div>
          </div>
        </section>
        <section id="program" class="b-black">
          <div class="program-conteiner conteiner">
            <h3 class="c-w">Программа на весь форум</h3>
            <div class="indent flex jc-sb">
              <div class="item-program">
                <div class="number flex jc-sb ai-c">
                  <div class="title flex ai-c">
                    <p class="c-black">Открытие форума</p>
                  </div>
                  <p class="c-w">01</p>
                </div>
                <p class="text-program c-w">
                  Открытие форума является важным и значимым моментом в жизни
                  какой-либо общественной организации или сообщества. Это
                  торжественное мероприятие, которое собирает всех участников и
                  поддерживающих организацию лиц вместе, чтобы отметить начало
                  нового этапа в их совместной деятельности.
                </p>
              </div>
              <div class="item-program">
                <div class="number flex jc-sb ai-c">
                  <div class="title flex ai-c">
                    <p class="c-black">Презентация участников</p>
                  </div>
                  <p class="c-w">02</p>
                </div>
                <p class="text-program c-w">
                  это особая форма ознакомления с людьми, которые принимают
                  участие в определенном мероприятии, проекте или команде. Эта
                  процедура позволяет представить каждого участника, рассказать
                  о его квалификации, опыте работы, интересах и достижениях.
                </p>
              </div>
            </div>
            <div class="indent flex jc-sb">
              <div class="item-program">
                <div class="number flex jc-sb ai-c">
                  <div class="title flex ai-c">
                    <p class="c-black">Мастер-классы</p>
                  </div>
                  <p class="c-w">03</p>
                </div>
                <p class="text-program c-w">
                  Основная цель мастер-классов – помочь участникам развить свой
                  профессиональный потенциал и достичь новых высот в своей
                  деятельности. В ходе мастер-класса эксперт предоставляет не
                  только теоретические знания, но и конкретные инструменты и
                  методы, которые успешно применя
                </p>
              </div>
              <div class="item-program">
                <div class="number flex jc-sb ai-c">
                  <div class="title flex ai-c">
                    <p class="c-black">Закрытие форума</p>
                  </div>
                  <p class="c-w">04</p>
                </div>
                <p class="text-program c-w">
                  Закрытие форума — это процесс, в рамках которого веб-сайт или
                  онлайн-платформа, предназначенные для обсуждения и обмена
                  информацией, прекращает свою деятельность и перестает быть
                  доступными для пользователей
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="description">
          <div class="desc-conteiner conteiner">
            <h3>О нас</h3>
            <div class="desc-item flex">
              <div class="desc">
                <p>
                  Мероприятие пройдет в течение двух дней и включает в себя
                  множество интересных и полезных секций, мастер-классов и
                  воркшопов. Вы сможете обменяться опытом с коллегами, узнать о
                  новых технологиях и трендах, а также найти новые возможности
                  для развития вашей карьеры.
                </p>
                <p>
                  Мы хотим, чтобы этот форум стал местом, где каждый специалист
                  сможет раскрыть свой потенциал и получить максимум пользы от
                  участия. Для этого мы предлагаем вам зарегистрироваться на
                  форуме уже сейчас.
                </p>
                <p class="c-blue">
                  Чтобы зарегистрироваться, просто заполните форму и укажите
                  свои контактные данные. После регистрации вы получите
                  подтверждение и информацию о мероприятии.
                </p>
              </div>
              <div class="photo">
                <img src="image/aboutUs.svg" alt="photo" srcset="" />
              </div>
            </div>
          </div>
        </section>
        <section id="main-application-form">
          <div class="main-application-form-block flex jc-c ai-c">
            <div class="application-form-item application-form-item-left">
              <h4>Заполните поля для регистрации на форум</h4>
              <p></p>
            </div>
            <div class="application-form-item">
              <input
                type="text"
                class="application-form-item-input"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                class="application-form-item-input"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                class="application-form-item-input"
                placeholder="Отчество"
                value={patronymic}
                onChange={(e) => setPatronymic(e.target.value)}
              />
              <input
                type="text"
                class="application-form-item-input"
                placeholder="+79999999999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                class="application-form-item-input"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="checkbox"
                class="form-item-input-check"
                id="policy"
                checked={policy}
                onChange={() => setPolicy(!policy)}
                required
              />
              <label for="policy">
                Я соглашаюсь с{" "}
                <a href="https://adtaxi.ru/policy">
                  Политикой конфиденциальности
                </a>
              </label>
              <button class="application-form-button" onClick={handleClick}>
                Оставить заявку
              </button>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="contact-conteiner conteiner">
            <h3>Контакты</h3>
            <div class="item-contact flex jc-sb">
              <div class="item-contact-info">
                <p>Позвони нам</p>
                <h4>+7 (3522) 25-45-35,</h4>
                <h4>+7 3522 25-51-97</h4>
              </div>
              <div class="item-contact-info">
                <p>Время работы</p>
                <h4>пн-пт 8:00–17:00, перерыв 12:00–13:00</h4>
              </div>
              <div class="item-contact-info">
                <p>Наш адрес</p>
                <h4>пр-т Машиностроителей, д. 14</h4>
              </div>
              <div class="item-contact-info">
                <p>Электронная почта</p>
                <h4>ktk@mail.ru</h4>
              </div>
              <div class="item-contact-info icon-con">
                <p>Соц.сети</p>
                <a href="#" class="icon-contact">
                  <img src="image/insta.svg" alt="" srcset="" />
                </a>
                <a href="#" class="icon-contact">
                  <img src="image/vk.svg" alt="" srcset="" />
                </a>
                <a href="#" class="icon-contact">
                  <img src="image/telegram.svg" alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
