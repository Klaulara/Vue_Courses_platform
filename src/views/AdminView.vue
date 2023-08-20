<template>
  <div>
    <h1 class="text-black mt-5">Administración</h1>
    <button type="button" class="btn btn-primary mt-3">AGREGAR CURSO</button>
    <TableCourses :courses="courses" />
    <hr />
    <div class="container border-purple rounded text-start my-3">
      <p class="text-purple m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6a1b9a"
            d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
          />
        </svg>
        Cantidad total de alumnos permitidos:
        <span class="fw-bold">{{ cupos }}</span> alumnos.
      </p>
    </div>
    <div class="container border-info border rounded text-start my-3">
      <p class="text-info m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#06b6d4"
            d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08l5.13-5.17M10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11L10 17m1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z"
          />
        </svg>
        Cantidad total de alumnos inscritos:
        <span class="fw-bold">{{ inscritos }}</span> alumnos.
      </p>
    </div>
    <div class="container border-danger border rounded text-start my-3">
      <p class="text-danger m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f20707"
            d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"
          />
        </svg>
        Cantidad total de cupos restantes:
        <span class="fw-bold">{{ restantes }}</span> alumnos.
      </p>
    </div>
    <div class="container border-pink rounded text-start my-3">
      <p class="text-pink m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ec4899"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.141 5A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12a9.968 9.968 0 0 0 2.859 7M19.14 5A9.967 9.967 0 0 1 22 12c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-7.141-3M19.14 5L4.86 19"
          />
        </svg>
        Cantidad total de cursos terminados:
        <span class="fw-bold">{{ terminados }}</span> cursos.
      </p>
    </div>
    <div class="container border-gold rounded text-start my-3">
      <p class="text-gold m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#c3a037"
            d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m9.75-17.81l-1.42 1.42A8.982 8.982 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11Z"
          />
        </svg>
        Cantidad total de cursos activos:
        <span class="fw-bold">{{ activos }}</span> cursos.
      </p>
    </div>
    <div class="container border-orange rounded text-start my-3">
      <p class="text-orange m-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d97706"
            d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m9.75-17.81l-1.42 1.42A8.982 8.982 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11Z"
          />
        </svg>
        Cantidad total de cursos:
        <span class="fw-bold">{{ totalCursos }}</span> cursos.
      </p>
    </div>
  </div>
</template>

<script>
import TableCourses from "@/components/TableCourses.vue";

export default {
  name: "AdminView",
  data() {
    return {};
  },
  methods: {},
  computed: {
    courses() {
      return this.$store.state.cursos;
    },
    cupos() {
      return this.$store.getters.countCupos;
    },
    inscritos() {
      return this.$store.getters.countInscritos;
    },
    restantes(){
        return this.cupos - this.inscritos
    },
    terminados(){
        return this.$store.getters.countTerminados
    },
    activos(){
        return this.$store.getters.countNoTerminados
    },
    totalCursos(){
        return this.$store.getters.countCursos
    }
  },
  components: {
    TableCourses,
  },
};
</script>

<style scoped>
.border-purple {
  border: 1px solid #6a1b9a;
}
.text-purple {
  color: #6a1b9a;
}
.border-pink {
  border: 1px solid #d81b60;
}
.text-pink {
  color: #d81b60;
}
.border-gold {
  border: 1px solid #c3a037;
}
.text-gold {
  color: #c3a037;
}
.border-orange {
  border: 1px solid #d97706;
}
.text-orange {
  color: #d97706;
}
</style>
