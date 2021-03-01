const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//this validation doesn't allow the current active number to be gt the number of circles
next.addEventListener('click', () => {
  currentActive < circles.length
    ? currentActive++
    : (currentActive = circles.length)

  update()
})

//this validation doesn't allow the curent active number to be a negative number
prev.addEventListener('click', () => {
  currentActive < 1 ? (currentActive = 1) : currentActive--
  update()
})

//this function adds the active class into the cicles, checking if the index number is st the current active circles
function update() {
  circles.forEach((circle, index) => {
    index < currentActive
      ? circle.classList.add('active')
      : circle.classList.remove('active')
  })

  const actives = document.querySelectorAll('.active')

  //in order to achieve the right size of the progress bar, the actives and circles were reduced by 1 in the equation, enabling the bar to be divided into 3 equal pieces
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
