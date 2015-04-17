
$(function () {
    function collectGAevent (area) {
        $( document ).ajaxSuccess(function( event, xhr, settings ) {
            if ( settings.url.indexOf("/location/search/") > -1  ) {
                if($('.ac_results').is(':visible')) {
                    StoreFrontLayer.push({
                        'eventCategory': 'Postcode',
                        'eventAction': area,
                        'eventLabel': 'postcode-area-engage',
                        'event': 'ga-event'
                    });
                    console.log(area);
                }
            }
        });
    }

    var headerTrigger = 0;
    var postcodeTrigger = 0;

    $('.location.search-bar #location').on('input', function() {
        if($( ".location.search-bar #location" ).val().length > 2){
            if (headerTrigger == 0) {
                collectGAevent ("header");
                headerTrigger = 1;
            }
        }
    });
        
    $( ".postcode-enter-block #addToCartLocality" ).on('input', function() {
        if($( ".postcode-enter-block #addToCartLocality" ).val().length > 2){
            if (postcodeTrigger == 0) {
                collectGAevent ("productpage");
                postcodeTrigger = 1;
            }
            
        }
    });
});

var popupTrigger = 0;
$( ".input-block-postcode-popup #postcode-locality-lookup" ).on('input', function() {
    if($( ".input-block-postcode-popup #postcode-locality-lookup" ).val().length > 2){
        if (popupTrigger == 0) {
            collectGAevent ("popup");
            popupTrigger = 1;
        }
    }
});