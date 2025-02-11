import { Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import articleProject from "../assets/articleProject.png";
import UnityGame from "../assets/inSearchOfMemories.png";
import workout from "../assets/workIt.png";
import banking from "../assets/mazeBank.png";

const projects = [
  {
    title: "MNNN Stack Web Application: SPEED",
    date: "08/2024 - 10/2024",
    description:
      "Developed an article submission platform as part of a university project, allowing users to submit forms relevant to software engineering practice.",
    image: articleProject,
    techStack: ["MongoDB", "NestJS", "Node.js", "Next.js", "RESTful APIs"],
    link: "https://speed-w202-08-tgnd.vercel.app/",
  },
  {
    title: "2D RPG Game Development: In Search of Memories",
    date: "03/2024 - 06/2024",
    description:
      "Developed a 2D RPG game using Unity and C# with a team of 4 members. Worked on game mechanics, gameplay features, and asset integration.",
    image: UnityGame,
    techStack: ["Unity", "C#", "Agile", "Scrum"],
    link: "https://github.com/Christian-C-G-Jorge/In-Search-of-Memories",
  },
  {
    title: "Work-It",
    date: "11/2023 - 09/2024",
    description:
      "A web application for tracking and managing workouts. Includes user authentication, workout tracking, and sorting features.",
    image: workout,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Albm1233123/workoutApplication",
  },
  {
    title: "Maze Bank",
    date: "Ongoing",
    description:
      "A Java-based banking system that simulates basic banking operations, including authentication, account verification, and transaction management.",
    image: banking,
    techStack: ["Java", "MySQL"],
    link: "https://github.com/Albm1233123/MazeBank",
  }
];

export default function Projects() {
  return (
    <Container className="glass-container" id="projects" sx={{ padding: "100px 0", textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: 4 }}>Projects</Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "background-color 0.4s ease-in-out, transform 0.4s ease-in-out",
                  backgroundColor: "#252525",
                  '&:hover': { backgroundColor: "#1e1e1e", transform: "scale(1.03)" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px"
                }}
              >
                <CardMedia 
                  component="img" 
                  image={project.image} 
                  alt={project.title} 
                  sx={{ width: "80%", height: "auto", borderRadius: "10px", marginBottom: "15px" }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" color="white">{project.title}</Typography>
                  <Typography variant="subtitle2" color="gray" mb={1}>{project.date}</Typography>
                  <Typography variant="body2" color="white">{project.description}</Typography>
                  <Grid container spacing={1} mt={2} justifyContent="center">
                    {project.techStack.map((tech, i) => (
                      <Grid item key={i}>
                        <Chip label={tech} variant="outlined" sx={{ color: "white", borderColor: "gray" }} />
                      </Grid>
                    ))}
                  </Grid>
                  {project.link && (
                    <Button
                      variant="outlined"
                      sx={{ marginTop: 2, color: "white", borderColor: "gray", backgroundColor: "transparent", '&:hover': { backgroundColor: "#444" } }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.includes("github.com") ? "View Repo" : "View Project"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
