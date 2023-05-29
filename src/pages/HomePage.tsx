import React from 'react';
import IntroSection from "../components/HomePage/Section/IntroSection";
import CourseSection from "../components/HomePage/Section/CourseSection";
import CategorySection from "../components/HomePage/Section/CategorySection";

const HomePage: React.FC = () => {
    return (
        <div>
            <IntroSection />
            <CourseSection />
            <CategorySection />
        </div>
    );
};

export default HomePage;
