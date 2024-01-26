
import CreateItemInputField from "./CreateItemInputField.jsx";

const CreateUserSection = () => {
    return <div className="px-20 py-14">
        <header className="mb-12">
            <h2 className="section-title text-center">
                Создать пользователя
            </h2>
        </header>

        <form>
            <ul className="flex flex-wrap justify-evenly gap-4 mb-24 mt-20">
            <li className="w-[40%]">
                    <CreateItemInputField
                        name="first_name"
                        inputId="name"
                        inputType="text"
                        labelContent="Имя"
                        labelFor="name"
                    />
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        name="phone"
                        inputId="phoneNumber"
                        inputType="tel"
                        labelContent="Телефон"
                        labelFor="phoneNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        name="last_name"
                        inputId="lastName"
                        inputType="text"
                        labelContent="Фамилия"
                        labelFor="lastName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        name="post_code"
                        inputId="postNumber"
                        inputType="text"
                        labelContent="Код поста"
                        labelFor="postNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        name="middle_name"
                        inputId="middleName"
                        inputType="text"
                        labelContent="Отчество"
                        labelFor="middleName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
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
                                type="radio" id="roleChoice1"
                                name="role"
                                value="admin"/>
                            <label className="text-2xl" htmlFor="contactChoice1">Админ</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                id="roleChoice2"
                                name="role"
                                value="sender"/>
                            <label className="text-2xl" htmlFor="contactChoice2">Отправитель</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                id="roleChoice3"
                                name="role"
                                value="hydrologist"/>
                            <label className="text-2xl" htmlFor="contactChoice3">Гидролог</label>
                        </div>
                    </div>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        name="password"
                        inputId="password"
                        inputType="password"
                        labelContent="Пароль"
                        labelFor="password"/>
                </li>
            </ul>
        </form>
        <div className="flex justify-center gap-28">
            <button className="cancel-btn text-2xl">
                Отменить
            </button>
            <button type="submit" className="btn py-5 px-10 text-2xl">
                Подтвердить
            </button>
        </div>
    </div>
}

export default CreateUserSection;