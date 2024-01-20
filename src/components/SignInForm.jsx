import Logo from "../assets/images/Logo.svg";
import ButtonMain from "./reusableComponents/ButtonMain.jsx";
import InputForm from "./reusableComponents/InputForm.jsx";
import { Link } from "react-router-dom";
import { sections } from "../const/sections.jsx";

const SignInForm = () => {
  return (
    <div className=" bg-main-dark text-white flex flex-col min-h-screen justify-center">
      <div className="w-4/12 m-auto flex flex-col items-center">
        <img src={Logo} alt="Лого" className="h-[110px] w-[110px] mb-8" />
        <p className="text-center text-3xl mb-12">Авторизация</p>
        <form className="w-full flex flex-col items-center gap-8">
          <InputForm
            type="text"
            placeholder="Логин"
            style="w-[50%] border-2 border-transparent bg-dark-gray 
            hover:border-perfect-blue focus:border-perfect-blue focus:shadow-perfect-blue -[#15A1CF] focus:shadow-[0px_0px_8px_perfect-blue]"
          />
          <InputForm
            type="password"
            placeholder="Пароль"
            style="w-[50%] border-2 border-transparent bg-dark-gray 
            hover:border-perfect-blue focus:border-perfect-blue focus:shadow-perfect-blue -[#15A1CF] focus:shadow-[0px_0px_8px_perfect-blue]"
          />
          <Link
            className="w-full flex justify-center"
            to={`/section/${Object.keys(sections)[0]}`}
          >
            <ButtonMain style="w-[25%]">
              <span className="text-[1rem]">Войти</span>
            </ButtonMain>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
