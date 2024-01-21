import SectionTitle from "../../components/reusableComponents/SectionTitle.jsx";
import UserItem from "../../components/reusableComponents/UserItem.jsx";
import InputForm from "../../components/reusableComponents/InputForm.jsx";
import ButtonMain from "../../components/reusableComponents/ButtonMain.jsx";
import CreateUserSection from "./CreateUserSection.jsx";
import {useState} from "react";
import {usersMockup} from "../../api/userData.jsx";


const UsersSection = () => {
    const users = usersMockup; // По факту осталось только юзеров закинуть в эту переменную
    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);

    const handleRegisterUser = () => {
        setIsRegisterUserOn(!isRegisterUserOn);
    }

    if (isRegisterUserOn) {
        return <CreateUserSection/>
    }
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
                <li>
                    {users.map(user => <UserItem user={user} key={user.fullName}/>)}
                </li>
            </ul>
        </>
    )
}

export default UsersSection;
