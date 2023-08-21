<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="nombre"
          v-model="nombre"
        />
        <label for="floatingInput">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="URL de la imagen"
          v-model="url_imagen"
        />
        <label for="floatingInput">URL de la imagen</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Cupos del curso"
          v-model="cupos"
        />
        <label for="floatingInput">Cupos del curso</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Inscritos en el curso"
          v-model="inscritos"
        />
        <label for="floatingInput">Inscritos en el curso</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Duración del curso"
          v-model="duracion"
        />
        <label for="floatingInput">Duración del curso</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="date"
          class="form-control"
          id="floatingInput"
          placeholder="Fecha de registro"
          v-model="fecha_registro"
        />
        <label for="floatingInput">Fecha de registro</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Costo del curso"
          v-model="costo"
        />
        <label for="floatingInput">Costo del curso</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Costo del curso"
          v-model="descripcion"
        >
        </textarea>
        <label for="floatingInput">Descripcion del curso</label>
      </div>

      <button type="submit" class="btn btn-success">
        Editar
      </button>
      <button @click="regresar" type="button" class="btn btn-danger" >
        Cerrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditCourse",
  data() {
    return {
      nombre: this.course.nombre,
      url_imagen: this.course.img,
      cupos: this.course.cupos,
      inscritos: this.course.inscritos,
      duracion: this.course.duracion,
      fecha_registro: this.course.fecha_registro,
      costo: this.course.costo,
      descripcion: this.course.descripcion,
    };
  },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    regresar(){
      this.$router.push('/admin');
    },
    onSubmit(){
      this.$store.commit("EDIT", {
        id: this.course.id,
        nombre: this.nombre,
        img: this.url_imagen,
        cupos: this.cupos,
        inscritos: this.inscritos,
        duracion: this.duracion,
        fecha_registro: this.fechaHoy,
        costo: this.costo,
        descripcion: this.descripcion,
      });
      this.$router.push('/admin');
    }
  }
};
</script>
