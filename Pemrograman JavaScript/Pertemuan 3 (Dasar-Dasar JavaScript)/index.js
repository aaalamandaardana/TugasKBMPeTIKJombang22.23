function notifJawaban() {
    confirm("Yakin?");
    
    const jawaban = document.getElementById("inputan").value;
    jawaban == 2 ? alert("Selamat, Jawaban Kamu Benar!") : alert("Jawaban Kamu Salah. Yuk Coba Lagi!"); 
}

function main() {
    prompt('Ketik "siap" jika kamu sudah siap mengikuti kuis ini');

    const tombol = document.getElementById("kirim");
    tombol.addEventListener("click", notifJawaban);
}

main();