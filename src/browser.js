// ES5 Javascript functions

// function square(number) {
//   return number * number
// }

// function sayHello() {
//   return 'Hello'
// }

// console.log(square(4), sayHello())

// ES6 Javascript functions

const square = (number) => {
  return number * number
}

const sayHello = () => {
  return 'Hello'
}

console.log(square(4), sayHello())

const capitalize = (name) => {
  return name[0].toUpperCase() + name.substr(1).toLowerCase()
}

console.log(capitalize('romain'))
// => Tom
console.log(capitalize('MARIE'))
// => Marie



// Events

// wait for content to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // select al images
  const images = document.querySelectorAll('.img-clickable')

  // function to add class 'img-circle' on target
  const makeCicle = (event) => {
    event.target.classList.toggle('img-circle')
  }

  // function to add event listener on 'click' on element
  const bindEventListener = (img) => {
   img.addEventListener('click', makeCicle)
  }

  // binding event listener to all images
  images.forEach(bindEventListener)

  // function to add an image to the dom
  function addImage() {
    // create image tag + change source + heigh + append to DOM
    const newImage = document.createElement("img");
    newImage.src = "https://kitt.lewagon.com/placeholder/users/ssaunier";
    newImage.style.height = "200px";
    document.body.append(newImage);

    // bind previous event listener on new image
    bindEventListener(newImage)
  }

  // waits 2s before calling function addImage
  setTimeout(addImage, 2000);

  // preventing default behaviour of a link tag
  const links = document.querySelectorAll('.confirmable')
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      // pop up window (if ok returns true, if cancel returns false)
      if (!confirm("Are you sure?")) {
        event.preventDefault()
      }
    })
  })


  // AJAX
  // send GET request to URL
  fetch('https://swapi.co/api/people/')
  // when response comes back, is passed to .then argument
  .then((response) => response.json())
  .then((data) => {
    // appending the characters to a list
    const list = document.getElementById('starwars')
    data.results.forEach((character) => {
      const item = `<li>${character.name} is ${character.hair_color}</li>`
      list.insertAdjacentHTML('beforeend', item)
    })
  })

})
