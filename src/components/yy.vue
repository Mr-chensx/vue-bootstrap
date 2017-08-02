<!-- Detail.vue -->
<template>
  <div class="detail">
    <detail-header></detail-header>
    <img src="../assets/img/lp_01.jpg" alt="">
    <p>欢迎来到英语课堂</p>
  </div>
</template>
<style>
  .detail {
    padding: 0.24rem;
    font-size: 12px;
  }
  img {
    display: block;
    width: 80%;
    margin: 0 auto 0.2rem;
  }
  p {
    font-size: 14px;
    line-height: 0.5rem;
    text-align: justify;
    padding-bottom: 0.24rem;
    text-align: center;
  }
</style>
<script>
  import DetailHeader from '../components/DetailHeader'
  
  export default {
    props: ['title'],
    components: {
      DetailHeader,
    }
  }
</script>
