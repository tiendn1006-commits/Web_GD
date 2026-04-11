import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button';
import { STATS } from '../../../constants/courses';

export const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-pastel-pink-50 via-white to-pastel-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 bg-pastel-pink-100 text-pastel-pink-700 rounded-full text-sm font-semibold">
                🎓 Nền tảng giáo dục #1 Việt Nam
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('hero.title')}</span>
              <br />
              <span className="text-gray-800">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Button onClick={scrollToCourses} size="lg">
                {t('hero.cta')}
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t('nav.contact')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, label: t('hero.students'), value: '10,000+' },
                { icon: BookOpen, label: t('hero.courses'), value: '100+' },
                { icon: Award, label: t('hero.instructors'), value: '50+' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-pastel-pink-600" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Students learning"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-pastel-pink-200 rounded-full opacity-50 blur-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-pastel-pink-300 rounded-full opacity-50 blur-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
