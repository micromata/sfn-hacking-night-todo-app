import $ from 'jquery';
// this is necessary because bootstrap itself checks the existence of jQuery with window.jQuery.
window.jQuery = $;

// Because of bootstrap is not an UMD Module, we cannot import it with es6 syntax.
require('bootstrap');

import createRouter from './core/router.js';
import HomeRoute from './home';

const router = createRouter('app');

router.addRoute('', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('/', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('home', {init: HomeRoute.init, dispose: HomeRoute.dispose});

router.addRoute('*', {init: () => {
	console.log('I am the otherwise route');
}});
