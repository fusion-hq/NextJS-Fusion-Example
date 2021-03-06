class Fusion {
    setup() {
      new XMLHttpRequest();
      const e = "undefined" != typeof window ? window : {},
        t = e.navigator || { userAgent: "" },
        i = e.document || {},
        o = t.userAgent;
      function r() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }
      function s(e, t) {
        return -1 !== e.indexOf(t);
      }
      function n(e, t, i) {
        return (
          (t = t || ""),
          i || s(e, " OPR/")
            ? s(e, "Mini")
              ? "Opera Mini"
              : "Opera"
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? "BlackBerry"
            : s(e, "IEMobile") || s(e, "WPDesktop")
            ? "Internet Explorer Mobile"
            : s(e, "SamsungBrowser/")
            ? "Samsung Internet"
            : s(e, "Edge") || s(e, "Edg/")
            ? "Microsoft Edge"
            : s(e, "FBIOS")
            ? "Facebook Mobile"
            : s(e, "Chrome")
            ? "Chrome"
            : s(e, "CriOS")
            ? "Chrome iOS"
            : s(e, "UCWEB") || s(e, "UCBrowser")
            ? "UC Browser"
            : s(e, "FxiOS")
            ? "Firefox iOS"
            : s(t, "Apple")
            ? s(e, "Mobile")
              ? "Mobile Safari"
              : "Safari"
            : s(e, "Android")
            ? "Android Mobile"
            : s(e, "Konqueror")
            ? "Konqueror"
            : s(e, "Firefox")
            ? "Firefox"
            : s(e, "MSIE") || s(e, "Trident/")
            ? "Internet Explorer"
            : s(e, "Gecko")
            ? "Mozilla"
            : ""
        );
      }
      var a;
      (this.readCookie = function (e) {
        for (var t = e + "=", o = i.cookie.split(";"), r = 0; r < o.length; r++) {
          for (var s = o[r]; " " == s.charAt(0); ) s = s.substring(1, s.length);
          if (0 == s.indexOf(t)) return s.substring(t.length, s.length);
        }
        return null;
      }),
        (this.createCookie = function (e, t, o) {
          if (o) {
            var r = new Date();
            r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
            var s = "; expires=" + r.toGMTString();
          } else s = "";
          let n = window.location.hostname;
          i.cookie = e + "=" + t + s + "; path=/; domain=" + n;
        }),
        (this.os = /Windows/i.test((a = o))
          ? /Phone/.test(a) || /WPDesktop/.test(a)
            ? "Windows Phone"
            : "Windows"
          : /(iPhone|iPad|iPod)/.test(a)
          ? "iOS"
          : /Android/.test(a)
          ? "Android"
          : /(BlackBerry|PlayBook|BB10)/i.test(a)
          ? "BlackBerry"
          : /Mac/i.test(a)
          ? "Mac OS X"
          : /Linux/.test(a)
          ? "Linux"
          : /CrOS/.test(a)
          ? "Chrome OS"
          : ""),
        (this.browser = n(o, t.vendor, window.opera)),
        (this.browserVersion = (function (e, t, i) {
          var o = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          }[n(e, t, i)];
          if (void 0 === o) return null;
          var r = e.match(o);
          return r ? parseFloat(r[r.length - 2]) : null;
        })(o, t.vendor, window.opera)),
        (this.deviceType = (function (e) {
          const t = (function (e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
              ? "Windows Phone"
              : /iPad/.test(e)
              ? "iPad"
              : /iPod/.test(e)
              ? "iPod Touch"
              : /iPhone/.test(e)
              ? "iPhone"
              : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? "BlackBerry"
              : /Android/.test(e) && !/Mobile/.test(e)
              ? "Android Tablet"
              : /Android/.test(e)
              ? "Android"
              : "";
          })(e);
          return "iPad" === t || "Android Tablet" === t
            ? "Tablet"
            : t
            ? "Mobile"
            : "Desktop";
        })(o)),
        (this.path = window.location.pathname),
        (this.host = window.location.host);
      var d = i.referrer;
      (this.referrer = d),
        (this.referrerDomain = (function (e) {
          var t = e.split("/");
          return t.length >= 3 ? t[2] : "";
        })(d)),
        (this.searchKeywords = window.location.search),
        (this.userAgent = t.userAgent),
        (this.browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
        (this.screenHeight = window.screen.height),
        (this.screenWidth = window.screen.width),
        (this.userIP = ""),
        (this.city = ""),
        (this.country = ""),
        (this.user_id = ""),
        (this.device_id = ""),
        (this.libraryType = "web"),
        (this.libraryVersion = "1.0.0"),
        fetch("https://api64.ipify.org?format=json")
          .then((e) => e.json())
          .then((e) => {
            (this.userIP = e.ip), this.track("Pageview", "");
          })
          .catch(() => {
            (this.userIP = ""),
              console.log("sending pagview without location data.."),
              this.track("Pageview", "");
          });
      let c = {
        user_id: `${this.user_id}`,
        device_id: `${this.device_id}`,
        initial_referrer: `${this.referrer || "direct"}`,
        initial_referring_website: `${this.referrerDomain || "direct"}`,
        referrer: `${this.referrer || "direct"}`,
        referring_website: `${this.referrerDomain || "direct"}`,
        search_keywords: `${this.searchKeywords || "none"}`,
      };
      if (
        ((this.userInfoCookie =
          null != this.readCookie(`fusion_${this.apiKey}`) &&
          null != this.readCookie(`fusion_${this.apiKey}`)
            ? this.readCookie(`fusion_${this.apiKey}`)
            : localStorage.getItem(`fusion_${this.apiKey}`)),
        null == this.userInfoCookie)
      ) {
        (this.user_id = r()),
          (this.device_id = r()),
          (c.user_id = this.user_id),
          (c.device_id = this.device_id);
        const e =
          ((l = "utm_source utm_medium utm_campaign utm_content utm_term".split(
            " "
          )),
          (h = {}),
          (u = ""),
          l.forEach((e) => {
            (u = (function (e, t) {
              t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
              var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
              if (null === i || (i && "string" != typeof i[1] && i[1].length))
                return "";
              var o = i[1];
              try {
                o = decodeURIComponent(o);
              } catch (e) {
                console.error(
                  "Skiped decoding for corrupted query parameter: " + o
                );
              }
              return o.replace(/\+/g, " ");
            })(i.URL, e)).length && (h[e] = `${u}`);
          }),
          h);
        for (const t in e) c[t] = `${e[t]}`;
        let t = JSON.stringify(c);
        this.createCookie(`fusion_${this.apiKey}`, encodeURIComponent(t), 730),
          localStorage.setItem(`fusion_${this.apiKey}`, encodeURIComponent(t)),
          (this.userInfoCookie =
            null != this.readCookie(`fusion_${this.apiKey}`) &&
            null != this.readCookie(`fusion_${this.apiKey}`)
              ? this.readCookie(`fusion_${this.apiKey}`)
              : localStorage.getItem(`fusion_${this.apiKey}`));
      }
      var l, h, u;
    }
    register(e) {
      (this.propertiesToRegister = e),
        (this.eventPropertyPayload =
          null != this.readCookie(`fusion_${this.apiKey}`) &&
          null != this.readCookie(`fusion_${this.apiKey}`)
            ? JSON.parse(
                decodeURIComponent(this.readCookie(`fusion_${this.apiKey}`))
              )
            : JSON.parse(
                decodeURIComponent(localStorage.getItem(`fusion_${this.apiKey}`))
              ));
      for (const e in this.propertiesToRegister)
        this.eventPropertyPayload[e] = `${this.propertiesToRegister[e]}`;
      this.createCookie(
        `fusion_${this.apiKey}`,
        encodeURIComponent(JSON.stringify(this.eventPropertyPayload)),
        730
      ),
        localStorage.setItem(
          `fusion_${this.apiKey}`,
          encodeURIComponent(JSON.stringify(this.eventPropertyPayload))
        );
    }
    unregister(e) {
      (this.propertyToUnregister = e),
        (this.savedPropertyPayload =
          null != this.readCookie(`fusion_${this.apiKey}`) &&
          null != this.readCookie(`fusion_${this.apiKey}`)
            ? JSON.parse(
                decodeURIComponent(this.readCookie(`fusion_${this.apiKey}`))
              )
            : JSON.parse(
                decodeURIComponent(localStorage.getItem(`fusion_${this.apiKey}`))
              )),
        delete this.savedPropertyPayload[`${this.propertyToUnregister}`],
        this.createCookie(
          `fusion_${this.apiKey}`,
          encodeURIComponent(JSON.stringify(this.savedPropertyPayload)),
          730
        ),
        localStorage.setItem(
          `fusion_${this.apiKey}`,
          encodeURIComponent(JSON.stringify(this.savedPropertyPayload))
        );
    }
    track(e, t) {
      (this.event = e),
        null == t ? this.userDefinedProperties : (this.userDefinedProperties = t),
        (this.eventPropertyPayload =
          null != this.readCookie(`fusion_${this.apiKey}`) &&
          null != this.readCookie(`fusion_${this.apiKey}`)
            ? JSON.parse(
                decodeURIComponent(this.readCookie(`fusion_${this.apiKey}`))
              )
            : JSON.parse(
                decodeURIComponent(localStorage.getItem(`fusion_${this.apiKey}`))
              ));
      for (const e in this.userDefinedProperties)
        this.eventPropertyPayload[e] = `${this.userDefinedProperties[e]}`;
      (this.eventPropertyPayload.website = this.host),
        (this.eventPropertyPayload.page = this.path),
        (this.eventPropertyPayload.browser = this.browser),
        (this.eventPropertyPayload.browserVersion = this.browserVersion),
        (this.eventPropertyPayload.os = this.os),
        (this.eventPropertyPayload.deviceType = this.deviceType),
        (this.eventPropertyPayload.screenHeight = this.screenHeight),
        (this.eventPropertyPayload.screenWidth = this.screenWidth),
        (this.eventPropertyPayload.ip = this.userIP),
        (this.eventPropertyPayload.libraryType = this.libraryType),
        (this.eventPropertyPayload.libraryVersion = this.libraryVersion),
        (this.eventPropertyPayload.referrer = this.referrer || "direct"),
        (this.eventPropertyPayload.referring_website =
          this.referrerDomain || "direct"),
        (this.eventPropertyPayload.search_keywords =
          this.searchKeywords || "none"),
        (this.propertiesToSend = JSON.stringify(this.eventPropertyPayload));
      const i = new XMLHttpRequest();
      (this.time = new Date().getTime()),
        i.open(
          "GET",
          `${this.apiHost}/event?event=${this.event}&properties=${this.propertiesToSend}&timestamp=${this.time}&apiKey=${this.apiKey}`
        ),
        i.send();
    }
    init(e, t, i) {
      (this.apiHost = t),
        (this.apiKey = e),
        this.setup(),
        this.createCookie("fusion_autocapture", `${i}`, 730);
    }
  }
  const fusion = new Fusion();
  function getCookie(e) {
    let t = e + "=",
      i = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < i.length; e++) {
      let o = i[e];
      for (; " " == o.charAt(0); ) o = o.substring(1);
      if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
  }
  window.onbeforeunload = function () {
    fusion.track("Pageleave");
  };
  var autocaptureEnabled = getCookie("fusion_autocapture");
  "true" === autocaptureEnabled &&
    (document.addEventListener("click", (e) => {
      const t = e.target.closest("button");
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.innerText,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} button clicked`, "");
      }
    }),
    document.addEventListener("click", (e) => {
      const t = e.target.closest("a");
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.innerText,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} link clicked`, "");
      }
    }),
    document.addEventListener("change", (e) => {
      const t = e.target.closest('input:not([type="checkbox"], [type="radio"])');
      if (t && "fusion-no-capture" !== t.className && t.value.length > 0) {
        let e = "",
          i = t.id,
          o = t.className;
        void 0 !== t.attributes.placeholder &&
          (e = t.attributes.placeholder.value);
        let r = e || i || o || "unnamed";
        fusion.track(`${r} filled`, "");
      }
    }),
    document.addEventListener("click", (e) => {
      const t = e.target.closest('input[type="checkbox"]:checked');
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.value,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} checked`, "");
      }
    }),
    document.addEventListener("click", (e) => {
      const t = e.target.closest('input[type="radio"]:checked');
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.value,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} checked`, "");
      }
    }),
    document.addEventListener("change", (e) => {
      const t = e.target.closest("select");
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.value,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} selected`, "");
      }
    }),
    document.addEventListener("submit", (e) => {
      const t = e.target.closest("form");
      if (t && "fusion-no-capture" !== t.className) {
        let e,
          i,
          o = t.id,
          r = t.className;
        void 0 !== t.attributes.name && (e = t.attributes.name.value),
          void 0 !== t.attributes.action && (i = t.attributes.action.value);
        let s = e || i || o || r || "unnamed";
        fusion.track(`${s} form submitted`, "");
      }
    }),
    document.addEventListener("click", (e) => {
      const t = e.target.closest('input[type="file"]');
      if (t && "fusion-no-capture" !== t.className) {
        let e = t.value,
          i = t.id,
          o = t.className,
          r = e || i || o || "unnamed";
        fusion.track(`${r} input clicked`, "");
      }
    }));