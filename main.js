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

function toggle(){
  var accordeonBody = document.querySelector(".accordion-dropdown")
  accordeonBody.classList.toggle('show')
  var accordeonArrow = document.querySelector(".arrow")
  accordeonArrow.classList.toggle('open')
}

function accordeon(data, node){
  for (var user of data) {
    var sectionHTML = document.createElement("section")
    sectionHTML.className = "accordion"
    sectionHTML.innerHTML = `  
      <div class="accordion-header">
        <h2>${user.name}</h2>
        <img class="arrow" src="./img/arrow.png" alt="">
      </div>
      <div class="accordion-dropdown main">
          <div class="avatar"></div>
          <div class="block-content">
            <div class="inn"><p>inn</p>: ${user.inn}</div>
            <div class="name"><p>name</p>: ${user.name}</div>
            <div class="age"><p>age</p>: ${user.age}</div>
          </div>
          <div class="block-content2">
            <div class="email"><p>email</p>: ${user.email}</div>
            <div class="city"><p>city</p>: ${user.city}</div>
            <div class="gender"><p>gender</p>: ${user.gender}</div>
          </div>
      </div>
    `
    var accordionDropdown = sectionHTML.querySelector("img")
    accordionDropdown.onclick = toggle
    node.appendChild(sectionHTML)
  }
}


