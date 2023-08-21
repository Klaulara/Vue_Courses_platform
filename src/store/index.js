import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cursos: [
      {
        id: 1,
        img: "https://i.blogs.es/545cf8/es6-logo/450_1000.png",
        nombre: "JavaScript Avanzado",
        costo: 30000,
        duracion: "2 meses",
        cupos: 20,
        inscritos: 10,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Curso con las nuevas actualizaciones de JavaScript.",
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        nombre: "CSS para principiantes",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 23,
        completado: false,
        fecha_registro: "05/03/2022",
        descripcion: "Aprendiendo estilos con CSS desde el nivel más básico.",
      },
      {
        id: 3,
        img: "https://thumbs.dreamstime.com/b/logotipo-del-javascript-136765881.jpg",
        nombre: "JavaScript Básico de 0 a 100",
        costo: 20000,
        duracion: "2 meses",
        cupos: 25,
        inscritos: 0,
        completado: true,
        fecha_registro: "05/03/2022",
        descripcion: "Programando para la web con JavaScript.",
      },
      {
        id: 4,
        img: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        nombre: "HTML Básico",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 0,
        completado: true,
        fecha_registro: "31/01/2022",
        descripcion:
          "Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.",
      },
      {
        id: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
        nombre: "Vue JS de 0 a 100",
        costo: 85500,
        duracion: "5 meses",
        cupos: 35,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:
          "Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.",
      },
      {
        id: 6,
        img: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
        nombre: "Estilos con SASS",
        costo: 45000,
        duracion: "1 mes",
        cupos: 40,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:
          "Con SASS aprenderás a escribir mejor código de CSS con todas  las funciones necesarias.",
      },
    ],
  },
  getters: {
    countCupos: (state) => {
      return state.cursos.reduce((acumulador, curso) => {
        return acumulador + curso.cupos;
      }, 0);
    },
    countInscritos: (state) => {
      return state.cursos.reduce((acumulador, curso) => {
        return acumulador + curso.inscritos;
      }, 0);
    },
    countTerminados: (state) => {
      return state.cursos.filter((curso) => curso.completado).length;
    },
    countNoTerminados: (state) => {
      return state.cursos.filter((curso) => !curso.completado).length;
    },
    countCursos: (state) => {
      return state.cursos.length;
    },
    getLastId: (state) => {
      return state.cursos[state.cursos.length - 1].id;
    },
    getCursobyId: (state) => (id) => {
      return state.cursos.find((curso) => curso.id === id);
    },
    cursoInfo: (state) => (id) => {
      const curso = state.cursos.find((curso) => curso.id === id);
      const info = {
        nombre: curso.nombre,
        costo: curso.costo,
        duracion: curso.duracion,
        cupos: curso.cupos,
        inscritos: curso.inscritos,
        completado: curso.completado,
        fecha_registro: curso.fecha_registro,
        descripcion: curso.descripcion,
      };
      return info;
    }
  },
  mutations: {
    ADD(state, curso) {
      state.cursos.push(curso);
    },
    EDIT(state, curso) {
      const index = state.cursos.findIndex((c) => c.id === curso.id);
      state.cursos[index] = curso;
    },
    DELETE(state, id) {
      const index = state.cursos.findIndex((c) => c.id === id);
      state.cursos.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {},
});
