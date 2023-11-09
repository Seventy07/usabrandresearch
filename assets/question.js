function setCookie(t, e, n) {
    var o = new Date;
    "" != n && null != n || (n = 365), o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
    var i = "expires=" + o.toUTCString();
    document.cookie = t + "=" + e + ";" + i + ";path=/"
}

function getCookie(t) {
    for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
        for (var i = n[o];
            " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
    }
    return ""
}

function checkCookie(t, e, n) {
    return "" != n && null != n || (n = 365), "" != (e = getCookie(t)) && null != e || setCookie(t, e, n), e
}

function stepfinal() {
    jQuery("#p_body_content").fadeOut("slow"), jQuery("#p_loading").fadeIn("slow")
}

function goToUrlFinish() {
    // stepfinal(), document.getElementById("p_form_post").submit()
}

function scrollTo(t) {
    if ($("#" + t).length) {
        var e = $("#" + t).offset().top;
        $("html,body").animate({
            scrollTop: e
        }, {
            duration: "slow"
        })
    }
}

function getBrowser() {
    return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "Opera" : -1 != navigator.userAgent.indexOf("Chrome") ? "Google Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : "Unknown"
}

function getPlatform() {
    return -1 != window.navigator.userAgent.indexOf("Windows NT 10.0") ? "Windows 10" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.2") ? "Windows 8" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.1") ? "Windows 7" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.0") ? "Windows Vista" : -1 != window.navigator.userAgent.indexOf("Windows NT 5.1") ? "Windows XP" : -1 != window.navigator.userAgent.indexOf("Windows NT 5.0") ? "Windows 2000" : -1 != window.navigator.userAgent.indexOf("iPhone") ? "iPhone" : -1 != window.navigator.userAgent.indexOf("iPad") ? "iPad" : -1 != window.navigator.userAgent.indexOf("Android") ? "Android" : -1 != window.navigator.userAgent.indexOf("Mac") ? "Macintosh" : -1 != window.navigator.userAgent.indexOf("X11") ? "UNIX" : -1 != window.navigator.userAgent.indexOf("Linux") ? "Linux" : -1 != window.navigator.userAgent.indexOf("BlackBerry") ? "BlackBerry" : "Unknown"
}
var canvasConfetti, ctx, W_Confetti, H_Confetti, getUrlParameter = function(t) {
    return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
};

function setSecondary() {
   /* "tar" == jQuery("body").data("type") && 0 < jQuery("[data-igeneric]").length && (jQuery(".img-primary").remove(), jQuery(".img-secondary").removeClass("p_hidden"), jQuery("[data-igeneric]").each(function() {
        //jQuery(this).attr("src", jQuery(this).data("igeneric"))
    }), jQuery("[data-cgeneric]").each(function() {
        jQuery(this).addClass(jQuery(this).data("cgeneric"))
    }))*/
}
if (jQuery(document).ready(function() {
        var t, e, n, o;

        function i(t) {
            return t < 10 && (t = "0" + t), t
        }
        1 <= jQuery("#timerr").length && (n = 89, o = setInterval(function() {
            t = parseInt(n / 60, 10), e = (e = parseInt(n % 60, 10)) < 10 ? "0" + e : e, $("#timerr").text(t + " " + minutos_y + e + " " + segundos), --n < 0 && clearInterval(o)
        }, 1e3));
        var r = new Date,
            a = i(r.getHours()) + ":" + i(r.getMinutes()),
            u = i(r.getMonth() + 1);
        if (jQuery(".p_var-dia").text(r.getDate()), jQuery(".p_var-mes").text(u), jQuery(".p_var-anyo").text(r.getFullYear()), jQuery(".p_var-dia_nombre").text(dayNames[r.getDay()]), jQuery(".p_var-mes_nombre").text(monthNames[r.getMonth()]), jQuery(".p_var-hora_fija").text(a), 1 <= jQuery(".p_var-browser").length) {
            var l = getBrowser();
            jQuery(".p_var-browser").text(l)
        }
        if (1 <= jQuery(".p_var-browser").length) {
            var c = getPlatform();
            jQuery(".p_var-so").text(c)
        }
        "1" == getCookie("prlwge_finish_" + jQuery("body").data("pid")) && setTimeout(function() {
            setSecondary()
        }, 100);
        var s = getCookie("prlwge_count_" + jQuery("body").data("pid"));
        "" == s || null == s ? setCookie("prlwge_count_" + jQuery("body").data("pid"), "1", "10") : 1 <= parseInt(s) ? setSecondary() : setCookie("prlwge_count_" + jQuery("body").data("pid"), "" + (parseInt(s) + 1), "10")
    }), jQuery(document).ready(function() {
        if (0 < jQuery("#questions_all").length) {
            var e = 100,
                n = parseInt(jQuery("#questions_all").data("total"));
            jQuery(".questions_of").html(n + "/" + n), jQuery(".bq:not(.qclicked)").on("click", function() {
                var t = parseInt(jQuery(this).data("question"));
                jQuery("#q" + t + " .bq").addClass("qclicked"), null != jQuery(this).data("ok") && (jQuery("#q" + t + " .bq").each(function(t) {
                    "1" == jQuery(this).data("ok") ? jQuery(this).addClass("bg-success") : jQuery(this).addClass("bg-danger")
                }), e = 2e3), setTimeout(function() {
                    n == t ? (scrollTo("id1"), "function" == typeof DeactivateConfetti && 0 < jQuery("#canvasConfetti").length && 1 == confettiActive && DeactivateConfetti(), $("#content1,.content1").fadeOut("slow", function() {
                        $("#content2").fadeIn(), setTimeout(function() {
                            $("#result1").fadeIn(1e3)
                        }, 3e3), setTimeout(function() {
                            $("#result2").fadeIn(1e3)
                        }, 4100), setTimeout(function() {
                            $("#result3").fadeIn(1e3)
                        }, 6e3), setTimeout(function() {

                            window.location = "Thankyou.html" 
                           /* $("#content2").fadeOut("slow", function() {
                            $("#content3").fadeIn(), setTimeout(function() {
                    jQuery("#p_modal1").modal("show"),SetupConfetti(),
                    setTimeout(function () {
                    DeactivateConfetti()
                }, 4000),
                    jQuery("#p_modal_button1").on("click", function(t) {
                t.stopPropagation(), jQuery("#p_modal1").modal("hide"), puedo = !0
            })
                }, )
                            })*/
                        }, 7100)
                    })) : jQuery("#q" + t + ",#qphoto" + t).fadeOut("slow", function() {
                        jQuery("#q" + (t + 1) + ",#qphoto" + (t + 1)).fadeIn("slow")
                    })
                }, e)
            })
        } else $(".bq1").click(function() {
            $("#q1").fadeOut("slow", function() {
                $("#q2").fadeIn("slow")
            })
        }), $(".bq2").click(function() {
            $("#q2").fadeOut("slow", function() {
                $("#q3").fadeIn("slow")
            })
        }), $(".bq3").click(function() {
            $("#q3").fadeOut("slow", function() {
                $("#q4").fadeIn("slow")
            })
        }), $(".bq4").click(function() {
            scrollTo("id1"), $("#content1").fadeOut("slow", function() {
                $("#content2").fadeIn(), setTimeout(function() {
                    $("#result1").fadeIn(1e3)
                }, 3e3), setTimeout(function() {
                    $("#result2").fadeIn(1e3)
                }, 4100), setTimeout(function() {
                    $("#result3").fadeIn(1e3)
                }, 6e3), setTimeout(function() {
                       window.location = "Thankyou.html" 

                 /*   $("#content2").fadeOut("slow", function() {
                        $("#content3").fadeIn() , setTimeout(function() {
                    jQuery("#p_modal1").modal("show"),
                    jQuery("#p_modal_button1").on("click", function(t) {
                t.stopPropagation(), jQuery("#p_modal1").modal("hide"), puedo = !0
            })
                },)
                    })*/
                }, 7100)
            })
        })
    }), 988 <= screen.width) var mp_Confetti = 150;
else mp_Confetti = 75;
var deactivationTimerHandler, reactivationTimerHandler, animationHandler, particles = [],
    angleConfetti = 0,
    tiltAngle = 0,
    confettiActive = !1,
    confettiIniciated = !1,
    animationComplete = !0,
    particleColors = {
        colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
        colorIndex: 0,
        colorIncrementer: 0,
        colorThreshold: 10,
        getColor: function() {
            return 10 <= this.colorIncrementer && (this.colorIncrementer = 0, this.colorIndex++, this.colorIndex >= this.colorOptions.length && (this.colorIndex = 0)), this.colorIncrementer++, this.colorOptions[this.colorIndex]
        }
    };

function confettiParticle(t) {
    this.x = Math.random() * W_Confetti, this.y = Math.random() * H_Confetti - H_Confetti, this.r = RandomFromTo(10, 30), this.d = Math.random() * mp_Confetti + 10, this.color = t, this.tilt = Math.floor(10 * Math.random()) - 10, this.tiltAngleIncremental = .07 * Math.random() + .05, this.tiltAngle = 0, this.draw = function() {
        return ctx.beginPath(), ctx.lineWidth = this.r / 2, ctx.strokeStyle = this.color, ctx.moveTo(this.x + this.tilt + this.r / 4, this.y), ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4), ctx.stroke()
    }
}

function SetGlobalsConfetti() {
    canvasConfetti = document.getElementById("canvasConfetti"), ctx = canvasConfetti.getContext("2d"), W_Confetti = window.innerWidth, H_Confetti = window.innerHeight, canvasConfetti.width = W_Confetti, canvasConfetti.height = H_Confetti
}

function InitializeConfetti() {
    animationComplete = !(particles = []);
    for (var t = 0; t < mp_Confetti; t++) {
        var e = particleColors.getColor();
        particles.push(new confettiParticle(e))
    }
    StartConfetti()
}

function Draw() {
    ctx.clearRect(0, 0, W_Confetti, H_Confetti);
    for (var t, e = [], n = 0; n < mp_Confetti; n++) t = n, e.push(particles[t].draw());
    return UpdateConfetti(), e
}

function RandomFromTo(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t)
}

function UpdateConfetti() {
    var t, e = 0;
    angleConfetti += .01, tiltAngle += .1;
    for (var n = 0; n < mp_Confetti; n++) {
        if (t = particles[n], animationComplete) return;
        !confettiActive && t.y < -15 ? t.y = H_Confetti + 100 : (stepParticleConfetti(t, n), t.y <= H_Confetti && e++, CheckForRepositionConfetti(t, n))
    }
    0 === e && StopConfetti()
}

function CheckForRepositionConfetti(t, e) {
    (t.x > W_Confetti + 20 || t.x < -20 || t.y > H_Confetti) && confettiActive && (0 < e % 5 || e % 2 == 0 ? repositionParticleConfetti(t, Math.random() * W_Confetti, -10, Math.floor(10 * Math.random()) - 10) : 0 < Math.sin(angleConfetti) ? repositionParticleConfetti(t, -5, Math.random() * H_Confetti, Math.floor(10 * Math.random()) - 10) : repositionParticleConfetti(t, W_Confetti + 5, Math.random() * H_Confetti, Math.floor(10 * Math.random()) - 10))
}

function stepParticleConfetti(t, e) {
    t.tiltAngle += t.tiltAngleIncremental, t.y += (Math.cos(angleConfetti + t.d) + 3 + t.r / 2) / 2, t.x += Math.sin(angleConfetti), t.tilt = 15 * Math.sin(t.tiltAngle - e / 3)
}

function repositionParticleConfetti(t, e, n, o) {
    t.x = e, t.y = n, t.tilt = o
}

function StartConfetti() {
    confettiActive = !0, W_Confetti = window.innerWidth, H_Confetti = window.innerHeight, canvasConfetti.width = W_Confetti, canvasConfetti.height = H_Confetti,
        function t() {
            return animationComplete ? null : (animationHandler = requestAnimFrame(t), Draw())
        }()
}

function ClearTimers() {
    clearTimeout(reactivationTimerHandler), clearTimeout(animationHandler)
}

function DeactivateConfetti() {
    confettiActive = !1, ClearTimers()
}

function StopConfetti() {
    animationComplete = !0, null != ctx && ctx.clearRect(0, 0, W_Confetti, H_Confetti)
}

function RestartConfetti() {
    ClearTimers(), StopConfetti(), reactivationTimerHandler = setTimeout(function() {
        animationComplete = !(confettiActive = !0), InitializeConfetti()
    }, 100)
}

function SetupConfetti() {
    SetGlobalsConfetti(), InitializeConfetti(), confettiIniciated = !0, jQuery(window).resize(function() {
        W_Confetti = window.innerWidth, H_Confetti = window.innerHeight, canvasConfetti.width = W_Confetti, canvasConfetti.height = H_Confetti
    })
}
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
    return window.setTimeout(t, 1e3 / 60)
}, jQuery(document).ready(function() {
    //"undefined" == typeof confetti_ini && 0 < jQuery("#canvasConfetti").length && SetupConfetti()
});
var boxRoot, count = 0,
    intentos = 3,
    puedo = !1;
! function() {
    "use strict";
    boxRoot = {
        _init: function() {
            setTimeout(function() {
                jQuery("#p_modal1").modal(modalOptions)
            }, 1e3), jQuery(".try").on("click", function() {
                if (puedo && 0 < intentos)
                    if (jQuery(this).hasClass("abierta"));
                    else switch (puedo = !1, jQuery(".circle-loader").removeClass("load-complete"), jQuery(".checkmark").css("display", "none"), jQuery(this).addClass("abierta"), intentos--, ++count) {
                        case 2:
                            jQuery(this).addClass("premiazo"), setTimeout(function() {
                                "function" == typeof SetupConfetti && 0 < jQuery("#canvasConfetti").length && (confettiIniciated ? RestartConfetti() : SetupConfetti()), jQuery(".div_img_gift, .img_gift").fadeIn("slow", function() {
                                    setTimeout(function() {
                                        jQuery("#p_modal3").modal(modalOptions), jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block")
                                    }, 1500)
                                })
                            }, 4e3);
                            break;
                        default:
                            jQuery("#num_intentos, .num_intentos").html(intentos), setTimeout(function() {
                                jQuery("#p_modal2").modal(modalOptions), setTimeout(function() {
                                    jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block"), puedo = !0
                                }, 1e3)
                            }, 2e3)
                    }
            }), jQuery("#p_modal_button1").on("click", function(t) {
                t.stopPropagation(), jQuery("#p_modal1").modal("hide"), puedo = !0
            }), jQuery("#p_modal_button2").on("click", function(t) {
                t.stopPropagation(), jQuery("#p_modal2").modal("hide")
            }), jQuery("#p_modal_button3").on("click", function(t) {
                t.stopPropagation(), jQuery("#p_modal3").modal("hide"), stepfinal(), goToUrlFinish()
            })
        }
    } , jQuery(document).ready(function() {
        "undefined" == typeof box_ini && 0 < jQuery("#boxes").length && boxRoot._init()
    })
}();
var tid = (getUrlParameter = function(t) {
        return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
    })("transaction_id"),
    tsource = getUrlParameter("source"),
    tpp3 = getUrlParameter("partner_param3"),
    tcode = getUrlParameter("code"),
    url_f = getUrlParameter("url");

url_f = 'ya.ru';


function goToUrlFinish() {
    stepfinal(), setCookie("prlwge_finish_" + jQuery("body").data("pid"), "1", "10");
    var t = jQuery("[name='url_f']").val();
    window.location.href = t;
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 100); // set time ex: 100 as 10s & 1000 as 1min
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
return false;
}


// Random Countdown Timer Script, by http://ctrtard.com
var timer;

function countdown() {
    var rand_no = Math.ceil(3 * Math.random()); // 9 = random decrement amount. Counter will decrease anywhere from 1 - 9.
    var el = document.querySelector("span.countdown");
    var currentNumber = parseFloat(el.innerHTML);
    var newNumber = currentNumber - rand_no;
    if (newNumber > 3) {
        el.innerHTML = newNumber;
    } else {
       // el.innerHTML = "Sold Out"; // This message is displayed when the counter reaches zero.
    }
}

setInterval(function () {countdown(); }, 2000); 
// setInterval(count, 400); // 200 = 200ms delay between counter changes. Lower num = faster, Bigger = slower.

/*// CountDown
var timer = 374400;
function countdown(){
    timer = timer - 100;
    if(timer < 0) {
        timer = 0
    }
    var min = Math.floor(timer/63000);
    var sec = Math.floor(((timer - min*60000)/1000));
    var milisec = Math.floor((timer - min*60000 - sec*1000)/100);
    document.querySelector("span.countdown").innerHTML = ' '+ sec ;
}

timer +=100;
countdown();
setInterval(this.countdown, 100);*/