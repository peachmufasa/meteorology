import {useState} from "react";
import SectionTitle from "../../components/reusableComponents/SectionTitle.jsx";
import AddButton from "../../components/reusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import InputForm from "../../components/reusableComponents/InputForm.jsx";
import UsersList from "../../components/UsersSection/UsersList.jsx";


const UsersSection = () => {
    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);
    const handleRegisterUser = () => {
        setIsRegisterUserOn(!isRegisterUserOn);
    }

    if (isRegisterUserOn) {
        return <CreateUserSection/>
    }
    return (
        <div>
            <header className="flex justify-between items-center mb-7 w-full">
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
            <UsersList />
        </div>
    )
}

export default UsersSection;
