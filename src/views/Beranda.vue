<template>
	<main id="Home-page">
		<div class="container">
			<div class="header">
				<h1>SETORANKU</h1>
				<p>Setoran Hafalan Juz</p>
			</div>

			<div class="login-form">
				<form action="#">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Masukkan email Anda">
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" placeholder="Masukkan password Anda">
					</div>
					<div class="form-group">
						<a href="#" class="forgot-password">Lupa Password?</a>
					</div>
					<div class="form-group">
						<button type="submit" class="login-button">Login</button>
					</div>
					<div class="form-group">
						<p>Belum punya akun? <a href="#" class="create-account">Buat Akun</a></p>
					</div>
				</form>
			</div>
		</div>
	</main>
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

.container {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.header p {
    font-size: 14px;
    color: #666;
}

.login-form {
    padding: 20px;
}

.login-form label {
    display: block;
    margin-bottom: 5px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.login-form .forgot-password {
    display: block;
    text-align: right;
    margin-top: 10px;
    color: #666;
}

.login-form .login-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-form .login-button:hover {
    background-color: #0056b3;
}

.login-form .create-account {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #666;
}

</style>