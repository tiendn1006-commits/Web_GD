import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-2xl transition-all duration-300 shadow-lg';
  
  const variants = {
    primary: 'bg-pastel-pink-600 hover:bg-pastel-pink-700 text-white hover:shadow-xl',
    secondary: 'bg-white hover:bg-pastel-pink-50 text-pastel-pink-600 border-2 border-pastel-pink-600',
    outline: 'bg-transparent border-2 border-pastel-pink-600 text-pastel-pink-600 hover:bg-pastel-pink-600 hover:text-white'
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
