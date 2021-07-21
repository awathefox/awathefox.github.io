/*
class WebLocation:
  __init__(str) str->location info
  host string->location base(like https://google.com/,etc.)
  query object->str after ?(like key=array)
  location string->str after #
*/
function WebLocation(str) {
  if (new.target != WebLocation) {
    throw new Error("This function cannot initialize without new");
  }
  var i = 0; //i = 0
  this.host = "";
  this.query = {};
  this.location = "";
  while (i < str.length && str[i] != "#" && str[i] != "?")
    this.host += str[i++];
  if (i == str.length) return;
  str
    .substring(i + 1, str.indexOf("#") == -1 ? str.length : str.indexOf("#"))
    .split("&")
    .forEach((element) => {
      const f = element.split("=");
      if (f.length != 2) this.query[f[0]] = "";
      this.query[f[0]] = decodeURI(f[1]);
    });
  if (str.indexOf("#") != -1) this.location = str.substr(str.indexOf("#") + 1);
}
var doc_title;
var doc_artist;
var doc_date;
var doc_id;
function read_init() {
  var process = new WebLocation(window.location.href);
  content = document.getElementById("content");
  console.log(process);
  if (
    Object.keys(process.query).indexOf("id") == -1 ||
    parseInt(process.query["id"]) == NaN
  ) {
    alert("传入数据错误。返回上一页...");
    window.location.href = document.referrer;
  }
  var content_id = parseInt(process.query["id"]);
  var content = document.getElementById("content");
  //Get CSS & Blog by JSONP
  //Basic code start
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `/blog/${content_id}/style.css`;
  css.type = "text/css";
  css.onerror = function (x) {
    var err = document.getElementById("waiting_text");
    console.error(x);
    err.innerText = "Error.For more information,please check the console.";
    return false;
  };
  document.head.appendChild(css);
  //Basic code end
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `/blog/${content_id}/init.js?randkey=${Math.random()}`;
  script.onerror = function (x) {
    var err = document.getElementById("waiting_text");
    console.error(x);
    err.innerText = "Error.For more information,please check the console.";
    return false;
  };
  document.head.appendChild(script);
  const content_html = `
    <p id="waiting_text" style="text-align: center;font-weight: bolder;">Loading...</p>
  `;
  content.innerHTML = content_html;
}
function clearContent() {
  document.getElementById("content").innerHTML = "";
}
function $info(author, date) {
  doc_artist=author;
  doc_date=date;
  var content = document.getElementById("content");
  var tnode = document.createElement("p");
  tnode.innerText =
    author +
    ` 作于 ${new Date(date).toLocaleString()}(UTC+${
      0 - new Date().getTimezoneOffset() / 60
    })`;
  tnode.style.textAlign = "center";
  tnode.id = "content_info";
  tnode.style.color = "silver";
  content.appendChild(tnode);
  console.log([parseInt((new WebLocation(window.location.href)).query["id"]),doc_title,doc_date,doc_artist]);
}
function $title(title) {
  doc_title=title;
  var content = document.getElementById("content");
  var tnode = document.createElement("h1");
  tnode.innerText = title;
  tnode.style.textAlign = "center";
  tnode.id = "content_title";
  content.appendChild(tnode);
}
