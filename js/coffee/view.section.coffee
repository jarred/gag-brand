GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Views.SectionView = Backbone.View.extend
  
  initialize: (@options) ->
    _.bindAll @
    @$el = $(@el)
    @$el.bind 'show', @show
    return
  
  show: (e) ->
    @$el.addClass 'visible'
    @$el.bind 'hide', @hide
    # propagate command to child views
    return

  hide: (e) ->
    @$el.removeClass 'visible'
    @$el.unbind 'hide', @hide
    return