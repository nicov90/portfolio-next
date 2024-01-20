import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import aboutStyles from "@/styles/About.module.css";

const About = () => {
  return (
      <Box className={aboutStyles.container}>
        <motion.article
          transition={{ duration: 0.5 }}
          className={`${aboutStyles.card} ${aboutStyles.mainCard}`}
        >
          <Typography variant="h4" gutterBottom fontWeight={500}>
            Nombre
          </Typography>
          <Typography variant="body1">Breve descripción de mi rol de trabajo</Typography>
        </motion.article>
        <Box display="flex" justifyContent="space-between" gap={3}>
          <motion.article
            transition={{ duration: 0.5 }}
            className={`${aboutStyles.card} ${aboutStyles.secondCard}`}
          >
            <Typography variant="h4" gutterBottom fontWeight={500}>
              Mi perfil
            </Typography>
            <Typography variant="body1">Breve resúmen de mi</Typography>
          </motion.article>
          <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" overflow="visible">
            
          </Box>
        </Box>
      </Box>
  );
};

export default About;
