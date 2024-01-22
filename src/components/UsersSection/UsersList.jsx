import UserItem from "./UserItem.jsx";
import CustomPagination from "../reusableComponents/CustomPagination.jsx";
import {usersMockup} from "../../api/userData.jsx";
import {useState} from "react";

const UsersList = () => {
    const users = usersMockup;

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    return <div className="flex flex-col items-center">
        <ul className="max-h-[42rem] w-full overflow-y-auto">
                {currentUsers.map(user => <li key={user.fullName}><UserItem user={user}/></li>)}
        </ul>
        <CustomPagination
            pageCount={Math.ceil(users.length / itemsPerPage)}
            onPageChange={handlePaginationChange}
        />
    </div>
}

export default UsersList;