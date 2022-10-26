// Menambahkan Elemen Title
document.getElementsByTagName("head")[0].appendChild(document.createElement("title"));
document.getElementsByTagName("title")[0].innerText = "Alamanda Ardana - Tugas Mandiri 1 JavaScript";

// Supaya Isi Ada di Tengah Halaman
document.getElementsByTagName("body")[0].appendChild(document.createElement("center"));

// Membuat Judul Form Login
var judul = document.getElementsByTagName("center")[0].appendChild(document.createElement("h1"));
document.getElementsByTagName("h1")[0].innerText = "Program Login Sederhana dengan DOM JavaScript";

// Masuk ke Form
var form = document.getElementsByTagName("center")[0].appendChild(document.createElement("form"));
document.getElementsByTagName("form")[0].appendChild(document.createElement("br"));

// Menambahkan Elemen Inputan Username
var username = document.createElement("input");
username.setAttribute("type","text");
username.setAttribute("placeholder","Masukkan Username");
username.setAttribute("style", "margin-right: 3rem")
form.appendChild(username);

// Menambahkan Elemen Inputan Password
var password = document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("placeholder","Masukkan Password");
password.setAttribute("style", "margin-right: 3rem")
form.appendChild(password);

// Menambahkan Elemen Button Login
var submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("value","Login");
form.appendChild(submit);