import SectionTitle from "../ReusableComponents/SectionTitle.jsx";
import CreateItemInputField from "./CreateItemInputField.jsx";


const EditUserSection = ({selectedUser}) => {
    return <div className="px-20 py-14">
        <header className="mb-12">
            <SectionTitle style="text-center">
                Редактировать пользователя
            </ SectionTitle>
        </header>

        <form>
            <ul className="flex flex-wrap justify-evenly gap-4 mb-24 mt-20">
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.first_name}
                        name="first_name"
                        inputId="name"
                        inputType="text"
                        labelContent="Имя"
                        labelFor="name"
                    />
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.phone}
                        name="phone"
                        inputId="phoneNumber"
                        inputType="tel"
                        labelContent="Телефон"
                        labelFor="phoneNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.last_name}
                        name="last_name"
                        inputId="lastName"
                        inputType="text"
                        labelContent="Фамилия"
                        labelFor="lastName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.post_code}
                        name="post_code"
                        inputId="postNumber"
                        inputType="text"
                        labelContent="Код поста"
                        labelFor="postNumber"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.middle_name}
                        name="middle_name"
                        inputId="middleName"
                        inputType="text"
                        labelContent="Отчество"
                        labelFor="middleName"/>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.login}
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
                                checked={selectedUser.role === "role"}
                                id="roleChoice1"
                                name="role"
                                value="admin"/>
                            <label className="text-2xl" htmlFor="contactChoice1">Админ</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                checked={selectedUser.role === "sender"}
                                id="roleChoice2"
                                name="role"
                                value="sender"/>
                            <label className="text-2xl" htmlFor="contactChoice2">Отправитель</label>
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="w-6"
                                type="radio"
                                checked={selectedUser.role === "hydrologist"}
                                id="roleChoice3"
                                name="role"
                                value="hydrologist"/>
                            <label className="text-2xl" htmlFor="contactChoice3">Гидролог</label>
                        </div>
                    </div>
                </li>
                <li className="w-[40%]">
                    <CreateItemInputField
                        value={selectedUser.password}
                        name="password"
                        inputId="password"
                        inputType="password"
                        labelContent="Пароль"
                        labelFor="password"/>
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
    </div>;
};

export default EditUserSection;
