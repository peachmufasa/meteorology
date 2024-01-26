import {useEffect, useState} from "react";
import AddButton from "../../components/ReusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import UsersList from "../../components/UsersSection/UsersList.jsx";
import EditUserSection from "../../components/UsersSection/EditUserSection.jsx";
import {useDebounce} from "../../hooks/useDebounce.jsx";
import userStore from "../../store/userStore.js";


const UsersSection = () => {

    const getAllUsers = userStore(state => state.getAllUsers)
    // const findUsers = postStore(state => state.findPosts)

    const [users, setUsers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 500)

    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);
    const [isEditUserOn, setIsEditUserOn] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)


    const handleRegisterClose = () => {
        setIsRegisterUserOn(false)
    }

    const handleEditClose = () => {
        setIsEditUserOn(false)
    }

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleRegisterUser = () => {
        setIsRegisterUserOn(true);
    }

    const handleEditUser = (user) => {
        setIsEditUserOn(true)
        setSelectedUser(user)
    }

    useEffect(() => {
        // if ((searchValue === debouncedSearchValue) && (searchValue !== '')) {
        //     findUsers(debouncedSearchValue).then(resp => setUsers(resp ?? []))
        // } else {
            getAllUsers().then(resp => setUsers(resp ?? []))
        // }
    }, [getAllUsers, debouncedSearchValue])

    if (isRegisterUserOn) {
        return <CreateUserSection handleClose={handleRegisterClose}/>
    } else if (isEditUserOn) {
        return <EditUserSection handleClose={handleEditClose} selectedUser={selectedUser}/>
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
                         value={searchValue}
                        onChange={handleSearchValueChange}
                        className="input-search w-[35%] px-6 py-4 text-2xl"
                    />
                <AddButton onClick={handleRegisterUser}>
                    Cоздать
                </AddButton>
            </header>
            <UsersList onUserEdit={handleEditUser} users={users}/>
        </div>
    )
}

export default UsersSection;
