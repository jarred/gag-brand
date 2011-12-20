(function() {
  var GAGBrand;

  GAGBrand = window.GAGBrand || (window.GAGBrand = {});

  GAGBrand.Views || (GAGBrand.Views = {});

  GAGBrand.Main = {
    appModel: new Backbone.Model(),
    app: $.sammy(function() {
      this.get('#:section', function() {
        var $section;
        var _this = this;
        $('.section').removeClass('visible');
        $section = $("#" + this.params.section);
        $section.addClass('visible');
        $section.trigger('visible');
        GAGBrand.Main.appModel.trigger('change');
        _.each($('#navigation a'), function(el) {
          var $el, $parent, href;
          $el = $(el);
          $parent = $el.parents('li');
          href = $el.attr('href').replace('#', '');
          if (href === _this.params.section) {
            $parent.addClass('current');
          } else if ($parent.hasClass('current')) {
            $parent.removeClass('current');
          }
        });
      });
    }),
    init: function() {
      if (window.location.hash === '' || window.location.hash === null) {
        window.location.hash = 'introduction';
      }
      this.app.run();
      this.extendViews();
    },
    extendViews: function() {
      var _this = this;
      console.log('extendViews');
      _.each($('.extend'), function(el) {
        var $el, name, view;
        $el = $(el);
        name = $el.data('view');
        if ((name != null) && (GAGBrand.Views[name] != null)) {
          view = new GAGBrand.Views[name]({
            el: el
          });
        }
      });
    }
  };

  GAGBrand.Main.init();

}).call(this);
