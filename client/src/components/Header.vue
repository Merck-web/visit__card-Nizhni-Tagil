<template>
<div class="nav">
    <div class="logo">
        <img class="nav-city__logo" src="/img/tagil__logo.png" alt="1" />
    </div>
    <div class="menu__btn">
        <div id="app">
            <ul :class="{'list__items__burger--is-active': !!button.isActive}" class="list__items__burger">
                <li class="list__item__burger">
                    <a class="link__item__burger" href="#!" >Главная</a>
                </li>
                <li class="list__item__burger">
                    <a class="link__item__burger" href="#!" >О нас</a>
                </li>
                <li class="list__item__burger">
                    <a class="link__item__burger" href="#!" >Контакты</a>
                </li>
            </ul>
            <btn class="hamburger hamburger--elastic" :class="{'is-active': button.isActive}" @click="activeButton"  >
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </btn>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            button: {
                isActive: false
            }
        }
    },
    methods: {
        activeButton() {
            if (this.button.isActive === false) {
                this.button.isActive = true
            } else {
                this.button.isActive = false
            }
        }
    }

}
</script>

<style>
.header__opacity {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;

}

.header__opacity is-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: whitesmoke;
    opacity: 0.3;
}
.list__items__burger {
    max-width: 500px;
    max-height: 400px;
    width: 100%;
    margin: 0 auto;
    list-style: none;
    transition: all 0.5s;
    transform: translateY(-150%);
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #9814b3,#cd364f,#fc9c3d);
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    text-align: center;
    padding-right: 40px;
    border-radius: 50px 40px 50px 40px;
    opacity: .7;
}
.list__items__burger--is-active {
    margin: auto auto;
    transform: translateY(0) !important;
}
.link__item__burger{
    text-decoration: none;
    color: white;
}
.link__item__burger:hover{
        color: #fd0202;
    transition: color .5s ease-in-out;
    cursor: pointer;
}
.list__item__burger {
        margin-bottom: 10px;
}
.list__item__burger:last-child {
        margin-bottom: 0;
}

.nav-menu__burger {
    width: 50px;
    height: 50px;
    background-color: #fff;
}

.nav-city__logo {
    width: 100px;
    height: 85px;
}

.nav {
    box-sizing: border-box;
    margin: 0 0;
    padding-top: 20px;
    padding-right: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
}

.hamburger:hover {
    opacity: 0.7;
}

.hamburger.is-active:hover {
    opacity: 0.7;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: #fff;
}

.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    display: block;
}

.hamburger-inner::before {
    top: -10px;
}

.hamburger-inner::after {
    bottom: -10px;
}

.hamburger--elastic .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
}

.hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s;
}

.hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0;
}

.hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s;
}
</style>
