<template>
  <div
    class="modal fade text-secondary"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
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
                v-model="fechaHoy"
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

            <button
              id="botonSubmit"
              type="submit"
              class="btn btn-success"
            >
              Agregar
            </button>
            <button
              @click="limpiarFormulario"
              type="button"
              class="btn btn-warning"
            >
              Limpiar formulario
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data() {
    return {
      nombre: "",
      url_imagen: "",
      cupos: "",
      inscritos: "",
      duracion: "",
      fechaHoy: new Date().toISOString().substr(0, 10),
      costo: "",
      descripcion: "",
    };
  },
  methods: {
    onSubmit() {
      if(this.inscritos > this.cupos){
        alert("El número de inscritos no puede ser mayor al número de cupos")
        return
      }
      this.$store.commit("ADD", {
        id: this.lastId + 1,
        nombre: this.nombre,
        url_imagen: this.url_imagen,
        cupos: parseInt(this.cupos),
        inscritos: parseInt(this.inscritos),
        duracion: this.duracion,
        fecha_registro: this.transformDate(this.fechaHoy),
        costo: parseInt(this.costo),
        descripcion: this.descripcion,
        completado: false,
      });
      this.limpiarFormulario();
      const dismissElement = document.querySelector(
        '[data-bs-dismiss="modal"]'
      );
      if (dismissElement) {
        dismissElement.click();
      }
    },
    limpiarFormulario() {
      this.nombre = "";
      this.url_imagen = "";
      this.cupos = "";
      this.inscritos = "";
      this.duracion = "";
      this.fechaHoy = new Date().toISOString().substr(0, 10),
      this.costo = "";
      this.descripcion = "";
    },
    transformDate(date){
      const parts = date.split('-'); 
      const dateObject = new Date(`${parts[0]}-${parts[1]}-${parts[2]}`);
      const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
      return formattedDate
    }
  },
  computed: {
    lastId() {
      return this.$store.getters.getLastId;
    },
  },
  components: {},
};
</script>
