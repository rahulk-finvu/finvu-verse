import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			setError('Please enter both email and password');
			return;
		}

		// Simulate login process
		console.log('Logging in with:', { username, password });
		setError('');
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			width="50%"
			margin={2}
			height="50%"
		>
			<Stack spacing={2}>
				<TextField
					label="Email"
					value={username}
					id="email"
					onChange={(e) => setUsername(e.target.value)}
					type="email"
					required
				/>
				<TextField
					label="Password"
					value={password}
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					required
				/>
				{error && (
					<Box color="error.main" fontSize={14}>
						{error}
					</Box>
				)}
				<Button variant="contained" type="submit">
					Login
				</Button>
			</Stack>
		</Box>
	);
};

export default LoginForm;
