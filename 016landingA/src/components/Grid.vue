<template>
  <div class="heroBox gridContent">
    <div class="gridContentBox">
      <div class="gridBox">
        <div class="gridImage gridImage1" :style="grid1"></div>
        <div class="gridText gridTextR">
          <h3>Title of Image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repellendus distinctio magnam optio quia voluptatum corporis hic mollitia necessitatibus dolorem dolorum facilis officiis expedita ab earum, dicta iure aliquid quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iusto dicta. Ab quas, dolores, omnis molestias quos sit architecto, dolore minus quibusdam explicabo dignissimos! Eligendi quibusdam consequatur quisquam fugit nostrum!
          </p>
        </div>
      </div>
      <div class="gridBox gridBoxTurn">
        <div class="gridText gridTextL">
          <h3>Title of Image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repellendus distinctio magnam optio quia voluptatum corporis hic mollitia necessitatibus dolorem dolorum facilis officiis expedita ab earum, dicta iure aliquid quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iusto dicta. Ab quas, dolores, omnis molestias quos sit architecto, dolore minus quibusdam explicabo dignissimos! Eligendi quibusdam consequatur quisquam fugit nostrum!
          </p>
        </div>
        <div class="gridImage gridImage2" :style="grid2"></div>
      </div>
      <div class="gridBox">
        <div class="gridImage gridImage3" :style="grid3"></div>
        <div class="gridText gridTextR">
          <h3>Title of Image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repellendus distinctio magnam optio quia voluptatum corporis hic mollitia necessitatibus dolorem dolorum facilis officiis expedita ab earum, dicta iure aliquid quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iusto dicta. Ab quas, dolores, omnis molestias quos sit architecto, dolore minus quibusdam explicabo dignissimos! Eligendi quibusdam consequatur quisquam fugit nostrum!
          </p>
        </div>
      </div>
      <div class="gridBox gridBoxTurn">
        <div class="gridText gridTextL">
          <h3>Title of Image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repellendus distinctio magnam optio quia voluptatum corporis hic mollitia necessitatibus dolorem dolorum facilis officiis expedita ab earum, dicta iure aliquid quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iusto dicta. Ab quas, dolores, omnis molestias quos sit architecto, dolore minus quibusdam explicabo dignissimos! Eligendi quibusdam consequatur quisquam fugit nostrum!
          </p>
        </div>
        <div class="gridImage gridImage4" :style="grid4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      grid1: "background-image: url(images/016pic3.jpg)",
      grid2: "background-image: url(images/016pic4.jpg)",
      grid3: "background-image: url(images/016pic5.jpg)",
      grid4: "background-image: url(images/016pic6.jpg)"
    };
  }
};
</script>

<style>
</style>
