/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-passiveeventlisteners-setclasses !*/
!(function (e, n, s) {
  function o(e) {
    var n = l.className,
      s = Modernizr._config.classPrefix || ''
    if ((c && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp('(^|\\s)' + s + 'no-js(\\s|$)')
      n = n.replace(o, '$1' + s + 'js$2')
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + s + e.join(' ' + s)), c ? (l.className.baseVal = n) : (l.className = n))
  }
  function a(e, n) {
    return typeof e === n
  }
  function t() {
    var e, n, s, o, t, f, l
    for (var c in r)
      if (r.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = r[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase())
        for (o = a(n.fn, 'function') ? n.fn() : n.fn, t = 0; t < e.length; t++)
          (f = e[t]),
            (l = f.split('.')),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            i.push((o ? '' : 'no-') + l.join('-'))
      }
  }
  var i = [],
    r = [],
    f = {
      _version: '3.6.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function (e, n) {
        var s = this
        setTimeout(function () {
          n(s[e])
        }, 0)
      },
      addTest: function (e, n, s) {
        r.push({ name: e, fn: n, options: s })
      },
      addAsyncTest: function (e) {
        r.push({ name: null, fn: e })
      }
    },
    Modernizr = function () {}
  ;(Modernizr.prototype = f),
    (Modernizr = new Modernizr()),
    Modernizr.addTest('passiveeventlisteners', function () {
      var n = !1
      try {
        var s = Object.defineProperty({}, 'passive', {
          get: function () {
            n = !0
          }
        })
        e.addEventListener('test', null, s)
      } catch (o) {}
      return n
    })
  var l = n.documentElement,
    c = 'svg' === l.nodeName.toLowerCase()
  t(), o(i), delete f.addTest, delete f.addAsyncTest
  for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]()
  e.Modernizr = Modernizr
})(window, document)

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener(
      'touchstart',
      handle,
      Modernizr.passiveeventlisteners ? { passive: true } : false
    )
  }
}

jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener(
      'touchmove',
      handle,
      Modernizr.passiveeventlisteners ? { passive: true } : false
    )
  }
}

/**
 * Ready to use
 */

$(document).ready(function () {
  if (!(location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    function changeToServer() {
      $allA = $('a')
      newAllA = $allA
      newAllAs = []
      for (var i = 0; i < $allA.length; i++) {
        var href = new URL($allA[i].href)
        if (newAllA[i].pathname === '/' || newAllA[i].pathname.indexOf('/pages/') !== -1)
          newAllA[i].href = href.origin + '/' + 'volkswagen' + href.pathname
      }
    }
    changeToServer()
  }

  $(window).on('load resize', function () {
    resizer()
  })

  buttonMenu()
  menuModel()

  scrollHandler()
  dropDown()
})

function resizer() {
  var w = $(window).width()
  if (w < 768) {
    isMobile = true
    $('.button-widget').addClass('button-widget-invisible')
  } else {
    isMobile = false
  }
}

/**
 * Abrir y Cerrar el menu model
 */

function menuModel() {
  $('.buttons-widget .button-widget').mouseenter(function () {
    $('.container-widget').addClass('open-widget')
  })

  $('.buttons-widget .button-widget').mouseleave(function () {
    $('.container-widget').removeClass('open-widget')
  })
}

/**
 * Button Menu Open and Close
 */

function buttonMenu() {
  var buttonMenuOpen = $('.button-menu-open')
  var buttonMenuClose = $('.button-menu-close')
  var body = $('body')

  buttonMenuOpen.click(menuHandler)
  buttonMenuClose.click(menuHandler)

  function menuHandler() {
    var menuPagina = $('.menu-pagina')

    if (menuPagina.hasClass('active')) {
      body.removeClass('menu-active')
      menuPagina.removeClass('active')
    } else {
      body.addClass('menu-active')
      menuPagina.addClass('active')
    }
  }
}

/**
 * Scroll para el header
 */

function scrollHandler() {
  var lastScrollTop = 0
  $(document).scroll(listenScroll)
  function listenScroll() {
    var st = $(this).scrollTop()
    var pbh = $('.section-1').height()

    if (st > lastScrollTop) {
      $('.container-header').addClass('scroll-down')
    } else {
      $('.container-header').removeClass('scroll-down')
    }

    if (st > pbh / 2) {
      $('.container-header').addClass('alternative-scroll')
    } else {
      $('.container-header').removeClass('alternative-scroll')
    }
    lastScrollTop = st
  }
}

function dropDown() {
  var $items = $('.drop-down .container-item')

  $items.click(function () {
    var $this = $(this)
    $items.removeClass('active')
    $this.addClass('active')
  })
}
