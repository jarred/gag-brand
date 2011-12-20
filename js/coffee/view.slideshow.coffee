GAGBrand = window.GAGBrand ||= {}
GAGBrand.Views ||= {}

GAGBrand.Views.SlideshowView = Backbone.View.extend
  
  initialize: (@options) ->
    _.bindAll @
    @total = @$('.slide').length
    @showSlide 0
    return

  showSlide: (n) ->
    @currentSlide = n
    _.each @$('.slide'), (slide, index) =>
      $slide = $(slide)
      if index == n
        $slide.addClass 'visible'
      else if $slide.hasClass 'visible'
        $slide.removeClass 'visible'
      return
    @int = setTimeout @showNextSlide, 6000
    return

  showNextSlide: () ->
    if @currentSlide + 1 < @total
      @showSlide @currentSlide + 1
    else
      @showSlide 0
    return