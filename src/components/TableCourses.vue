<template>
  <div class="container mt-5 text-start">
    <table class="table text-black">
      <thead>
        <tr>
          <th scope="col">Curso</th>
          <th scope="col">Cupos</th>
          <th scope="col">Inscritos</th>
          <th scope="col">Duración</th>
          <th scope="col">Costo</th>
          <th scope="col">Terminado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in cursos" :key="course.id">
          <td>{{ course.nombre }}</td>
          <td>{{ course.cupos }}</td>
          <td>{{ course.inscritos }}</td>
          <td>{{ course.duracion }}</td>
          <td>
            <p class="bg-lightgreen rounded-4 p-1 text-center">
              $ {{ course.costo }}
            </p>
          </td>
          <td>
            <p
              v-if="course.completado === false"
              class="bg-secondary rounded-4 p-1 text-center w-50"
            >
              No
            </p>
            <p v-else class="bg-info rounded-4 p-1 text-center w-50">Si</p>
          </td>
          <td>
            <p class="bg-lightgreen rounded-4 p-1 text-center">
              {{ course.fecha_registro }}
            </p>
          </td>
          <td>
            <button @click="editCourse(course.id)" type="button" class="btn">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#eab308"
                  d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
                />
              </svg>
            </button>
            <button @click="deleteCourse(course.id)" type="button" class="btn">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f70808"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "TableCourses",
  data() {
    return {
      cursos: this.courses,
    };
  },
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteCourse(id) {
      this.$store.commit("DELETE", id);
    },
    editCourse(id) {
      this.$router.push(`/editar/${id}`);
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped>
.bg-lightgreen{
    background-color: #00c853;
}
</style>