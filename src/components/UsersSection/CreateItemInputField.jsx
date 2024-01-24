import InputForm from "../ReusableComponents/InputForm.jsx";

const CreateItemInputField = ({labelFor, labelContent ,inputId, inputType, maxLength, name, value}) => {
    return <div className="flex flex-col gap-3 justify-center">
        <label htmlFor={labelFor} className="px-6 text-[1.25rem]">{labelContent}</label>
        <InputForm value={value} name={name} id={inputId} type={inputType} maxLength={maxLength} style="bg-dark-gray hover:bg-gray focus:bg-gray/50"/>
    </div>
}

export default CreateItemInputField;