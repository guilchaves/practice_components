const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  //since the height cannot be a fixed number as it can have a different values on different viewports, this equation gives some space for better visual positioning of elements
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    //@getBoundingClientRect -> this method returns a DOMRect object providing information about the size of an elements and its position relative to the viewport
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
