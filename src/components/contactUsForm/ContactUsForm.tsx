import React, { type FormEvent, useState } from "react";
import "./ContactUsForm.css";
import * as yup from "yup";
import { Image, Toast, ToastContainer } from "react-bootstrap";
import img1 from '../../assets/images/contactUsBgImg.jpg';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

// Validation schema
const contactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Must be at least 2 characters")
    .max(10, "Must be at most 10 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Must be at least 2 characters")
    .max(10, "Must be at most 10 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const ContactUsForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the form data
      await contactSchema.validate(formData, { abortEarly: false });
      
      // If validation passes, clear errors
      setErrors({});

      // Here you would typically send the data to your backend
      const apiPath = `${import.meta.env.VITE_API_PATH}/contact`;
      
      const response = await fetch(apiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Show success toast
      setToastMessage('Your message has been sent successfully!');
      setShowToast(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: FormErrors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof FormErrors] = error.message;
          }
        });
        setErrors(newErrors);
      } else {
        // Show error toast
        setToastMessage('Failed to send message. Please try again later.');
        setShowToast(true);
        console.error('Error submitting form:', err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    
    <div className="container-fluid" id="contactForm">
      <div className="container contactForm">
        <div className="contactform-left-content">
          <Image src={img1} className="contactform-left-img" fluid />
        </div>

        <div className="contactform-right-content">
          <div className="contactform-heading">
            <span>CONTACT US</span>
          </div>
          <form className="contactform" onSubmit={handleContactForm}>
            {/* First Name + Last Name Row */}
            <div className="contactform-row">
              <div className="contactForm-field">
                <div className="contactform-div">First Name</div>
                <input
                  type="text"
                  name="firstName"
                  className={`contactform-input ${errors.firstName ? 'is-invalid' : ''}`}
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <div className="error-message">{errors.firstName}</div>
                )}
              </div>
              <div className="contactForm-field">
                <div className="contactform-div">Last Name</div>
                <input
                  type="text"
                  name="lastName"
                  className={`contactform-input ${errors.lastName ? 'is-invalid' : ''}`}
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && (
                  <div className="error-message">{errors.lastName}</div>
                )}
              </div>
            </div>

            {/* Email + Phone Row */}
            <div className="contactform-row">
              <div className="contactForm-field">
                <div className="contactform-div">Your Email</div>
                <input 
                  type="email" 
                  name="email" 
                  className={`contactform-input ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="contactForm-field">
                <div className="contactform-div">Mobile</div>
                <input 
                  type="tel" 
                  name="mobile" 
                  className={`contactform-input ${errors.mobile ? 'is-invalid' : ''}`}
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                {errors.mobile && (
                  <div className="error-message">{errors.mobile}</div>
                )}
              </div>
            </div>

            {/* Message (Full Width) */}
            <div className="contactform-row-single">
              <div className="contactForm-field">
                <div className="contactform-div">Message</div>
                <textarea 
                  name="message" 
                  className={`contactform-input ${errors.message ? 'is-invalid' : ''}`}
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && (
                  <div className="error-message">{errors.message}</div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="contactForm-submit">
              <button 
                type="submit" 
                className="contactForm-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={5000} 
          autohide
          bg={toastMessage.includes('success') ? 'success' : 'danger'}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
    </>
  );
};

export default ContactUsForm;