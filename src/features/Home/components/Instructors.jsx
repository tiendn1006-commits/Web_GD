import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button';

export const Instructors = () => {
  const { t } = useTranslation();

  const instructors = [
    {
      name: 'Nguyễn Văn A',
      specialty: t('instructors.instructor1Specialty'),
      avatar: '👨‍💻',
      students: 8500,
      courses: 12,
      rating: 4.9,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Trần Thị B',
      specialty: t('instructors.instructor2Specialty'),
      avatar: '👩‍🎨',
      students: 6200,
      courses: 8,
      rating: 4.8,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Lê Văn C',
      specialty: t('instructors.instructor3Specialty'),
      avatar: '👨‍💼',
      students: 7100,
      courses: 10,
      rating: 4.9,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Phạm Thị D',
      specialty: t('instructors.instructor4Specialty'),
      avatar: '👩‍🔬',
      students: 9200,
      courses: 14,
      rating: 5.0,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('instructors.title')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('instructors.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-slate-200 dark:border-gray-700 hover:border-transparent transition-all shadow-sm hover:shadow-xl">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${instructor.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                      {instructor.avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg">
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
                    {instructor.specialty}
                  </p>

                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(instructor.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-slate-700 dark:text-gray-300">
                      {instructor.rating}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                      <p className="text-xs text-slate-600 dark:text-gray-400">{t('instructors.students')}</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{instructor.students.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                      <p className="text-xs text-slate-600 dark:text-gray-400">{t('instructors.courses')}</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{instructor.courses}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                    {t('instructors.viewProfile')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
