import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Siema from 'siema';

$(() => {
	svg4everybody();
});

new  Siema({
	selector: '.banner',
	loop: true
});