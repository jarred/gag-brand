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
      this.data = this.$el.data();
      if (this.data.page != null) this.loadPage();
    },
    show: function(e) {
      this.$el.addClass('visible');
      this.$el.bind('hide', this.hide);
    },
    hide: function(e) {
      this.$el.removeClass('visible');
      this.$el.unbind('hide', this.hide);
    },
    loadPage: function() {
      this.$el.load(this.data.page, this.pageLoaded);
    },
    pageLoaded: function() {
      this.options.appModel.trigger('extend-views');
    }
  });

}).call(this);
