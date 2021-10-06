<template>
  <div class="inner">
    <div class="section-info-left">
      <div class="seaction__header">
        <h1 class="titleh1">{{ results[0].textContnet }}</h1>
      </div>
      <div class="seaction__dedcription">
        <h2>{{ results[0].descContent }}</h2>
      </div>
      <btn class="seaction__btn__two hero-video-text-btn" @click="open">
        Подробнее
      </btn>
    </div>
    <div class="section-info-right">

    </div>
    <div class="window__modal__opacity is__open__modal" v-if="modal" @click="close">
      <div class="window__modal__content">
        <h1 class="modal__title">
          В Нижнем Тагиле заканчивается строительство новой набережной
        </h1>
        <hr>
        <p class="description__modal">
          В Нижнем Тагиле приближается к финалу строительство второй очереди набережной «Тагильская лагуна» за ГДДЮТ.
          Терраса будет полностью готова к 15 сентября, на сегодня она на 95% одета в гранит, сообщает «Тагильский
          рабочий». Смонтировано 60% системы видеонаблюдения, проложено 90% сетей освещения - к концу сентября фонари
          «Тагильской лагуны-2» должны засветить.
          <br>
          Продолжается работа на верхней части набережной, где будут расположены различные площадки. Доставлено
          практически все оборудование, монтируются малые архитектурные формы, в ближайшее время рабочие начнут укладку
          резинового покрытия. По контракту объект должен быть готов 1 ноября, но подрядчики планируют закончить работы
          в середине октября.
          <br>
          Напомним, общая стоимость проекта 511 млн рублей, большая часть из которых поступила по госпрограмме
          «Экономическое развитие и инновационная экономика» в рамках инвестиционного проекта по созданию
          туристско-рекреационного кластера «Гора Белая». Генподрядчиком масштабной стройки стало муниципальное
          предприятие «Тагилдорстрой».
        </p>
        <hr>
        <a href="https://v-tagile.ru/novosti-nizhnego-tagila/gorod/v-nizhnem-tagile-zakanchivaetsya-stroitelstvo-naberezhnoj-vot-chto-poluchilos"
           target="blank" class="modal__istocnik">Источник</a>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  methods: {
    close(event) {
      //console.log(event.path.length)
      if (event.path.length == 8) {
        this.modal = false
        document.body.style.overflowY = "auto";
      }
      let body = document.querySelector('body')
      body.style.overflow = "auto"

    },
    open() {
      this.modal = true
      let body = document.querySelector('body')
      body.style.overflowY = "hidden";
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8081/get-content').then(response => {
      this.results = response.data;
    })
  },
  data() {
    return {
      modal: false,
      results: [],
    }
  }
}
</script>

<style>
.description__modal,
.modal__title {
  color: #111;
  padding: 20px 30px;
  margin: 0;
  align-items: center;
}

.modal__istocnik {
  text-decoration: none;
  font-weight: bold;
  margin: 20px 30px;
  color: #111;
}

.modal__title {
  font-weight: bold;
  text-align: center;
}

.window__modal__content {
  max-width: 1000px;
  min-height: 565px;
  background: linear-gradient(to right, #fecaab, #f37fb6, #7678c6);
  flex-grow: 1;
  border-radius: 50px;
}

.window__modal__opacity {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s;
  z-index: 999;
}

.is__open__modal {
  opacity: 1;
  transform: scale(1);
}

.inner {
  display: flex;
  height: 100Vh;
  position: relative;
  width: 100%;
}

.section-info-right {
  background-image: url(/img/content_img.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section-info-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #facd68, #fc76b3);
  margin: 0 auto;
}

.seaction__header {
  font-family: "2";
}

.seaction__dedcription {
  text-align: center;
  width: 90%;
}

.section-info-right {
  width: 50%;
}

.seaction__header,
.seaction__dedcription,
.hero-video-text-btn {
  margin: 0 auto;
}
@media (max-width: 814px) {
  .titleh1{
    font-size: 20px;
  }
  .window__modal__content{
    max-width: 700px;
  }
  .modal__title{
    font-size: 20px;
  }
  .description__modal, .modal__title{
    font-size: 13px;
  }
}
@media (max-width: 706px) {
  .description__modal, .modal__title{
    padding: 12px 25px;
  }
  .window__modal__content{
    max-width: 700px;
  }
  .modal__title{
    font-size: 10px;
  }
  .description__modal{
    font-size: 10px;
  }
  .window__modal__content{
    min-height: 320px;
  }
}
@media (max-width: 620px) {
  .seaction__header {
    font-size: 10px !important;
    line-height: 20px;
  }
  .seaction__dedcription{
    font-size: 8px !important;
    line-height: 10px;
  }
  .hero-video-text-btn{
    width: 200px;
  }
}
@media (max-width: 416px) {
  .hero-video-text-btn{
    width: 120px !important;
  }
}
@media (max-width: 378px) {
  .seaction__header {
    font-size: 8px !important;
    line-height: 20px;
  }
  .seaction__dedcription{
    font-size: 8px !important;
    line-height: 10px;
  }
  .hero-video-text-btn{
    width: 120px !important;
  }
}
</style>
