import React from 'react';
import { Container, Typography, Button, Box, Link } from '@mui/material';

const Support = () => {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Kiddl Support
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        We're here to help.
      </Typography>

      <Typography paragraph>
        If you have any issues or questions, feel free to reach out to us via email or phone.
      </Typography>

      <Box my={3}>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Email Support:</strong>
        </Typography>
        <Link href="mailto:joshsparkes6@gmail.com" variant="body1">
          joshsparkes6@gmail.com
        </Link>
      </Box>

      <Box my={3}>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Phone Support:</strong>
        </Typography>
        <Typography variant="body1">
          +447493291667
        </Typography>
      </Box>

     
    </Container>
  );
};

export default Support;
