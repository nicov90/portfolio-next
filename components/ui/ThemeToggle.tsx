import { setDarkMode } from '@/redux/slices/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.theme);

  useEffect(() => {
    // Verificar si el usuario ha establecido manualmente el modo oscuro
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      dispatch(setDarkMode(savedMode === 'true'));
    } else {
      // Si no hay configuración manual, usar prefers-color-scheme
      dispatch(setDarkMode(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    dispatch(setDarkMode(newMode));
    // Guardar la preferencia del usuario en el almacenamiento local
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <motion.button style={{ position: 'absolute', top: 10, right: 10 }} onClick={toggleDarkMode}>
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </motion.button>
  );
};

export default ThemeToggle;