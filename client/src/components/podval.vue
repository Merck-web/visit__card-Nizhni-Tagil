<template>
<div class="podval__inner">
    <div class="item__inner">
        <div class="items-right">
            <ul class="footer-list-items">
                <li class="footer-list-item"><a href="https://ntagil.org/glava/" target="blank" class="footer-list-link">Глава города</a></li>
                <li class="footer-list-item"><a href="https://ntagil.org/adm/" target="blank" class="footer-list-link">Администрация</a></li>
                <li class="footer-list-item"><a href="https://ntagil.org/duma/" target="blank" class="footer-list-link">Дума</a></li>
            </ul>
        </div>
        <div class="items-left">
            <ul class="footer-list-items">
                <li class="footer-list-item"><a href="https://ntagil.org/economy/" target="blank" class="footer-list-link">Экономика</a></li>
                <li class="footer-list-item"><a href="https://ntagil.org/budget/" target="blank" class="footer-list-link">Бюджет города</a></li>
                <li class="footer-list-item"><a href="Промышленность" target="blank" class="footer-list-link">Промышленность</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<style>
.podval__inner {
    width: 100%;
    height: 100vh;
    background-image: url(/img/footer-bg.jpg);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
}
.item__inner li{
    list-style: none;
    max-height: 20px;
}
.item__inner{
    display: flex;
    justify-content: end;
    padding: 20px 0;
    padding-top: 200px;
    padding-right: 100px;
}
.footer-list-link{
    text-decoration: none;
    color: aliceblue;
}
.items-left,
.items-right{
    max-height: 150px;
}
.items-left ul,
.items-right ul{
   margin: 0;
   max-width: 160px;
   flex-wrap: wrap;
}
.footer-list-items{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.footer-list-item{
    margin-bottom: 30px;
}
.footer-list-link{
    font-family: '2';
    font-size: 20px;
    line-height: 20px;
}
.footer-list-link:hover{
    color: #fd0202;
    transition: color .5s ease-in-out
}
.items-right{
    margin-right: 40px;
}
@media (max-width: 430px) {
  .item__inner {
    flex-direction: column;
  }
}
</style>
