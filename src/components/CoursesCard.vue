<template>
  <div class="card mt-0 pt-0 m-3 p-3" style="width: 24rem">
    <div class="mt-0 pt-0 mx-auto" style="width: 12rem;">
      <img :src="image" class="card-img-top" alt="image" />
    </div>
    
    <div class="card-body">
      <h5 class="text-black text-start fw-bold mb-5">{{ title }}</h5>
      <p class="card-text">
        <TimeLine :costo="costo" :cupos="cupos" :completado="completado" :descripcion="descripcion" :duracion="duracion" :fecha_registro="fecha_registro" />
      </p>
    </div>
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue';
export default {
  name: "CoursesCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    costo: {
      type: Number,
      required: true,
    },
    duracion: {
      type: String,
      required: true,
    },
    cupos: {
      type: Number,
      required: true,
    },
    completado: {
      type: Boolean,
      required: true,
    },
    fecha_registro: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },

  },
  components: {
    TimeLine,
  },
};
</script>
