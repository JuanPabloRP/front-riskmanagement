import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThreatCategory, ImpactLevel, Probability } from '../../../shared/enums/threats.enum';
import { ThreatType } from '../../../shared/interfaces/threat.interface';
import { notifyError } from '../../../shared/components/RM_Toast';
import { fetchMethod } from '../../../utils/fetchMethod';
import { MethodType, ResponseType } from '../../../shared/enums/httpEnums';
import RM_Input from '../../../shared/components/RM_Input';
import RM_Button from '../../../shared/components/RM_Button';
import RM_Modal from '../../../shared/components/RM_Modal';
import RM_Select from '../../../shared/components/RM_Select';
import { OptionProps } from '../../../shared/components/RM_Select';

const API_URL = import.meta.env.VITE_API_URL;


const threatCategoryOptions: OptionProps[] = Object.entries(ThreatCategory).map(([key, value]) => ({
  value: key,
  label: value
}));

const impactLevelOptions: OptionProps[] = Object.entries(ImpactLevel).map(([key, value]) => ({
  value: key,
  label: value
}));

const probabilityOptions: OptionProps[] = Object.entries(Probability).map(([key, value]) => ({
  value: key,
  label: value
}));

const ThreatManagement = () => {
  const [threat, setThreat] = useState<ThreatType>({
    id_registro: '',
    name: '',
    description: '',
    source: '',
    category: ThreatCategory.CYBER,
    impactLevel: ImpactLevel.MEDIUM,
    probability: Probability.POSSIBLE,
    affectedAssets: [],
    createdBy: '',
    status: 'active'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateThreatData()) {
      notifyError('Por favor complete todos los campos requeridos');
      return;
    }

    try {
      const response = await fetchMethod(
        `${API_URL}/v1/threats`,
        MethodType.POST,
        threat,
        ResponseType.JSON,
        undefined,
        true
      );
      
    } catch (error) {
      notifyError('Error al registrar la amenaza');
    }
  };

  const validateThreatData = (): boolean => {
    return !!(
      threat.name &&
      threat.description &&
      threat.source &&
      threat.category &&
      threat.impactLevel &&
      threat.probability
    );
  };

  const handleChange = (field: keyof ThreatType, value: any) => {
    setThreat(prev => ({
      ...prev,
      [field]: value,
      updatedAt: new Date()
    }));
  };

  // Función específica para manejar la selección de activos
 /*  const handleAssetChange = (selectedValues: string[]) => {
    setThreat(prev => ({
      ...prev,
      affectedAssets: selectedValues
    }));
  }; */

  return (
    <form 
      className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-text-primary text-center text-3xl">Registro de Amenazas</h1>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <RM_Input
          value={threat.name}
          onChange={(value) => handleChange('name', value)}
          label="Nombre de la Amenaza"
          required
          error={threat.name.length > 0 && threat.name.length < 3 ? 'El nombre es muy corto' : ''}
        />
        <RM_Input
          value={threat.source}
          onChange={(value) => handleChange('source', value)}
          label="Fuente"
          required
        />
      </div>

      <div className="w-full">
        <RM_Input
          value={threat.description}
          onChange={(value) => handleChange('description', value)}
          label="Descripción"
          type="textarea"
          required
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <RM_Select
          options={threatCategoryOptions}
          value={threat.category}
          label="Categoría"
          onChange={(value) => handleChange('category', value)}
          required
        />
        <RM_Select
          options={impactLevelOptions}
          value={threat.impactLevel}
          label="Nivel de Impacto"
          onChange={(value) => handleChange('impactLevel', value)}
          required
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <RM_Select
          options={probabilityOptions}
          value={threat.probability}
          label="Probabilidad"
          onChange={(value) => handleChange('probability', value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <RM_Button type="submit">
          Registrar Amenaza
        </RM_Button>
        <RM_Button 
          variant="neutral" 
          onClick={() => setIsModalOpen(true)}
          hasBackground={false}
        >
          Ver Histórico
        </RM_Button>
      </div>

      <RM_Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Histórico de Amenazas"
      >
        <ThreatHistory />
      </RM_Modal>

      <Toaster />
    </form>
  );
};

const ThreatHistory = () => {
  const [history, setHistory] = useState<ThreatType[]>([]);

  useEffect(() => {
    fetchThreatHistory();
  }, []);

  const fetchThreatHistory = async () => {
    try {
      const response = await fetchMethod(
        `${API_URL}/v1/threats/history`,
        MethodType.GET,
        undefined,
        ResponseType.JSON,
        undefined,
        true
      );
    } catch (error) {
      notifyError('Error al cargar el histórico');
    }
  };

  return (
    <div className="max-h-96 overflow-y-auto">
      {history.map((threat) => (
        <div key={threat.id} className="border-b p-4">
          <h3 className="font-bold">{threat.name}</h3>
          <p>Última actualización: {threat.updatedAt?.toLocaleDateString()}</p>
          <p>Estado: {threat.status}</p>
        </div>
      ))}
    </div>
  );
};

// Función para enviar alertas de nuevas amenazas (RF_029)
const sendThreatAlert = async (threat: ThreatType) => {
  try {
    await fetchMethod(
      `${API_URL}/v1/threats/alert`,
      MethodType.POST,
      { threatId: threat.id },
      ResponseType.JSON,
      undefined,
      true
    );
  } catch (error) {
    console.error('Error al enviar la alerta de nueva amenaza');
  }
};

export default ThreatManagement;
