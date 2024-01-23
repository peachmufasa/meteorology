import SectionTitle from "../ReusableComponents/SectionTitle.jsx";
import CreateItemInputField from "../UsersSection/CreateItemInputField.jsx";


const EditPostSection = ({selectedPost, onReturn}) => {


    return (
            <div className="flex flex-col w-1/2 gap-8">
                <div className="h-[10%] px-4 py-3 flex items-center gap-5 rounded-3xl bg-secondary-dark">
                    <button
                        onClick={onReturn}
                        className="px-4 py-3 rounded-full transition-all ease-in-out hover:bg-gray/20 active:bg-gray/70">
                        <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H33" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M16 2L3 13L16 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <SectionTitle>
                        Редактирование поста
                    </SectionTitle>
                </div>
                <div
                    className="h-[90%] px-4 py-3 rounded-3xl bg-secondary-dark flex flex-col justify-center items-center gap-20">
                    <h3 className="font-medium text-3xl tracking-wide text-center">
                        {` Пост ${selectedPost.code}`}
                    </h3>
                    <form className="w-2/3 flex flex-col gap-6">
                        <CreateItemInputField
                            value={selectedPost.code}
                            name="code"
                            inputId="postCode"
                            inputType="text"
                            labelContent="Код поста"
                            labelFor="postCode"/>
                        <CreateItemInputField
                            value={selectedPost.name}
                            name="name"
                            inputId="cityName"
                            inputType="text"
                            labelContent="Название"
                            labelFor="cityName"/>
                        <CreateItemInputField
                            value={selectedPost.river}
                            name="river"
                            inputId="postRiver"
                            inputType="text"
                            labelContent="Река"
                            labelFor="postRiver"/>
                    </form>
                    <div className="flex justify-center gap-10">
                        <button className="py-5 px-10 text-2xl text-red transition-all ease-in-out hover:text-red/50">
                            Отменить
                        </button>
                        <button type="submit"
                                className="py-5 px-10 text-2xl text-perfect-blue bg-dark-gray/50 rounded-full transition-all ease-in-out hover:bg-dark-gray active:bg-gray/30">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>);
};

export default EditPostSection;
