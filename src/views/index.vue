<template>
    <div>
        hello
        <el-container v-model="$attrs"></el-container>

        <el-row>hell112</el-row>
        <el-row>kkkd</el-row>
        <el-row><el-col :span="2" :offset="3">888888</el-col></el-row>
        <el-container>
            <el-aside>hello</el-aside>
            <el-container direction="">
                <el-header></el-header>
                <el-main></el-main>
            </el-container>
        </el-container>
        <el-menu v-model="hello"></el-menu>
        <el-tree></el-tree>
    </div>
</template>

<script>
    import {Decimal} from "decimal.js";

    export default {
        name: "index",
        data(){
            return{
                hello:"444"
            }
        },
        setup(){
            console.log(new Decimal("100").toFixed(2));
        }

    }
</script>

<style scoped>

</style>
