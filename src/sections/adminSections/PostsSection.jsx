
import AddButton from "../../components/ReusableComponents/AddButton.jsx";
import PostsList from "../../components/PostsSection/PostsList.jsx";
import {useEffect, useState} from "react";
import EditPostSection from "../../components/PostsSection/EditPostSection.jsx";
import AddPostSection from "../../components/PostsSection/AddPostSection.jsx";
import postStore from "../../store/postStore.js";
import {useDebounce} from "../../hooks/useDebounce.jsx";

const PostsSection = () => {
    const getAllPosts = postStore(state => state.getAllPosts)
    const findPosts = postStore(state => state.findPosts)

    const [selectedPost, setSelectedPost] = useState(null)
    const [isCreatePostSectionOn, setIsCreatePostSectionOn] = useState(false)
    const [posts, setPosts] = useState([])

    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 500)

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSelection = (post) => {
        setSelectedPost(post)
        setIsCreatePostSectionOn(false)
    }

    const setSelectedNull = () => {
        setSelectedPost(null)
    }

    const handleCreatePost = () => {
        setIsCreatePostSectionOn(true)
        setSelectedPost(null)
    }

    const handleCloseCreatePost = () => {
        setIsCreatePostSectionOn(false)
    }

    useEffect(() => {
        if ((searchValue === debouncedSearchValue) && (searchValue !== '')) {
            findPosts(debouncedSearchValue).then(resp => setPosts(resp))
        } else {
            getAllPosts().then(resp => setPosts(resp))
        }
    }, [getAllPosts, debouncedSearchValue, findPosts])

    return (
        <div className={isCreatePostSectionOn === false && selectedPost === null ? "" : "bg-main-dark flex gap-8 h-full"}>
            {selectedPost && <EditPostSection selectedPost={selectedPost} onReturn={setSelectedNull}/>}
            {isCreatePostSectionOn && <AddPostSection onReturn={handleCloseCreatePost} />}
            <div className={selectedPost != null || isCreatePostSectionOn === true  ? "w-1/2 bg-secondary-dark rounded-3xl px-10 py-4" : "px-20 py-10"}>
                <header
                    className={selectedPost === null || isCreatePostSectionOn === false ? "flex justify-between items-center mb-6 w-full" : "flex justify-between items-center mb-3 w-full"}>
                    <h2 className="section-title">
                        Посты
                    </h2>
                    {selectedPost === null && isCreatePostSectionOn === false ?
                        <input
                            type="text"
                            placeholder="Поиск"
                            value={searchValue}
                            onChange={handleSearchValueChange}
                            className="input-search w-[35%] px-6 py-4 text-2xl"
                        />
                        : ""}
                    <AddButton disabled={isCreatePostSectionOn && true} onClick={handleCreatePost}>
                        Cоздать
                    </AddButton>
                </header>
                {selectedPost != null || isCreatePostSectionOn === true ? <input
                    type="text"
                    placeholder="Поиск"
                    value={searchValue}
                    onChange={handleSearchValueChange}
                    className="input-search w-[35%] px-6 py-4 text-2xl"
                /> : ""}
                {searchValue === debouncedSearchValue ? <PostsList onSelected={handleSelection} posts={posts}/> :
                    <h1 className="">Загрузка...</h1>}
            </div>
        </div>)


};

export default PostsSection;

// <EditPostSection selectedPost={selectedPost} onReturn={setSelectedNull}/>
