import {Box, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';
import MoreButton from "../../Button/CustomButton";
import HomeText from "../HomeText";

const CourseSection: React.FC = () => {
    // 임시로 사용될 인기 강의 데이터
    const course= [
        { title: "인재양성팀 특별 교육 과정", subTitle: "모집기간 : 2022년 11월 30일 모집인원 9,999명 인재양성팀 특별 교육 과정에서는 인재양성을 위한 특별한 교육 과정을 제공합니다.", total: 5, agree: 2, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "AI 모델링과 컴퓨터비전 기초", subTitle: "", total: 1, agree: 12, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "준비중", subTitle: "", total: 5, agree: 2, startDate:'2022-11-23', endDate:'2022-11-30' },
    ];


    return (
        <Box bgcolor="#0080ff" display="flex" justifyContent="center" alignItems="center" color="white" minHeight={'395px'} height={'825.38px'}>
            <Box width={1260} padding={"0px 126px"} paddingTop={'80px'}>
                <Box display="flex" justifyContent="space-between" alignItems="center">

                    <HomeText title={"부동산교육 전문 코스들을<br/>만나보세요."}></HomeText>
                    <MoreButton buttonText="과정 더보기" buttonColor="white" buttonBgColor="#1F2437" iconColor="yellow" />
                </Box>
                {/* courses mapping... */}
                <Grid container spacing={4}>
                    {course.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card style={{borderRadius: "20px 20px 20px 20px"}}>
                                <CardMedia
                                    component="img"
                                    height="220px"
                                    image="https://images.unsplash.com/photo-1685029736462-5c091106a37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80.jpg" // replace with the actual path to your image
                                    alt={course.title}
                                    style={{
                                        left: "0px",
                                        right: "3.33px",
                                        top: "0px",
                                        borderRadius: "20px 20px 0px 0px",
                                        background: "#D3D3D3",
                                    }}
                                />
                                <CardContent
                                    style={{
                                        left: "0px",
                                        height: "226px",
                                        right: "3.33px",
                                        top: "220px",
                                        borderRadius: "0px 0px 20px 20px",
                                        background: "#ffffff",
                                    }}
                                >

                                    <Typography variant="h6">{course.title}</Typography>
                                    <Typography variant="body2">{course.subTitle}</Typography>
                                    <Typography variant="body2">총 {course.total} 강의</Typography>
                                    <Typography variant="body2">교육인정 {course.agree}시간</Typography>
                                    <Typography variant="body2">수강기간 {course.startDate} ~ {course.endDate}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CourseSection;
