const InputForm = ({ maxLength, id, type, placeholder, style }) => {
  return (
    <input
        maxLength={maxLength}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${style} px-4 py-3 outline-none rounded-full text-white text-lg placeholder:text-white transition-all ease-in-out min-h-[4.125rem] 
      `}
    />
  );
};

export default InputForm;
