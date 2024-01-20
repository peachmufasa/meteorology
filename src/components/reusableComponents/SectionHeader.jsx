import InputForm from "./InputForm";

const SectionHeader = ({ titleText }) => {
  return (
    <header className="flex justify-between items-center mb-7">
      <h2 className="text-4xl font-semibold tracking-widest">{titleText}</h2>
      <InputForm
        type="text"
        placeholder="Поиск"
        style="w-[35%] border-2 border-gray bg-transparent"
      />
    </header>
  );
};

export default SectionHeader;
