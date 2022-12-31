function notifJawaban() {
    let jawaban = document.getElementById("inputan").value;
    let angka = parseInt(jawaban);
    let hasilCek;
    if (angka % 2 == 0) {
        hasilCek = "angka genap";
    }
    else {
        hasilCek = "angka ganjil";
    }
    alert(angka + " merupakan " + hasilCek)
}

function main() {
    prompt('Bagaimana kabarmu hari ini?');

    const tombol = document.getElementById("kirim");
    tombol.addEventListener("click", notifJawaban);
}

main();