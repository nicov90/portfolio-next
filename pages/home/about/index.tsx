import Layout from "@/components/ui/Layout";
import { Box, Typography } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { motion } from "framer-motion";
import aboutStyles from "@/styles/About.module.css";

const About = () => {
  return (
    <Layout title="About me">
      <Box className={aboutStyles.container}>
        <motion.article
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${aboutStyles.card} ${aboutStyles.mainCard}`}
        >
          <Typography variant="h4" gutterBottom>
            Mi Perfil
          </Typography>
          <Typography variant="body1">Breve descripción sobre mí...</Typography>
        </motion.article>
        <Box display="flex" justifyContent="space-between" gap={3}>
          <motion.article
            transition={{ duration: 0.5 }}
            className={`${aboutStyles.card} ${aboutStyles.secondCard}`}
          >
            <Typography variant="h4" gutterBottom>
              Mis Hobbies
            </Typography>
            <Typography variant="body1">Breve descripción sobre mis hobbies...</Typography>
          </motion.article>
          <motion.article
            transition={{ duration: 0.5 }}
            className={`${aboutStyles.card} ${aboutStyles.thirdCard}`}
          >
            <Typography variant="h4" gutterBottom>
              Mis estudios
            </Typography>
            <Typography variant="body1">Breve descripción sobre mis estudios...</Typography>
          </motion.article>
        </Box>
      </Box>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}

export default About;
