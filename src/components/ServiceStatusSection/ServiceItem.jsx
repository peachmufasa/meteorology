import ServiceStatusIcon from "./ServiceStatusIcon.jsx";


const ServiceItem = ({service}) => {
    return (
        <div className="px-16 py-10 flex justify-between items-center  border-t-[1px] border-gray/30">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium tracking-wide">{service.name}</p>
            </div>
            <div className="flex gap-3 items-center">
                <span className="text-gray text-xl">Cтатус работы:</span>
                <ServiceStatusIcon curStatus={service.status} />
            </div>
        </div>
    );
};

export default ServiceItem;
