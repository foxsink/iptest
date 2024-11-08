import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IpResponse } from '@/shared/api';

export const useIpsStore = defineStore('ips', () => {
	const listItems = ref<IpResponse[]>([]);
	const shownItem = ref<IpResponse | null>(null);

	const setTaskList = (ips: string[]) => {
		ips.forEach(async (ip: string) => {
			try {
				const response = await fetch(`http://ip-api.com/json/${ip}`);
				const jsonIp = (await response.json()) as IpResponse;
				listItems.value.push(jsonIp);

				if (jsonIp.status !== 'success') {
					throw new Error('Статус отличается от "success"');
				}
			} catch (e) {
				console.log(e);
				alert(e);
			}
		});
	};

	const removeElement = (id: number) => {
		listItems.value.splice(id, 1);
	};

	const setShownItem = (item: IpResponse) => {
		shownItem.value = item;
	};

	return {
		listItems,
		shownItem,
		setTaskList,
		removeElement,
		setShownItem,
	};
});
