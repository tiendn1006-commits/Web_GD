import api from './api';

export const categoriesService = {
  // Lấy tất cả categories
  getAllCategories: async () => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Lấy chi tiết category
  getCategoryDetail: async (categoryId) => {
    try {
      const response = await api.get(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
