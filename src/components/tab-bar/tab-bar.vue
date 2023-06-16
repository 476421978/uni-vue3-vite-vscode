<template>
	<view class="com-tab-bar">
		<template v-for="(item, index) in getTabList" :key="index">
			<label class="bar-item">
				<image :src="item.selectedIconPath" style="width:48px;height:48px;"></image> <view>{{ item.text }}</view>
			</label>
		</template>
	</view>
</template>

<script setup>
import { tabList } from './data.js'

const props = defineProps({
	tabIndex: {
		type: String,
		default: '0'
	}
})

const getTabList = computed(() => {
	return tabList[props.tabIndex]
})
</script>

<style lang="scss" scoped>
.com-tab-bar {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.bar-item {
	flex: 1;
}
</style>
