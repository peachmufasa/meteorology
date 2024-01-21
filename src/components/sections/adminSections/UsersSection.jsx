import SectionTitle from "../../reusableComponents/SectionTitle.jsx";
import UserItem from "../../reusableComponents/UserItem.jsx";
import {getUsers} from "../../../api/userData.jsx";
import InputForm from "../../reusableComponents/InputForm.jsx";
import ButtonMain from "../../reusableComponents/ButtonMain.jsx";
import CreateUserSection from "./CreateUserSection.jsx";
import {useState} from "react";


const UsersSection = () => {
    const users = getUsers(); // По факту осталось только юзеров закинуть в эту переменную
    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);

    const handleRegisterUser = () => {
        setIsRegisterUserOn(!isRegisterUserOn);
    }

    if (isRegisterUserOn) {
        return <CreateUserSection/>
    } else {
        return (
            <>
                <header className="flex justify-between items-center mb-7">
                    <SectionTitle titleText="Пользователи"/>
                    <InputForm
                        type="text"
                        placeholder="Поиск"
                        style="w-[35%] border-2 border-gray bg-transparent"
                    />
                    <ButtonMain style="w-[18%]" onClick={handleRegisterUser}>
                        Создать аккаунт
                    </ButtonMain>
                </header>
                <ul className="max-h-[36rem] overflow-y-auto">
                    <li>{users.map(user => <UserItem user={user} key={user.fullName}/>)}
                    </li>
                </ul>
            </>)

    }
}

        export default UsersSection;
