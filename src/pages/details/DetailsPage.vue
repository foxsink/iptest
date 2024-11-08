<template>
	<template v-if="!isLoading">
		<ElPageHeader @back="goBack">
			<template #content>
				<span class="text-large font-600 mr-3"> {{ title }} </span>
			</template>
		</ElPageHeader>
		<ElCard>
			<p v-for="(key, index) in keys" :key="`${key}_${index}`">
				<span>{{ `${key}: ${values[index]}` }}</span>
			</p>
		</ElCard>
	</template>
</template>

<script setup lang="ts">
import { useIpsStore } from '@/entities/ips/model/ips';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useIpsStore();

const isLoading = computed(() => !store.shownItem);
const title = computed(() => store.shownItem?.query || 'Заголовок');
const keys = computed(() => Object.keys(store.shownItem ?? {}));
const values = computed(() => Object.values(store.shownItem ?? {}));

const goBack = () => {
	router.push('/');
};
</script>
