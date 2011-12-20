(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Views.SlideshowView = Backbone.View.extend({
    initialize: function(options) {
      this.options = options;
      _.bindAll(this);
      this.total = this.$('.slide').length;
      this.showSlide(0);
    },
    showSlide: function(n) {
      var _this = this;
      this.currentSlide = n;
      _.each(this.$('.slide'), function(slide, index) {
        var $slide;
        $slide = $(slide);
        if (index === n) {
          $slide.addClass('visible');
        } else if ($slide.hasClass('visible')) {
          $slide.removeClass('visible');
        }
      });
      this.int = setTimeout(this.showNextSlide, 6000);
    },
    showNextSlide: function() {
      if (this.currentSlide + 1 < this.total) {
        this.showSlide(this.currentSlide + 1);
      } else {
        this.showSlide(0);
      }
    }
  });

}).call(this);
