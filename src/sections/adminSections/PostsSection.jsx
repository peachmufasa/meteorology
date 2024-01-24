import SectionTitle from "../../components/ReusableComponents/SectionTitle.jsx";
import InputForm from "../../components/ReusableComponents/InputForm.jsx";
import AddButton from "../../components/ReusableComponents/AddButton.jsx";
import PostsList from "../../components/PostsSection/PostsList.jsx";
import {useState} from "react";
import EditPostSection from "../../components/PostsSection/EditPostSection.jsx";

const sectionInitialStyle = "px-20 py-10"
const sectionUpdatedStyle = "px-20 py-10 bg-main-dark"

const PostsSection = () => {
    const [selectedPost, setSelectedPost] = useState(null)


    const handleSelection = (post) => {
        setSelectedPost(post)
    }

    const setSelectedNull = () => {
        setSelectedPost(null)
    }


    return (
        <div className={selectedPost === null ? "" : "bg-main-dark flex gap-8 h-full"}>
            {selectedPost && <EditPostSection selectedPost={selectedPost} onReturn={setSelectedNull}/>}
            <div className={selectedPost != null ? "w-1/2 bg-secondary-dark rounded-3xl px-10 py-4" : "px-20 py-10"}>
                <header className={selectedPost === null ? "flex justify-between items-center mb-6 w-full" : "flex justify-between items-center mb-3 w-full"}>
                    <SectionTitle>
                        Список постов
                    </SectionTitle>
                    {selectedPost === null ? <InputForm
                        type="text"
                        placeholder="Поиск"
                        style="w-[35%] border-2 border-gray bg-transparent"
                    /> : ""}
                    <AddButton>
                        Cоздать
                    </AddButton>
                </header>
                {selectedPost && <InputForm
                    type="text"
                    placeholder="Поиск"
                    style="w-[100%] mb-5 border-2 border-gray bg-transparent"
                />}
                <PostsList onSelected={handleSelection}/>
            </div>
        </div>)


};

export default PostsSection;

// <EditPostSection selectedPost={selectedPost} onReturn={setSelectedNull}/>
