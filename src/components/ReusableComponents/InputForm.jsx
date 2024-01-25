const InputForm = ({ maxLength, id, type, placeholder, style, name, value, onChange }) => {
  return (
    <input
        value={value}
        name={name}
        maxLength={maxLength}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${style} px-6 py-3 outline-none rounded-full text-white text-xl placeholder:text-grey transition-all ease-in-out min-h-[4.125rem] 
      `}
    />
  );
};

export default InputForm;
