import { useSpring, animated } from "@react-spring/web";
import { useRef, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import axios from "../api/axios";
import aboutUs from "../src/assets/image/aboutUs.svg";
import logo from "../src/assets/image/logo.svg";
import insta from "../src/assets/image/insta.svg";
import vk from "../src/assets/image/vk.svg";
import telegram from "../src/assets/image/telegram.svg";

export default function App() {
  const singUpURL = "/User/SingUp";
  const erStyle = "error";
  const scStyle = "success";

  const initState = {
    email: "",
    phone: "",
    lastName: "",
    firstName: "",
    patronymic: "",
  };

  const [user, setUser] = useState(initState);
  const [policy, setPolicy] = useState(false);
  const [show, toggleShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgStyle, setMsgStyle] = useState(erStyle);

  const opacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
  });

  const margin = useSpring({
    marginTop: show ? "0" : "4%",
    config: { duration: 400 },
  });

  const data = JSON.stringify({
    email: user.email,
    phone: user.phone,
    firstName: user.firstName,
    lastName: user.lastName,
    patronymic: user.patronymic,
  });

  async function onSingUp() {
    if (policy === false)
      return setMsg("Примите соглашение с политикой конфиденциальности");

    try {
      const response = await axios.post(singUpURL, data);
      setMsg("Вы зарегистрированы!");
      setMsgStyle = scStyle;
    } catch (ex) {
      if (!ex?.response) {
        setMsg("Сервер недоступен!");
      } else if (ex.response?.status === 503) {
        setMsg("Технические неполадки, повторите попытку позже!");
      } else if (ex.response?.status === 300) {
        setMsg("Данный пользователь уже зарегистрирован!");
      } else {
        setMsg("Данные введены неверно!");
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsgStyle = erStyle;
    await onSingUp();
    toggleShow(true);
    setTimeout(() => {
      toggleShow(false);
    }, 3000);
  }

  async function handleInput(e) {
    const { name, value } = e;
    setUser({ ...user, [name]: value });

    e.className = e.value
      ? "application-form-item-input"
      : "application-form-item-input-error";
  }

  return (
    <animated.div initial="offscreen" style={{ ...opacity }}>
      <Header />
      <main>
        <animated.section id="geek-action" style={{ ...opacity }}>
          <div className="main-info container flex column ">
            <h2 className="c-w">
              Супер гик — <br />
              форум для студентов
            </h2>
            <p className="c-w">
              Уважаемые IT-специалисты, приглашаем вас на грандиозный форум,
              который состоится в нашем городе! Этот форум будет особенным,
              поскольку он соберет лучших из лучших представителей IT-индустрии
              со всего региона.
            </p>
            <div className="btn-main">
              <a href="#">Зарегистрироваться</a>
            </div>
          </div>
        </animated.section>
        <animated.section id="description" style={{ ...opacity }}>
          <div className="desc-container container">
            <h3 className="c-black">О нас</h3>
            <div className="desc-item flex">
              <div className="desc">
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
                <p className="c-black">
                  Чтобы зарегистрироваться, просто заполните форму и укажите
                  свои контактные данные. После регистрации вы получите
                  подтверждение и информацию о мероприятии.
                </p>
              </div>
              <div className="photo">
                <img src={aboutUs} alt="photo" />
              </div>
            </div>
          </div>
        </animated.section>
        <animated.section id="program" class="b-black" style={{ ...opacity }}>
          <div className="program-container container">
            <h3 className="c-w">Программа на весь форум</h3>
            <div className="indent flex jc-sb">
              <div className="item-program b-black">
                <div className="number flex jc-sb ai-c">
                  <div className="title flex ai-c">
                    <p className="c-black">Открытие форума</p>
                  </div>
                  <p className="c-w">01</p>
                </div>
                <p className="text-program c-w">
                  Открытие форума является важным и значимым моментом в жизни
                  какой-либо общественной организации или сообщества. Это
                  торжественное мероприятие, которое собирает всех участников и
                  поддерживающих организацию лиц вместе, чтобы отметить начало
                  нового этапа в их совместной деятельности.
                </p>
              </div>
              <div className="item-program b-black">
                <div className="number flex jc-sb ai-c">
                  <div className="title flex ai-c">
                    <p className="c-black">Презентация участников</p>
                  </div>
                  <p className="c-w">02</p>
                </div>
                <p className="text-program c-w">
                  это особая форма ознакомления с людьми, которые принимают
                  участие в определенном мероприятии, проекте или команде. Эта
                  процедура позволяет представить каждого участника, рассказать
                  о его квалификации, опыте работы, интересах и достижениях.
                </p>
              </div>
            </div>
            <div className="indent flex jc-sb">
              <div className="item-program b-black">
                <div className="number flex jc-sb ai-c">
                  <div className="title flex ai-c">
                    <p className="c-black">Мастер-классы</p>
                  </div>
                  <p className="c-w">03</p>
                </div>
                <p className="text-program c-w">
                  Основная цель мастер-классов – помочь участникам развить свой
                  профессиональный потенциал и достичь новых высот в своей
                  деятельности. В ходе мастер-класса эксперт предоставляет не
                  только теоретические знания, но и конкретные инструменты и
                  методы, которые успешно применя
                </p>
              </div>
              <div className="item-program b-black">
                <div className="number flex jc-sb ai-c">
                  <div className="title flex ai-c">
                    <p className="c-black">Закрытие форума</p>
                  </div>
                  <p className="c-w">04</p>
                </div>
                <p className="text-program c-w">
                  это процесс, в рамках которого веб-сайт или онлайн-платформа,
                  предназначенные для обсуждения и обмена информацией,
                  прекращает свою деятельность и перестает быть доступными для
                  пользователей
                </p>
              </div>
            </div>
          </div>
        </animated.section>
        <animated.section id="advantage" style={{ ...opacity }}>
          <div className="advantage-container container">
            <h3 className="c-black">Преимущества</h3>
            <div className="cont-adva flex jc-sb">
              <div className="advantage-item b-black c-w">
                <h5>01</h5>
                <h4>Обширная база знаний:</h4>
                <p>
                  Форумы предоставляют пользователю доступ к неоценимому
                  количеству информации и экспертному опыту в различных
                  областях. Здесь вы можете найти ответы на самые разнообразные
                  вопросы и узнать мнение людей, имеющих опыт и знания в
                  интересующей вас области.{" "}
                </p>
              </div>
              <div className="advantage-item b-black c-w">
                <h5>02</h5>
                <h4>Расширение кругозора:</h4>
                <p>
                  Форумы предоставляют пользователю доступ к неоценимому
                  количеству информации и экспертному опыту в различных
                  областях. Здесь вы можете найти ответы на самые разнообразные
                  вопросы и узнать мнение людей, имеющих опыт и знания в
                  интересующей вас области.{" "}
                </p>
              </div>
              <div className="advantage-item b-black c-w">
                <h5>03</h5>
                <h4>Обратная связь:</h4>
                <p>
                  В отличие от социальных сетей, на форумах вы можете получить
                  более подробные и содержательные ответы на возникающие
                  вопросы. Форумы часто имеют более тщательно модерируемые
                  комментарии, что позволяет избежать ненужной рекламы и спама.
                </p>
              </div>
            </div>
          </div>
        </animated.section>
        <animated.section id="main-application-form" style={{ ...opacity }}>
          <div className="main-application-form-block flex jc-c ai-c">
            <div className="application-form-item application-form-item-left">
              <a className="logo" href="#">
                <img src={logo} alt="" />
              </a>
              <h4>Заполните поля для регистрации на форум</h4>
              <p>форма регистрации доступна все студентам СПО и Вузов</p>
            </div>
            <div className="application-form-item">
              <input
                name="lastName"
                type="text"
                className="application-form-item-input"
                placeholder="Фамилия"
                value={user.lastName}
                onChange={(e) => handleInput(e.target)}
                required
              />
              <input
                name="firstName"
                type="text"
                className="application-form-item-input"
                placeholder="Имя"
                value={user.firstName}
                onChange={(e) => handleInput(e.target)}
                required
              />
              <input
                name="patronymic"
                type="text"
                className="application-form-item-input"
                placeholder="Отчество *необязательно"
                value={user.patronymic}
                onChange={(e) => handleInput(e.target)}
              />
              <input
                name="phone"
                type="text"
                className="application-form-item-input"
                placeholder="+7 (999) 999 99 99"
                value={user.phone}
                onChange={(e) => handleInput(e.target)}
                required
              />
              <input
                name="email"
                type="email"
                className={"application-form-item-input"}
                placeholder="E-mail"
                value={user.email}
                onChange={(e) => handleInput(e.target)}
                required
              />
              <input
                type="checkbox"
                className="form-item-input-check"
                id="policy"
                checked={policy}
                onChange={() => setPolicy(!policy)}
                required
              />
              <label for="policy">
                Я соглашаюсь с <a>Политикой конфиденциальности</a>
              </label>
              <button
                className="application-form-button"
                onClick={handleSubmit}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </animated.section>
        <animated.section id="contact" style={{ ...opacity }}>
          <div className="contact-container container">
            <h3 className="c-black">Контакты</h3>
            <div className="item-contact flex jc-sb">
              <div className="item-contact-info c-black">
                <p>Позвони нам</p>
                <h4>+7 (3522) 25-45-35,</h4>
                <h4>+7 3522 25-51-97</h4>
              </div>
              <div className="item-contact-info c-black">
                <p>Время работы</p>
                <h4>пн-пт 8:00–17:00, перерыв 12:00–13:00</h4>
              </div>
              <div className="item-contact-info c-black">
                <p>Наш адрес</p>
                <h4>пр-т Машиностроителей, д. 14</h4>
              </div>
              <div className="item-contact-info c-black">
                <p>Электронная почта</p>
                <h4>ktk@mail.ru</h4>
              </div>
              <div className="item-contact-info icon-con c-black">
                <p>Соц.сети</p>
                <a href="#" className="icon-contact">
                  <img src={insta} alt="" />
                </a>
                <a href="#" className="icon-contact">
                  <img src={vk} alt="" />
                </a>
                <a href="#" className="icon-contact">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </animated.section>
      </main>
      <animated.div
        ref={msgRef}
        className={`flex jc-c ai-c ${msgStyle}`}
        style={margin}
      >
        <text>{msg}</text>
      </animated.div>
      <Footer />
    </animated.div>
  );
}
