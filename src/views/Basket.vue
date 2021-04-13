<template>
    <div class="basket">
        <Notification />

        <div class="main">
            <h2>购物车</h2>
            <el-checkbox  v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    import Notification from "./Notification";
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "Basket",
        components: {Notification},
        data() {
            return {
                checkAll: false,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
            }
        }
    }
</script>

<style scoped>
    .main{
        text-align: left;
        margin-left: 20%;
        margin-right: 20%;
    }

</style>