import { useEffect, useState } from 'react';
import DivSpotlightEffect from '../components/Effects/DivSpotlightEffect.js';
import { Salah } from '../features/salah';
import { isClient } from '../utils/isTauri';

export default function RightBar(): JSX.Element {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return <></>;
	}

	if (!isClient) {
		return <></>;
	}
	return (
		<div className='h-full basis-1/4'>
			<DivSpotlightEffect>
				<Salah />
			</DivSpotlightEffect>
		</div>
	);
}
