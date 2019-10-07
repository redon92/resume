<template>
    <div class="experience-content text-left">
        <span class="period-experience">{{resumeExp.experience.start}} - {{resumeExp.experience.end}}</span>
        <h3 class="specialty-name">{{resumeExp.experience.role}}</h3>
        <h3 class="company-name">{{resumeExp.experience.company}}</h3>
        <p v-for="task in resumeExp.experience.tasks" class="prg-experience"> {{task}}
        </p>
    </div>
</template>
<script>
export default {
  name: 'Experience',
  props:['resumeExp'],
}
</script>
<style>

</style>