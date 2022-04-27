/* IMPORT JQUERY */
import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

$(document).ready(function () {
    console.log('ready')

    // zavírání/otevírání DROPDOWN menu
    const hasChildrenMenu = $('.item-has-children a')
    hasChildrenMenu.on('click', function (event) {
        event.preventDefault();

        const li = $(this).closest('li')
        const dropDownMenu = li.find('.dropdown-menu')
        const siblings = li.siblings('li')

        dropDownMenu.slideToggle(200)
        li.toggleClass('active')

        siblings.removeClass('active')
        siblings.find('.dropdown-menu').slideUp(200)
    })
})