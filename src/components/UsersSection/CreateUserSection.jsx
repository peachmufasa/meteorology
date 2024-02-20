
import CreateItemInputField from "./CreateItemInputField.jsx";
import userStore from "../../store/userStore.js";
import {useState} from "react";

const CreateUserSection = ({handleClose}) => {

    const addUser = userStore(state => state.addUser)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [postCode, setPostCode] = useState('')
    const [role, setRole] = useState('sender')

    const handleRadioInputChange = (e) => {
        setRole(e.target.value)
    }

    const handleAdd = () => {
        const user = {
            first_name: firstName,
            id: "",
            last_name: lastName,
            login,
            middle_name: middleName,
            password,
            phone,
            post_code: postCode,
            role
        }
        addUser(user).then(() => setWarningMessage(null)).catch(() => setWarningMessage('Warning'))
    }

    const [warningMessage, setWarningMessage] = useState(null)

    return <div className="px-20 py-14 flex flex-col justify-between h-full">
        <header>
            <h2 className="section-title text-center">
                Создать пользователя
            </h2>
        </header>

        <form>
            <ul className="flex flex-wrap justify-evenly gap-4">
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="first_name"
                        inputId="name"
                        inputType="text"
                        labelContent="Имя"
                        labelFor="name"
                    />
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        inputId="phoneNumber"
                        inputType="tel"
                        labelContent="Телефон"
                        labelFor="phoneNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="last_name"
                        inputId="lastName"
                        inputType="text"
                        labelContent="Фамилия"
                        labelFor="lastName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                        name="post_code"
                        inputId="postNumber"
                        inputType="text"
                        labelContent="Код поста"
                        labelFor="postNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        name="middle_name"
                        inputId="middleName"
                        inputType="text"
                        labelContent="Отчество"
                        labelFor="middleName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        name="login"
                        inputId="login"
                        inputType="text"
                        labelContent="Логин"
                        labelFor="login"/>
                </li>
                <li className="w-[40%]">
                    <p className="mb-7 px-6 text-[1.25rem]">Роль</p>
                    <div className="flex gap-7 justify-center">
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                checked={role === "admin"}
                                id="roleChoice1"
                                name="role"
                                onChange={handleRadioInputChange}
                                value={"admin"}/>
                            <label className="text-2xl" htmlFor="contactChoice1">Админ</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                checked={role === "sender"}
                                id="roleChoice2"
                                name="role"
                                onChange={handleRadioInputChange}
                                value={"sender"}/>
                            <label className="text-2xl" htmlFor="contactChoice2">Отправитель</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                checked={role === "hydrologist"}
                                id="roleChoice3"
                                name="role"
                                onChange={handleRadioInputChange}
                                value={"hydrologist"}/>
                            <label className="text-2xl" htmlFor="contactChoice3">Гидролог</label>
                        </div>
                    </div>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        inputId="password"
                        inputType="password"
                        labelContent="Пароль"
                        labelFor="password"/>
                </li>
            </ul>
            <span className='text-red'>{warningMessage != null ? warningMessage : ''}</span>
        </form>
        <div className="flex justify-center gap-28">
            <button onClick={handleClose} className="cancel-btn text-2xl">
                Отменить
            </button>
            <button onClick={handleAdd} type="submit" className="btn py-5 px-10 text-2xl">
                Подтвердить
            </button>
        </div>
    </div>
}

export default CreateUserSection;