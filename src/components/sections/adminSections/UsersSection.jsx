import SectionHeader from "../../reusableComponents/SectionHeader";
import UserItem from "../../reusableComponents/userItem";

const UsersSection = () => {
  return (
    <div className="">
      <SectionHeader titleText="Пользователи" />
      <ul>
        <li>
          <UserItem
            fullName="Фамилия Имя Отчество"
            position="должность"
            role="роль"
          />
        </li>
      </ul>
    </div>
  );
};

export default UsersSection;
