import React from 'react';
import './Joblisting.css'; // Assuming you create a separate CSS file for styling

const JobListing = () => {
  const jobs = [
    {
      title: 'Software Developer',
      location: 'India',
      experience: '7-10 years',
    },
    {
      title: 'Junior Developer',
      location: 'India',
      experience: '1-3 years',
    },
  ];

  return (
    <div className="container">
      <h1>Let's build something great together!</h1>
      <div className="job-listings">
        {jobs.map((job, index) => (
          <div className="job-listing" key={index}>
            <div className="job-title">
              <span>{job.title}</span>
              <span className="job-location">{job.location}</span>
            </div>
            <div className="job-experience">{job.experience}</div>
            <div className="arrow">&rarr;</div>
          </div>
        ))}
      </div>
      <button className="view-all-button">VIEW ALL</button>
    </div>
  );
};

export default JobListing;
