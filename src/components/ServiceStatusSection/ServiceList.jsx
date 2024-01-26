
import {useState} from "react";
import CustomPagination from "../ReusableComponents/CustomPagination.jsx";
import ServiceItem from "./ServiceItem.jsx";

const ServiceList = () => {
    const services = [{"name":"service1", "id":"11111", "status":"on"}, {"name":"service2", "id":"22222", "status":"on"}, {"name":"service3", "id":"33333", "status":"off"}];

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

    return <div className="flex flex-col items-center justify-between">
        <ul className="h-[42rem] w-full overflow-y-auto">
            {currentServices.map(service => <li key={service.id}><ServiceItem service={service} /></li>)}
        </ul>
        <CustomPagination
            pageCount={Math.ceil(services.length / itemsPerPage)}
            onPageChange={handlePaginationChange}
        />
    </div>
};

export default ServiceList;
