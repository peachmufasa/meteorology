
import CreateItemInputField from "./CreateItemInputField.jsx";
import {useState} from "react";
import userStore from "../../store/userStore.js";


const EditUserSection = ({handleClose, selectedUser}) => {

    const updateUser = userStore(state => state.updateUser)

    const [firstName, setFirstName] = useState(selectedUser.first_name)
    const [lastName, setLastName] = useState(selectedUser.last_name)
    const [middleName, setMiddleName] = useState(selectedUser.middle_name)
    const [login, setLogin] = useState(selectedUser.login)
    const [password, setPassword] = useState(selectedUser.password)
    const [phone, setPhone] = useState(selectedUser.phone)
    const [postCode, setPostCode] = useState(selectedUser.post_code)
    const [role, setRole] = useState(selectedUser.role)

    const handleRadioInputChange = (e) => {
        setRole(e.target.value)
    }

    const handleSave = () => {
        const user = {
            first_name: firstName,
            id: selectedUser.id,
            last_name: lastName,
            login,
            middle_name: middleName,
            password,
            phone,
            post_code: postCode,
            role
        }
        updateUser(user).then(() => setWarningMessage(null)).catch(() => setWarningMessage('Warning'))
    }

    const [warningMessage, setWarningMessage] = useState(null)

    return <div className="px-20 py-14">
        <header className="mb-12">
            <h2 className="section-title text-center">
                Редактировать пользователя
            </h2>
        </header>

        <form>
            <ul className="flex flex-wrap justify-evenly gap-4 mb-24 mt-20">
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
                {/*Что-то нужно сделать с отображением роли*/}
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
            <button onClick={handleSave} type="submit" className="btn py-5 px-10 text-2xl">
                Подтвердить
            </button>
        </div>
    </div>
};

export default EditUserSection;
