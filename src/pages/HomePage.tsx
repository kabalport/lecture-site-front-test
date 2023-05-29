import React from 'react';
import {Box, Typography, Button, Grid, Card, CardContent, Avatar, CardMedia} from '@mui/material';
import HomePageIntro from "../components/HomePage/HomePageIntro";

const HomePage: React.FC = () => {

    const course= [
        { title: "인재양성팀 특별 교육 과정", subTitle: "모집기간 : 2022년 11월 30일 모집인원 9,999명 인재양성팀 특별 교육 과정에서는 인재양성을 위한 특별한 교육 과정을 제공합니다.", total: 5, agree: 2, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "AI 모델링과 컴퓨터비전 기초", subTitle: "", total: 1, agree: 12, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "준비중", subTitle: "", total: 5, agree: 2, startDate:'2022-11-23', endDate:'2022-11-30' },
    ];

    // 임시로 사용될 인기 강의 데이터
    const courses = [
        { title: "부동산 기초 이해", instructor: "김OO", rating: 5 },
        { title: "부동산 투자 전략", instructor: "박OO", rating: 4.5 },
        { title: "부동산 시장 분석", instructor: "이OO", rating: 4.7 }
    ];

    // 임시로 사용될 팀 멤버 데이터
    const teamMembers = [
        { name: "김OO", role: "CEO" },
        { name: "박OO", role: "CTO" },
        { name: "이OO", role: "COO" }
    ];

    return (
        <Box>
            <Box bgcolor="#1f2437">
            <Box color={"white"}  minHeight={'395px'} height={'485px'}  display="flex" justifyContent="center" alignItems="center">
                <Box width={1260} padding={'90px 126px 75px'}  >
                    <HomePageIntro
                        title="부동산 특화 맞춤형<br/>특화 코스"
                        subtitle="부동산 융합 아카데미는 다양한 부동산 관련 교육을 제공합니다.<br/>로드맵을 확인하고, 강의를 검색해보세요!"
                    />
                </Box>
            </Box>
            </Box>

            <Box bgcolor="#0080ff" display="flex" justifyContent="center" alignItems="center">
                <Box color={"white"}  style={{margin: "auto"}}  minHeight={'395px'} height={'825.38px'} >
                    <Box width={1260} padding={"0px 126px"} paddingTop={'80px'} >
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <HomePageIntro
                                title="부동산교육 전문 코스들을<br/>만나보세요."
                            />
                            <Button
                                style={{
                                    width: "190.5px",
                                    height: "34px",
                                    color: "white",
                                    backgroundColor: "#1F2437",
                                    borderRadius: "28px",
                                    padding: "6px 40px",
                                }}
                            >
                                강의 더보기
                            </Button>
                        </Box>

                        <Typography variant="h4" gutterBottom></Typography>
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
            </Box>



            <Box bgcolor="#f9f9f9" display="flex" justifyContent="center" alignItems="center">
                <Box color={"black"}  style={{margin: "auto"}}  minHeight={'395px'} height={'825.38px'} >
                    <Box width={1260}padding={'90px 126px 75px'} >
            <Typography variant="h4" gutterBottom ></Typography>
                <Typography variant="h4" gutterBottom ></Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" padding={'90px 126px 75px'}>
                            <HomePageIntro
                                title="다양한 카테고리의<br/>부동산교육 강의를 만나보세요."
                                subtitle="관심있는 부동산 교육 카테고리를 선택해보세요."
                            />
                            <Button
                            style={{
                                width: "190.5px",
                                height: "34px",
                                color: "white",
                                transform: "translateY(-50%)",
                                backgroundColor: "#1F2437",
                                borderRadius: "28px",
                                padding: "6px 40px",
                            }}
                            >강의 더보기</Button>
                        </Box>

        </Box>
        </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
