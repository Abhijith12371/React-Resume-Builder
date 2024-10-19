import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './resume.css'; // Ensure this path is correct based on your file structure

const Resume = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quotation: '',
    city: '',
    phoneNumber: '',
    email: '',
    linkedIn: '',
    portfolio: '',
    hobbies: [''],
    projects: [''],
    programmingLanguages: [{ name: '', rating: '' }],
    frameworks: [{ name: '', rating: '' }],
    tools: [{ name: '', rating: '' }],
    workHistory: [{ companyName: '', role: '', achievement: '', technologiesUsed: '', description: '', startDate: '', endDate: '' }],
    certifications: [{ certificateName: '', issuedBy: '', description: '' }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleListChange = (e, index, listName) => {
    const { value } = e.target;
    const newList = [...formData[listName]];
    newList[index] = value;
    setFormData({ ...formData, [listName]: newList });
  };

  const handleObjectListChange = (index, field, value, listName) => {
    const updatedList = formData[listName].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, [listName]: updatedList });
  };

  const handleAddToList = (listName, defaultValue = '') => {
    const newList = [...formData[listName], defaultValue];
    setFormData({ ...formData, [listName]: newList });
  };

  const handleAddToObjectList = (listName, defaultObject = { name: '', rating: '' }) => {
    setFormData({
      ...formData,
      [listName]: [...formData[listName], defaultObject]
    });
  };

  const handleAddToWorkHistory = () => {
    const defaultWork = { companyName: '', role: '', achievement: '', technologiesUsed: '', description: '', startDate: '', endDate: '' };
    setFormData({
      ...formData,
      workHistory: [...formData.workHistory, defaultWork]
    });
  };

  const handleAddToCertifications = () => {
    const defaultCertification = { certificateName: '', issuedBy: '', description: '' };
    setFormData({
      ...formData,
      certifications: [...formData.certifications, defaultCertification]
    });
  };

  const handleRemoveFromList = (index, listName) => {
    const newList = [...formData[listName]];
    newList.splice(index, 1);
    setFormData({ ...formData, [listName]: newList });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resume", { state: { data: formData } });
    console.log(formData);
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      {/* Basic Information */}
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
      <input type="text" name="quotation" placeholder="Quotation" value={formData.quotation} onChange={handleInputChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
      <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
      <input type="text" name="linkedIn" placeholder="LinkedIn" value={formData.linkedIn} onChange={handleInputChange} />
      <input type="text" name="portfolio" placeholder="Portfolio" value={formData.portfolio} onChange={handleInputChange} />

      {/* Hobbies and Interests */}
      {/* <h3>Hobbies and Interests</h3>
      {formData.hobbies.map((hobby, index) => (
        <div key={index}>
          <input
            type="text"
            value={hobby}
            onChange={(e) => handleListChange(e, index, 'hobbies')}
          />
          <button type="button" onClick={() => handleRemoveFromList(index, 'hobbies')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddToList('hobbies')}>Add Hobby</button> */}

      {/* Personal Projects */}
      <h3>Personal Projects</h3>
      {formData.projects.map((project, index) => (
        <div key={index}>
          <input
            type="text"
            value={project}
            onChange={(e) => handleListChange(e, index, 'projects')}
          />
          <button type="button" onClick={() => handleRemoveFromList(index, 'projects')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddToList('projects')}>Add Project</button>

      {/* Programming Languages */}
      <h3>Programming Languages</h3>
      {formData.programmingLanguages.map((language, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Language"
            value={language.name}
            onChange={(e) => handleObjectListChange(index, 'name', e.target.value, 'programmingLanguages')}
          />
          <input
            type="number"
            placeholder="Rating"
            value={language.rating}
            onChange={(e) => handleObjectListChange(index, 'rating', e.target.value, 'programmingLanguages')}
          />
        </div>
      ))}
      <button type="button" onClick={() => handleAddToObjectList('programmingLanguages')}>Add Language</button>

      {/* Frameworks */}
      <h3>Frameworks</h3>
      {formData.frameworks.map((framework, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Framework"
            value={framework.name}
            onChange={(e) => handleObjectListChange(index, 'name', e.target.value, 'frameworks')}
          />
          <input
            type="number"
            placeholder="Rating"
            value={framework.rating}
            onChange={(e) => handleObjectListChange(index, 'rating', e.target.value, 'frameworks')}
          />
          <button type="button" onClick={() => handleRemoveFromList(index, 'frameworks')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddToObjectList('frameworks')}>Add Framework</button>

      {/* Tools and Technologies */}
      <h3>Tools and Technologies</h3>
      {formData.tools.map((tool, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Tool"
            value={tool.name}
            onChange={(e) => handleObjectListChange(index, 'name', e.target.value, 'tools')}
          />
          <input
            type="number"
            placeholder="Rating"
            value={tool.rating}
            onChange={(e) => handleObjectListChange(index, 'rating', e.target.value, 'tools')}
          />
          <button type="button" onClick={() => handleRemoveFromList(index, 'tools')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddToObjectList('tools')}>Add Tool</button>

      {/* Work History */}
      <h3>Work History</h3>
      {formData.workHistory.map((work, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Company Name"
            value={work.companyName}
            onChange={(e) => handleObjectListChange(index, 'companyName', e.target.value, 'workHistory')}
          />
          <input
            type="text"
            placeholder="Role"
            value={work.role}
            onChange={(e) => handleObjectListChange(index, 'role', e.target.value, 'workHistory')}
          />
          <input
            type="text"
            placeholder="Achievement"
            value={work.achievement}
            onChange={(e) => handleObjectListChange(index, 'achievement', e.target.value, 'workHistory')}
          />
          <input
            type="text"
            placeholder="Technologies Used"
            value={work.technologiesUsed}
            onChange={(e) => handleObjectListChange(index, 'technologiesUsed', e.target.value, 'workHistory')}
          />

          <input
            type="date"
            placeholder="Start Date"
            value={work.startDate}
            onChange={(e) => handleObjectListChange(index, 'startDate', e.target.value, 'workHistory')}
          />
          <input
            type="date"
            placeholder="End Date"
            value={work.endDate}
            onChange={(e) => handleObjectListChange(index, 'endDate', e.target.value, 'workHistory')}
          />
          <button type="button" onClick={() => handleRemoveFromList(index, 'workHistory')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddToWorkHistory}>Add Work History</button>

      {/* Certifications */}
      <h3>Certifications</h3>
      {formData.certifications.map((certification, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Certificate Name"
            value={certification.certificateName}
            onChange={(e) => handleObjectListChange(index, 'certificateName', e.target.value, 'certifications')}
          />
          <input
            type="text"
            placeholder="Issued By"
            value={certification.issuedBy}
            onChange={(e) => handleObjectListChange(index, 'issuedBy', e.target.value, 'certifications')}
          />
          
          <button type="button" onClick={() => handleRemoveFromList(index, 'certifications')}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddToCertifications}>Add Certification</button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Resume;
