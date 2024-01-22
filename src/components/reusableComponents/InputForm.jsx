const InputForm = ({ maxLength, id, type, placeholder, style, name }) => {
  return (
    <input
        name={name}
        maxLength={maxLength}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${style} px-6 py-3 outline-none rounded-full text-white text-xl placeholder:text-white transition-all ease-in-out min-h-[4.125rem] 
      `}
    />
  );
};

export default InputForm;
