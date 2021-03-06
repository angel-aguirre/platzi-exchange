<template>
    <table>
        <thead>
            <tr class="bg-gray-100 border-b-2 border-gray-400">
                <th></th>
                <th
                    v-bind:class="{
                        up: this.sortOrder == 1,
                        down: this.sortOrder == -1,
                    }"
                >
                    <span
                        class="underline cursor-pointer"
                        v-on:click="changeSortOrder"
                        >Ranking</span
                    >
                </th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cap. de Mercado</th>
                <th>Variación 24hs</th>
                <td class="hidden sm:block">
                    <input
                        class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
                        id="filter"
                        placeholder="Buscar..."
                        type="text"
                        v-model="filter"
                    />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="asset in filteredAssets"
                v-bind:key="asset.id"
                class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
            >
                <td class="py-0 px-1">
                    <img
                        class="max-w-6 max-h-6"
                        v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
                        v-bind:alt="asset.name"
                    />
                </td>
                <td>
                    <span class="font-bold">#{{ asset.rank }}</span>
                </td>
                <td>
                    <router-link
                        class="hover:underline text-green-600"
                        v-bind:to="{
                            name: 'coin-detail',
                            params: { id: asset.id },
                        }"
                    >
                        {{ asset.name }}
                        <span class="ml-1 text-gray-500">
                            {{ asset.symbol }}
                        </span>
                    </router-link>
                </td>
                <td>{{ asset.priceUsd | dollar }}</td>
                <td>{{ asset.marketCapUsd | dollar }}</td>
                <td
                    v-bind:class="
                        parseFloat(asset.changePercent24Hr) < 0
                            ? 'text-red-600'
                            : 'text-green-600'
                    "
                >
                    {{ asset.changePercent24Hr | percent }}
                </td>
                <td class="hidden sm:block">
                    <px-button v-on:click="goToCoin(asset.id)"
                        >Detalle</px-button
                    >
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import PxButton from '@/components/PxButton.vue';

export default {
    name: 'PxAssetsTable',
    components: {
        PxButton,
    },
    data: function () {
        return {
            filter: '',
            sortOrder: 1,
        };
    },
    props: {
        assets: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        filteredAssets: function () {
            return this.assets
                .filter((asset) => {
                    return (
                        asset.symbol
                            .toLowerCase()
                            .includes(this.filter.toLowerCase()) ||
                        asset.name
                            .toLowerCase()
                            .includes(this.filter.toLowerCase())
                    );
                })
                .sort((a, b) => {
                    if (parseInt(a.rank) > parseInt(b.rank)) {
                        return this.sortOrder;
                    }

                    return this.sortOrder * -1;
                });
        },
    },
    methods: {
        goToCoin: function (id) {
            this.$router.push({
                name: 'coin-detail',
                params: {
                    id: id,
                },
            });
        },
        changeSortOrder: function () {
            this.sortOrder = this.sortOrder * -1;
        },
    },
};
</script>

<style scoped>
.up::before {
    content: '👆';
}

.down::before {
    content: '👇';
}

td {
    padding: 20px 0px;
    font-size: 0.6rem;
    text-align: center;
}

th {
    padding: 5px;
    font-size: 0.6rem;
}

@media (min-width: 640px) {
    td,
    th {
        padding: 20px;
        font-size: 1rem;
    }

    th {
        padding: 12px;
    }
}
</style>
