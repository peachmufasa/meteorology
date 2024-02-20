import CustomPagination from "../ReusableComponents/CustomPagination.jsx";
import {useState} from "react";
import PostItem from "./PostItem.jsx";

const PostsList = ({onSelected, posts}) => {
    const [page, setPage] = useState(1);

    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="flex flex-col items-center justify-between">
            <ul className="w-full overflow-y-auto">
                {currentPosts.map(post => <li key={post.id}><PostItem post={post} onSelected={onSelected}/></li>)}
            </ul>
            <div className="absolute bottom-10">
                <CustomPagination
                    pageCount={Math.ceil(posts.length / itemsPerPage)}
                    onPageChange={handlePaginationChange}
                />
            </div>

        </div>
    );
};

export default PostsList;
