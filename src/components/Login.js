export default function Login() {
    return (
      <div className="login">
        <h2 className="login__title">Вход</h2>
        <form className="login__form">
        <input className="login__input login__input_form_login_email" type="email" placeholder="Email" />
        <input className="login__input login__input_form_login_password" type="password" placeholder="Пароль" />
        <button className="login__button">Войти</button>
        </form>
      </div>
    );
  }