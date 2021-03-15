<template>
    <div class="notification">
        <el-carousel height="50px" indicator-position="none" arrow="never">
            <el-carousel-item>
                <p class="small">COVID-19导致所有地区都无法送货，敬请谅解！</p>
            </el-carousel-item>
            <el-carousel-item>
                <p class="small">COVID-19导致所有地区都无法送货，敬请谅解！</p>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Notification"
    }
</script>

<style scoped>
    div.notification{
        background-color: rgba(144, 147, 153, 0.2);
    }
    p.small{
        font-size: 14px;
    }

</style>