<template>
    <div>
        <PxAssetsTable v-bind:assets="assets"></PxAssetsTable>
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
            assets: [],
        };
    },
    created: function () {
        api.getAssets().then((assets) => (this.assets = assets));
    },
};
</script>
