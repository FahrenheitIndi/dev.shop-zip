import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Banner from 'siema';
import Carousel from 'siema';
import Inputmask from 'inputmask';
new Inputmask({mask: '+7 (999) 999-99-99'}).mask('#phone, .field-group__input_phone');
new Banner({selector: '.banner', loop: true});
const carousel = new Carousel({selector: '.article', loop: true, perPage: 4});
document.querySelector('.articles__button_left').addEventListener('click', () => carousel.prev());
document.querySelector('.articles__button_right').addEventListener('click', () => carousel.next());
$(() => {
	svg4everybody();
	$('.menu__item_sub').hover(() => {$('.cover').toggleClass('cover-hover');});
});
