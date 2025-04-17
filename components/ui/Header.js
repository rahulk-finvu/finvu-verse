import { Box, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Header = () => {
	return (
		<Box elevation={2} sx={{ justifyItems: 'left', width: '100%' }}>
			<Image src="/finvu.svg" width={100} height={100} alt="Finvu logo"></Image>
		</Box>
	);
};

export default Header;
