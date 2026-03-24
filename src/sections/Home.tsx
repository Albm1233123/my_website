import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container id="home" sx={{ padding: "140px 0 120px", backgroundColor: "#F7F4EF" }}>
      <Typography variant="overline" sx={{ fontSize: "1rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 2 }}>
        Hi, my name is
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 700, color: "#1C1917", lineHeight: 1.1, mb: 1 }}>
        Alloysius Manlutac
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400, color: "#78716C", mb: 3 }}>
        Software Developer
      </Typography>
      <Box sx={{ width: "48px", height: "2px", backgroundColor: "#A0522D", borderRadius: "2px" }} />
    </Container>
  );
}