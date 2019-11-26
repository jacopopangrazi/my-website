$(function() {
  var e =
      '<svg class="shape" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800"><path d="M -65.11,-1.008 C -38.79,8.492 -48.8,43.89 -24.09,59.91 -17.38,64.25 -7.411,68.1 2.397,67.74 19.94,67.09 30.89,61.16 46.62,50.39 64.99,37.82 92.16,36.57 112.8,41.49 141.9,48.44 153.5,80.16 178.5,78.34 194.6,77.17 205.3,67.96 216.8,48.87 224.6,35.89 230.6,20.21 251.4,19.41 278.8,18.35 288.2,28.98 298.5,67.48 303.6,86.48 308.2,97.24 316.3,102.6 329.4,111.3 340.7,106 350.5,100.2 377.5,84.13 369.6,23.41 401.2,20.7 415.9,19.43 431.7,33.86 449.9,57.07 462.7,73.41 475.5,91.96 494.9,96.72 503.8,98.9 513,97.38 521.6,90.13 532.1,81.21 532.2,62.36 551.7,62.17 565.7,62.03 569.6,72.01 575.9,89 580.5,101.3 598.1,139.1 628.6,117.5 649.1,103 641.6,81.95 658,80.67 674.4,79.39 692.2,136.3 720.8,141.4 738.9,144.6 763.5,132 771.2,119.3 782.1,101.2 783.6,81.7 799.1,81.97 829.3,82.49 818.2,122.8 838.2,143.8 858.1,164.8 875.7,158.9 886.4,155.8 910.4,149 913.1,122.8 939.2,119.6 953.9,117.9 964.8,130.2 979.7,131.6 997.3,133.3 1016,132.6 1027,121 1038,109.3 1038,80.15 1054,79.92 1071,79.67 1073,89.94 1079,106.8 1084,119.5 1089,133.9 1101,141.1 1111,147.3 1124,146.3 1136,145 1150,143.4 1160,132.7 1177,130.8 1194,128.8 1219,128.2 1236,138.8 1257,151.6 1271,147.7 1280,137.3 1291,124.1 1294,92.34 1316,90.47 1344,88.04 1348,163.9 1380,183.1 1401,195.1 1428,196.6 1451,190.6 1478,183.7 1503,161.8 1518,143 1544,109.1 1550,43.89 1551,32.49 1568,-303.4 -510,-224.1 -65.11,-1.008 Z" pathdata:id="M -35.73,45.41 C -9.412,61.01 -30.93,379.4 -17.31,545.8 -12.26,607.5 -54.94,740.4 6.142,730.1 63.67,720.4 26.97,284.9 27.01,202.3 27.06,104.3 51.66,29.07 106,54.36 160.3,79.65 103.7,491.7 187.7,465.7 231.9,452 156.6,99.89 249.4,94.08 285.7,91.81 299.9,127.5 305,190.9 316,327.7 328.6,462.6 321.1,598.3 315.8,695.4 294.5,776.7 353.9,773.6 415.6,770.4 379.8,650.7 368.7,588.8 337.4,415 369.6,190.1 391.1,111 412.5,31.92 457,96.83 463.3,127.2 480.9,212.1 493.9,307.8 489,396.1 487.4,425.7 482.1,460.1 517.1,455.2 548.5,450.7 476.2,166 550.9,168.9 594.8,170.6 591.6,626.8 586.3,663.5 578.4,717.8 609.1,742.4 633.9,700.6 651.9,670.2 578.3,209.7 650.8,194.1 723.2,178.5 700.8,277.9 687.6,401.1 680.2,470 766.1,486.3 756,414.3 750.3,373.5 703.1,145.6 793.4,146.1 939.9,146.8 846.2,556.8 844,601.8 841.9,646.8 878.6,682.8 903.3,630.6 928,578.4 863.2,264.8 891.7,178.8 920.2,92.81 997.3,215.6 972,292.8 946.6,370 1030,353.1 999,295.7 985.9,271.6 977.1,119.1 1048,117.8 1119,116.5 1127,634.6 1123,682.6 1119,730.6 1110,749.8 1118,771.3 1134,815.5 1173,803.5 1164,734 1155,664.5 1139,665.8 1143,418.4 1148,170.9 1225,122 1240,215 1249,273 1202,413 1282,391.7 1324,380.7 1280,165.5 1316,159.6 1362,152 1296,358.2 1379,361.2 1462,364.2 1312,753 1444,751.2 1592,749.2 1484,458.5 1505,312.2 1518,221.3 1544,58.44 1545,39.57 1562,-514.4 -480.6,-322.6 -35.73,45.41 Z"></path></svg>',
    t = '<div class="shape-wrap shape-home hide"></div>',
    o =
      '<div class="shape-wrap hide"><div class="gradient"></div>' +
      e +
      "</div>";
  (e = $(e)),
    (t = $(t)
      .append(e)
      .append(
        '<svg class="main_shape hide" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800"><path d="M -65.11,-1.008 C -38.79,8.492 -48.8,43.89 -24.09,59.91 -17.38,64.25 -7.411,68.1 2.397,67.74 19.94,67.09 30.89,61.16 46.62,50.39 64.99,37.82 92.16,36.57 112.8,41.49 141.9,48.44 153.5,80.16 178.5,78.34 194.6,77.17 205.3,67.96 216.8,48.87 224.6,35.89 230.6,20.21 251.4,19.41 278.8,18.35 288.2,28.98 298.5,67.48 303.6,86.48 308.2,97.24 316.3,102.6 329.4,111.3 340.7,106 350.5,100.2 377.5,84.13 369.6,23.41 401.2,20.7 415.9,19.43 431.7,33.86 449.9,57.07 462.7,73.41 475.5,91.96 494.9,96.72 503.8,98.9 513,97.38 521.6,90.13 532.1,81.21 532.2,62.36 551.7,62.17 565.7,62.03 569.6,72.01 575.9,89 580.5,101.3 598.1,139.1 628.6,117.5 649.1,103 641.6,81.95 658,80.67 674.4,79.39 692.2,136.3 720.8,141.4 738.9,144.6 763.5,132 771.2,119.3 782.1,101.2 783.6,81.7 799.1,81.97 829.3,82.49 818.2,122.8 838.2,143.8 858.1,164.8 875.7,158.9 886.4,155.8 910.4,149 913.1,122.8 939.2,119.6 953.9,117.9 964.8,130.2 979.7,131.6 997.3,133.3 1016,132.6 1027,121 1038,109.3 1038,80.15 1054,79.92 1071,79.67 1073,89.94 1079,106.8 1084,119.5 1089,133.9 1101,141.1 1111,147.3 1124,146.3 1136,145 1150,143.4 1160,132.7 1177,130.8 1194,128.8 1219,128.2 1236,138.8 1257,151.6 1271,147.7 1280,137.3 1291,124.1 1294,92.34 1316,90.47 1344,88.04 1348,163.9 1380,183.1 1401,195.1 1428,196.6 1451,190.6 1478,183.7 1503,161.8 1518,143 1544,109.1 1550,43.89 1551,32.49 1568,-303.4 -510,-224.1 -65.11,-1.008 Z" pathdata:id="M -35.73,45.41 C -9.412,61.01 -30.93,379.4 -17.31,545.8 -12.26,607.5 -54.94,740.4 6.142,730.1 63.67,720.4 26.97,284.9 27.01,202.3 27.06,104.3 51.66,29.07 106,54.36 160.3,79.65 103.7,491.7 187.7,465.7 231.9,452 156.6,99.89 249.4,94.08 285.7,91.81 299.9,127.5 305,190.9 316,327.7 328.6,462.6 321.1,598.3 315.8,695.4 294.5,776.7 353.9,773.6 415.6,770.4 379.8,650.7 368.7,588.8 337.4,415 369.6,190.1 391.1,111 412.5,31.92 457,96.83 463.3,127.2 480.9,212.1 493.9,307.8 489,396.1 487.4,425.7 482.1,460.1 517.1,455.2 548.5,450.7 476.2,166 550.9,168.9 594.8,170.6 591.6,626.8 586.3,663.5 578.4,717.8 609.1,742.4 633.9,700.6 651.9,670.2 578.3,209.7 650.8,194.1 723.2,178.5 700.8,277.9 687.6,401.1 680.2,470 766.1,486.3 756,414.3 750.3,373.5 703.1,145.6 793.4,146.1 939.9,146.8 846.2,556.8 844,601.8 841.9,646.8 878.6,682.8 903.3,630.6 928,578.4 863.2,264.8 891.7,178.8 920.2,92.81 997.3,215.6 972,292.8 946.6,370 1030,353.1 999,295.7 985.9,271.6 977.1,119.1 1048,117.8 1119,116.5 1127,634.6 1123,682.6 1119,730.6 1110,749.8 1118,771.3 1134,815.5 1173,803.5 1164,734 1155,664.5 1139,665.8 1143,418.4 1148,170.9 1225,122 1240,215 1249,273 1202,413 1282,391.7 1324,380.7 1280,165.5 1316,159.6 1362,152 1296,358.2 1379,361.2 1462,364.2 1312,753 1444,751.2 1592,749.2 1484,458.5 1505,312.2 1518,221.3 1544,58.44 1545,39.57 1562,-514.4 -480.6,-322.6 -35.73,45.41 Z"></path></svg>'
      )),
    $(".content--intro").append(t),
    $("section.sec_content").each(function() {
      $(this).append(o);
    });
});
var current_sec,
  mainOrSection = "main";
function anim_sec(e) {
  const t = {};
  (t.intro = document.querySelector(e)),
    (t.shape = t.intro.querySelector("svg.shape")),
    (t.path = t.shape.querySelector("path")),
    (t.enter = document.querySelector(".enter")),
    (t.shape.style.transformOrigin = "50% 0%"),
    anime({
      targets: t.intro,
      duration: 1100,
      easing: "easeInOutSine",
      translateY: "-200vh",
      begin: function(e) {
        "main" === mainOrSection
          ? ($(".shape-home.shape-wrap").removeClass("hide"),
            $(current_sec).css("z-index", "8"),
            $(".mobileScreen .home .content-wrapper").css("opacity", "0"),
            $(".footer").css("opacity", "0"))
          : ($(current_sec)
              .find(".shape-wrap")
              .removeClass("hide"),
            $(".content--intro").css("z-index", "8"),
            $("section .sec__content").css("opacity", "0"),
            $(".sec_content .content__inner").css(
              "height",
              "calc(100vh + 60px)"
            ));
      },
      complete: function(t) {
        "main" === mainOrSection
          ? ($(e)
              .css("transform", "")
              .css("z-index", ""),
            $(current_sec).css("z-index", "10"))
          : ($(e)
              .css("transform", "")
              .css("z-index", ""),
            $(".content--intro").css("z-index", "10")),
          $(".shape-wrap").addClass("hide"),
          $("section .sec__content,.footer,.home .content-wrapper").css(
            "opacity",
            ""
          ),
          $(".sec_content .content__inner").css("height", ""),
          $(".menu a").removeClass("loading");
        var o = $(".main_shape").html();
        $(".shape").each(function(e, t) {
          $(this).html(o);
        });
      }
    }),
    anime({
      targets: t.shape,
      scaleY: [
        { value: [0.8, 1.8], duration: 550, easing: "easeInQuad" },
        { value: 1, duration: 550, easing: "easeOutQuad" }
      ]
    }),
    anime({
      targets: t.path,
      duration: 1100,
      easing: "easeOutQuad",
      d: t.path.getAttribute("pathdata:id")
    });
}
$(function() {
  var e = function(e) {
    var t = e.parent || console.warn("no parent"),
      o = e.displacementImage || console.warn("displacement image missing"),
      a = e.image1 || console.warn("first image missing"),
      i = e.image2 || console.warn("second image missing"),
      n = e.intensity || 1,
      s = e.speedIn || 1.6,
      r = e.speedOut || 1.2,
      c = void 0 === e.hover || e.hover,
      l = e.easing || Expo.easeOut,
      m = function() {
        var e,
          t = !1;
        return (
          (e = navigator.userAgent || navigator.vendor || window.opera),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )) &&
            (t = !0),
          t
        );
      };
    m() &&
      ((document.querySelector(".grid__item-img img").style.opacity = 1),
      (document.querySelector(".grid__item-img canvas").style.opacity = 0));
    var p = new THREE.Scene(),
      d = new THREE.OrthographicCamera(
        t.offsetWidth / -2,
        t.offsetWidth / 2,
        t.offsetHeight / 2,
        t.offsetHeight / -2,
        1,
        1e3
      );
    d.position.z = 1;
    var f = new THREE.WebGLRenderer({ antialias: !1 });
    f.setPixelRatio(window.devicePixelRatio),
      f.setClearColor(16777215, 0),
      f.setSize(t.offsetWidth, t.offsetHeight),
      t.appendChild(f.domElement);
    var u = new THREE.TextureLoader();
    u.crossOrigin = "";
    var g = u.load(a),
      h = u.load(i),
      v = u.load(o);
    (v.wrapS = v.wrapT = THREE.RepeatWrapping),
      (g.magFilter = h.magFilter = THREE.LinearFilter),
      (g.minFilter = h.minFilter = THREE.LinearFilter),
      (g.anisotropy = f.getMaxAnisotropy()),
      (h.anisotropy = f.getMaxAnisotropy());
    var y = new THREE.ShaderMaterial({
        uniforms: {
          effectFactor: { type: "f", value: n },
          dispFactor: { type: "f", value: 0 },
          texture: { type: "t", value: g },
          texture2: { type: "t", value: h },
          disp: { type: "t", value: v }
        },
        vertexShader:
          "\n            varying vec2 vUv;\n            void main() {\n              vUv = uv;\n              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ",
        fragmentShader:
          "\n            varying vec2 vUv;\n\n            uniform sampler2D texture;\n            uniform sampler2D texture2;\n            uniform sampler2D disp;\n\n            // uniform float time;\n            // uniform float _rot;\n            uniform float dispFactor;\n            uniform float effectFactor;\n\n            // vec2 rotate(vec2 v, float a) {\n            //  float s = sin(a);\n            //  float c = cos(a);\n            //  mat2 m = mat2(c, -s, s, c);\n            //  return m * v;\n            // }\n\n            void main() {\n\n                vec2 uv = vUv;\n\n                // uv -= 0.5;\n                // vec2 rotUV = rotate(uv, _rot);\n                // uv += 0.5;\n\n                vec4 disp = texture2D(disp, uv);\n\n                vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n                vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n\n                vec4 _texture = texture2D(texture, distortedPosition);\n                vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n                vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n                gl_FragColor = finalTexture;\n                // gl_FragColor = disp;\n            }\n        ",
        transparent: !0,
        opacity: 1
      }),
      w = new THREE.PlaneBufferGeometry(t.offsetWidth, t.offsetHeight, 1),
      $ = new THREE.Mesh(w, y);
    p.add($);
    var b, x;
    c &&
      ((b = "mouseenter"),
      (x = "mouseleave"),
      m() && ((b = "touchstart"), (x = "touchend")),
      t.addEventListener(b, function(e) {
        TweenMax.to(y.uniforms.dispFactor, s, { value: 1, ease: l });
      }),
      t.addEventListener(x, function(e) {
        TweenMax.to(y.uniforms.dispFactor, r, { value: 0, ease: l });
      })),
      window.addEventListener("resize", function(e) {
        f.setSize(t.offsetWidth, t.offsetHeight);
      }),
      (this.next = function() {
        TweenMax.to(y.uniforms.dispFactor, s, { value: 1, ease: l });
      }),
      (this.previous = function() {
        TweenMax.to(y.uniforms.dispFactor, r, { value: 0, ease: l });
      });
    var k = function() {
      requestAnimationFrame(k), f.render(p, d);
    };
    k();
  };
  imagesLoaded(document.querySelectorAll("img"), () => {
    document.body.classList.remove("loading"),
      Array.from(document.querySelectorAll(".grid__item-img")).forEach(t => {
        const o = Array.from(t.querySelectorAll("img"));
        new e({
          parent: t,
          intensity: t.dataset.intensity || void 0,
          speedIn: t.dataset.speedin || void 0,
          speedOut: t.dataset.speedout || void 0,
          easing: t.dataset.easing || void 0,
          hover: t.dataset.hover || void 0,
          image1: o[0].getAttribute("src"),
          image2: o[0].getAttribute("src"),
          displacementImage: t.dataset.displacement
        });
      });
  });
}),
  $(function() {
    "use strict";
    var e = $(".grid"),
      t = "body";
    $(window).on("load", function() {
      e.isotope({
        itemSelector: ".grid .item",
        percentPosition: !0,
        masonry: { columnWidth: ".grid .item:first-of-type" }
      }),
        $(".portfolio ul li").on("click", function() {
          var t = $(this).attr("data-filter");
          e.isotope({ filter: t }),
            $(this)
              .addClass("active_filter")
              .siblings()
              .removeClass("active_filter");
        }),
        $(".startLoad").fadeOut("slow");
      var o = $(".content-wrapper h2"),
        a = o.length,
        i = 1;
      o.eq(i);
      function n() {
        o
          .eq(i)
          .addClass("active animate")
          .siblings()
          .removeClass("active animate"),
          (i = i === a - 1 ? 0 : i + 1);
      }
      o.eq(0).addClass("active animate"),
        setInterval(function() {
          if ($(t).hasClass("side-menu")) {
            if ($("section.home").hasClass("current_sec")) {
              if ($(t).hasClass("animating")) return;
              n();
            }
          } else n();
        }, 3e3);
    }),
      $(".full_height").height($(window).height());
    $(".my_img").length &&
      $(".my_img").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-with-zoom",
        gallery: { enabled: !0 },
        zoom: { enabled: !0 }
      }),
      $(".video-popup").magnificPopup({ type: "iframe" });
    var o = "<div></div>";
    function a() {
      Modernizr.mq("(max-width: 991px)")
        ? $(t).addClass("mobileScreen")
        : $(t).removeClass("mobileScreen");
    }
    if (
      ((o = $(o).addClass(
        "mfp-wrap mfp-close-btn-in mfp-auto-cursor portfolioAjaxContent animated mfp-ready"
      )),
      $(".ajax_popup").on("click", function(e) {
        e.preventDefault(),
          $(o).load($(this).attr("href"), function() {
            $(o).imagesLoaded(function() {
              $(o)
                .find(".ajax-popup")
                .append(
                  '<button title="Close (Esc)" type="button" class="mfp-close close_single">×</button>'
                ),
                $(t).append(o),
                $(".close_single").on("click", function(e) {
                  $(".mfp-wrap.portfolioAjaxContent").addClass("mfp-removing"),
                    setTimeout(function() {
                      $(".mfp-wrap.portfolioAjaxContent")
                        .removeClass("mfp-removing")
                        .remove();
                    }, 1300);
                });
            });
          });
      }),
      $(".contact form .submit").on("click", function() {
        $(".contact form .form-control").removeClass("errorForm"),
          $(".msg_success,.msg_error").css("display", "");
        var e = !1,
          t = $('.contact form input[type="text"]');
        ("" !== t.val() && " " !== t.val()) ||
          ((e = !0), $(t).addClass("errorForm"));
        var o = $('.contact form input[type="email"]');
        "" === o.val() || " " === o.val()
          ? ($(o).addClass("errorForm"), (e = !0))
          : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(o.val()) ||
            ($(o).addClass("errorForm"), (e = !0));
        var a = $(".contact form textarea");
        if (
          (("" !== a.val() && " " !== a.val()) ||
            ((e = !0), $(a).addClass("errorForm")),
          !0 === e)
        )
          return !1;
        var i = $(".contact form").serialize();
        return (
          $.ajax({
            type: "POST",
            url: $(".contact form").attr("action"),
            data: i,
            success: function(e) {
              "SENDING" === e
                ? $(".msg_success").fadeIn("slow")
                : $(".msg_error").fadeIn("slow");
            }
          }),
          !1
        );
      }),
      a(),
      $(window).on("resize", function() {
        a(), $(".full_height").height($(window).height()), l();
      }))
    )
      $(".menu a:not(.loading)").on("click", function(e) {
        var t = $(this);
        t.addClass("loading"),
          setTimeout(function() {
            e.preventDefault(),
              (mainOrSection = "main"),
              (current_sec = t.attr("href")),
              anim_sec(".content--intro");
          }, 300);
      }),
        $(".menu .item h3").each(function() {
          $(this).attr("hover-name", $(this).text());
        }),
        $(".backToHome").on("click", function() {
          (mainOrSection = "section"),
            anim_sec(
              "#" +
                $(this)
                  .parents(".content")
                  .attr("id")
            );
        }),
        (function() {
          if (!$(t).hasClass("side-menu")) {
            var e = window.location.hash;
            if ("#home" != e && "" != e) {
              if (!$(e).length) return;
              (mainOrSection = "main"),
                (current_sec = $(e)),
                anim_sec(".content--intro");
            }
          }
        })(),
        $(".mob-menu .navbar-toggle,.mob-menu-overlay,.mob-menu-close").on(
          "click",
          function() {
            $(".mob-menu-overlay,.mob-menu-close").fadeToggle(),
              $(".side-left").toggleClass("open-side-left");
          }
        );
    var i = null;
    0 !== $(".contact #map").length &&
      ($(".contact #map").show(),
      (function(e, t, o) {
        var a = new google.maps.LatLng(t, o);
        if (i) i.setCenter(a);
        else {
          var n = {
            zoom: 14,
            center: a,
            scrollwheel: !1,
            mapTypeControl: !1,
            streetViewControl: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }, { lightness: 17 }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                  { color: "#ffffff" },
                  { lightness: 29 },
                  { weight: 0.2 }
                ]
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 18 }]
              },
              {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 16 }]
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#dedede" }, { lightness: 21 }]
              },
              {
                elementType: "labels.text.stroke",
                stylers: [
                  { visibility: "on" },
                  { color: "#ffffff" },
                  { lightness: 16 }
                ]
              },
              {
                elementType: "labels.text.fill",
                stylers: [
                  { saturation: 36 },
                  { color: "#333333" },
                  { lightness: 40 }
                ]
              },
              { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
              },
              {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#fefefe" }, { lightness: 20 }]
              },
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [
                  { color: "#fefefe" },
                  { lightness: 17 },
                  { weight: 1.2 }
                ]
              }
            ]
          };
          (i = new google.maps.Map(document.getElementById(e), n)),
            new google.maps.Marker({
              position: a,
              icon: "assets/images/map-marker.png"
            }).setMap(i);
        }
      })("map", 40.712784, -74.005941));
    var n = !1;
    $(".about .grid__item-img").on("mouseenter", function(e) {
      n || ($(this).hover3d({ selector: "canvas" }), (n = !0));
    }),
      $(".skill").each(function() {
        $(this)
          .find(".progress_bar")
          .css(
            "width",
            $(this)
              .find(".percentage")
              .text()
          );
      });
    var s,
      r,
      c = function() {
        var e,
          t = !1;
        return (
          (e = navigator.userAgent || navigator.vendor || window.opera),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )) &&
            (t = !0),
          t
        );
      };
    function l() {
      if ($(t).hasClass("side-menu") && !c()) {
        $(".vertical-menu").height() + 72 < $(window).height()
          ? $(".side-left .slimScrollBar").addClass("hide")
          : $(".side-left .slimScrollBar").removeClass("hide");
      }
    }
    function m(e, t) {
      $(e)
        .find("span")
        .each(function(e, o) {
          TweenMax.to($(this), 0.4, {
            ease: Quad.easeOut,
            startAt: { y: 10, opacity: 0 },
            y: "0%",
            opacity: 1,
            color: "enter" === t ? $(".loader").css("color") : "#fff",
            delay: 0.02 * e
          });
        });
    }
    c() ||
      ($("section .scroll__content").each(function(e) {
        $(this).slimScroll({ height: "100%", opacity: "0.2" });
      }),
      $(".side-left .menu-wrapper").slimScroll({
        height: "100%",
        opacity: "0.2",
        color: "#fff"
      })),
      l(),
      $(".menu li a").each(function(e) {
        $(this).lettering();
      }),
      $(".menu a").on({
        mouseenter: function() {
          m(this, "enter");
        },
        mouseleave: function() {
          m(this, "leave");
        }
      }),
      (s = $(".job h2")),
      (r = $(".fit--text")),
      s.length && s.fitText(1, { maxFontSize: 70 }),
      r.length && r.fitText(1, { maxFontSize: 60 });
    if ($("#typed").length)
      new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 600,
        fadeOut: !1,
        loop: !0,
        showCursor: !1
      });
  });
