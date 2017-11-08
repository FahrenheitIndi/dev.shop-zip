import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Banner from 'siema';
import Carousel from 'siema';
import Inputmask from 'inputmask';
new Inputmask({mask: '+7 (999) 999-99-99'}).mask('input[type=tel]');
new Banner({selector: '.banner', loop: true});
const carousel = new Carousel({selector: '.article', loop: true, perPage: 4});
document.querySelector('.articles__button_left').addEventListener('click', () => carousel.prev());
document.querySelector('.articles__button_right').addEventListener('click', () => carousel.next());
document.querySelector('.menu__item_sub').addEventListener('hover', () => document.querySelector('.main').classList.add('.main_hover'));

$(() => {
	svg4everybody();
});

