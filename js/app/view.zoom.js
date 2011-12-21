(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Views.ZoomView = Backbone.View.extend({
    events: {
      'click a.close': 'close'
    },
    initialize: function(options) {
      this.options = options;
      _.bindAll(this);
      this.$el = $(this.el);
      this.render();
    },
    render: function() {
      this.$img = $("<img src=\"" + this.options.src + "\"/>");
      this.$img.bind('load', this.imageLoaded);
      this.$el.append(this.$img);
      this.$el.append("<a class=\"close\" href=\"#\">&times;</a>");
    },
    imageLoaded: function() {
      this.$img.css({
        marginLeft: 0 - (this.$img.width() / 2),
        marginTop: 0 - (this.$img.height() / 2)
      });
    },
    close: function(e) {
      e.preventDefault();
      this.$el.remove();
    }
  });

}).call(this);
