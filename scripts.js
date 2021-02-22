const links = document.querySelectorAll('.product-time-options a')

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()

    const el = e.target
    const parent = el.closest('.product')
    const priceTime = parent.querySelector('.product-price-time')

    const allLinks = parent.querySelectorAll('.product-time-options a')
    allLinks.forEach(link => {
      link.classList.remove('selected')
    })
    el.classList.add('selected')

    const price = el.getAttribute('data-price')
    const time = el.getAttribute('data-time')

    if (price) {
      parent.querySelector('.product-price span').innerHTML = price
    }

    if (time) {
      parent.querySelector('.product-time span').textContent = time
    }

    priceTime.classList.add('blink')
    setTimeout(function() {
      priceTime.classList.remove('blink')
    },200)
  })
})
