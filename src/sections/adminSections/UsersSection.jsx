import {useState} from "react";
import AddButton from "../../components/ReusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import UsersList from "../../components/UsersSection/UsersList.jsx";
import EditUserSection from "../../components/UsersSection/EditUserSection.jsx";


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
                <h2 className="section-title">
                    Пользователи
                </h2>
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="input-search w-[35%] px-6 py-4 text-2xl"
                    />
                <AddButton onClick={handleRegisterUser}>
                    Cоздать
                </AddButton>
            </header>
            <UsersList onUserEdit={handleEditUser}/>
        </div>
    )
}

export default UsersSection;
