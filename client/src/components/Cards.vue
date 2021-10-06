<template>
<div class="wrapper__cards">
    <h1 class="cards__title">Новости в тагиле</h1>
    <div class="cards__container">
        <a class="card" target="blank"  href="https://ntagil.org/news/detail.php?ELEMENT_ID=259990" >
            <img src="/img/EvrazIT.jpg" alt="1" class="imgBox">
            <div class="content">
                <h2>ЕВРАЗ открывает IT-академию для школьников Нижнего Тагила</h2>
                <p>21.09.2021</p>
            </div>
        </a>
        <a class="card" target="blank" href="https://ntagil.org/news/detail.php?ELEMENT_ID=259987" >
            <img src="/img/pedagog.jpg" alt="1" class="imgBox">
            <div class="content">
                <h2>Два тагильских педагога получат Президентские премии</h2>
                <p>21.09.2021</p>
            </div>
        </a>
        <a class="card" target="blank" href="https://ntagil.org/news/detail.php?ELEMENT_ID=259968" >
            <img src="/img/cross.jpg" alt="1" class="imgBox">
            <div class="content">
                <h2>Призерами «Кросса нации» в Нижнем Тагиле стали 42 участника</h2>
                <p>20.09.2021</p>
            </div>
        </a>
    </div>
</div>
</template>

<style>

:root {
  --color-1: #0c4a83;
  --color-2: #1f6e72;
  --color-3: #f1b211;
  --color-4: #e83611;
  --color-5: #f9002f;
}

.card{
    text-decoration: none;
}
.cards__title {
    top: 30px;
    left: 0;
    width: 400px;
    margin: 0 auto;
    position: relative;
    color: #fff;
    display: block;
    font-family: "Exo", sans-serif;
  font-size: 45px;
  background: linear-gradient(219deg, 
    var(--color-1) 19%, 
    transparent 19%,transparent 20%, 
    var(--color-2) 20%, var(--color-2)  39%,
    transparent 39%,transparent 40%, 
    var(--color-3) 40%,var(--color-3) 59% ,
    transparent 59%,transparent 60%, 
    var(--color-4) 60%, var(--color-4) 79%,
    transparent 79%, transparent 80%, 
    var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.content h2,
.content p {
    margin: 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 16px;
}
.content p{
    margin-top: 20px;
}

.wrapper__cards {
    width: 100%;
    position: relative;
  background: linear-gradient(to bottom right, #c165dd, #5c27fe);
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.cards__container {
    border-radius: 80px 40px 80px 40px;
      background: linear-gradient(to bottom right, #00f7a7, #04F5ed);
    position: relative;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 20px 10px;
    margin: 5% auto;
}

.cards__container .card {
    max-width: 300px;
    height: 420px;
    height: 215px;
    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 1s ease-in-out;
}

.cards__container .card:hover {
    height: 420px;
}

.cards__container .card .imgBox {
    position: relative;
    background: #fff;
    top: -60px;
    left: 5px;
    min-width: initial;
    width: 260px;
    height: 260px;
    border-radius: 4px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.cards__container .card .imgBox img {
    max-width: 100%;
    border-radius: 4px;
    margin: 0;
}

.cards__container .card .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
    transition-delay: 0s;
}

.cards__container .card:hover .content {
    margin-top: -40px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.3s;
}
@media (max-width: 1000px) {
  .wrapper__cards{
      display: none;
  }
}
</style>
