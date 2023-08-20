<template>
  <div class="d-flex flex-wrap mb-0 pb-0 m-5 p-5">
    <div v-for="course in courses" :key="course.id">
      <CoursesCard
        :image="course.img"
        :title="course.nombre"
        :completado="course.completado"
        :costo="course.costo"
        :cupos="course.cupos"
        :descripcion="course.descripcion"
        :duracion="course.duracion"
        :fecha_registro="course.fecha_registro"
      />
    </div>
  </div>
</template>

<script>
import CoursesCard from "../components/CoursesCard.vue";

export default {
  name: "HomeView",
  components: {
    CoursesCard,
  },
  computed: {
    courses() {
      return this.$store.state.cursos;
    },
  },
};
</script>
