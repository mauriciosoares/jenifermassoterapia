$(function() {
  $('.product-time-options a').on('click', function(e) {
    e.preventDefault()
    const $el = $(e.target)
    const $parent = $(e.target).closest('.product')
    const $priceTime = $parent.find('.product-price-time')

    $parent.find('.product-time-options a').removeClass('selected')
    $el.addClass('selected')

    const price = $el.data('price')
    const time = $el.data('time')

    if (price) {
      $parent.find('.product-price span').html(price)
    }

    if (time) {
      $parent.find('.product-time span').text(time)
    }

    console.log($priceTime)
    $priceTime.addClass('blink')
    setTimeout(function() {
      $priceTime.removeClass('blink')
    },200)
  })
})