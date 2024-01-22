import {useState} from "react";
import {usersMockup} from "../../api/userData.jsx";
import SectionTitle from "../../components/reusableComponents/SectionTitle.jsx";
import AddButton from "../../components/reusableComponents/AddButton.jsx";
import CreateUserSection from "../../components/UsersSection/CreateUserSection.jsx";
import InputForm from "../../components/reusableComponents/InputForm.jsx";
import UserItem from "../../components/UsersSection/UserItem.jsx";
import {Pagination} from "@mui/material";
import CustomPagination from "../../components/reusableComponents/CustomPagination.jsx";


const UsersSection = () => {
    const users = usersMockup; // По факту осталось только юзеров закинуть в эту переменную

    const [page, setPage] = useState(1);
    const [isRegisterUserOn, setIsRegisterUserOn] = useState(false);
    const handleRegisterUser = () => {
        setIsRegisterUserOn(!isRegisterUserOn);
    }
    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    if (isRegisterUserOn) {
        return <CreateUserSection/>
    }
    return (
        <div className="flex flex-col items-center">
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
            <ul className="max-h-[42rem] w-full overflow-y-auto">
                <li>
                    {currentUsers.map(user => <UserItem user={user} key={user.fullName}/>)}
                </li>
            </ul>
            <CustomPagination
                pageCount={Math.ceil(users.length / itemsPerPage)}
                onPageChange={handlePaginationChange}
            />
        </div>
    )
}

export default UsersSection;
