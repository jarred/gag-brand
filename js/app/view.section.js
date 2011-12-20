(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Views.SectionView = Backbone.View.extend({
    initialize: function(options) {
      this.options = options;
      _.bindAll(this);
      this.$el = $(this.el);
      this.$el.bind('show', this.show);
    },
    show: function(e) {
      this.$el.addClass('visible');
      this.$el.bind('hide', this.hide);
    },
    hide: function(e) {
      this.$el.removeClass('visible');
      this.$el.unbind('hide', this.hide);
    }
  });

}).call(this);
