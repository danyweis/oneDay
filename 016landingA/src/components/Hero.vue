<template>
  <div class="heroBox">
    <div class="img">
      <div class="card">
        <div
          class="text"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus neque .</div>
        <!-- <button class="btn btnHero" @click="pageSelected = 'gridpage'">Projects</button> -->
        <div class="btn btnHero">Link to Project</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // pageSelected: ""
    };
  }
  // watch: {
  //   pageSelected: function() {
  //     console.log("Pushed");
  //     this.$emit("pageWasChanged", this.pageSelected);
  //   }
  // }
};
</script>

<style>
</style>
