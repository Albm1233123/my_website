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
          I’m a recent Computer Science graduate passionate about software development. I’m eager to apply my skills and contribute to innovative projects in graduate or entry-level roles, while continuing to grow professionally and collaborate with dynamic teams.
        </Typography>
      </SlideIn>
    </Container>
  );
}
