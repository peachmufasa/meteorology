
import CreateItemInputField from "../UsersSection/CreateItemInputField.jsx";
import {useState} from "react";
import postStore from "../../store/postStore.js";

const MyComponent = ({ onReturn}) => {
    const addPost = postStore(state => state.addPost)

    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [river, setRiver] = useState('')
    const [warningMessage, setWarningMessage] = useState(null)

    const handleSumbit = () => {
        const post = {
            code,
            id: "",
            name,
            river
        }
        addPost(post).then(() => setWarningMessage(null)).catch(() => setWarningMessage('Warning'))
    }

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
                <h2 className="section-title">
                    Создать пост
                </h2>
            </div>
            <div
                className="h-[90%] px-4 py-3 rounded-3xl bg-secondary-dark flex flex-col justify-evenly items-center">
                <form className="w-2/3 flex flex-col gap-6">
                    <CreateItemInputField
                        name="code"
                        inputId="postCode"
                        inputType="text"
                        labelContent="Код поста"
                        labelFor="postCode"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}/>
                    <CreateItemInputField
                        name="name"
                        inputId="cityName"
                        inputType="text"
                        labelContent="Название"
                        labelFor="cityName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <CreateItemInputField
                        name="river"
                        inputId="postRiver"
                        inputType="text"
                        labelContent="Река"
                        labelFor="postRiver"
                        value={river}
                        onChange={(e) => setRiver(e.target.value)}/>
                </form>
                <span className='text-red'>{warningMessage != null ? warningMessage : ''}</span>
                <div className="flex justify-center gap-10">
                    <button type="submit"
                            onClick={handleSumbit}
                            className="py-5 px-10 text-2xl text-perfect-blue bg-dark-gray/50 rounded-full transition-all ease-in-out hover:bg-dark-gray active:bg-gray/30">
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
