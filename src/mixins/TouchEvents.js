const TouchEvents = {
  data: function() {
    return {
      points: [],
      clicked: false,
      vector: {},
      ctrlKey: false,
    };
  },
  mounted: function() {
    this.$el.onwheel = this.wheel;
    this.$el.onmousedown = this.click;
    this.$el.onmouseup = this.click;
    document.addEventListener("keydown", this.keyDown, false);
  },
  methods: {
    click: function(e) {
      this.clicked = !this.clicked;
      if(this.clicked){
        this.$set(this.vector,'p1', {x: e.clientX, y: e.clientY})
        this.$set(this.vector,'p2', null)
        this.setCursor('move');
      }
      else {
        this.$set(this.vector,'p2', {x: e.clientX, y: e.clientY});
        this.setCursor('default');
      }
    },
    keyDown: function(e){
      if(e.ctrlKey){
        this.ctrlKey = true;
        document.removeEventListener('keydown', this.keyDown, false);
        document.addEventListener("keyup", this.keyUp, false);
        document.addEventListener("mousemove", this.mousemove, false);
        this.setCursor('move');
      }
    },
    keyUp: function(e){
      this.ctrlKey = false;
      document.removeEventListener('keyup', this.keyUp, false);
      document.addEventListener("keydown", this.keyDown, false);
      document.removeEventListener("mousemove", this.mousemove, false);
      this.setCursor('default');
    },
    mousemove: function(e) {
      this.rotate(e.clientX,e.clientY,e.movementX,e.movementY);
    },
    setCursor: function(cursor){
      document.body.style.cursor = cursor;
    }
  },
  watch: {
    vector: {
      handler: function(v) {
        if(v.p2!=null && !this.ctrlKey) this.pan(this.vector);
      },
      deep: true
    }
  }
};

export default TouchEvents;
