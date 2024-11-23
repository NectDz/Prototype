import React, { useState, FormEvent } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  InputAdornment,
} from "@mui/material";
import {
  Person,
  Email,
  Subject as SubjectIcon,
  Message,
} from "@mui/icons-material";

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [discordUsername, setDiscordUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      discordUsername,
      subject,
      body,
    });
  };

  return (
    <Card
      sx={{
        padding: 4,
        margin: "auto",
        maxWidth: 800,
        borderRadius: 4,
        border: 2,
        borderColor: "#4d2e91",
        backgroundColor: "white",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="School Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Discord Username */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Discord Username (optional)"
                value={discordUsername}
                onChange={(e) => setDiscordUsername(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Subject */}
            <Grid item xs={12}>
              <TextField
                required
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SubjectIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Body */}
            <Grid item xs={12}>
              <TextField
                required
                label="Message"
                multiline
                rows={8}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ alignSelf: "flex-start", mt: 1 }}
                    >
                      <Message color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Submit Button */}
            <Grid item xs={12} sm={3}>
              <Button
                type="submit"
                variant="outlined"
                color="inherit"
                fullWidth
                sx={{
                  mt: 2,
                  borderColor: "#4d2e91",
                  color: "#4d2e91",
                  "&:hover": {
                    backgroundColor: "#4d2e91",
                    color: "white",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
