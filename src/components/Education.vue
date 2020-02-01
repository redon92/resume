<template>
    <div class="col-sm-4">
        <div class="education-content">
            <div class="period">
                <h3> {{education.start}} - {{education.end}}</h3>
            </div>
            <ul class="ul-education">
                <li class="li-specialty">
                    <div class="specialty">
                        <span class="education-icon"><i class="fa fa-file-text"></i></span>
                        <span class="specialty-name text-capitalize"><span v-if="education.degree"> {{education.degree}} in </span>{{education.area}}</span>
                    </div>
                </li>
                <li class="li-university">
                    <div class="university">
                        <span class="education-icon"><i class="fa fa-university"></i></span>
                        <span class="university-name"> {{education.institution}}</span>
                    </div>
                </li>
            </ul>
            <p class="prg-education" v-for="course in education.courses">
                <span v-html="course"></span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Education',
  props:['education'],
}
</script>
<style>

</style>