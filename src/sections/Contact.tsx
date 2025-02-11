import { Container, Typography, Link, Box } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Container className="glass-container" id="contact" sx={{ padding: "100px 0", textAlign: "center" }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography variant="h3" sx={{ marginBottom: 2 }}>Contact Me</Typography>
        
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Link href="mailto:albrentmanlutac@gmail.com" color="primary" underline="none" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email /> albrentmanlutac@gmail.com
          </Link>
          
          <Link href="https://github.com/Albm1233123" target="_blank" color="primary" underline="none" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedIn /> LinkedIn
          </Link>

          <Link href="https://www.linkedin.com/in/alloysius-manlutac-7685782b9/" target="_blank" color="primary" underline="none" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GitHub /> GitHub
          </Link>
        </Box>
      </motion.div>
    </Container>
  );
}