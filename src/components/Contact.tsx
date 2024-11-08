import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import { Send } from 'lucide-react';

type FormData = {
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  communication: string;
  notes: string;
};

const projectTypes = [
  'Development',
  'Management',
  'Deployment',
  'Review',
  'Audit',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
];

const communicationMethods = [
  'Email',
  'Phone',
  'Video Call',
  'In-Person Meeting',
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'daowabunga@gmail.com',
          from_name: data.name,
          from_email: data.email,
          project_type: data.projectType,
          description: data.description,
          budget: data.budget,
          timeline: data.timeline,
          phone: data.phone,
          communication: data.communication,
          notes: data.notes,
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Start Your Project
            </span>
          </h2>
          <p className="text-gray-400">Tell us about your vision and let's create something amazing</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  {...register('projectType', { required: 'Project type is required' })}
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range *
                </label>
                <select
                  {...register('budget', { required: 'Budget range is required' })}
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                {...register('description', {
                  required: 'Project description is required',
                  minLength: {
                    value: 50,
                    message: 'Description should be at least 50 characters',
                  },
                })}
                rows={4}
                className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your project..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Timeline Requirements *
              </label>
              <input
                {...register('timeline', { required: 'Timeline is required' })}
                type="text"
                placeholder="e.g., 3 months, ASAP, Q4 2024"
                className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Preferred Communication */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Communication Method *
                </label>
                <select
                  {...register('communication', {
                    required: 'Communication method is required',
                  })}
                  className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select method</option>
                  {communicationMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
                {errors.communication && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.communication.message}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Notes
              </label>
              <textarea
                {...register('notes')}
                rows={3}
                className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Any additional requirements or information..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-secondary text-dark font-semibold px-8 py-3 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}