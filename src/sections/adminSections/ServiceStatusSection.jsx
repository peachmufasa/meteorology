
import ServiceList from "../../components/ServiceStatusSection/ServiceList.jsx";


const ServiceStatusSection = () => {
    return (
        <div className="px-20 py-10">
            <header className="h-[66px] flex items-center mb-6 w-full">
                <h2 className="section-title">
                    Статус сервисов
                </h2>
            </header>
            <ServiceList/>
        </div>
    );
};

export default ServiceStatusSection;
