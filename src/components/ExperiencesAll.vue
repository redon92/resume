<template>
    <section id="experience" class="section section-experience wow fadeInUp" data-wow-offset="40">
        <div class="header-section">
            <h2 class="h2-section">EXPERIENCE</h2>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="all-experience">

                    <!-- / single experience -->

                    <draggable :list="resumeExp.experiences">
                        <experience v-for="experience in resumeExp.experiences" :experience="{experience}"/>
                        <!-- / single experience -->
                    </draggable>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import experience from '@/components/Experience';
    import draggable from 'vuedraggable';

    export default {
        components: {
            draggable,
            experience,
        },
        name: 'ExperiencesAll',
        props:['resumeExp'],
    }
</script>
<style>

</style>