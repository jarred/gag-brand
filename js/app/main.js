(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Main = {
    appModel: new Backbone.Model(),
    app: $.sammy(function() {
      this.get('#/:section', function() {
        var _this = this;
        _.each($('.section'), function(el) {
          var $el;
          $el = $(el);
          if ($el.attr('id') === _this.params.section) {
            $el.trigger('show');
          } else if ($el.hasClass('visible')) {
            $el.trigger('hide');
          }
        });
        GAGBrand.Main.appModel.trigger('change');
        _.each($('#navigation a'), function(el) {
          var $el, $parent, href;
          $el = $(el);
          $parent = $el.parents('li');
          href = $el.attr('href').replace('#/', '');
          if (href === _this.params.section) {
            $parent.addClass('current');
          } else if ($parent.hasClass('current')) {
            $parent.removeClass('current');
          }
        });
        $('body, html').scrollTop(6);
        $('body, html').animate({
          scrollTop: 0
        }, 100);
      });
    }),
    init: function() {
      var _this = this;
      this.extendViews();
      if (window.location.hash === '' || window.location.hash === null) {
        window.location.hash = '/introduction';
      }
      this.appModel.bind('extend-views', this.extendViews);
      setTimeout(function() {
        return _this.app.run();
      }, 100);
    },
    extendViews: function() {
      var _this = this;
      _.each($('.extend'), function(el) {
        var $el, name, view;
        $el = $(el);
        name = $el.data('view');
        if ((name != null) && (GAGBrand.Views[name] != null)) {
          view = new GAGBrand.Views[name]({
            el: el,
            appModel: _this.appModel
          });
          $el.removeClass('extend');
        }
      });
    }
  };

  GAGBrand.Main.init();

}).call(this);
