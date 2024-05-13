// Enhancing button interactivity on hover
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)' // Slightly enlarges the button
    })
    button.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)' // Returns to normal size
    })
  })
})
