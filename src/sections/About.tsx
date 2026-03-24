import { Container, Typography, Box } from "@mui/material";
import SlideIn from "../components/SlideIn";

export default function About() {
  return (
    <Container id="about" sx={{ padding: "120px 0", backgroundColor: "#F7F4EF" }}>
      <SlideIn>
        <Box sx={{ maxWidth: "560px" }}>
          <Typography variant="overline" sx={{ fontSize: "1rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 3 }}>
            About
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: "1.6rem", md: "2rem" }, lineHeight: 1.3, color: "#1C1917", mb: 3 }}>
            Computer Science grad who loves building things that actually work.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", lineHeight: 1.8, color: "#78716C" }}>
            I'm passionate about software development and eager to contribute to meaningful projects, whether that's a graduate role or an entry-level position. I care about writing good code, learning fast, and working well with the people around me.
          </Typography>
        </Box>
      </SlideIn>
    </Container>
  );
}