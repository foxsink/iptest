<template>
	<h1>Проверка IP</h1>
	<ElCard>
		<template #header>
			<div class="card-header">
				<span>Ваши IP</span>
			</div>
		</template>
		<ElInput v-model="inputIp" type="textarea" :rows="5" placeholder="0.0.0.0"></ElInput>
		<template #footer>
			<ElButton @click="helper.handleButtonClick(inputIp)">Начать проверку</ElButton>
		</template>
	</ElCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCheckIpHelper } from '@/widgets/check-ip/model';

const helper = useCheckIpHelper();

const inputIp = ref('');
</script>
