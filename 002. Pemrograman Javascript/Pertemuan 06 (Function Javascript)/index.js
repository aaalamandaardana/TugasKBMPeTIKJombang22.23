let hitung = () => {
    // Inisialisasi Variabel
    let a1 = parseInt(document.getElementById("angka1").value);
    let a2 = parseInt(document.getElementById("angka2").value);
    let opsi = kalkulator.operasi.value;

    let keterangan = document.getElementById("keterangan");

    // -----------------------------------------


    // Membuat Operator Percabangan dari Operasi Kalkulator
    
    // Pertambahan
    if (opsi == "tambah") {
        keterangan.innerText = a1 + a2; 
     } 

     // Pengurangan
    else if (opsi == "kurang") {
        keterangan.innerText = a1 - a2;
    } 

    // Perkalian
    else if (opsi == "kali") {
        keterangan.innerText = a1 * a2;
    }
        
    // Pembagian
    else if (opsi = "bagi") {
        keterangan.innerText = a1 / a2;
    }
    
}
