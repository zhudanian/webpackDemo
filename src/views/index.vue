<template>
    <div>Hello</div>
</template>

<script>
    import {Decimal} from "decimal.js";

    export default {
        name: "index",
        setup(){
            console.log(new Decimal("100").toFixed(2));
        }

    }
</script>

<style scoped>

</style>
