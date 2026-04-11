import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

const createSchema = (t) => z.object({
  fullName: z.string()
    .min(1, t('registration.errors.fullNameRequired'))
    .min(2, t('registration.errors.fullNameMin')),
  email: z.string()
    .min(1, t('registration.errors.emailRequired'))
    .email(t('registration.errors.emailInvalid')),
  phone: z.string()
    .min(1, t('registration.errors.phoneRequired'))
    .regex(/^[0-9]{10}$/, t('registration.errors.phoneInvalid')),
  course: z.string()
    .min(1, t('registration.errors.courseRequired'))
});

export const RegistrationForm = ({ selectedCourse, onSuccess }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(createSchema(t)),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      course: selectedCourse?.title || ''
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Giả lập loading
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      reset();
      
      // Tự động đóng modal sau 2 giây
      setTimeout(() => {
        setIsSuccess(false);
        onSuccess?.();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {t('registration.success')}
        </h3>
        <p className="text-gray-600">
          {t('registration.successMessage')}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {t('registration.title')}
        </h3>
        <p className="text-gray-600">{t('registration.subtitle')}</p>
      </div>

      <Input
        label={t('registration.fullName')}
        placeholder="Nguyễn Văn A"
        {...register('fullName')}
        error={errors.fullName?.message}
      />

      <Input
        label={t('registration.email')}
        type="email"
        placeholder="example@email.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label={t('registration.phone')}
        type="tel"
        placeholder="0123456789"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('registration.course')}
        </label>
        <select
          {...register('course')}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
            ${errors.course 
              ? 'border-red-400 focus:border-red-500' 
              : 'border-gray-200 focus:border-pastel-pink-500'
            }
            focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
        >
          <option value="">{t('registration.selectCourse')}</option>
          <option value="Lập trình Web Frontend">Lập trình Web Frontend</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Data Science & AI">Data Science & AI</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Tiếng Anh Giao Tiếp">Tiếng Anh Giao Tiếp</option>
        </select>
        {errors.course && (
          <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            {t('registration.submitting')}
          </>
        ) : (
          t('registration.submit')
        )}
      </Button>
    </form>
  );
};
