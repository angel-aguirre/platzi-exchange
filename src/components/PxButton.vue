<template>
    <button
        v-on:click="buttonClick"
        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    >
        <beat-loader
            v-bind:loading="isLoading"
            v-bind:color="'#68d391'"
            v-bind:size="8"
        />
        <slot v-if="!isLoading"></slot>
    </button>
</template>

<script>
export default {
    name: 'PxButton',
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        buttonClick: function () {
            this.$emit('click');
        },
    },
};
</script>
