<template>
    <div class="container">
        <h1>Setoran Hafalan</h1>
        <div class="search-bar">
            <input type="text" id="search-input" placeholder="Cari berdasarkan NIP, Nama Dosen, Surah, atau Keterangan">
            <button id="search-button">Cari</button>
        </div>
        <table class="hafalan-table">
            <thead>
                <tr>
                    <th>NIP</th>
                    <th>Nama Dosen</th>
                    <th>NO</th>
                    <th>Surah</th>
                    <th>Mulai Ayat</th>
                    <th>Sampai Ayat</th>
                    <th>Catatan</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>198606292015032007</td>
                    <td>Elvia Budianita</td>
                    <td>1</td>
                    <td>An-Naba</td>
                    <td>1</td>
                    <td>19</td>
                    <td>Lancar</td>
                    <td class="status selesai"></td>
                </tr>
                <tr>
                    <td>198606292015032007</td>
                    <td>Elvia Budianita</td>
                    <td>2</td>
                    <td>Yasin</td>
                    <td>1</td>
                    <td>30</td>
                    <td>Belum Lancar</td>
                    <td class="status berjalan">Berjalan</td>
                </tr>
                <tr>
                    <td>198606292015032007</td>
                    <td>Elvia Budianita</td>
                    <td>3</td>
                    <td>Al-Baqarah</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class="status belum-setor">Belum Setor</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}
.container{
    width: 90%;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.student-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.student-table th,
.student-table td{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.student-table th{
    background-color: #f0f0f0;
    font-weight: bold;
}

.student-table tr:nth-child(even){
    background-color: #f9f9f9;
}

.hafalan-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.hafalan-table th,
.hafalan-table td{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.hafalan-table th{
    background-color: #f9f9f9;
    font-weight: bold;
}

.hafalan-table tr:nth-child(even){
    background-color: #f9f9f9;
}

.hafalan-table .status{
    text-align: center;
}

.status.selesai{
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.status.berjalan{
    background-color: #FFC107;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.status.belum-setor{
    background-color: #DC3545;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.search-bar{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.search-bar input[type="text"]{
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex-grow: 1;
}

.search-bar button{
    background-color: #007bff;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hafalan-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.hafalan-table th,
.hafalan-table td{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.hafalan-table th{
    background-color: #f0f0f0;
    font-weight: bold;
}

.hafalan-table tr:nth-child(even){
    background-color: #f9f9f9;
}

.hafalan-table .status{
    text-align: center;
}

.status.selesai{
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.status.berjalan{
    background-color: #FFC107;
    color: white;
    padding: 5px 10px;
}
</style>