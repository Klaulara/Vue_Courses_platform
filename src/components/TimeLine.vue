<template>
  <div class=" text-start text-secondary">
    <p class="fw-bold text-secondary pequeña">Información</p>
    <div class="single-timeline-area">
      <div
        class="timeline-date wow fadeInLeft"
        data-wow-delay="0.1s"
        style="
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeInLeft;
        "
      >
      <div class="purple"></div>
    </div>
      <div id="primary" class="row marginTop">
        <div class="timeline-text">
            <p class="pequeña mb-0 ">Costo: <span class="fw-bold">{{ costo }}</span></p>
          <p class="pequeña mt-0">Duración: {{ duracion }}</p>
        </div>
      </div>
    </div>
    <div class="single-timeline-area">
      <div
        class="timeline-date wow fadeInLeft"
        data-wow-delay="0.1s"
        style="
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeInLeft;
        "
      ><div class="green"></div></div>
      <div id="primary" class="row marginTop">
        <div class="timeline-text">
          <p class="pequeña mb-0">Cupos: <span class="fw-bold">{{ cupos }}</span></p>
          <p class="pequeña mt-0">Completado: {{ completado }}</p>
        </div>
      </div>
    </div>
    <div class="single-timeline-area">
      <div
        class="timeline-date wow fadeInLeft"
        data-wow-delay="0.1s"
        style="
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeInLeft;
        "
      ><div class="purple"></div></div>
      <div id="primary" class="row marginTop">
        <div class="timeline-text">
            <p class="pequeña mb-0">Fecha de Registro:</p>
          <p class="pequeña mt-0">{{ fecha_registro }}</p>
        </div>
      </div>
    </div><div class="single-timeline-area">
      <div
        class="timeline-date wow fadeInLeft"
        data-wow-delay="0.1s"
        style="
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeInLeft;
        "
      ><div class="green"></div></div>
      <div id="primary" class="row marginTop">
        <div class="timeline-text">
            <p class="pequeña mb-0">Descripción:</p>
          <p class="pequeña mt-0">{{ descripcion }}</p>
        </div>
      </div>
    </div>
    
  
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
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
  }
};
</script>

<style scoped>
body {
  margin-top: 20px;
}
.timeline_area {
  position: relative;
  z-index: 1;
}
.marginTop {
  margin-top: 10px;
}
.single-timeline-area {
  position: relative;
  z-index: 1;
  padding-left: 80px;
}
.single-timeline-area .timeline-date {
  position: absolute;
  height: 120%;
  top: -10px;
  left: 0;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-right: 60px;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .timeline-date {
    width: 100px;
  }
}
.single-timeline-area .timeline-date::after {
  position: absolute;
  width: 3px;
  height: 100%;
  content: "";
  background-color: #dfdada;
  top: 0;
  right: 30px;
  z-index: 1;
}
.single-timeline-area .timeline-date::before {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: whitesmoke;
  content: "";
  top: 30%;
  right: 16px;
  z-index: 5;
  margin-top: -5.5px;
  box-shadow: #020710;
}
.purple{
    position: absolute;
    background-color: #8443ac;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 36%;
  right: 20px;
  z-index: 6;
  margin-top: -5.5px;
}
.green{
    position: absolute;
    background-color: #4caf50;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 36%;
  right: 20px;
  z-index: 6;
  margin-top: -5.5px;
}
.single-timeline-area .timeline-date p {
  margin-bottom: 0;
  color: #020710;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
}
.single-timeline-area .single-timeline-content {
  position: relative;
  z-index: 1;
  padding: 30px 30px 25px;
  border-radius: 6px;
  margin-bottom: 15px;
  margin-top: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  border: 1px solid #ebebeb;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .single-timeline-content {
    padding: 20px;
  }
}
.single-timeline-area .single-timeline-content .timeline-icon {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: #f1c40f;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.timeline-icon-red {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: #fa8072;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.timeline-icon-green {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: #90ee90;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.timeline-icon-blue {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  background-color: #87cefa;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.single-timeline-area .single-timeline-content .timeline-icon i {
  color: #ffffff;
  line-height: 30px;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
  font-size: 13px;
  margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
  background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
  color: #3f43fd;
}
.pequeña {
  font-size: smaller;
}
</style>
