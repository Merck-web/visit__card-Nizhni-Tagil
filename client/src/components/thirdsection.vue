<template>
<div class="inner-content-third-section">
    <div class="inner-content-third-section-info-left">
        <div class="inner-content-third-seaction__header">
            <h1 class="titleh1">{{results[1].textContnet}}</h1>
        </div>
        <div class="inner-content-third-seaction__dedcription">
            <h2>{{results[1].descContent}}</h2>
        </div>
        <button class="seaction__btn__third hero-video-text-btn" @click="open">
            Подробнее
        </button>
    </div>
    <div class="inner-content-third-section-info-right">

    </div>
    <div class="window__modal__opacity is__open__modal__third" v-if="modal" @click="close">
        <div class="window__modal__content__third">
            <h1 class="modal__title__third">
                Города трудовой доблести: Нижний Тагил – родина легендарных «тридцатьчетверок»
            </h1>
            <hr>
            <p class="description__modal__third">
                Небольшой уральский город Нижний Тагил вошел в историю Великой Отечественной войны как «Танкоград»: в 1941 году там, на границе Европы и Азии, развернулся крупнейший в мире центр производства самого важного оружия эпохи – танков, тех самых знаменитых «тридцатьчетверок». Каждый второй Т-34 в годы войны сходил с нижнетагильского конвейера, а всего город произвел более 30 тысяч танков. Получается, что каждые полчаса Тагил выпускал по одной победоносной машине.
                <br>
                Многие танки, произведенные в годы Великой Отечественной войны в Нижнем Тагиле, до сих пор на ходу – те, что сейчас красуются на постаментах, можно завести и отправить в бой. А более современные модели нижнетагильских боевых машин традиционно возглавляют колонны военной техники во время Парада Победы во многих городах России.
                <br>
                Всю войну в Нижнем Тагиле не остывали мартеновские печи: за 2 года горняки и металлурги выполнили колоссальный объем работы, на который в мирное время ушло бы 8 лет. Жители этого уральского города возложили на себя не меньшую ответственность, чем бойцы на фронте. Ведь в тылу как на войне, только без пуль. Враг здесь как будто невидим, но ощутим: за заводские станки вместо ушедших на фронт мужчин заступали женщины и подростки, многим из которых было по 13 лет.
                <br>
                Изначально, еще с петровских времен, Нижний Тагил был металлургическим центром – здесь добывали руду, из которой производили сталь и прокат, а затем изготавливали различную технику мирного назначения. Незадолго до начала войны там появился Уральский вагоностроительный завод (УВЗ), который специализировался на выпуске большегрузных вагонов, платформ и гондол. Завод тут же стал рекордсменом по выпуску продукции среди аналогичных предприятий СССР, поэтому у руководства страны не возникло вопросов, кому доверить экстренный выпуск самого важного оружия.
            </p>
            <hr>
            <a href="https://news.rambler.ru/other/44515591-goroda-trudovoy-doblesti-nizhniy-tagil-rodina-legendarnyh-tridtsatchetverok/" target="blank" class="modal__istocnik__third">Источник</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        close(event) {
            // console.log(event.path.length)
            if (event.path.length == 8) {
                this.modal = false
              document.body.style.overflowY = "auto";
            }
          let body = document.querySelector('body')
          body.style.overflow = "auto"
        },
      open() {
        this.modal = true
        console.log('1231')
        let body = document.querySelector('body')
        body.style.overflowY = "hidden";
      }
    },
    data() {
        return {
            modal: false,
            results: [],
        }
    },
  mounted() {
    axios.get('http://127.0.0.1:8081/get-content').then(response => {
      this.results = response.data;
    })
  },
}
</script>

<style>
.description__modal__third,
.modal__title__third {
    color: #111;
    padding: 20px 30px;
    margin: 0;
    align-items: center;
}

.modal__istocnik__third {
    text-decoration: none;
    font-weight: bold;
    margin: 20px 30px;
    color: #111;
}

.modal__title__third {
    font-weight: bold;
    text-align: center;
}

.window__modal__content__third {
    max-width: 1000px;
    min-height: 565px;
    background: linear-gradient(to right, #50f2c4, #26d0e3, #757aff);
    flex-grow: 1;
    border-radius: 50px;
    z-index: 999;
}

.window__modal__opacity__third {
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
}

.is__open__modal__third {
    opacity: 1;
    transform: scale(1);
}

.inner-content-third-section {
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}

.inner-content-third-section-info-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #1de5e2, #b588f7);
}

.inner-content-third-section-info-right {
    width: 50%;
    background-image: url(/img/tank.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(-1, 1)
}

.inner-content-third-seaction__header {
    font-family: "2";
}

.inner-content-third-seaction__dedcription {
    text-align: center;
}

.inner-content-third-seaction__header,
.inner-content-third-seaction__dedcription,
.hero-video-text-btn {
    margin: 0 auto;
}
@media (max-width: 814px) {
  .titleh1{
    font-size: 20px;
  }
  .window__modal__content__third{
    max-width: 700px;
  }
  .modal__title__third{
    font-size: 20px;
  }
  .description__modal__third, .modal__title__third{
    font-size: 13px;
  }
}
@media (max-width: 706px) {
  .description__modal__third, .modal__title__third{
    padding: 12px 25px;
  }
  .window__modal__content__third{
    max-width: 700px;
  }
  .modal__title__third{
    font-size: 10px;
  }
  .description__modal__third{
    font-size: 10px;
  }
  .window__modal__content__third{
    min-height: 320px;
  }
}
@media (max-width: 620px) {
  .inner-content-third-seaction__header {
    font-size: 10px !important;
    line-height: 20px;
  }
  .inner-content-third-seaction__dedcription{
    font-size: 10px !important;
    line-height: 10px;
  }
  .hero-video-text-btn{
    width: 200px;
  }
}
@media (max-width: 510px) {
  .titleh1{
    font-size: 13px;
  }
}
@media (max-width: 416px) {
  .hero-video-text-btn{
    width: 120px !important;
  }
}
@media (max-width: 378px) {
  .titleh1 {
    font-size: 10px !important;
    line-height: 20px;
  }
  .inner-content-third-seaction__dedcription{
    font-size: 8px !important;
    line-height: 10px;
  }
  .hero-video-text-btn{
    width: 120px !important;
    font-size: 10px;
  }
}
</style>
