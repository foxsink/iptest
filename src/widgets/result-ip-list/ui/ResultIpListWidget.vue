<template>
	<h1>Результаты</h1>
	<ElCard>
		<template #header>
			<div class="card-header">
				<span>Поиск по таблице</span>
				<ElRow>
					<ElCol :span="18">
						<ElInput v-model="inputSearch" type="input" placeholder="Начать поиск" />
					</ElCol>
					<ElCol :span="6" class="col-find-button">
						<ElButton class="find-button">Поиск</ElButton>
					</ElCol>
				</ElRow>
			</div>
			<ElTable :data="tableData">
				<ElTableColumn prop="query" label="Ip" sortable />
				<ElTableColumn prop="country" label="Country" sortable />
				<ElTableColumn prop="regionName" label="Region" sortable />
				<ElTableColumn label="Operations">
					<template #default="scope">
						<el-button size="small" @click="handleEdit(scope.row)"> Details </el-button>
						<el-button size="small" type="danger" @click="handleDelete(scope.$index)">
							Delete
						</el-button>
					</template>
				</ElTableColumn>
			</ElTable>
		</template>
	</ElCard>
</template>

<script setup lang="ts">
import { useIpsStore } from '@/entities/ips/model/ips';
import type { IpResponse } from '@/shared/api';
import { ElTable, ElTableColumn } from 'element-plus';
import _ from 'lodash';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const store = useIpsStore();
const inputSearch = ref('');
const router = useRouter();

const searchTable = ref<IpResponse[]>([]);

const tableData = computed(() => {
	if (!inputSearch.value) {
		return store.listItems;
	}
	return searchTable.value;
});

const handleEdit = (row: IpResponse) => {
	store.setShownItem(row);
	router.push('/details');
};
const handleDelete = (index: number) => {
	store.removeElement(index);
};

watch(
	inputSearch,
	_.debounce((newSearchString, oldSearchString) => {
		if (newSearchString && newSearchString !== oldSearchString) {
			const checkIp = newSearchString.match(/\d+.?\d*.?\d*.?\d*/);
			if (checkIp?.length) {
				searchTable.value = store.listItems.filter((item: IpResponse) =>
					item.query?.includes(checkIp[0]),
				);
			} else {
				searchTable.value = store.listItems.filter(
					(item: IpResponse) =>
						item.country?.includes(newSearchString) ||
						item.regionName?.includes(newSearchString),
				);
			}
		}
	}, 1000),
);
</script>

<style lang="scss">
.el-row {
	margin-top: 20px;
}
</style>
