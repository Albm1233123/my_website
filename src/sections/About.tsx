import { Container, Typography } from "@mui/material";
import SlideIn from "../components/SlideIn";

export default function About() {
  return (
    <Container id="about" sx={{ padding: "100px 0", textAlign: "center" }}>
      <SlideIn>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto" }}>
          Enthusiastic third-year Computer Science student seeking internship, graduate, and entry-level opportunities. Passionate about software development and eager to contribute to dynamic teams while expanding my knowledge.
        </Typography>
      </SlideIn>
    </Container>
  );
}
