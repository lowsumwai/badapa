
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
//
// const app = new Vue({
//     el: '#app'
// });

$('table[data-table="list-table"]').on('click', '.form-delete', function(e){
   e.preventDefault();
   var $form=$(this);
   $('#confirm').modal({backdrop: 'static', keyboard: false})
       .on('click', '#delete-btn', function() {
           $form.submit();
       })
});

$('.form-search').on('click', '.btn-search', function(e){
    e.preventDefault();
    var $form=$(this).closest('form');
    $('#confirm').modal({backdrop: 'static', keyboard: false})
        .on('click', '#confirm-btn', function() {
            $form.submit();
        })
 });

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
