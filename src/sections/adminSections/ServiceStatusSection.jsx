import SectionTitle from "../../components/ReusableComponents/SectionTitle.jsx";
import ServiceList from "../../components/ServiceStatusSection/ServiceList.jsx";


const ServiceStatusSection = () => {
    return (
        <div className="px-20 py-10">
            <header className="h-[66px] flex items-center mb-6 w-full">
                <SectionTitle>
                    Статус сервисов
                </SectionTitle>
            </header>
            <ServiceList/>
        </div>
    );
};

export default ServiceStatusSection;
