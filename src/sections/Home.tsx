import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container id="home" sx={{ padding: "100px 0", textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left", ml: 20 }}>
        Hi, my name is
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
        Alloysius Manlutac
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "left", ml: 20 }}>
        Software Developer
      </Typography>
      <Box
        sx={{
          width: "50%",  
          height: "4px",  
          backgroundColor: "white",  
          marginLeft: 20, 
          marginTop: 1, 
          borderRadius: "2px", 
          opacity: 0.8, 
        }}
      />
    </Container>
  );
}
