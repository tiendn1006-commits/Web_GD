import api from './api';

export const contactService = {
  // Gửi form tư vấn
  submitConsultation: async (data) => {
    try {
      const response = await api.post('/contact', {
        parentName: data.parentName,
        childName: data.childName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        source: 'website'
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
