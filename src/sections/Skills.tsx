import { Container, Typography, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  "Main Programming Language": ["Java"],
  "Familiar Languages": ["Python", "JavaScript", "PHP", "HTML", "CSS", "SQL", "C#", "C++"],
  "Web Development": ["MongoDB", "NestJS", "Node.js", "Next.js", "React"],
  "Tools & Technologies": ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "Eclipse", "NetBeans", "PyCharm", "Unity"],
  "Design & Project Management": ["Figma", "Trello", "Miro", "Jira"],
  "Soft Skills": ["Team collaboration", "Effective communication", "Problem-solving", "Time management", "Adaptability"],
};

export default function Skills() {
  return (
    <Container className="glass-container" id="skills" sx={{ padding: "100px 0", textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: 4 }}>Skills</Typography>
      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skills).map(([category, items], index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }} 
          >
              <Typography variant="h5" color="white">{category}</Typography>
              <Grid container spacing={1} mt={2} justifyContent="center">
                {items.map((skill, i) => (
                  <Grid item key={i}>
                    <Chip label={skill} variant="outlined" sx={{ color: "white", borderColor: "gray" }} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
