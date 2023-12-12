import Logo from "../assets/images/Logo.svg";
import ButtonMain from "./reusableComponents/ButtonMain";
import InputForm from "./reusableComponents/InputForm";

const SignInForm = () => {
  return (
    <div className=" bg-main-dark text-white flex flex-col min-h-screen justify-center">
      <div className="w-4/12 m-auto flex flex-col items-center">
        <img src={Logo} alt="Лого" className="h-[110px] w-[110px] mb-8" />
        <p className="text-center text-3xl mb-12">Авторизация</p>
        <form className="w-full flex flex-col items-center gap-8">
          <InputForm type="text" placeholder="Логин" style="w-[50%]" />
          <InputForm type="password" placeholder="Пароль" style="w-[50%]" />
          <ButtonMain style="w-[25%]">Войти</ButtonMain>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
