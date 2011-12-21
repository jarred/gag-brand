GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Main =
  appModel: new Backbone.Model()

  app: $.sammy () ->
    @get '#/:section', () ->

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
        href = $el.attr('href').replace('#/', '')
        if href is @params.section
          $parent.addClass 'current'
        else if $parent.hasClass 'current'
          $parent.removeClass 'current'
        return

      #scroll stuff
      $('body, html').scrollTop 6
      $('body, html').animate
        scrollTop: 0
      , 100
      return
    return

  init: () ->
    @extendViews()    
    if window.location.hash == '' || window.location.hash == null
      window.location.hash = '/introduction'
    @appModel.bind 'extend-views', @extendViews      
    # @app.run()
    setTimeout () =>
      # this is a hack to let all the views register...
      @app.run()
    , 100
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