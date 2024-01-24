import CustomPagination from "../ReusableComponents/CustomPagination.jsx";
import {useState} from "react";
import {postsMockup} from "../../api/postData.jsx";
import PostItem from "./PostItem.jsx";

const PostsList = ({onSelected}) => {
    const posts = postsMockup;

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="flex flex-col items-center">
            <ul className="max-h-[42rem] w-full overflow-y-auto mb-4">
                {currentPosts.map(post => <li key={post.id}><PostItem post={post} onSelected={onSelected}/></li>)}
            </ul>
            <CustomPagination
                pageCount={Math.ceil(posts.length / itemsPerPage)}
                onPageChange={handlePaginationChange}
            />
        </div>
    );
};

export default PostsList;
