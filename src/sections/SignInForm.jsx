import Logo from "../assets/images/Logo.svg";
import {useNavigate} from "react-router-dom";
import {sections} from "../const/sections.jsx";
import {useState} from "react";
import userStore from "../store/userStore.js";


const SignInForm = () => {

  const isAuth = userStore(state => state.isAuth)
  const setAuth = userStore(state => state.setAuth)
  const navigate = useNavigate()
  setAuth(true)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className=" bg-main-dark text-white flex flex-col min-h-screen justify-center">
      <div className="w-4/12 m-auto flex flex-col items-center">
        <img src={Logo} alt="Лого" className="h-[110px] w-[110px] mb-8" />
        <p className="text-center text-3xl mb-12">Авторизация</p>
        <form className="w-full flex flex-col items-center gap-8">
          <input onChange={e => setLogin(e.target.value)} type="text" placeholder="Логин" value={login} className='px-4 py-3 outline-none rounded-full border-2 border-transparent w-[50%]
                            text-white text-lg placeholder:text-grey bg-dark-gray transition-all ease-in-out
                            hover:border-perfect-blue focus:border-perfect-blue focus:shadow-perfect-blue -[#15A1CF] focus:shadow-[0px_0px_8px_perfect-blue]' />
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль" value={password} className='px-4 py-3 outline-none rounded-full border-2 border-transparent w-[50%]
                            text-white text-lg placeholder:text-grey bg-dark-gray transition-all ease-in-out
                            hover:border-perfect-blue focus:border-perfect-blue focus:shadow-perfect-blue -[#15A1CF] focus:shadow-[0px_0px_8px_perfect-blue]' />
        </form>
        <button onClick={() => {
            if (isAuth) {
              navigate(`/section/${Object.keys(sections)[0]}`)
            }
          }
        } className='px-4 py-3 text-white text-xl font-bold transition-all ease-in-out
                              bg-perfect-blue outline-none rounded-full hover:bg-perfect-blue-hover active:bg-perfect-blue-active style="w-[25%]'>
              <span className='text-[1rem]'>
                Войти
              </span>
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
