import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Siema from 'siema';
import Inputmask from 'inputmask';


new Inputmask({mask: '+7 (999) 999-99-99'}).mask('input[type=tel]');

new Siema({selector: '.banner', loop: true});

new Siema({selector: '.article', loop: true, perPage: 4});

$(() => {
	svg4everybody();
});



