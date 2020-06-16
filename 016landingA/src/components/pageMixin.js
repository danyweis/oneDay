export default {
  data: function() {
    return {
      pageSelected: '',
    }
  },
  watch: {
    pageSelected: function() {
      this.$emit('pageWasChanged', this.pageSelected)
    },
  },
}
