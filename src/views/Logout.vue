<template>
    <div class="container">
                            <h1>LOGOUT</h1>
                            <p>Kamu yakin logout?</p>
                        <div class="buttons">
                            <a href="#" class="button">Ya, Logout</a>
                            <a href="#" class="button cancel">Batal</a>
                        </div>
                        </div>
</template>
<script>
</script>

<style>
body{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.container{
    width: 400px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0, 0, 0.1);
}

h1{
    text-align: center;
    margin-bottom: 20px;
}

p{
    text-align: center;
}

.buttons{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.button{
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
}

.button.cancel{
    background-color: #dc3545;
}
</style>