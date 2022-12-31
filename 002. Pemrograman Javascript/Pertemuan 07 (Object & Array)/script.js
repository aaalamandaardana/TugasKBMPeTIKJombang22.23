// Alamanda Ardana - TUGAS MANDIRI PERTEMUAN 7 JAVASCRIPT

// Membuat Perubahan Isi Variabel
let isi = document.getElementById("isi");

// Bonus : Buat Function Kembali ke Awal
let awal = () => {
    isi.innerText = "Gajah, Ikan, Harimau";
}
awal();

// -------------------------------------------------

// Soal 1 : Buatlah Array hewan yang berisi “Gajah”, “Ikan” dan “Harimau”
let hewan = [" Gajah", " Ikan", " Harimau"];
isi.innerText = hewan;

// Soal 2 : Buatlah function yang dapat menambahkan “Gagak” ke dalam Array hewan
// Kalo "Gagak" mau dijadikan indeks terakhir
let pushGagak = () => {
    hewan.push(" Gagak");
    isi.innerText = hewan;
} 

// Kalo "Gagak" mau dijadikan indeks 0
let unshiftGagak = () => {
    hewan.unshift(" Gagak");
    isi.innerText = hewan;
}

// Soal 3 : Buatlah function yang dapat mengubah indeks 2 menjadi “Kucing”
let jadiKucing = () => {
    hewan[2] = " Kucing";
    isi.innerText = hewan;
} 

// Soal 4 : Buatlah function yang dapat menghapus indeks 0
let hapusi0 = () => {
    hewan.shift();
    isi.innerText = hewan;
}

// Bonus : Buat Function yang dapat menghapus indeks terakhir
let hapusi99 = () => {
    hewan.pop();
    isi.innerText = hewan;
}

