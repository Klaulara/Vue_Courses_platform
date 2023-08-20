<template>
  <div class="d-flex flex-wrap m-5 p-5">
    <div v-for="course in courses" :key="course.id">
      <CoursesCard :image="course.img" :title="course.name" />
    </div>
  </div>
</template>

<script>
import CoursesCard from '../components/CoursesCard.vue';

export default {
  name: 'HomeView',
  components: {
    CoursesCard,
  },
  computed: {
    courses(){
      return this.$store.state.cursos;
    }
  },
}
</script>
