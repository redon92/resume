<template>
    <div class="experience-content text-left">
        <span class="period-experience">{{experience.experience.start}} - {{experience.experience.end}}</span>
        <h3 class="specialty-name">{{experience.experience.role}}</h3>
        <h3 class="company-name">{{experience.experience.company}}</h3>
        <p v-for="task in experience.experience.tasks" class="prg-experience"> {{task}}
        </p>
    </div>
</template>
<script>
export default {
  name: 'Experience',
  props:['experience'],
}
</script>
<style>

</style>