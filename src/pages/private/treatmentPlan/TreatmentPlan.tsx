import { useEffect, useState } from 'react';
import { fetchMethod } from '../../../utils/fetchMethod';
import RM_Button from '../../../shared/components/RM_Button';
import { useNavigate } from 'react-router-dom';
import { RiskType } from '../../../shared/interfaces/risk.interface';
import { PATHS } from '../../../shared/constants/routes.constant';
import RM_Link from '../../../shared/components/RM_Link';

const TreatmentPlan = () => {
  const [risks, setRisks] = useState<RiskType[]>([]);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRisks = async () => {
      try {
        const data = [
          { id: '1', name: 'Data Breach', description: 'Unauthorized data access', type: 'Compliance' },
          { id: '2', name: 'System Downtime', description: 'Server outage risk', type: 'Operational' },
          { id: '3', name: 'Financial Loss', description: 'Market change risk', type: 'Financial' }
        ];
        setRisks(data);
      } catch (error) {
        setError('Error al obtener riesgos');
        console.error('Error fetching risks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRisks();
  }, []);

  const handleCreatePlan = (riskId: string) => {
    navigate(PATHS.private.treatmentPlan.create);
  };

  if (loading) {
    return <p className="text-text-primary">Cargando riesgos...</p>;
  }

  if (error) {
    return <p className="text-text-danger">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto">
      <RM_Link
				to={PATHS.public.home}
				hasBackground={false}
				color="primary"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M5 12l14 0" />
						<path d="M5 12l6 6" />
						<path d="M5 12l6 -6" />
					</svg>
				}
			>
				<></>
			</RM_Link>
      <h2 className="text-2xl text-center text-text-primary">Crear Plan de Tratamiento</h2>
      <div className="flex flex-col gap-4">
        {risks.map((risk) => (
          <div
            key={risk.id}
            className={`relative w-full p-6 rounded-lg cursor-pointer flex items-center justify-between transition 
                        ${selectedRisk === risk.id ? 'bg-slate-950 border-border-secondary text-text-primary' : 'border-border-tertiary bg-slate-950 text-text-secondary'} 
                        hover:bg-bg-fill-hover hover:border-border-secondary hover:shadow-lg`}
            onMouseEnter={() => setSelectedRisk(risk.id)}
            onMouseLeave={() => setSelectedRisk(null)}
            style={{ minHeight: '120px' }}
          >
            <div className="flex flex-col w-4/5">
              <h3 className="text-lg font-bold truncate text-text-primary" style={{ maxWidth: '90%' }}>{risk.name}</h3>
              <p className="text-sm text-text-secondary">{risk.description}</p>
              <p className="text-xs mt-2 text-text-tertiary">Tipo: {risk.type}</p>
            </div>
            <div className="absolute right-4">
              <RM_Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCreatePlan(risk.id);
                }}
                className="bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active disabled:bg-btn-primary-disabled text-text-primary"
                style={{ padding: '6px 12px', fontSize: '0.875rem' }}
              >
                <span>Crear Plan</span>
              </RM_Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentPlan;
