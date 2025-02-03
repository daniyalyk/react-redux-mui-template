import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { paths } from 'utils/constants';

export const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: 'auto',
                background: theme.palette.primary.dark,
                minHeight: '5vh',
                padding: '0 2vw',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'start' }}>
                    <Typography
                        color={theme.palette.primary.light}
                        component={"span"}
                        fontSize={{ xs: '1rem', sm: '1.2rem' }}
                        fontWeight={400}
                    >
                        Copyright © Daniyal Yahya | All rights reserved
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'end' }}>
                    <Typography
                        color={theme.palette.primary.light}
                        component={"span"}
                        fontSize={{ xs: '1rem', sm: '1.2rem' }}
                        fontWeight={400}
                        sx={{ cursor: 'pointer', '&:hover': { color: '#314FA2', textDecoration: 'underline' } }}
                    // onClick={() => navigate(paths.termsAndPrivacy)}  // Example navigation link
                    >
                        Terms & Privacy Policy
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
