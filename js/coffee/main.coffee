GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Main =
  appModel: new Backbone.Model()

  app: $.sammy () ->
    @get '#:section', () ->

      _.each $('.section'), (el) =>
        $el = $(el)
        if $el.attr('id') == @params.section
          $el.trigger 'show'
        else if $el.hasClass 'visible'
          $el.trigger 'hide'
        return
      GAGBrand.Main.appModel.trigger 'change'

      #nav stuff
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
    @extendViews()      
    @app.run()
    return

  extendViews: ->
    _.each $('.extend'), (el) =>
      $el = $(el)
      name = $el.data 'view'
      if name? && GAGBrand.Views[name]?
        view = new GAGBrand.Views[name]
          el: el
          appModel: @appModel
        $el.removeClass 'extend'
      return
    return

GAGBrand.Main.init()