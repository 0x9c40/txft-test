<template>
  <div class="add-contract">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AddContract",
};
</script>

<style lang="scss">
.add-contract {
  width: 100%;
  max-width: 880px;
  padding: 32px;

  @media (max-width: 640px) {
    padding: 16px;
  }
}
</style>