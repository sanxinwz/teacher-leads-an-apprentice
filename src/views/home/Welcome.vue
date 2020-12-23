<template>
  <el-carousel 
    :interval ="2000" 
    type="card" 
    height="200px"
  >
    <el-carousel-item v-for="(img,index) in imageList" :key="index">
      <img :src="img" class="swiper-image"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data() {
        return {
            imageList: [
                'https://cdn2.lmonkey.com/94f152aaa94d937ccf5de78f3fcac59f/768446b9b2fb4449bd12d0cc5bec6bf0.png',
                'https://cdn2.lmonkey.com/94f152aaa94d937ccf5de78f3fcac59f/aa18e129aefa4e93bbc86c6092f1b31d.jpg',
                'https://cdn2.lmonkey.com/94f152aaa94d937ccf5de78f3fcac59f/2beff72bd05f424bb5c92b78b227894d.jpg'
            ]
        }
    }
}
</script>

<style lang="scss">
  .swiper-image {
      width: 100%;
      height: 100%;
    }
</style>