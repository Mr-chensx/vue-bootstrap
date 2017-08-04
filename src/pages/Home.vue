<template>
  <div id="main">
    <load></load>
    <one></one>
    <two></two>
    <three></three>
    <four></four>
    <five></five>
    <six></six>
    <seven></seven>
    <foot></foot>
  </div>
</template>

<script>
  import Load from '../components/Load.vue'
  import One from '../components/One.vue'
  import Two from '../components/Two.vue'
  import Three from '../components/Three.vue'
  import Four from '../components/Four.vue'
  import Five from '../components/Five.vue'
  import Six from '../components/Six.vue'
  import Seven from '../components/Seven.vue'
  import Foot from '../components/Footer.vue'
  export default {
    components:{
      Load,
      One,
      Two,
      Three,
      Four,
      Five,
      Six,
      Seven,
      Foot
    }
  }
  
</script>
