const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  //this validation doesn't allow the current active number to be gt the number of circles
  currentActive < circles.length
    ? currentActive++
    : (currentActive = circles.length)

  update()
})

prev.addEventListener('click', () => {
  currentActive < 1 ? (currentActive = 1) : currentActive--
  update()
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  //in order to achieve the right size of the progress bar, the actives and circles were reduced by 1 in the equation, enabling the bar to be divided into 3 pieces
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
