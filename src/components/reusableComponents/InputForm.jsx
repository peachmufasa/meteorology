const InputForm = ({ type, placeholder, style }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${style} px-4 py-3 outline-none rounded-full text-white text-lg placeholder:text-white transition-all ease-in-out 
      `}
    ></input>
  );
};

export default InputForm;
