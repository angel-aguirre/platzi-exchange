<template>
    <div>
        <bounce-loader
            v-bind:loading="isLoading"
            v-bind:color="'#68d391'"
            v-bind:size="100"
        />
        <PxAssetsTable v-bind:assets="assets" v-if="!isLoading"></PxAssetsTable>
    </div>
</template>

<script>
import api from '@/api.js';
import PxAssetsTable from '@/components/PxAssetsTable.vue';

export default {
    name: 'Home',
    components: {
        PxAssetsTable,
    },
    data: function () {
        return {
            isLoading: false,
            assets: [],
        };
    },
    created: function () {
        this.isLoading = true;
        api.getAssets()
            .then((assets) => (this.assets = assets))
            .finally(() => (this.isLoading = false));
    },
};
</script>
