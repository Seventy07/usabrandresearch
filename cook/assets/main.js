
$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay:true,
        autoplaySpeed:50,
        items: 1,
        center: true,
        nav: true,
       
        dots: false,
        loop: true,
        navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 3 }
        }
    });
});

/*$(".bq4").click(function() {
               $("#hero").fadeOut("slow", function() {
                $("#hero1").fadeIn(), setTimeout(function() {
                    $("#result1").fadeIn(1e3)
                }, 3e3), setTimeout(function() {
                    $("#result2").fadeIn(1e3)
                }, 4100), setTimeout(function() {
                    $("#result3").fadeIn(1e3)
                }, 6e3), setTimeout(function() {
                    $("#hero1").fadeOut("slow", function() {
                        "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(), $("#hero2").fadeIn()
                    })
                }, 7100)
            })
        });
jQuery(document).ready(function() {
        "undefined" == typeof box_ini && 0 < jQuery("#boxes").length && boxRoot._init()
    });*/

var t = 1;
let e =  {
    "firstNames": ["Gracie","Amelia","Callum","Matthew","Freya","Benjamin","Oliver","Emily","Summer","Michael","Amelie","Evie","Hannah","Scarlett","Caitlin","Amber","Charlotte","Harrison","Finlay","Maddison","Charlie","Phoebe","Ruby","Katie","Sam","Megan","Henry","Courtney","Aidan","Frederick","Courtney","Callum","Andrew","Mohammad","Sophie","Zak","Tia","Daisy","Laura","Madeleine","Frederick","Molly","Madeleine","Billy","Anna","Shannon","Zak","Patrick","Emma","Sofia","Anna","Lucas","Morgan","Gracie","Madeleine"],

    "lastNames": ["A", "B", "C", "D", "E", "F", "G", "H", "K", "L", "M", "N", "O", "P", "R", "S", "T", "V", "W", "Y"],
    "locations": ["Ohio","Florida","Oregon","New York","Michigan","Tucson","Colorado","Virginia","Tulsa","Bakersfield","Tempa","Texas","Santa Ana","Minnesota","Pittsburgh","Durham","Arizona","Nevada"]
};
r = document.querySelector(".w_fomo_wrapper").innerHTML;
n = setInterval(function() {
    ! function(e) {
        var t = e.firstNames[Math.floor(Math.random() * e.firstNames.length)],
            n = e.lastNames[Math.floor(Math.random() * e.lastNames.length)],
            i = e.locations[Math.floor(Math.random() * e.locations.length)],
            o = Math.floor(40 * Math.random() + 5),
            a = r.replace(/\{firstName\}/g, t).replace(/\{lastName\}/g, n).replace(/\{location\}/g, i).replace(/\{randTime\}/g, o),
            l = Math.floor(3 * Math.random()) + 1;

        var d = document.querySelector(".w_fomo_wrapper");
        d.innerHTML = a;
        var s = document.querySelectorAll(".w_fomo_wrapper .p-name");
        if (s.length > 1) {
            (p = ".w_fomo_wrapper .p-name", f = document.querySelectorAll(p), {
                addClass: function(e) {
                    var t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var i, o = f[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) i.value.classList.add(e)
                    } catch (e) {
                        r = !0, n = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                },
                removeClass: function(e) {
                    var t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var i, o = f[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) i.value.classList.remove(e)
                    } catch (e) {
                        r = !0, n = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                }
            }).addClass("hidden");
            var u = Math.floor(Math.random() * s.length);
            s[u].classList.remove("hidden")
        }
        var p, f;
        d.classList.add("notify"), setTimeout(function() {
            d.classList.remove("notify")
        }, 4400)
    }(e), 2 === t && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && clearInterval(n), t++
}, 7e3, t)
