<<<<<<< HEAD
<template>
    <div class="col-sm-4 content">
      <a :href="resumePort.port.url">
        <div class="item-portfolio term3" style="height:300px;">
    
          <div class="item-overlay">
            <div class="item-content">
              <img style="width: 150px" :src="'images/portfolio/'+resumePort.port.logo" alt="">
              <h3>{{resumePort.port.name}}</h3>

            </div>
          </div>
          <img :src="'images/portfolio/'+resumePort.port.image" alt="">
        </div>
      </a>
    </div>
</template>
<script>
export default {
  name: 'Experience',
  props:['resumePort'],
    created() {
      console.log(this.resumePort);
    }
}
</script>
<style>

</style>
=======
<template>
    <div class="col-sm-4 content">
      <a :href="resumePort.port.url">
        <div class="item-portfolio term3" style="height:300px; overflow-y: scroll;">
    
          <div class="item-overlay">
            <div class="item-content">
              <img style="width: 150px" :src="'images/portfolio/'+resumePort.port.logo" alt="">
              <h3>{{resumePort.port.name}}</h3>

            </div>
          </div>
          <img :src="'images/portfolio/'+resumePort.port.image" alt="">
        </div>
      </a>
    </div>
</template>
<script>
export default {
  name: 'Experience',
  props:['resumePort'],
    created() {
      console.log(this.resumePort);
    }
}
</script>
<style>

</style>
>>>>>>> 04c93479c6b26005fbded5138a12784f475bbd57
