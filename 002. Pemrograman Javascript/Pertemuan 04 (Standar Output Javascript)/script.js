// TUGAS MANDIRI 4 JAVASCRIPT
const teks = "Merah Putih";
const teks1 = "Merah";
const teks2 = "Putih";

// Soal 1 : Ubahlah variable teks menjadi uppercase
const teksBesar1 = teks1.toUpperCase();
const uppercase1 = document.getElementById("uMerah");
uppercase1.innerText = teksBesar1;

const teksBesar2 = teks2.toUpperCase();
const uppercase2 = document.getElementById("uPutih");
uppercase2.innerText = teksBesar2;


// Soal 2 : Ubahlah variable teks menjadi lowercase
const teksKecil1 = teks1.toLowerCase();
const lowercase1 = document.getElementById("lMerah");
lowercase1.innerText = teksKecil1;

const teksKecil2 = teks2.toLowerCase();
const lowercase2 = document.getElementById("lPutih");
lowercase2.innerText = teksKecil2;

// Soal 3 : Ubahlah “Putih” menjadi “Muda” dalam variable teks
const teksBaru = teks.replace("Putih", "Muda");
const ubahTeks = document.getElementById("ubahTeks");
ubahTeks.innerText = teksBaru;

// Bonus : Ukurlah Panjang (length) dari variable teks (dari value variable teks awal)
const panjang_teks = teks.length;
const panjang = document.getElementById("panjang");
panjang.innerText = panjang_teks;

// Soal 4 : Ukurlah Panjang (length) dari variable teks (dari value variable teks terbaru)
const panjang_teksBaru = teksBaru.length;
const panjangBaru = document.getElementById("panjangBaru");
panjangBaru.innerText = panjang_teksBaru;