

const CreateItemInputField = ({labelFor, labelContent ,inputId, inputType, maxLength, name, value, onChange}) => {
    return <div className="flex flex-col gap-3 justify-center">
        <label htmlFor={labelFor} className="px-6 text-[1.25rem]">{labelContent}</label>
        <input onChange={onChange}
               value={value}
               name={name}
               id={inputId}
               type={inputType}
               maxLength={maxLength}
               className="input-create-edit-item px-6 py-3 text-xl min-h-[4.125rem] placeholder:text-gray"
        />
    </div>
}

export default CreateItemInputField;