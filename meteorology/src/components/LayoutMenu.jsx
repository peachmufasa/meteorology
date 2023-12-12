import ProfileSymbol from "../assets/images/ProfileSymbol.png";

export const LayoutMenu = (props) => {
  const sections = ["Пользователи", "Посты", "Статус работы", "Просмотр логов"];

  return (
    <div className={"flex flex-row bg-main-dark text-white h-full"}>
      <div className={"min-w-[18.75%] bg-secondary-dark"}>
        <div
          className={
            "flex flex-col justify-between h-full gap-[4.375rem] p-[3rem]"
          }
        >
          <div className={"flex flex-row"}>
            <img
              alt={"ProfileSymbol"}
              src={ProfileSymbol}
              className="w-[7rem] h-[6rem] mix-blend-lighten rounded-full"
            />
            <div className={"flex flex-col justify-center gap-[0.875rem]"}>
              <span
                className={
                  "text-[1.5rem] leading-[1.75rem] font-roboto tracking-widest truncate"
                }
              >
                Игнат Петров
              </span>
              <span
                className={
                  "text-gray text-[1.25rem] leading-[1.438rem] font-roboto"
                }
              >
                Роль:
              </span>
            </div>
          </div>
          <div className={"flex grow flex-col gap-[2.5rem] pl-[2rem]"}>
            {sections.map((section, index) => {
              return (
                <button key={index.toString()} className={"flex"}>
                  <span
                    className={
                      "text-[1.5rem] leading-[150%] font-roboto font-normal hover:text-perfect-blue"
                    }
                  >
                    {section}
                  </span>
                </button>
              );
            })}
          </div>
          <button className={"flex justify-center items-center"}>
            <span
              className={
                "text-[1.25rem] leading-[1.438rem] font-roboto font-light tracking-widest hover:text-perfect-blue"
              }
            >
              Выйти из системы
            </span>
          </button>
        </div>
      </div>
      <div className={"w-[81.25%] bg-secondary-dark m-[5rem]"}>
        {props.children}
      </div>
    </div>
  );
};
