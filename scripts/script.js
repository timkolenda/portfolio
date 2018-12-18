const app = {}

$(function() {
    app.init();
});

app.init = () => {
    app.openNav();
}

app.openNav = () => {
    $('.siteNav__button').on('click', function() {
        console.log('click!');
        $('.siteNav').toggleClass('active');
    });
}
