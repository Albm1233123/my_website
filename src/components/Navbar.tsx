import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Menu } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleScroll = (section: string) => {
    setActive(section);
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  };  

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#121212",
        boxShadow: "none",
        height: "100vh",
        width: { xs: "60px", md: "200px" },
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 0",
      }}
    >
      {/* Menu Button for Mobile */}
      <IconButton
        onClick={() => setMobileOpen(!mobileOpen)}
        sx={{ display: { md: "none" }, color: "white", marginBottom: 2 }}
      >
        <Menu />
      </IconButton>

      {/* Navigation Buttons */}
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          flexGrow: 1,
        }}
      >
        {["#home", "#about", "#education", "#skills", "#projects", "#contact"].map((section) => (
          <motion.div
            key={section}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() => handleScroll(section)}
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "uppercase",
                color: "white",
                transition: "opacity 0.3s ease",
                opacity: active === section ? 1 : 0.5,
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {section.replace("#", "")}
            </Button>
          </motion.div>
        ))}
      </Toolbar>

      {/* Social Icons */}
      <div style={{ paddingBottom: "30px" }}>
        <IconButton href="https://github.com/Albm1233123" target="_blank" sx={{ color: "white", marginRight: 1 }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/alloysius-manlutac-7685782b9/" target="_blank" sx={{ color: "white" }}>
          <LinkedIn />
        </IconButton>
      </div>
    </AppBar>
  );
}
