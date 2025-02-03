import React from "react";
import { Box, Button, TextField, Typography, Container, Grid, useTheme } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const Login = () => {
    const theme = useTheme();
    const handleSubmit = (values: { email: string; password: string }) => {
        console.log("Form submitted with values: ", values);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: theme.palette.primary.main,
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" color={theme.palette.primary.dark} gutterBottom>
                    Login
                </Typography>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form style={{ width: "100%" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    color="primary"
                                    autoComplete="email"
                                // helperText="Email"
                                // helperText={<ErrorMessage name="email" />}
                                // error={Boolean(<ErrorMessage name="email" />)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    color="primary"
                                    autoComplete="current-password"
                                // helperText={<ErrorMessage name="password" />}
                                // error={Boolean(<ErrorMessage name="password" />)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginTop: 2 }}
                                >
                                    Log In
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Box>
        </Container>
    );
};
