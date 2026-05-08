import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button';

export const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.basicName'),
      price: '$0',
      period: t('pricing.perMonth'),
      description: t('pricing.basicDesc'),
      features: [
        t('pricing.basicFeature1'),
        t('pricing.basicFeature2'),
        t('pricing.basicFeature3'),
        t('pricing.basicFeature4')
      ],
      cta: t('pricing.getStarted'),
      popular: false,
      color: 'from-slate-500 to-slate-600'
    },
    {
      name: t('pricing.proName'),
      price: '$99',
      period: t('pricing.perMonth'),
      description: t('pricing.proDesc'),
      features: [
        t('pricing.proFeature1'),
        t('pricing.proFeature2'),
        t('pricing.proFeature3'),
        t('pricing.proFeature4'),
        t('pricing.proFeature5')
      ],
      cta: t('pricing.choosePro'),
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: t('pricing.premiumName'),
      price: '$199',
      period: t('pricing.perMonth'),
      description: t('pricing.premiumDesc'),
      features: [
        t('pricing.premiumFeature1'),
        t('pricing.premiumFeature2'),
        t('pricing.premiumFeature3'),
        t('pricing.premiumFeature4'),
        t('pricing.premiumFeature5'),
        t('pricing.premiumFeature6')
      ],
      cta: t('pricing.choosePremium'),
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('pricing.title')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    {t('pricing.popular')}
                  </div>
                </div>
              )}

              <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-blue-500 dark:border-blue-400 shadow-2xl shadow-blue-500/20' 
                  : 'border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-xl'
              } transition-all`}>
                {plan.popular && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-2xl`} />
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-slate-800 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <Button 
                    variant={plan.popular ? 'gradientBlue' : 'outline'}
                    className="w-full mb-6"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                          plan.popular 
                            ? 'bg-blue-100 dark:bg-blue-900/30' 
                            : 'bg-slate-100 dark:bg-gray-700'
                        } flex items-center justify-center mt-0.5`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-slate-600 dark:text-gray-400'
                          }`} />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
