const InputForm = ({ type, placeholder, style }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${style} px-4 py-3 outline-none rounded-full border-2 border-transparent 
      text-white text-lg placeholder:text-white bg-dark-gray transition-all ease-in-out 
      hover:border-perfect-blue focus:border-perfect-blue focus:shadow-perfect-blue -[#15A1CF] focus:shadow-[0px_0px_8px_perfect-blue]`}
    ></input>
  );
};

export default InputForm;
