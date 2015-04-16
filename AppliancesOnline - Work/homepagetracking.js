$(function () {
    // for homepage tile clicking
    $(".icon-manager").click(function(){
        var tilelink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Tile',
            'eventLabel': tilelink,
            'event': 'ga-event'
        });
    });

    $(".color-theme").click(function(){
        var viewalltilelink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Tile-View-All',
            'eventLabel': viewalltilelink,
            'event': 'ga-event'
        });
    });

    // for homepage VP banner clicking
    $(".vp-slider img").click(function(){
        var vplink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Value-Prop',
            'eventLabel': vplink,
            'event': 'ga-event'
        });
    });

    // for promotion slider clicking
    $(".promotion-slider").click(function(){
        var promolink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Promotion-Slider',
            'eventLabel': promolink,
            'event': 'ga-event'
        });
    });

    // for thumb image to facebook page link
    $(".number-recommendation-block").click(function(){
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Facebook-Thumb',
            'eventLabel': 'Facebook-Page',
            'event': 'ga-event'
        });
    });

    // for link to testimonial page of FB
    $(".poster-link-to-post").click(function(){
        var fbtestimoniallink = $(this).attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Facebook-Testimonial',
            'eventLabel': 'Facebook-Page',
            'event': 'ga-event'
        });
    });

    $(".brand-manager").click(function(){
        var brandlink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Brand',
            'eventLabel': brandlink,
            'event': 'ga-event'
        });
    });

    //for navigation link
    $(".submetro-nav .submenu-entry").click(function(){
        var navlink = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Nav-Sub',
            'eventLabel': navlink,
            'event': 'ga-event'
        });
    });

    $(".metro-menu a").click(function(){
        var topnavlink = $(this).attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-Nav-Top',
            'eventLabel': topnavlink,
            'event': 'ga-event'
        });
    });

    //for bottom tile
    $(".information-box .information-boxes").click(function(){
        var bottomtile = $(this).parent().attr("href");
        StoreFrontLayer.push({
            'eventCategory': 'Experiment-Performance',
            'eventAction': 'Homepage-BottomTile',
            'eventLabel': bottomtile,
            'event': 'ga-event'
        });
    });

    FB.getLoginStatus(function(response) {
        if(response.status !== "unknown"){
            StoreFrontLayer.push({
                'eventCategory': 'Experiment-Performance',
                'eventAction': 'Homepage-Facebook-Login',
                'eventLabel': 'User-Logged-In',
                'event': 'ga-event'
            });
        }
    });
});
