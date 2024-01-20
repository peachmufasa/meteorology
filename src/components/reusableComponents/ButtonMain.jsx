const ButtonMain = ({ children, style }) => {
  return (
    <button
      className={`${style} px-4 py-3 text-white text-xl font-bold transition-all ease-in-out 
      bg-perfect-blue outline-none rounded-full hover:bg-perfect-blue-hover active:bg-perfect-blue-active`}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
