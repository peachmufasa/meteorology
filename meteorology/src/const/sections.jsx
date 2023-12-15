import UsersSection from "../components/UsersSection.jsx";
import PostsSection from "../components/PostsSection.jsx";
import WorkStatusSection from "../components/WorkStatusSection.jsx";
import LogsSection from "../components/LogsSection.jsx";

export const sections = {
    "users": { ru: "Пользователи", sectionElement: <UsersSection /> },
    "posts": { ru: "Посты", sectionElement: <PostsSection /> },
    "workstatus": { ru: "Статус работы", sectionElement: <WorkStatusSection /> },
    "logs": { ru: "Просмотр логов", sectionElement: <LogsSection /> },
};