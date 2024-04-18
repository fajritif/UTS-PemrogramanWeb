<template>
    <div class="container">
        <header>
            <h1>Setoran Hafalan</h1>
            <nav>
                <ul>
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Setoran</a></li>
                    <li><a href="#">Riwayat</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="setoran-form">
                <h2>Setoran Hafalan</h2>
                <form action="#">
                    <div class="input-group">
                        <label for="juz">Juz:</label>
                        <input type="number" id="juz" name="juz" required>
                    </div>
                    <div class="input-group">
                        <label for="halaman">Halaman:</label>
                        <input type="number" id="halaman" name="halaman" required>
                    </div>
                    <div class="input-group">
                        <label for="ketentuan">Ketentuan:</label>
                        <select id="ketentuan" name="ketentuan" required>
                            <option value="">Pilih Ketentuan</option>
                            <option value="lancar">Lancar</option>
                            <option value="tidak lancar">Tidak Lancar</option>
                            <option value="ghibah">Ghibah</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="nilai">Nilai:</label>
                        <input type="number" id="nilai" name="nilai" required>
                    </div>
                    <button type="submit">Simpan</button>
                </form>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Setoran Hafalan</p>
        </footer>
    </div>

</template>
<script>
</script>
<style>
body{
    font-family: sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container{
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: center;
}

h1{
    margin-bottom: 20px;
}

.input-group{
    margin-bottom: 15px;
}

label{
    display: block;
    margin-bottom: 5px;
}

input[ type="text"],
input[ type="email"],
input[ type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
}

button{
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

a{
    color: #007bff;
    text-decoration: none;
}

</style>