<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div><slot name="user-name"></slot></div>
      <div class="time"><slot name="time"></slot></div>
      <div><slot name="karma"></slot></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>