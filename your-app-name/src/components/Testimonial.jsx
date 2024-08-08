// components/TestimonialsSection.js
import React from 'react';
import JobListing from './JobListing';
// import './TestimonialsSection.css';

const testimonials = [
  {
    quote: "Incredible tech solutions!",
    author: "John Doe, XYZ Company",
  },
  {
    quote: "Excellent service and support.",
    author: "Jane Smith, ABC Corp",
  },
];

const TestimonialsSection = () => {
  return (
    <div>
    <JobListing/>
    </div>
  );
};

export default TestimonialsSection;
