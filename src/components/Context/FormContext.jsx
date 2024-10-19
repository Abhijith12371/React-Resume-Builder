// src/context/FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
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

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
