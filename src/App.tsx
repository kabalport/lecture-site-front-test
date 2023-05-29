import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import MenuBar from './layout/MenuBar';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

import { createMuiTheme, ThemeProvider } from '@mui/material/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Roboto", "Noto Sans KR", sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
                    <Route path="/about" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <>
        <Header />
        <MenuBar />
        {children}
        <Footer />
    </>
);

export default App;
