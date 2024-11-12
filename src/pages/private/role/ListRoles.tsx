import { useEffect, useState } from 'react';
import { RoleType } from '../../../shared/interfaces/user-roles.type';
import RM_Button from '../../../shared/components/RM_Button';
import { fetchMethod } from '../../../utils/fetchMethod';
import { MethodType } from '../../../shared/enums/httpEnums';
import RM_Modal from '../../../shared/components/RM_Modal';
import {
	notifyError,
	notifyLoading,
	notifySuccess,
} from '../../../shared/components/RM_Toast';

const ListRoles = () => {
	const [roles, setRoles] = useState<RoleType[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [roleToDelete, setRoleToDelete] = useState<RoleType | null>(null);

	const openModal = (role: RoleType) => {
		setRoleToDelete(role);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setRoleToDelete(null);
	};

	useEffect(() => {
		fetchMethod<RoleType[]>(
			'http://localhost:8080/api/v1/role',
			MethodType.GET,
			null,
			undefined,
			undefined,
			true
		)
			.then((data) => {
				setRoles(data);
			})
			.catch(() => {
				notifyError('Hubo un error al obtener los roles');
			});
	}, []);

	const deleteRole = (id: number) => {
		fetchMethod<RoleType[]>(
			`http://localhost:8080/api/v1/role/${id}`,
			MethodType.DELETE,
			null,
			undefined,
			undefined,
			true
		)
			.then(() => {
				notifySuccess('Rol eliminado correctamente');
				setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
				closeModal();
			})
			.catch(() => {
				notifyError('Hubo un error al eliminar el rol');
			});
	};

	return (
		<section>
			<h1 className="text-center text-3xl font-semibold mb-5">
				Lista de roles
			</h1>
			<section className="mx-auto flex flex-col justify-center items-center max-w-5xl">
				<ul className="flex flex-col justify-center items-center gap-2">
					{roles.map((role) => (
						<li
							key={role.id}
							className="p-2 bg-bg-surface-primary/30 min-w-full rounded-lg hover:bg-bg-surface-primary/70 transition-all flex justify-between items-center gap-5"
						>
							<div>
								<h2 className="text-text-primary text-lg font-semibold">
									{role.name}
								</h2>
								<p className="text-text-primary/80">{role.description}</p>
							</div>
							<div className="flex gap-1">
								<RM_Button
									onClick={() => {}}
									variant="neutral"
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
											className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 -2h9a2 2 0 0 0 2 -2v-1" />
											<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
											<path d="M16 5l3 3" />
										</svg>
									}
								></RM_Button>
								<RM_Button
									onClick={() => openModal(role)}
									variant="danger"
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
											className="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
											<path d="M9 12l6 0" />
										</svg>
									}
								></RM_Button>
							</div>
						</li>
					))}
				</ul>
			</section>
			{roleToDelete && (
				<RM_Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					title={`Deseas eliminar el rol ${roleToDelete.name}`}
				>
					<p className="mb-4">
						¿Estás seguro de que deseas eliminar {roleToDelete.name}?
					</p>
					<footer className="flex gap-2">
						<RM_Button
							onClick={closeModal}
							variant="neutral"
							hasBackground={false}
						>
							Cancelar
						</RM_Button>
						<RM_Button
							onClick={() => deleteRole(roleToDelete.id)}
							variant="danger"
						>
							Eliminar
						</RM_Button>
					</footer>
				</RM_Modal>
			)}
		</section>
	);
};

export default ListRoles;
