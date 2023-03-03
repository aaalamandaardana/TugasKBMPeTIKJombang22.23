<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Mahasantri (Created by Alamanda Ardana) - Tugas Mandiri 3 Laravel</title>
    <style>
        table, tr, th, td {
            border: solid 1px black;
        }
        th {
            text-align: center;
        }
        th, td {
            padding: 10px;
        }
    </style>
</head>

<body>
    <h1>Data Mahasantri</h1>

    <table>
        <thead>
            <tr>
                @foreach ($kolom as $kol)
                    <th>{{ $kol }}</th>
                @endforeach
            </tr>
        </thead>
        
        <tbody>
            @php
                $nomor = 1;
            @endphp
            @foreach ($mhs as $row)
                <tr>
                    <th>{{ $nomor++ }}</th>
                    <td>{{ $row['nama'] }}</td>
                    <td>{{ $row['asal'] }}</td>
                </tr>
            @endforeach
        </tbody>
        
    </table>
</body>

</html>