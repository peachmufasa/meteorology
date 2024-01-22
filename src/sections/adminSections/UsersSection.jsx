import {useState} from "react";
import {usersMockup} from "../../api/userData.jsx";
import SectionTitle from "../../components/reusableComponents/SectionTitle.jsx";
import AddButton from "../../components/reusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import InputForm from "../../components/reusableComponents/InputForm.jsx";
import UserItem from "../../components/UsersSection/UserItem.jsx";


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
                <SectionTitle>
                    Пользователи
                </SectionTitle>
                <InputForm
                    type="text"
                    placeholder="Поиск"
                    style="w-[35%] border-2 border-gray bg-transparent"
                />
                <AddButton onClick={handleRegisterUser}>
                    Cоздать
                </AddButton>
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
