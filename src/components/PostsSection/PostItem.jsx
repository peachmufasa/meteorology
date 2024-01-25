const PostItem = ({post, onSelected}) => {

    return (
        <div onClick={() => onSelected(post)} className="px-16 py-4 border-t-[1px] border-gray/30
        cursor-pointer transition-all ease-in-out hover:bg-dark-gray/50 active:bg-dark-gray">
            <div className="flex flex-col gap-2">
                <p className="text-xl font-medium tracking-wide">{`Пост ${post.code}`}</p>
                <span className=" text-gray text-lg font-normal">{!post.name ? '----' : post.name}</span>
                <span className="text-gray text-lg font-normal">{!post.river ? '----' : post.river}</span>
            </div>
        </div>
    );
};

export default PostItem;
