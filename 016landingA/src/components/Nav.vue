<template>
  <div class="navbar" :class="{navbarOpen: isActive}">
    <div class="navBox">
      <div class="boxLogo">
        <div class="logo">
          <h2>ArchiModern</h2>
        </div>
        <div class="burger" @click="openMenu">
          <span class="block block1"></span>
          <span class="block block2"></span>
          <span class="block block3"></span>
        </div>
      </div>
      <div class="menuBlock">
        <ul class="navigationMenu">
          <li>
            <a @click="openMenu(); pageSelected = 'heropage'">Home</a>
          </li>
          <li>
            <a @click="openMenu(); pageSelected = 'aboutpage'">About</a>
          </li>
          <li>
            <a @click="openMenu(); pageSelected = 'infopage'">Info</a>
          </li>
          <li>
            <a @click="openMenu(); pageSelected = 'gridpage'">Projects</a>
          </li>
          <li>
            <a @click="openMenu(); pageSelected = 'contactpage'">Contact</a>
          </li>
        </ul>
        <ul class="socialMenu">
          <li class="socialIcon">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="socialIcon">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="socialIcon">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="socialIcon">
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageSelected: "",
      isActive: false,
      burgerActive: true,
      arrowActive: false
    };
  },
  methods: {
    openMenu: function() {
      this.isActive = !this.isActive;
    },
    closeMenu: function() {
      console.log("Close");
      this.isActive = !this.isActive;
    }
  },
  watch: {
    pageSelected: function() {
      this.$emit("pageWasChanged", this.pageSelected);
    }
  }
};
</script>
