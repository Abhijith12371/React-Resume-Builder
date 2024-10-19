import React, { useState } from 'react';
import Resume from './Resume';
import Summary from './components/Summary/Summary';

const ResumeContainer = () => {
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
    frameworks: [''],
    tools: [''],
    workHistory: [''],
    certifications: ['']
  });

  // All handler functions for form data
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

  const handleAddToList = (listName) => {
    const newList = [...formData[listName], ''];
    setFormData({ ...formData, [listName]: newList });
  };

  const handleRemoveFromList = (index, listName) => {
    const newList = [...formData[listName]];
    newList.splice(index, 1);
    setFormData({ ...formData, [listName]: newList });
  };

  const handleAddProgrammingLanguage = () => {
    setFormData({
      ...formData,
      programmingLanguages: [...formData.programmingLanguages, { name: '', rating: '' }]
    });
  };

  const handleProgrammingLanguageChange = (index, field, value) => {
    const updatedLanguages = formData.programmingLanguages.map((language, i) =>
      i === index ? { ...language, [field]: value } : language
    );
    setFormData({ ...formData, programmingLanguages: updatedLanguages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Resume
        formData={formData}
        handleInputChange={handleInputChange}
        handleListChange={handleListChange}
        handleAddToList={handleAddToList}
        handleRemoveFromList={handleRemoveFromList}
        handleAddProgrammingLanguage={handleAddProgrammingLanguage}
        handleProgrammingLanguageChange={handleProgrammingLanguageChange}
        handleSubmit={handleSubmit}
      />
      <Summary formData={formData} />
    </>
  );
};

export default ResumeContainer;
