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
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Terminado"
          v-model="completado"
        />
        <label for="floatingInput">Terminado</label>
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

      <button type="submit" class="btn btn-success">Editar</button>
      <button @click="regresar" type="button" class="btn btn-danger">
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
      fecha_registro: this.transformDate(this.course.fecha_registro),
      completado: this.course.completado,
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
    regresar() {
      this.$router.push("/admin");
    },
    onSubmit() {
      if(this.completado == "true"){
        this.completado = true
      }else{
        this.completado = false
      }
      this.$store.commit("EDIT", {
        id: this.course.id,
        nombre: this.nombre,
        img: this.url_imagen,
        cupos: parseInt(this.cupos),
        inscritos: this.completado ? 0 : parseInt(this.inscritos),
        duracion: this.duracion,
        fecha_registro: this.transformSebmitDate(this.fecha_registro),
        completado: this.completado,
        costo: parseInt(this.costo),
        descripcion: this.descripcion,
      });
      alert("Curso editado con exito")
      this.$router.push("/admin");
    },
    transformDate(date) {
      const parts = date.split("/"); 
      const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      const formattedDate = `${dateObject.getFullYear()}-${(
        dateObject.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${dateObject.getDate().toString().padStart(2, "0")}`;
      return formattedDate;
    },
    transformSebmitDate(date){
      const parts = date.split('-'); 
      const dateObject = new Date(`${parts[0]}-${parts[1]}-${parts[2]}`);
      const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
      return formattedDate
    }
  },
};
</script>
