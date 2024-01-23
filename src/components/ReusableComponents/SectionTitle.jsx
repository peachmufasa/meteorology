
const SectionTitle = ({ children, style }) => {
  return (
      <h2 className={`${style} min-w-[25%] text-4xl font-semibold tracking-widest 
      `}>{children}</h2>
  );
};

export default SectionTitle;
