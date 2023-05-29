import { Box } from '@mui/material';
import HomeText from "../HomeText";

const IntroSection: React.FC = () => {
    return (
        <Box bgcolor="#1f2437" color="white" minHeight={'395px'} height={'485px'} display="flex" justifyContent="center" alignItems="center">
            <Box width={1260} padding={'90px 126px 75px'}>
                <HomeText title={"부동산 특화 맞춤형 <br/>교육 코스"} subtitle={"부동산 융합 아카데미는 다양한 부동산 관련 교육을 제공합니다.<br/>로드맵을 확인하고, 강의를 검색해보세요!"}></HomeText>
            </Box>
        </Box>
    );
};

export default IntroSection;
