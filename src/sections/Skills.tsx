import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  "Built projects with": ["Java", "React", "TypeScript", "Node.js", "NestJS", "Next.js", "MongoDB", "MySQL", "C#", "Unity", "HTML", "CSS"],
  "Exposed through coursework": ["Python", "C++", "PHP", "SQL"],
  "Tools": ["Git", "GitHub", "VS Code", "Visual Studio", "Eclipse", "PyCharm", "Figma"],
  "Planning & PM": ["Trello", "Miro", "Jira", "Scrum", "Agile"],
};

export default function Skills() {
  return (
    <Container id="skills" sx={{ padding: "120px 0" }}>
      <Typography variant="overline" sx={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 3 }}>
        Skills
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, color: "#1C1917", mb: 1 }}>
        What I work with.
      </Typography>
      <Typography sx={{ fontSize: "0.9rem", color: "#78716C", mb: 6, maxWidth: "480px" }}>
        Java is my main language. Most of my project work has been full-stack web and game dev.
      </Typography>

      <Box sx={{ maxWidth: "640px", display: "flex", flexDirection: "column", gap: 4 }}>
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: "flex", gap: { xs: 0, sm: 4 }, flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "baseline" } }}>
              <Typography sx={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A0522D", minWidth: "160px", mb: { xs: 1, sm: 0 } }}>
                {category}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {items.map((skill, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      border: "1px solid #DDD8D0",
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                      color: "#44403C",
                      backgroundColor: "#EFEAE2",
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}