"use strict"
var users = [{

  "id": 1,

  "name": "Veronika",

  "email": "vgroves0@vistaprint.com",

  "age": 50,

  "city": "Javhlant",

  "gender": "Female",

  "inn": 2604048463

  }, {

  "id": 2,

  "name": "Correy",

  "email": "cskidmore1@shop-pro.jp",

  "age": 50,

  "city": "Junglinster",

  "gender": "Male",

  "inn": 5396152028

  }, {

  "id": 3,

  "name": "Chrissie",

  "email": "csobieski2@go.com",

  "age": 40,

  "city": "Mercaderes",

  "gender": "Female",

  "inn": 7437115687

  }, {

  "id": 4,

  "name": "Adrianna",

  "email": "awharrier3@hud.gov",

  "age": 33,

  "city": "Manuel Cavazos Lerma",

  "gender": "Non-binary",

  "inn": 6292774004

  }, {

  "id": 5,

  "name": "Fairlie",

  "email": "feliasen4@bing.com",

  "age": 34,

  "city": "Радовиш",

  "gender": "Female",

  "inn": 5943534093
  }]

var contentHTML = document.querySelector(".content")
accordeon(users, contentHTML)
toggle(contentHTML)

function toggle() {
  var accordeonBody = document.querySelector(".accordion-dropdown")
  var accordeonArrow = document.querySelector(".arrow")
  var content = accordeonBody.classList.contains("hide")
  if (content) {
    accordeonBody.classList.replace("hide", "show")
  } else {
    accordeonBody.classList.replace("show", "hide")
  }
  var arrowHTML = accordeonArrow.classList.contains("hide")
  if (arrowHTML) {
    accordeonArrow.classList.replace("hide", "show")
  } else {
    accordeonArrow.classList.replace("show", "hide")
  }
}

function accordeon(data, node) {
  for (var use of data) {
    var sectionHTML = document.createElement("section")
    sectionHTML.className = "accordion"
    sectionHTML.innerHTML = `  
      <div class="accordion-header borRad">
        <h2>${use.name}</h2>
        <div><img class="arrow hide" src="./img/arrow.png" alt=""></div>
      </div>
      <div class="accordion-dropdown hide main borRad">
          <div class="avatar"></div>
          <div class="block-content">
            <div class="inn"><p>inn</p>: ${use.inn}</div>
            <div class="name"><p>name</p>: ${use.name}</div>
            <div class="age"><p>age</p>: ${use.age}</div>
          </div>
          <div class="block-content2">
            <div class="email"><p>email</p>: ${use.email}</div>
            <div class="city"><p>city</p>: ${use.city}</div>
            <div class="gender"><p>gender</p>: ${use.gender}</div>
          </div>
      </div>
    `
    var accordionDropdown = sectionHTML.querySelector("img")
    accordionDropdown.onclick = toggle
    node.appendChild(sectionHTML)
  }
}


