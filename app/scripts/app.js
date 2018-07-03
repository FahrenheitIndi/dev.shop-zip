/* eslint-disable no-unused-expressions */
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Banner from 'siema';
import Carousel from 'siema';
import Reviews from 'siema';
import Inputmask from 'inputmask';

new Inputmask({mask: '+7 (999) 999-99-99'}).mask('input[type=tel]');
const banner = document.querySelector('.banner');
if (banner){
	new Banner({selector: '.banner', loop: true});
}
const article = document.querySelector('.article');
if (article){
	const carousel = new Carousel({
		selector: article,
		perPage: {
			768: 2,
			992: 3,
			1280: 4
        },
		loop: true
	});
	document.querySelector('.articles__button_left').addEventListener('click', () => carousel.prev());
	document.querySelector('.articles__button_right').addEventListener('click', () => carousel.next());
}
const reviewsList = document.querySelector('.reviews-list');
if (reviewsList){
	const reviews = new Reviews({
		selector: reviewsList,
		loop: true,
		perPage: {
			768: 2,
			992: 3,
			1280: 4
		},
	});
	document.querySelector('.control__prev').addEventListener('click', () => reviews.prev());
	document.querySelector('.control__next').addEventListener('click', () => reviews.next());
}
$(() => {
	svg4everybody();
	$('.menu__item_sub').hover(function () {$('.cover').toggleClass('cover-hover');});
	let t = 0;
	$(window).scroll( function () {
		const headerMobile = document.querySelector('.header-mobile');
		let a = $(this).scrollTop();
		( a > t ) ? $(headerMobile).removeClass('scroll') : $(headerMobile).addClass('scroll');
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
	const toogleMenu = $('.catalog-menu__toggle');
	toogleMenu.bind('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('catalog-menu__toggle_open');
		$(this).next('.sub-catalog-menu').toggleClass('sub-catalog-menu_open');
	});
	toogleMenu.each(function () {if ($(this).hasClass('catalog-menu__toggle_open')){$(this).next('.sub-catalog-menu').toggleClass('sub-catalog-menu_open');}});
	const activeMenuItem = $('.sub-catalog-menu__link');
	activeMenuItem.each(function () {
	    if ($(this).hasClass('sub-catalog-menu__link_active')){
	        $(this).closest('.sub-catalog-menu').toggleClass('sub-catalog-menu_open');
	        $(this).closest('.sub-catalog-menu').prev(toogleMenu).toggleClass('catalog-menu__toggle_open');
	    }
	});
	const tooltipElement = $('.catalog-tooltip');
	const tooltipContainer = $('.catalog-tooltip__container');
	tooltipElement.on('click', function () {
		if ($(this).find(tooltipContainer).is(':hidden')){
			$(this).find(tooltipContainer).show();
		}else {
			$(this).find(tooltipContainer).hide();
		}
	});
	const callbackOrder = $('.login__link_callback');
	const callbackOrderClose = $('.callback-form__close');
	const callbackForm = $('.callback-form');
	callbackOrder.on('click', function () {
		$(this).addClass('login__link_callback_hidden');
		$(this).next(callbackForm).addClass('callback-form_show');
	});
	callbackOrderClose.on('click', function () {
		if ($(this).closest(callbackForm).hasClass('callback-form_show')) {
			$(this).closest(callbackForm).removeClass('callback-form_show');
			if ( callbackOrder.hasClass('login__link_callback_hidden') ){
				callbackOrder.removeClass('login__link_callback_hidden');
			};
		};
	});
	const amountButtonMinus = $('.amount__minus');
	const amountInput = $('.amount__quantity');
	const amountButtonPlus = $('.amount__plus');
	amountButtonPlus.on('click', function (e) {
		e.preventDefault();
		amountInput.val( parseInt( amountInput.val() ) + 1 );
		if ( amountInput.val() > 1){
			amountButtonMinus.removeClass('amount__minus_disabled');
		}
    });
    amountButtonMinus.on('click', function (e) {
        e.preventDefault();
        amountInput.val( parseInt( amountInput.val() ) - 1 );
        if ( amountInput.val() == 1 ){
        	$(this).off('click');
            amountButtonMinus.addClass('amount__minus_disabled');
        }
    });
});


