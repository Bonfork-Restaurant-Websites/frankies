// Hamburger Behavior
$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $('body').toggleClass('nav-open');
    });
});

$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});


// Slider active class
// Cache selectors
var lastId,
    topMenu = $(".indicators"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .find("div").removeClass("active")
            .end().filter("[href='#" + id + "']").find("div").addClass("active");
    }
});



$(document).ready(function () {
    function tConvert(time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? 'am' : 'pm';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    }

    var data = JSON.parse($('#data').html());

    var today = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    data.openingHoursSpecification.map(openingsItem => {
        openingsItem.dayOfWeek.map(day => {
            var item = document.createElement('div');
            item.setAttribute('class', 'opening-hours-item');

            var dayHeading = document.createElement('h6');
            var dayItem = document.createTextNode(day);
            dayHeading.appendChild(dayItem);

            var hourHeading = document.createElement('h6');

            if (openingsItem.is_open) {
                var openHours = document.createTextNode(tConvert(openingsItem.opens) + ' - ');
                var closeHours = document.createTextNode(tConvert(openingsItem.closes));
                hourHeading.appendChild(openHours);
                hourHeading.appendChild(closeHours);
            } else {
                var closed = document.createTextNode('Closed');
                hourHeading.appendChild(closed);
            }

            var divider = document.createElement('div');
            divider.setAttribute('class', 'hr-dashed');

            item.appendChild(dayHeading);
            item.appendChild(hourHeading);
            item.appendChild(divider);

            document.querySelector('.opening-hours-container').appendChild(item);
        })
    });
});