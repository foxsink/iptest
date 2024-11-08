<template>
	<ElContainer>
		<ElMain>
			<RouterView />
		</ElMain>
	</ElContainer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
body {
	font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
		'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
