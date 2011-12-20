GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Main =
  appModel: new Backbone.Model()

  app: $.sammy () ->
    @get '#:section', () ->
      $('.section').removeClass 'visible'
      $section = $("##{@params.section}")
      $section.addClass 'visible'
      $section.trigger 'visible'
      GAGBrand.Main.appModel.trigger 'change'

      _.each $('#navigation a'), (el) =>
        $el = $(el)
        $parent = $el.parents('li')
        href = $el.attr('href').replace('#', '')
        if href is @params.section
          $parent.addClass 'current'
        else if $parent.hasClass 'current'
          $parent.removeClass 'current'
        return
      return
    return

  init: () ->
    if window.location.hash == '' || window.location.hash == null
      window.location.hash = 'introduction'
    @app.run()
    @extendViews()
    return

  extendViews: ->
    console.log 'extendViews'
    _.each $('.extend'), (el) =>
      $el = $(el)
      name = $el.data 'view'
      if name? && GAGBrand.Views[name]?
        view = new GAGBrand.Views[name]
          el: el
      return
    return

GAGBrand.Main.init()