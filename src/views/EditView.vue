<template>
  <div>
    <EditCourse :course="course" />
  </div>
</template>

<script>
import EditCourse from '@/components/EditCourse.vue';
export default {
  name: "EditView",
  data() {
    return {
    };
  },
  computed: {
    course() {
        let id = this.$route.params.id;
      return this.$store.getters.getCursobyId(parseInt(id))
    },
  },
    components: {
        EditCourse,
    },
};
</script>
