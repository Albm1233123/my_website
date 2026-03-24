import { Container, Typography, Box } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

const links = [
  { icon: <Email sx={{ fontSize: "1rem" }} />, label: "albrentmanlutac@gmail.com", href: "mailto:albrentmanlutac@gmail.com" },
  { icon: <LinkedIn sx={{ fontSize: "1rem" }} />, label: "LinkedIn", href: "https://www.linkedin.com/in/alloysius-manlutac-7685782b9/" },
  { icon: <GitHub sx={{ fontSize: "1rem" }} />, label: "GitHub", href: "https://github.com/Albm1233123" },
];

export default function Contact() {
  return (
    <Container id="contact" sx={{ padding: "120px 0", backgroundColor: "#F7F4EF" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography variant="overline" sx={{ fontSize: "1rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 3 }}>
          Contact
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#1C1917", mb: 6 }}>
          Get in touch.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {links.map((item) => (
            <Box
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                fontSize: "0.9rem",
                color: "#44403C",
                textDecoration: "none",
                width: "fit-content",
                borderBottom: "1px solid transparent",
                pb: "1px",
                "&:hover": { color: "#A0522D", borderBottomColor: "#A0522D" },
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {item.icon}
              {item.label}
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}