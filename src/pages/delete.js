import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:joshsparkes6@gmail.com?subject=Data Deletion Request&body=From: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
    setSuccess(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" align="center">
        Data Deletion Request
      </Typography>
      {success ? (
        <Typography align="center">
          Your request has been prepared. Please check your email client to send
          it.
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="message"
            label="Message (optional)"
            name="message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Prepare Request
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default DeleteAccount;
