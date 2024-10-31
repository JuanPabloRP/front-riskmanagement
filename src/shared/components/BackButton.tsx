import RM_Link from './RM_Link';

const BackButton = ({ path }: { path: string }) => {
	return (
		<RM_Link
			to={path}
			className="text-btn-neutral-active hover:text-btn-neutral-hover focus:text-btn-neutral-active"
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
	);
};

export default BackButton;
