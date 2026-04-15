import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare, Baby } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

const createSchema = (t) => z.object({
  parentName: z.string()
    .min(1, 'Vui lòng nhập họ tên phụ huynh')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự'),
  childName: z.string()
    .min(1, 'Vui lòng nhập tên con')
    .min(2, 'Tên con phải có ít nhất 2 ký tự'),
  email: z.string()
    .min(1, 'Vui lòng nhập email')
    .email('Email không hợp lệ'),
  phone: z.string()
    .min(1, 'Vui lòng nhập số điện thoại')
    .regex(/^[0-9]{10}$/, 'Số điện thoại phải có 10 chữ số'),
  message: z.string()
    .min(1, 'Vui lòng nhập nội dung')
    .min(10, 'Nội dung phải có ít nhất 10 ký tự')
});

export const ContactForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(createSchema(t)),
    defaultValues: {
      parentName: '',
      childName: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      // Gọi API backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentName: data.parentName,
          childName: data.childName,
          email: data.email,
          phone: data.phone,
          message: data.message
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Có lỗi xảy ra, vui lòng thử lại');
      }

      // Success
      setIsSuccess(true);
      reset();

      // Reset success message sau 5 giây
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (err) {
      // Xử lý lỗi khi không kết nối được backend
      if (err.message === 'Failed to fetch') {
        setError('Không thể kết nối đến server. Vui lòng kiểm tra backend đang chạy.');
      } else {
        setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại sau');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-pastel-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-pastel-pink-100 to-purple-100 text-pastel-pink-700 rounded-full text-sm font-semibold">
                📞 Liên Hệ Tư Vấn
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Đăng Ký Tư Vấn Miễn Phí</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Để lại thông tin, chúng tôi sẽ liên hệ tư vấn chi tiết về khóa học phù hợp cho con bạn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Tại sao chọn chúng tôi?
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: '🎯', title: 'Tư vấn miễn phí', desc: 'Đội ngũ chuyên gia tư vấn nhiệt tình' },
                    { icon: '⚡', title: 'Phản hồi nhanh', desc: 'Liên hệ trong vòng 24h' },
                    { icon: '🎓', title: 'Chương trình phù hợp', desc: 'Khóa học được thiết kế riêng cho từng độ tuổi' },
                    { icon: '💝', title: 'Ưu đãi đặc biệt', desc: 'Giảm giá cho khách hàng đăng ký sớm' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-pastel-pink-50 transition-colors"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pastel-pink-500 to-purple-600 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-2">🎁 Ưu đãi đặc biệt</h4>
                <p className="text-white/90">
                  Giảm ngay 20% học phí cho 50 khách hàng đăng ký đầu tiên trong tháng này!
                </p>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {isSuccess ? (
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
                      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Gửi thành công!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                      Gửi yêu cầu khác
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          Họ tên phụ huynh
                        </label>
                        <input
                          {...register('parentName')}
                          placeholder="Nguyễn Văn A"
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                            ${errors.parentName 
                              ? 'border-red-400 focus:border-red-500' 
                              : 'border-gray-200 focus:border-pastel-pink-500'
                            }
                            focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
                        />
                        {errors.parentName && (
                          <p className="mt-1 text-sm text-red-500">{errors.parentName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Baby className="w-4 h-4 inline mr-1" />
                          Tên con
                        </label>
                        <input
                          {...register('childName')}
                          placeholder="Bé Minh"
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                            ${errors.childName 
                              ? 'border-red-400 focus:border-red-500' 
                              : 'border-gray-200 focus:border-pastel-pink-500'
                            }
                            focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
                        />
                        {errors.childName && (
                          <p className="mt-1 text-sm text-red-500">{errors.childName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="example@email.com"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                          ${errors.email 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-gray-200 focus:border-pastel-pink-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Số điện thoại
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="0123456789"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                          ${errors.phone 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-gray-200 focus:border-pastel-pink-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Nội dung tư vấn
                      </label>
                      <textarea
                        {...register('message')}
                        rows="4"
                        placeholder="Vui lòng cho biết độ tuổi của con và khóa học bạn quan tâm..."
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 resize-none
                          ${errors.message 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-gray-200 focus:border-pastel-pink-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-pastel-pink-200`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full"
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Gửi yêu cầu tư vấn
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Bằng cách gửi form, bạn đồng ý với chính sách bảo mật của chúng tôi
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
