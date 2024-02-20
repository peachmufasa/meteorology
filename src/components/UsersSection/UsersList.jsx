import UserItem from "./UserItem.jsx";
import CustomPagination from "../ReusableComponents/CustomPagination.jsx";
import {usersMockup} from "../../api/userData.jsx";
import {useState} from "react";

const UsersList = ({onUserEdit, users}) => {

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    return <div className="flex flex-col items-center justify-between">
        <ul className="w-[100%] overflow-y-auto">
            {currentUsers.map(user => <li key={user.id}><UserItem onEditUser={onUserEdit} user={user}/></li>)}
        </ul>
        <div className="absolute bottom-10">
            <CustomPagination
                pageCount={Math.ceil(users.length / itemsPerPage)}
                onPageChange={handlePaginationChange}
            />
        </div>
    </div>
}

export default UsersList;