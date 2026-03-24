import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import articleProject from "../assets/articleProject.png";
import UnityGame from "../assets/inSearchOfMemories.png";
import workout from "../assets/workIt.png";
import banking from "../assets/mazeBank.png";
import balanceit from "../assets/balanceit.png";

const projects = [
  {
    title: "Balanz-It",
    date: "March 5 - 2026 - March 19 - 2026",
    description: "A budget planner with graphs, PDF export, and download functionality, demonstrating skills in React, TypeScript, and state management.",
    image: balanceit,
    techStack: ["React", "TypeScript", "HTML"],
    link: "https://Albm1233123.github.io/BalanzIt",
  },
  {
    title: "Maze Bank",
    date: "Jan 2025 - Paused Development",
    description: "A Java banking system simulating authentication, account management, and transaction handling.",
    image: banking,
    techStack: ["Java", "MySQL"],
    link: "https://github.com/Albm1233123/MazeBank",
  },
    {
    title: "Work-It",
    date: "Nov 2023 – Sep 2024",
    description: "A workout tracking web app with user authentication, workout logging, and sorting features.",
    image: workout,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Albm1233123/workoutApplication",
  },
  {
    title: "In Search of Memories",
    date: "Mar – Jun 2024",
    description: "A 2D RPG built with Unity and C# alongside a team of four. Handled game mechanics, features, and asset integration.",
    image: UnityGame,
    techStack: ["Unity", "C#", "Agile", "Scrum"],
    link: "https://github.com/Christian-C-G-Jorge/In-Search-of-Memories",
  },
    {
    title: "MNNN Stack Web Application: SPEED",
    date: "Aug – Oct 2024",
    description: "An article submission platform built as a university project, letting users submit and review software engineering articles.",
    image: articleProject,
    techStack: ["MongoDB", "NestJS", "Node.js", "Next.js", "RESTful APIs"],
    link: "https://speed-w202-08-tgnd.vercel.app/",
  },
];

export default function Projects() {
  return (
    <Container id="projects" sx={{ padding: "120px 0" }}>
      <Typography variant="overline" sx={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#78716C", display: "block", mb: 3 }}>
        Projects
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, color: "#1C1917", mb: 6 }}>
        Things I've built.
      </Typography>

      <Box sx={{ maxWidth: "640px" }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <Box
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2.5,
                py: 2.5,
                borderBottom: "1px solid #DDD8D0",
                textDecoration: "none",
                transition: "opacity 0.2s",
                "&:hover": { opacity: 0.7 },
                "&:hover .project-title": { color: "#A0522D" },
              }}
            >
              {/* Thumbnail */}
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{ width: "72px", height: "52px", objectFit: "cover", borderRadius: "4px", flexShrink: 0, mt: "2px" }}
              />

              {/* Text */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
                  <Typography className="project-title" sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#1C1917", transition: "color 0.2s" }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#A8A29E", flexShrink: 0, ml: 2 }}>
                    {project.date}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.8rem", color: "#78716C", lineHeight: 1.6, mb: 1 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.techStack.map((tech, i) => (
                    <Box key={i} sx={{ px: 1, py: 0.25, border: "1px solid #DDD8D0", borderRadius: "3px", fontSize: "0.7rem", color: "#A8A29E", backgroundColor: "#EFEAE2" }}>
                      {tech}
                    </Box>
                  ))}
                </Box>

                
                <Box>
                    {project.link && (
                    <Button
                      sx={{mt: 0.8,  fontSize: "0.8rem", color: "#cd5200", }}
                      href={project.link}
                      target="_blank"
                    >
                      {project.link.includes("github.com") ? "View Repo" : "View Project"}
                    </Button>
                    )}
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}