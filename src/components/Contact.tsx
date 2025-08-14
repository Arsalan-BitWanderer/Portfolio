import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import './ContactForm.css';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot field
};

const ContactForm = ({
  onClose,
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
}: {
  onClose: () => void;
  formData: ContactFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  submitStatus: string;
}) => {
  const popoverVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div className="contact-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.div
        className="contact-popover"
        variants={popoverVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-lg text-white focus:outline-none focus:border-purple-500 peer"
              required
            />
            <label
              htmlFor="name"
              className="absolute text-lg text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-lg text-white focus:outline-none focus:border-purple-500 peer"
              required
            />
            <label
              htmlFor="email"
              className="absolute text-lg text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="block w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-lg text-white focus:outline-none focus:border-purple-500 peer"
              required
            />
            <label
              htmlFor="message"
              className="absolute text-lg text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              Your Message
            </label>
          </div>
          {/* Honeypot field for spam bots */}
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(160, 32, 240, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 text-white py-3 font-bold uppercase tracking-widest text-lg rounded-md transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {submitStatus && <p className="text-center mt-4">{submitStatus}</p>}
        </form>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic client-side rate limit: one submission per 60 seconds
    const lastSentAtRaw = localStorage.getItem('contact_last_sent_at');
    const lastSentAt = lastSentAtRaw ? parseInt(lastSentAtRaw, 10) : 0;
    const now = Date.now();
    if (now - lastSentAt < 60_000) {
      setSubmitStatus('Please wait a minute before sending another message.');
      return;
    }

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const containsLink = /(https?:\/\/|www\.)/i.test(formData.message);
    if (!formData.name || formData.name.trim().length < 2) {
      setSubmitStatus('Please enter a valid name.');
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }
    if (!formData.message || formData.message.trim().length < 10) {
      setSubmitStatus('Please write a longer message (at least 10 characters).');
      return;
    }
    if (formData.message.length > 2000) {
      setSubmitStatus('Message is too long (max 2000 characters).');
      return;
    }
    // Honeypot triggers => likely bot
    if (formData.company && formData.company.trim().length > 0) {
      setSubmitStatus('Submission blocked.');
      return;
    }
    // Optional: discourage link spam
    if (containsLink) {
      setSubmitStatus('Links are not allowed in the message.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Sending...');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
    const toEmail = process.env.REACT_APP_CONTACT_TO_EMAIL || 'mohdarsal232@gmail.com';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          reply_to: formData.email.trim(),
          message: formData.message.trim(),
          to_email: toEmail,
        },
        publicKey
      );

      setSubmitStatus("Message sent successfully. I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '', company: '' });
      localStorage.setItem('contact_last_sent_at', String(Date.now()));
      setTimeout(() => setIsFormVisible(false), 1200);
    } catch (err) {
      setSubmitStatus('Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
          <p className="text-gray-300">Have a question or want to work together?</p>
        </div>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormVisible(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg"
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      {isFormVisible && (
        <ContactForm
          onClose={() => setIsFormVisible(false)}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
        />
      )}
    </section>
  );
};

export default Contact;

