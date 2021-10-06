<template>
<div class="preloader">
    <div class="preloader-logo">Нижний Тагил</div>
</div>
</template>

<style>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "2";
    animation: slideFade 1s ease-in-out forwards;
    animation-delay: 1.3s;
}

.preloader-logo {
    font-size: 60px;
    animation: zoom .5s ease-in-out forwards;
    transform: scale(1);
    position: relative;
    overflow: hidden;
}

@keyframes zoom {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.2);
    }
}
@keyframes slideRight {
    0% {
        transform: translateX(-110%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes slideFade {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}
.preloader-logo::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateX(-110%);
    animation: slideRight 1s ease-in-out forwards;
    animation-delay: .6s;
}

@media (max-width: 616px) {
  .preloader {
    display: none;
  }
}

</style>
