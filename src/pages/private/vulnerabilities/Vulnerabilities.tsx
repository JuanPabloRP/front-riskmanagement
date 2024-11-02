git checkout -b feature/RM-5-3-1-crud-vulnerabilidades

import React, { useState } from 'react';
import VulnerabilityForm from './components/VulnerabilityForm';
import VulnerabilityList from './components/VulnerabilityList';
import { Button } from 'flowbite-react';
import { fetchMethod, MethodType } from '../../../utils/fetchMethod';
import { notifySuccess, notifyError } from '../../../utils/toast';

const Vulnerabilities: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);

  const handleCreate = async (formData: any) => {
    try {
      await fetchMethod(
        '/api/vulnerabilities',
        MethodType.POST,
        formData
      );
      notifySuccess('Vulnerabilidad creada exitosamente');
