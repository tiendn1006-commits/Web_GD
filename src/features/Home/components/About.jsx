import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Target, title: t('about.feature1Title'), desc: t('about.feature1Desc'), color: 'from-teal-400 to-teal-500' },
    { icon: Users, title: t('about.feature2Title'), desc: t('about.feature2Desc'), color: 'from-blue-400 to-blue-500' },
    { icon: Award, title: t('about.feature3Title'), desc: t('about.feature3Desc'), color: 'from-violet-400 to-violet-500' },
    { icon: TrendingUp, title: t('about.feature4Title'), desc: t('about.feature4Desc'), color: 'from-gold-400 to-gold-500' }
  ];

  const benefits = [
    t('about.benefit1'),
    t('about.benefit2'),
    t('about.benefit3'),
    t('about.benefit4')
  ];

  return (
<section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-200">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-700 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold-100/50 dark:bg-gold-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200 }} className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            {t('about.badge')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-slate-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-700 transition-all shadow-sm hover:shadow-xl">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className={'w-14 h-14 rounded-xl bg-gradient-to-br ' + feature.color + ' flex items-center justify-center mb-4 shadow-lg'}>
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-gold-400 dark:from-teal-600 dark:to-gold-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30" />
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600" alt="Learning" className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-gray-700" />
            </motion.div>
          </div>

          <div className="space-y-6">
<h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">{t('about.subtitle')}</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="pt-6">
              <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all">
                {t('hero.cta')}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
