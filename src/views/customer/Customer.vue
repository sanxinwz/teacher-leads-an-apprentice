<template>
    <div class="container">
        <div class="card-title">
            问卷列表
        </div>
    </div>
</template>
<script>
export default {
    created() {
         this.$notify.success({
            title: '提示',
            message: '详细路由请自行配置喔！！',
            offset: 50,
        });
    }
}
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: -1px 1px 20px 0px rgba(59, 55, 85, 0.03);
    border-radius: 16px;
    .card-title {
        position: absolute;
        top: 35px;
        left: 30px;
        width: 122px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #01B68D;
    }
}
</style>