import ProfileSymbol from "../assets/images/ProfileSymbol.png";
import { Link, Outlet } from "react-router-dom";
import { adminSections, sections } from "../const/sections.jsx";

const sectionButton = (title, titleRU, index) => {
  return (
    <div key={index.toString()} className={"flex"}>
      <Link to={`/section/${title}`}>
        <span className="text-[1.5rem] leading-[150%] font-roboto font-normal transition-all ease-in-out hover:text-perfect-blue">
          {titleRU}
        </span>
      </Link>
    </div>
  );
};

export const LayoutMenu = () => {
  const adminRole = true; //placeholder

  return (
    <div className={"flex flex-row justify-between bg-main-dark text-white h-full"}>
      <div className={"basis-1/5 shrink-0 min-w-[350px] bg-secondary-dark"}>
        <div
          className={
            "flex flex-col justify-between h-full px-[2rem] py-[3rem]"
          }
        >
          <div className={"flex flex-row mb-[4.375rem]"}>
            <img
              alt={"ProfileSymbol"}
              src={ProfileSymbol}
              className="w-[5rem] h-[4rem] mix-blend-lighten rounded-full"
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
            {adminRole &&
              Object.keys(adminSections).map((key, index) =>
                sectionButton(key, adminSections[key].ru, index)
              )}
            {Object.keys(sections).map((key, index) =>
              sectionButton(key, sections[key].ru, index)
            )}
          </div>
          <button className={"flex justify-center items-center"}>
            <Link to={"/"}>
              <span
                className={
                  "text-[1.25rem] leading-[1.438rem] font-roboto font-light tracking-widest transition-all ease-in-out hover:text-red"
                }
              >
                Выйти из системы
              </span>
            </Link>
          </button>
        </div>
      </div>
      <div
        className={
          "basis-4/5 min-w-[1050px] bg-secondary-dark m-[60px] rounded-[32px] relative"
        }
      >
        <Outlet />
      </div>
    </div>
  );
};
