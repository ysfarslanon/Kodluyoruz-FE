document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getApi);

function getTextFile() {
  fetch("./helpers/textfile.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML += data;
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
        output += `<li>Başlık: ${article.title} - İçerik: ${article.body}</li>`;
      });
      output += "</ul>";
      document.getElementById("output").innerHTML += output;
    });
}

function getApi() {
    fetch("https://api.github.com/users")
    .then(res=>{ return res.json();})
    .then(data => {
        let output = "<ul>";
      data.forEach((user) => {
        output += `<li>Kullanıcı adı: ${user.login}</li>`;
      });
      output += "</ul>";
      document.getElementById("output").innerHTML += output;
    })
}