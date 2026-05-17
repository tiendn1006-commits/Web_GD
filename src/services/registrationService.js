import api from './api';

export const registrationService = {
  // Đăng ký khóa học
  registerCourse: async (data) => {
    try {
      const response = await api.post('/registrations', {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        courseId: data.courseId,
        note: data.note
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
