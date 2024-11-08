import { useIpsStore } from '@/entities/ips/model/ips';

export const useCheckIpHelper = () => {
	const getIpArray = (rawIpString: string): string[] | null => {
		return rawIpString.match(/\d+.\d+.\d+.\d+/g);
	};

	const handleButtonClick = (rawIpString: string) => {
		const ipArray = getIpArray(rawIpString);
		const store = useIpsStore();
		if (ipArray?.length) {
			store.setTaskList(ipArray ?? []);
		}
	};

	return {
		handleButtonClick,
	};
};
