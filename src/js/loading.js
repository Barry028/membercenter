var loadingEl =
        '<div id="logo_loader">\
            <div class="logo-animation">\
                <div class="logo-container">\
                    <div class="square square-one"></div>\
                    <div class="square square-two"></div>\
                    <div class="square square-three"></div>\
                    <div class="square square-four"></div>\
                    <div class="square square-five"></div>\
                </div>\
                <div class="logo-container">\
                    <div class="square square-one"></div>\
                    <div class="square square-two"></div>\
                    <div class="square square-three"></div>\
                    <div class="square square-four"></div>\
                    <div class="square square-five"></div>\
                </div>\
                <div class="logo-container">\
                    <div class="square square-one"></div>\
                    <div class="square square-two"></div>\
                    <div class="square square-three"></div>\
                    <div class="square square-four"></div>\
                    <div class="square square-five"></div>\
                </div>\
                <div class="logo-container">\
                    <div class="square square-one"></div>\
                    <div class="square square-two"></div>\
                    <div class="square square-three"></div>\
                    <div class="square square-four"></div>\
                    <div class="square square-five"></div>\
                </div>\
           </div>\
        </div>';

document.write(loadingEl);
document.onreadystatechange = completeLoading;

function completeLoading() {
    if (document.readyState == 'complete') {
        setTimeout(function() {
            var loadingMask = document.getElementById('logo_loader');
            loadingMask.parentNode.removeChild(loadingMask);
        }, 1500);
    }
}