import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Banner from 'siema';
import Carousel from 'siema';
/*
import Reviews from 'siema';
*/
import Inputmask from 'inputmask';
new Inputmask({mask: '+7 (999) 999-99-99'}).mask('input[type=tel]');
new Banner({selector: '.banner', loop: true});
const carousel = new Carousel({
	selector: '.article',
	perPage: {
		768: 2,
		992: 3,
		1280: 4
	},
	loop: true
});
document.querySelector('.articles__button_left').addEventListener('click', () => carousel.prev());
document.querySelector('.articles__button_right').addEventListener('click', () => carousel.next());
/*
const reviews = new Reviews({
	selector: '.reviews-list',
	loop: true,
	perPage: 4
});
document.querySelector('.control__control__prev').addEventListener('click', () => reviews.prev());
document.querySelector('.control__control__next').addEventListener('click', () => reviews.next());
*/
$(() => {
	svg4everybody();
	$('.menu__item_sub').hover(function () {$('.cover').toggleClass('cover-hover');});
	let t = 0;
	$(window).scroll( function () {
		let a = $(this).scrollTop();
		( a > t ) ? $('.header-mobile').removeClass('scroll') : $('.header-mobile').addClass('scroll');
		t = a;
	});
	$('.menu-left__link_search').click(function (e) {
		e.preventDefault();
		$('.mobile-search').toggleClass('mobile-search_show');
	});
	$('.menu-left__link_menu').click(function (e) {
		e.preventDefault();
		$('.wrapper').toggleClass('wrapper_open');
		$('.mobile-cover').length ? $('.mobile-cover').remove() : $('.wrapper').append('<div class="mobile-cover"></div>');
		$('.mobile-menu').toggleClass('mobile-menu_open');
	});
	$(document).on('click', '.mobile-cover', function () {
		$('.mobile-menu').toggleClass('mobile-menu_open');
		$('.wrapper').toggleClass('wrapper_open');
		$('.mobile-cover').length ? $('.mobile-cover').remove() : $('.wrapper').append('<div class="mobile-cover"></div>');
	});
	$('.group-list__toggle').bind('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('group-list__toggle_open');
		$(this).next('.sub-group-list').toggleClass('sub-group-list_open');
	});
});


