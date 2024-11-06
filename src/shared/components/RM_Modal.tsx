import { useEffect, useState } from 'react';
import RM_Button from './RM_Button';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const RM_Modal = ({ isOpen, children, onClose, title }: ModalProps) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	const closeModal = () => {
		setIsModalOpen(false);
		onClose();
	};

	if (!isModalOpen) return null;

	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
				<div
					className="fixed inset-0 bg-black opacity-50"
					onClick={closeModal}
				></div>
				<div className="relative w-auto max-w-3xl mx-auto my-6">
					<div className="relative flex flex-col w-full bg-bg border border-border rounded-lg shadow-lg outline-none focus:outline-none">
						<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
							<h3 className="text-2xl font-semibold">{title}</h3>
							<RM_Button
								variant="neutral"
								hasBackground={false}
								onClick={closeModal}
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
										className="icon icon-tabler icons-tabler-outline icon-tabler-x "
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M18 6l-12 12" />
										<path d="M6 6l12 12" />
									</svg>
								}
							></RM_Button>
						</div>
						<div className="relative p-6 flex-auto">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RM_Modal;
