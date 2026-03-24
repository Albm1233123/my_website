import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
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

  const sections = ["#home", "#about", "#education", "#skills", "#projects", "#contact"];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#F7F4EF",
        boxShadow: "none",
        borderRight: "1px solid #DDD8D0",
        height: "100vh",
        width: { xs: "60px", md: "180px" },
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "48px 0 36px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          width: "100%",
          px: 0,
        }}
      >
        {sections.map((section) => {
          const isActive = active === section;
          return (
            <Button
              key={section}
              onClick={() => handleScroll(section)}
              disableRipple
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                pl: { xs: 2, md: 3 },
                pr: 2,
                py: 0.75,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#A0522D" : "#78716C",
                backgroundColor: "transparent",
                borderLeft: isActive ? "2px solid #A0522D" : "2px solid transparent",
                borderRadius: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#1C1917",
                  borderLeftColor: "#DDD8D0",
                },
              }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {section.replace("#", "")}
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" }, fontSize: "0.6rem" }}>
                {section.replace("#", "").slice(0, 2)}
              </Box>
            </Button>
          );
        })}
      </Toolbar>

      <Box sx={{ display: "flex", flexDirection: "column", pl: { xs: 1.5, md: 2.5 }, gap: 0.5 }}>
        <IconButton
          href="https://github.com/Albm1233123"
          target="_blank"
          size="small"
          sx={{ color: "#78716C", "&:hover": { color: "#A0522D", backgroundColor: "transparent" } }}
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/alloysius-manlutac-7685782b9/"
          target="_blank"
          size="small"
          sx={{ color: "#78716C", "&:hover": { color: "#A0522D", backgroundColor: "transparent" } }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </Box>
    </AppBar>
  );
}