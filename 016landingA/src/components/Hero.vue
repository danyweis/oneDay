<template>
  <div class="heroBox">
    <div class="img" :style="heroBG">
      <div class="card">
        <div
          class="text"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus neque .</div>
        <div class="btn btnHero">Some Link</div>
        <!-- <div class="btn btnHero" @click="pageSelected = 'gridpage'">See Projects</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import pageMixin from "./pageMixin.js";
export default {
  data: function() {
    return {
      heroBG: "background-image: url(images/016pic1.jpg)"
    };
  }
  // mixins: [pageMixin],
};
</script>


