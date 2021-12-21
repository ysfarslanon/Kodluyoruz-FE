document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getApi);

let text1 = document.querySelector(".text-1");
let text2 = document.querySelector(".text-2");
let text3 = document.querySelector(".text-3");

function getTextFile() {
  fetch("./helpers/textfile.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      let div = document.createElement("div");
      div.innerHTML = data;
      text1.appendChild(div);
    });
}

function getJSON() {
  fetch("./helpers/article.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "<ul>";
      data.forEach((article) => {
        output += `<li>
        <div class="card" style="width: 18rem;">
        <img src="${article.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${article.text}</h5>
          <p class="card-text">${article.body}</p>
        </div>
      </div>
        </li>`;
      });
      
      output += "</ul>";
      text2.innerHTML = output;
    });
}

function getApi() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "<ul>";
      data.forEach((user) => {
        output += `<li>Kullanıcı adı: ${user.login}</li>`;
      });
      output += "</ul>";
      document.querySelector(".text-3").innerHTML += output;
    });
}
