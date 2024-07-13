<script setup>
defineProps({
  url: { type: String },
  size: { type: Number, default: 120 },
})

</script>
<template>
  <img class="avatar-img avater-container" :src="url" alt="" :style="{
    width: size + 'px',
    height: size + 'px',
  }" />
</template>


<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  background-color: azure;
  margin: 0 auto;
}
</style>