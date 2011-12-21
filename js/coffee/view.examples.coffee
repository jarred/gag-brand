GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Views.ExamplesView = Backbone.View.extend
  events:
    'click .example': 'openExample'
  initialize: (@options) ->
    _.bindAll @
    return

  openExample: (e) ->
    $el = $(e.target)
    zoom = new GAGBrand.Views.ZoomView
      src: $el.data 'src'
      tagName: 'div'
      className: 'zoom'
    $('html').append zoom.el
    return