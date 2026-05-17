import api from './api';

export const testimonialsService = {
  // Lấy testimonials ngẫu nhiên cho homepage
  getRandomTestimonials: async (limit = 3) => {
    try {
      const response = await api.get(`/testimonials/random/${limit}`);
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Lấy tất cả testimonials
  getAllTestimonials: async (page = 1) => {
    try {
      const response = await api.get(`/testimonials?isActive=true&page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
