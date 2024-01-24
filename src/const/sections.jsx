import JournalSection from "../sections/JournalSection.jsx";
import BufferSection from "../sections/BufferSection.jsx";
import StatsSection from "../sections/StatsSection.jsx";
import UsersSection from "../sections/adminSections/UsersSection.jsx";
import PostsSection from "../sections/adminSections/PostsSection.jsx";
import ServiceStatusSection from "../sections/adminSections/ServiceStatusSection.jsx";

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