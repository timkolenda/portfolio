const app = {}

$(function() {
    app.init();
});

app.init = () => {
    app.openNav();
    app.focusInNav();
}

app.openNav = () => {
    $('.siteNav__button').on('click', function() {
        console.log('click!');
        $('.siteNav').toggleClass('active');
    });
}

app.focusInNav = () => {
    $('.siteNav__button').on('click', function() {
        $('#home').focus();
    });
}


