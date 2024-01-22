import InputForm from "./InputForm.jsx";

const CreateUserInputField = ({labelFor, labelContent ,inputId, inputType, maxLength}) => {
    return <div className="flex flex-col gap-3 justify-center">
        <label htmlFor={labelFor} className="px-6 text-[1.25rem]">{labelContent}</label>
        <InputForm id={inputId} type={inputType} maxLength={maxLength} style="bg-dark-gray hover:bg-gray focus:bg-gray/50"/>
    </div>
}

export default CreateUserInputField;