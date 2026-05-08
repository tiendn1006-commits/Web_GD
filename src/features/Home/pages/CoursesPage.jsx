import { useState } from 'react';
import { CoursesList } from '../components/CoursesList';
import { Modal } from '../../../components/Modal';
import { RegistrationForm } from '../components/RegistrationForm';

export const CoursesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleRegisterClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <div className="pt-24">
        <CoursesList onRegisterClick={handleRegisterClick} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Đăng ký khóa học"
      >
        <RegistrationForm
          selectedCourse={selectedCourse}
          onSuccess={handleCloseModal}
        />
      </Modal>
    </>
  );
};
