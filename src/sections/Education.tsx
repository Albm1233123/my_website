import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Container id="education" sx={{ padding: "120px 0", backgroundColor: "#F7F4EF" }}>
      <Typography variant="overline" sx={{ fontSize: "1rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 3 }}>
        Education
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, color: "#1C1917", mb: 6 }}>
        Where I've studied.
      </Typography>

      <Box sx={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: 3 }}>
        {[
          {
            school: "Auckland University of Technology",
            degree: "Bachelor of Computer and Information Sciences",
            detail: "Major: Software Development · Minor: Artificial Intelligence",
            date: "Graduated August 2025",
            delay: 0,
          },
          {
            school: "Sacred Heart College",
            degree: "High School Diploma",
            detail: null,
            date: "Graduated 2021",
            delay: 0.15,
          },
        ].map((item) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: item.delay }}
            viewport={{ once: true }}
          >
            <Box sx={{ borderLeft: "2px solid #DDD8D0", pl: 3, py: 0.5, "&:hover": { borderLeftColor: "#A0522D", transition: "border-color 0.2s" } }}>
              <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1C1917", mb: 0.5 }}>
                {item.school}
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#44403C", mb: 0.5 }}>
                {item.degree}
              </Typography>
              {item.detail && (
                <Typography sx={{ fontSize: "0.8rem", color: "#78716C", mb: 0.5 }}>
                  {item.detail}
                </Typography>
              )}
              <Typography sx={{ fontSize: "0.75rem", color: "#A8A29E", letterSpacing: "0.05em" }}>
                {item.date}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}