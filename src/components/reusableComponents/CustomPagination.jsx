import { styled } from "@mui/system";
import Pagination from "@mui/material/Pagination";

const StyledPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
        color: 'white',
        fontSize: "20px",
    },
    '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#1A96BE', // замените 'your_selected_color' на цвет вашего выбранного фона
    },
});
const CustomPagination = ({pageCount, onPageChange}) => {
    return (
        <StyledPagination
            count={pageCount}
            onChange={onPageChange}
        />
    );
}

export default CustomPagination