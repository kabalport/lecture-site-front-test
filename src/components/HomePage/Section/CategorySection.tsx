import { Box, Typography } from '@mui/material';
import MoreButton from "../../Button/CustomButton";

const CategorySection: React.FC = () => {
    return (
        <Box bgcolor="#f9f9f9" display="flex" justifyContent="center" alignItems="center" color="black" minHeight={'395px'} height={'825.38px'}>
            <Box width={1260} padding={'90px 126px 75px'}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4">다양한 카테고리의 부동산교육 강의를 만나보세요.</Typography>
                    <MoreButton buttonText="강의 더보기" buttonColor="white" buttonBgColor="#1F2437" iconColor="yellow" />
                </Box>
                {/* other contents... */}
            </Box>
        </Box>
    );
};

export default CategorySection;
