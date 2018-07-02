const TouchEvents = {
  data: function() {
    return {
      points: []
    };
  },
  mounted: function() {
    this.$el.onwheel = this.wheel;
  }
};

export default TouchEvents;
