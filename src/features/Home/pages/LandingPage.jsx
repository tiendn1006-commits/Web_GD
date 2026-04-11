import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { CoursesList } from '../components/CoursesList';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { Modal } from '../../../components/Modal';
import { RegistrationForm } from '../components/RegistrationForm';

export const LandingPage = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CoursesList onRegisterClick={handleRegisterClick} />
      <Testimonials />
      <Footer />

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
    </div>
  );
};
