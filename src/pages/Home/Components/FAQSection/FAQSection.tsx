import { Box, Grid, Typography } from "@mui/material";
import { faqs as faqsList } from "../../../FAQ/consts/faqs";
import FAQAccordion from "../../../FAQ/Components/FAQAccordion";

const FAQSection = () => {
  const faqs = faqsList.slice(0, 6);

  return (
    <Box sx={{ margin: "100px  0 0 0" }}>
      <Typography
        fontSize="35px"
        fontWeight="bold"
        align="center"
        variant="h5"
        mb="32px"
      >
        Check out our FAQ!
      </Typography>
      <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
        {faqs.map((faq) => (
          <Grid item key={faq.id} xs={6}>
            <FAQAccordion faq={faq} style={{ height: "74px" }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQSection;