import React, { ReactNode } from 'react';
import {Button, Box, TextField, Link, AppBar, Toolbar} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/REFA_WHITE_LOGO.png';


interface AuthLinkProps {
    to: string;
    children: ReactNode;
}

const AuthLink: React.FC<AuthLinkProps> = ({ to, children }) => (
    <Link component={RouterLink} to={to} variant="body2">
        {children}
    </Link>
);

const LoginPage: React.FC = () => {
    return  (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <AppBar position="absolute">
                <Toolbar>
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                </Toolbar>
            </AppBar>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Sign In
            </Button>
            <Box mt={3} display="flex" justifyContent="space-between" width="100%">
                <AuthLink to="/find-id">Forgot ID?</AuthLink>
                <AuthLink to="/find-password">Forgot Password?</AuthLink>
            </Box>
            <Box mt={3}>
                <AuthLink to="/register">{"Don't have an account? Sign Up"}</AuthLink>
            </Box>
            <Box mt={3}>
                <AuthLink to="/">Back to Home</AuthLink>
            </Box>
        </Box>
    );
};

export default LoginPage;
