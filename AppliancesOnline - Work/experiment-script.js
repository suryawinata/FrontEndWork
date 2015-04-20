/**List View Phase Two**/
try {
  if (typeof $.cookie('aolexp_list_view_phase_two') == "undefined"){
    if (window.location.pathname == "/tvs/" || window.location.pathname == "/dishwashers/") {
      aolExperiments.add("List View Phase Two", 4);
      console.log("Bucket for List View Phase Two: " + aolExperiments.getBucket("List View Phase Two"));
      if(aolExperiments.getBucket("List View Phase Two") == 1){
        StoreFrontLayer.push({ 
          "eventCategory": "Experiment", 
          "eventAction": "List-View Phase2 - "+ window.location.pathname, 
          "eventLabel": "Grid-Sort-Price", 
          "event": "ga-event" 
        }); 
      }
      if(aolExperiments.getBucket("List View Phase Two") == 2){
        StoreFrontLayer.push({ 
          "eventCategory": "Experiment", 
          "eventAction": "List-View Phase2 - " + window.location.pathname, 
          "eventLabel": "Grid-Sort-Popular", 
          "event": "ga-event" 
        });
      }
      if(aolExperiments.getBucket("List View Phase Two") == 3){
        StoreFrontLayer.push({ 
          "eventCategory": "Experiment", 
          "eventAction": "List-View Phase2 - "+ window.location.pathname, 
          "eventLabel": "List-Sort-Price", 
          "event": "ga-event" 
        });
      }
      if(aolExperiments.getBucket("List View Phase Two") == 4){
        StoreFrontLayer.push({ 
          "eventCategory": "Experiment", 
          "eventAction": "List-View Phase2 - "+ window.location.pathname, 
          "eventLabel": "List-Sort-Popular", 
          "event": "ga-event" 
        });
      }
    }
  }
    
  switch (aolExperiments.getBucket("List View Phase Two")) {
    case "1":
      break;
    case "2":
      if(window.location.pathname == "/tvs/"){
        if(_d_internal == false) {
          $("a[href*='/all-tvs/'],a[href*='/ultra-hd-tvs/'],a[href*='/full-hd-tvs/'],a[href*='/smart-tvs/'],a[href*='/3d-tvs/']").each(function(){
            this.href += '?f_sort=MP';
          });
        }
      }
      if(window.location.pathname == "/dishwashers/"){
        if(_d_internal == false) {
          $("a[href*='/standard-dishwashers/'],a[href*='/semi-fully-integrated-dishwashers/']").each(function(){
            this.href += '?f_sort=MP';
          });
        }
      }
      break;
    case "3":
      if(window.location.pathname == "/3d-tvs/" || window.location.pathname == "/smart-tvs/" || window.location.pathname == "/all-tvs/" || window.location.pathname == "/ultra-hd-tvs/" || window.location.pathname == "/full-hd-tvs/"){
        if(_d_internal == false) {
          $(".new-product-widget.list-version").show();
          $(".new-product-widget.grid-version").hide();
        }
      }
      if(window.location.pathname == "/standard-dishwashers/" || window.location.pathname == "/semi-fully-integrated-dishwashers/"){
        if(_d_internal == false) {
          $(".new-product-widget.list-version").show();
          $(".new-product-widget.grid-version").hide();
        }
      } 
      break;
    case "4":
      if(window.location.pathname == "/3d-tvs/" || window.location.pathname == "/smart-tvs/" || window.location.pathname == "/all-tvs/" || window.location.pathname == "/ultra-hd-tvs/" || window.location.pathname == "/full-hd-tvs/"){
        if(_d_internal == false) {
          $(".new-product-widget.list-version").show();
          $(".new-product-widget.grid-version").hide();
        }
      }
      if(window.location.pathname == "/tvs/"){
        if(_d_internal == false) {
          $("a[href*='/all-tvs/'],a[href*='/ultra-hd-tvs/'],a[href*='/full-hd-tvs/'],a[href*='/smart-tvs/'],a[href*='/3d-tvs/']").each(function(){
            this.href += '?f_sort=MP';
          });
        }
      }
      if(window.location.pathname == "/standard-dishwashers/" || window.location.pathname == "/semi-fully-integrated-dishwashers/"){
        if(_d_internal == false) {
          $(".new-product-widget.list-version").show();
          $(".new-product-widget.grid-version").hide();
        }
      }
      if(window.location.pathname == "/dishwashers/"){
        if(_d_internal == false) {
          $("a[href*='/standard-dishwashers/'],a[href*='/semi-fully-integrated-dishwashers/']").each(function(){
            this.href += '?f_sort=MP';
          });
        }
      } 
      break;
    default:
      if (window.location.pathname == "/tvs/" || window.location.pathname == "/dishwashers/") {
        if(_d_internal == false) {
          StoreFrontLayer.push({
              "eventCategory": "Experiment",
              "eventAction": "List-View Phase2",
              "eventLabel": "Failed-to-bucket",
              "event": "ga-event"
          });
        }
      }
      break;
  } 
} catch (e) {
    console.log("Error running experiments (' + e + ')");
}
/**END CODE List View Phase Two TV Experiment**/

/**New Homepage Experiment**/
try {
  if (typeof $.cookie('aolexp_new_homepage_experiment') == "undefined"){
    aolExperiments.add("New Homepage Experiment", 2);
    console.log("Bucket for New Homepage Experiment: " + aolExperiments.getBucket("New Homepage Experiment"));
    if(aolExperiments.getBucket("New Homepage Experiment") == 1){
      StoreFrontLayer.push({
        "eventCategory": "Experiment",
        "eventAction": "Homepage",
        "eventLabel": "Control-Homepage", 
        "event": "GAEvent"
      }); 
    }
    if(aolExperiments.getBucket("New Homepage Experiment") == 2){
      StoreFrontLayer.push({
        "eventCategory": "Experiment",
        "eventAction": "Homepage",
        "eventLabel": "Experiment1-Homepage", 
        "event": "GAEvent"
      });
      if(_d_internal == false) {
        $("#new-homepage-block").show();
        $("#old-homepage-block").hide();
      }
    }
  }
    
  switch (aolExperiments.getBucket("New Homepage Experiment")) {
    case "1":
      if($('meta[name=entitytype]').attr("content") == 15){
        if(_d_internal == false) {
          $("#new-homepage-block").hide();
          $("#old-homepage-block").show();

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
        }
      }
      break;
    case "2":
      if($('meta[name=entitytype]').attr("content") == 15){
        if(_d_internal == false) {
          $("#new-homepage-block").show();
          $("#old-homepage-block").hide();

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

          $(".vp-slider img").click(function(){
              var vplink = $(this).parent().attr("href");
              StoreFrontLayer.push({
                  'eventCategory': 'Experiment-Performance',
                  'eventAction': 'Homepage-Value-Prop',
                  'eventLabel': vplink,
                  'event': 'ga-event'
              });
          });

          $(".promotion-slider").click(function(){
              var promolink = $(this).parent().attr("href");
              StoreFrontLayer.push({
                  'eventCategory': 'Experiment-Performance',
                  'eventAction': 'Homepage-Promotion-Slider',
                  'eventLabel': promolink,
                  'event': 'ga-event'
              });
          });

          $(".number-recommendation-block").click(function(){
              StoreFrontLayer.push({
                  'eventCategory': 'Experiment-Performance',
                  'eventAction': 'Homepage-Facebook-Thumb',
                  'eventLabel': 'Facebook-Page',
                  'event': 'ga-event'
              });
          });

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

        }
      }
      break;
    default:
      if($('meta[name=entitytype]').attr("content") == 15){
        if(_d_internal == false) {
          StoreFrontLayer.push({
            "eventCategory": "Experiment",
            "eventAction": "NewHomepageExperiment",
            "eventLabel": "Failed-to-bucket",
            "event": "ga-event"
          });
        }
      }
      break;
  } 
} catch (e) {
    console.log("Error running experiments (' + e + ')");
}
/**END CODE New Homepage Experiment**/

/**Postcode Popup Experiment**/
function runPostcodeAction () {
    window.setupLocationInput("#postcode-locality-lookup","#postcode",setLocation,setLocationInput);
    $("#postcode-locality-lookup-submit").css("opacity","0.5");
    $(".popup-postcode").closest("#fancybox-wrap").find("#fancybox-close").click(function(){
        StoreFrontLayer.push({
            'eventCategory' : 'Pop-up',
            'eventAction': 'postcode-experiment',
            'eventLabel': 'Postcode Select Pop Up Page',
            'event': 'ga-event'
        });
        console.log('closing the popup');   
        $.cookie('closeThePopupPostcode', '1', { expires: 30, path: '/' });
    });
}
function triggerPostcodePopup() {
    if ($.cookie("locality") == undefined && $.cookie("closeThePopupPostcode") == undefined) {
      tOut = setTimeout(function(){
        $("#postcode-popup-link").fancybox({
            'width' : 740, 
            'height' : 420,
            'autoScale' : false,
            'autoDimensions' : false,
            'onComplete':runPostcodeAction
          });
        $("#postcode-popup-link").trigger('click');
      },6000);
      StoreFrontLayer.push({
        "eventCategory": "Pop-up",
        "eventAction": "postcode-experiment",
        "eventLabel": "Postcode Select Pop Up Page",
        "event": "ga-event"
      });
    };
    
}

try {
  if (typeof $.cookie('aolexp_postcode_popup_experiment') == "undefined"){
    if($('meta[name=entitytype]').attr("content") == 1 && $.cookie("locality") == undefined){
      aolExperiments.add("Postcode Popup Experiment", 2);
      console.log("Bucket for Postcode Popup Experiment: " + aolExperiments.getBucket("Postcode Popup Experiment"));
      if(aolExperiments.getBucket("Postcode Popup Experiment") == 1){
        StoreFrontLayer.push({
          "eventCategory": "Experiment",
          "eventAction": "Postcode - Pop-up",
          "eventLabel": "postcode-control",
          "event": "ga-event"
        });
      }
      if(aolExperiments.getBucket("Postcode Popup Experiment") == 2){
        StoreFrontLayer.push({
          "eventCategory": "Experiment",
          "eventAction": "Postcode - Pop-up",
          "eventLabel": "postcode-experiment",
          "event": "ga-event"
        });
      }
    }
  }
    
  switch (aolExperiments.getBucket("Postcode Popup Experiment")) {
    case "1":
      if($('meta[name=entitytype]').attr("content") == 1 && $.cookie("locality") == undefined){
        $( document ).ajaxComplete(function( event, xhr, settings ) {
          if ( settings.url === "/srvcs/ProductLocalityStockMessaging.ashx" ) {
            StoreFrontLayer.push({
              "eventCategory": "Pop-up",
              "eventAction": "postcode-control",
              "eventLabel": " free delivery",
              "event": "ga-event"
            });
          }
        });
      }
      break;
    case "2":
      if($('meta[name=entitytype]').attr("content") == 1 ){
        var tOut;
        $(".postcode-enter-block").hover(function() {
          clearTimeout(tOut);
        });
        triggerPostcodePopup();
      }
      break;
    default:
      if($('meta[name=entitytype]').attr("content") == 1 && $.cookie("locality") == undefined){
        if(_d_internal == false) {
          StoreFrontLayer.push({
            "eventCategory": "Experiment",
            "eventAction": "PostcodePopupExperiment",
            "eventLabel": "Failed-to-bucket",
            "event": "ga-event"
          });
        }
      }
      break;
  } 
} catch (e) {
    console.log("Error running experiments (' + e + ')");
}
/**END CODE Postcode Popup Experiment**/
