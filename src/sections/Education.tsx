import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Container className="glass-container" id="education" sx={{ padding: "100px 0", textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: 4, fontWeight: "bold", letterSpacing: 1 }}>
        Education
      </Typography>

      <Box sx={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>

        {/* University */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            textAlign: "left",
            position: "relative",
            marginBottom: "40px",
            width: "calc(100% - 50px)",
            left: "-25px",
          }}
        >
          <Typography variant="h5" sx={{ color: "#ffffff", fontWeight: "600", marginBottom: "10px" }}>
            Auckland University of Technology
          </Typography>
          <Typography variant="body1" sx={{ color: "#ffffff" }}>
            Bachelor of Computer and Information Sciences
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.83)" }}>
            [Major Software Development]
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", marginTop: "5px" }}>
            Expected Graduation: 2025 (One Semester Left)
          </Typography>
        </motion.div>

        {/* High School */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            textAlign: "left",
            position: "relative",
            width: "calc(100% - 50px)",
            left: "25px",
          }}
        >
          <Typography variant="h5" sx={{ color: "#ffffff", fontWeight: "600", marginBottom: "10px" }}>
            Sacred Heart College
          </Typography>
          <Typography variant="body1" sx={{ color: "#ffffff" }}>
            High School Diploma
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", marginTop: "5px" }}>
            Graduated: 2022
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}
