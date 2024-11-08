import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code, Layers } from 'lucide-react';

const services = [
  {
    icon: Gamepad2,
    title: 'Unity Game Development',
    description: 'Creating immersive gaming experiences with cutting-edge Unity technology.',
  },
  {
    icon: Code,
    title: 'Full-Stack Solutions',
    description: 'End-to-end web development with modern frameworks and scalable architecture.',
  },
  {
    icon: Layers,
    title: 'Tech Stack Overview',
    description: 'Expertise in React, Node.js, Unity, and cloud infrastructure solutions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400">Delivering excellence across multiple domains</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark p-8 rounded-2xl hover:bg-gradient-to-br hover:from-dark hover:to-dark-light transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}