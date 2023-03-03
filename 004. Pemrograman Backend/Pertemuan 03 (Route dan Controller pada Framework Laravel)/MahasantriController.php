<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MahasantriController extends Controller
{
    public function index() {
        // Array Scalar
        $mhs1 = [
            'nama' => 'Fawwaz', 
            'asal'=> 'Jakarta'
        ]; 
        $mhs2 = [
            'nama' => 'Inaya', 
            'asal'=> 'Depok'
        ];
        $mhs3 = [
            'nama' => 'Zidan', 
            'asal'=> 'Binjai'
        ];
        $mhs4 = [
            'nama' => 'Bambang', 
            'asal'=> 'Mojokerto'
        ];   
        $mhs5 = [
            'nama' => 'Unyil', 
            'asal'=> 'Bandung'
        ]; 

        $mhs = [$mhs1, $mhs2, $mhs3, $mhs4, $mhs5];
        $kolom = ['Nomor', 'Nama', 'Alamat'];

        return view('mahasantri', compact('mhs', 'kolom'));
    } 
}
?>
