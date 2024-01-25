import {useState} from "react";
import SectionTitle from "../../components/ReusableComponents/SectionTitle.jsx";
import AddButton from "../../components/ReusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import InputForm from "../../components/ReusableComponents/InputForm.jsx";
import UsersList from "../../components/UsersSection/UsersList.jsx";
import EditUserSection from "../../components/UsersSection/EditUserSection.jsx";
import DropdownMenu from "../../components/ReusableComponents/DropdownMenu.jsx";


const UsersSection = () => {
    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);
    const [isEditUserOn, setIsEditUserOn] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const handleRegisterUser = () => {
        setIsRegisterUserOn(true);
    }

    const handleEditUser = (user) => {
        setIsEditUserOn(true)
        setSelectedUser(user)
    }


    if (isRegisterUserOn) {
        return <CreateUserSection/>
    } else if (isEditUserOn) {
        return <EditUserSection selectedUser={selectedUser}/>
    }
    return (
        <div className="px-20 py-10">
            <header className="flex justify-between items-center mb-6 w-full">
                <SectionTitle>
                    Пользователи
                </SectionTitle>
                <div className="w-[40%] flex gap-4 items-center">
                    <InputForm
                        type="text"
                        placeholder="Поиск"
                        style="w-[90%] border-2 border-gray bg-transparent"
                    />
                    <DropdownMenu option1={"Все"} option2={"Имя"} option3={"Пост"} option4={"Роль"}
                    />
                </div>
                <AddButton onClick={handleRegisterUser}>
                    Cоздать
                </AddButton>
            </header>
            <UsersList onUserEdit={handleEditUser}/>
        </div>
    )
}

export default UsersSection;
