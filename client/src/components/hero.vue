<template>
    <div class="hero-video">
        <video class="hero-bg-video" loop muted autoplay>
            <source src="/img/video.mp4" poster="/img/nt_poster.jpg" type="video/mp4" />
        </video>
        <div class="hero-video-text">
            <h1 class="hero-video-text-h1">
                Можете больше узнать о гордости Урала , городе Нижний Тагил
            </h1>
            <button class="hero-video-text-btn"><a href="https://ntagil.org/" target="blank" class="hero__desription__btn">Подробнее</a></button>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.hero__desription__btn{
    list-style: none;
    color: #fff;
    text-decoration: none;
}
.hero-video {
    width: 100%;
    height: 100vh;
    z-index: -1;
}

.hero-bg-video {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -2;
}

.hero-video::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.7;
    z-index: -1;
}

.hero-video-text {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    height: auto;
    max-width: 500px;
    min-height: 200px;
    padding: 120px 40px 75px 6.6%;
    text-align: left;
}

.hero-video-text-h1 {
    font-size: 26px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
}

.hero-video-text-btn {
    background: transparent;
    color: white;
    width: 300px;
    margin-top: 30px;
    display: inline-block;
    padding: 14px 34px;
    font-size: 16px;
    border: 2px solid #fd0202;
    border-radius: 4px;
    user-select: none;
    text-align: center;
    transition: background .5s ease-in-out;
}

.hero-video-text-btn:hover {
    background: #fd0202;
    cursor: pointer;
}

.hero__text {
    font-family: '2';
    font-size: 50px;
    text-transform: uppercase;
    color: #fff;
}
</style>
