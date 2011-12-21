GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Views.ZoomView = Backbone.View.extend
  events:
    'click a.close': 'close'

  initialize: (@options) ->
    _.bindAll @
    @$el = $(@el)
    @render()
    return

  render: ->
    @$img = $ "<img src=\"#{@options.src}\"/>"
    @$img.bind 'load', @imageLoaded
    @$el.append @$img
    @$el.append "<a class=\"close\" href=\"#\">&times;</a>"
    return

  imageLoaded: ->
    @$img.css
      marginLeft: 0-(@$img.width()/2)
      marginTop: 0-(@$img.height()/2)
    return

  close: (e) ->
    e.preventDefault()
    @$el.remove()
    return