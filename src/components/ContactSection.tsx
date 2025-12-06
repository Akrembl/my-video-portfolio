import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-6">
              Have a project in mind or want to collaborate? Send me a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input type="hidden" name="access_key" value="3435ba32-f39f-42fd-9ce5-c3b711e6b747" />

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-black"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-black"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-black resize-none"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 rounded-lg font-semibold
                  text-black bg-green-400 hover:bg-green-500
                  transition-all shadow-md
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-full border border-gray-200 rounded-2xl p-8 bg-white/70 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>

              <div className="flex space-x-6 justify-center mb-6">
                <a
                  href="https://www.instagram.com/akreem.bl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-full hover:border-black transition hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@akrembenlagha?si=-PzntNwK_wU7kwhF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-full hover:border-black transition hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              <p className="text-gray-600 mb-1">Or email me at:</p>
              <a
                href="mailto:akrembenlagha@yahoo.fr"
                className="text-black underline hover:text-gray-700"
              >
                akrembenlagha@yahoo.fr
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
