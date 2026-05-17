import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Palette, Globe, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categoriesService } from '../../../services/categoriesService';

export const Categories = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping
  const iconMap = {
    'Code': Code,
    'Briefcase': Briefcase,
    'Palette': Palette,
    'Globe': Globe,
    'TrendingUp': TrendingUp,
    'Users': Users
  };

  // Color mapping
  const colorMap = [
    { color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', iconColor: 'text-blue-600 dark:text-blue-400' },
    { color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20', iconColor: 'text-purple-600 dark:text-purple-400' },
    { color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', iconColor: 'text-orange-600 dark:text-orange-400' },
    { color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50 dark:bg-green-900/20', iconColor: 'text-green-600 dark:text-green-400' },
    { color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20', iconColor: 'text-indigo-600 dark:text-indigo-400' },
    { color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', iconColor: 'text-yellow-600 dark:text-yellow-400' }
  ];

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesService.getAllCategories();
      
      // Map categories với icons và colors
      const mappedCategories = response.data.map((cat, index) => ({
        ...cat,
        icon: iconMap[cat.icon] || Code,
        ...colorMap[index % colorMap.length]
      }));
      
      setCategories(mappedCategories);
    } catch (error) {
      console.error('Error loading categories:', error);
      // Fallback to default categories nếu API fail
      setCategories(getDefaultCategories());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultCategories = () => {
    return [
      { 
        categoryId: 1,
        categoryName: t('categories.tech'), 
        courseCount: 28,
        icon: Code,
        ...colorMap[0]
      },
      { 
        categoryId: 2,
        categoryName: t('categories.business'), 
        courseCount: 22,
        icon: Briefcase,
        ...colorMap[1]
      },
      { 
        categoryId: 3,
        categoryName: t('categories.design'), 
        courseCount: 18,
        icon: Palette,
        ...colorMap[2]
      },
      { 
        categoryId: 4,
        categoryName: t('categories.language'), 
        courseCount: 15,
        icon: Globe,
        ...colorMap[3]
      },
      { 
        categoryId: 5,
        categoryName: t('categories.marketing'), 
        courseCount: 19,
        icon: TrendingUp,
        ...colorMap[4]
      },
      { 
        categoryId: 6,
        categoryName: t('categories.softSkills'), 
        courseCount: 16,
        icon: Users,
        ...colorMap[5]
      }
    ];
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('categories.title')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 animate-pulse">
                <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-gray-700 mb-4"></div>
                <div className="h-6 bg-slate-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('categories.title')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={category.categoryId} to={`/courses?categoryId=${category.categoryId}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 hover:border-transparent transition-all shadow-sm hover:shadow-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {category.categoryName}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-gray-400 mb-4">
                    {category.courseCount || 0} {t('categories.courses')}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t('categories.explore')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
