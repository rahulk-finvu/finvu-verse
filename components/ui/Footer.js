import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Stack direction="row" justifyContent="space-between">
				<Box>
					<Typography>© Made with love by Team Finvu</Typography>
				</Box>
				<Stack direction="row">
					<Typography mr={2}>Terms and Conditions</Typography>
					<Typography mr={2}>Privacy Policy</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Footer;
