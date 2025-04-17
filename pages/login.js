import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import LoginForm from '@/components/ui/LoginForm';
import Stack from '@mui/material/Stack';
import React from 'react';

function Login() {
	return (
		<Stack spacing={4} margin={2} sx={{ placeItems: 'center', height: '100%' }}>
			<Header />
			<LoginForm></LoginForm>
			<Footer />
		</Stack>
	);
}

export default Login;
