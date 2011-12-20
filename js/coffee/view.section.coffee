GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Views.SectionView = Backbone.View.extend
  
  initialize: (@options) ->
    _.bindAll @
    @$el = $(@el)
    @$el.bind 'show', @show

    @data = @$el.data()
    if @data.page?
      @loadPage()
    return
  
  show: (e) ->
    @$el.addClass 'visible'
    @$el.bind 'hide', @hide
    return

  hide: (e) ->
    @$el.removeClass 'visible'
    @$el.unbind 'hide', @hide
    return

  loadPage: ->
    @$el.load @data.page, @pageLoaded
    return

  pageLoaded: ->
    @options.appModel.trigger 'extend-views'
    return