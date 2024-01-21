import SectionTitle from "../../components/reusableComponents/SectionTitle.jsx";
import CreateUserInputField from "../../components/reusableComponents/CreateUserInputField.jsx";

const CreateUserSection = () => {
    return <div>
        <header className="mb-12">
            <SectionTitle titleText="Создать профиль"/>
        </header>

        <form>
            <ul className="flex flex-wrap justify-evenly gap-4 mb-20">
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="name"
                        inputType="text"
                        labelContent="Имя"
                        labelFor="name"/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="lastName"
                        inputType="text"
                        labelContent="Фамилия"
                        labelFor="lastName"/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="middleName"
                        inputType="text"
                        labelContent="Отчество"
                        labelFor="middleName"/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="phoneNumber"
                        inputType="tel"
                        labelContent="Телефон"
                        labelFor="phoneNumber" maxLength={10}/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="postNumber"
                        inputType="text"
                        labelContent="Код поста"
                        labelFor="postNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="login"
                        inputType="text"
                        labelContent="Логин"
                        labelFor="login"/>
                </li>
                <li className="w-[40%]">
                    <CreateUserInputField
                        inputId="password"
                        inputType="password"
                        labelContent="Пароль"
                        labelFor="password"/>
                </li>
                <li className="w-[40%]">
                    <p className="mb-3 px-6 text-2xl">Роль</p>
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
            </ul>
            <div className="flex justify-center gap-28">
                <button className="text-2xl text-red transition-all ease-in-out hover:text-red/50">
                    Отменить
                </button>
                <button type="submit" className="py-5 px-10 text-2xl text-perfect-blue bg-dark-gray/50 rounded-full transition-all ease-in-out hover:bg-dark-gray active:bg-gray/30">
                    Подтвердить
                </button>
            </div>
        </form>
    </div>
}

export default CreateUserSection;