import JournalSection from "../components/sections/JournalSection.jsx";
import BufferSection from "../components/sections/BufferSection.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import UsersSection from "../components/sections/adminSections/UsersSection.jsx";
import PostsSection from "../components/sections/adminSections/PostsSection.jsx";
import ServiceStatusSection from "../components/sections/adminSections/ServiceStatusSection.jsx";

export const sections = {
    "journal": { ru: "Журнал", sectionElement: <JournalSection /> },
    "buffer": { ru: "Буффер", sectionElement: <BufferSection /> },
    "stats": { ru: "Статистика", sectionElement: <StatsSection /> },
};

export const adminSections = {
    "users": { ru: "Пользователи", sectionElement: <UsersSection /> },
    "posts": { ru: "Посты", sectionElement: <PostsSection />},
    "status": { ru: "Статус сервисов", sectionElement: <ServiceStatusSection />}
};