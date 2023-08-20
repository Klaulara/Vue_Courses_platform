<template>
  <div class="card m-3 p-3" style="width: 24rem">
    <img :src="image" class="card-img-top" alt="image" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>
