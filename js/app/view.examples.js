(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Views.ExamplesView = Backbone.View.extend({
    events: {
      'click .example': 'openExample'
    },
    initialize: function(options) {
      this.options = options;
      _.bindAll(this);
    },
    openExample: function(e) {
      var $el, zoom;
      $el = $(e.target);
      zoom = new GAGBrand.Views.ZoomView({
        src: $el.data('src'),
        tagName: 'div',
        className: 'zoom'
      });
      $('html').append(zoom.el);
    }
  });

}).call(this);
