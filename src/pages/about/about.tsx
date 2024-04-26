import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ClubValues from "./Components/ClubValues";
import EBoardCarousel from "./Components/EBoardCarousel";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          About Us Page
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          About Us Mission Statement
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          <ClubValues />
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Meet the E-Board
        </Typography>
        <EBoardCarousel />
      </Grid>
    </Grid>
  );
};

export default About;
