import {
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/accept-language-parser/index.js
var require_accept_language_parser = __commonJS({
  "node_modules/accept-language-parser/index.js"(exports, module) {
    init_react();
    var regex = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
    var isString = function(s) {
      return typeof s === "string";
    };
    function parse(al) {
      var strings = (al || "").match(regex);
      return strings.map(function(m) {
        if (!m) {
          return;
        }
        var bits = m.split(";");
        var ietf = bits[0].split("-");
        var hasScript = ietf.length === 3;
        return {
          code: ietf[0],
          script: hasScript ? ietf[1] : null,
          region: hasScript ? ietf[2] : ietf[1],
          quality: bits[1] ? parseFloat(bits[1].split("=")[1]) : 1
        };
      }).filter(function(r) {
        return r;
      }).sort(function(a, b) {
        return b.quality - a.quality;
      });
    }
    function pick2(supportedLanguages, acceptLanguage, options) {
      options = options || {};
      if (!supportedLanguages || !supportedLanguages.length || !acceptLanguage) {
        return null;
      }
      if (isString(acceptLanguage)) {
        acceptLanguage = parse(acceptLanguage);
      }
      var supported = supportedLanguages.map(function(support) {
        var bits = support.split("-");
        var hasScript = bits.length === 3;
        return {
          code: bits[0],
          script: hasScript ? bits[1] : null,
          region: hasScript ? bits[2] : bits[1]
        };
      });
      for (var i = 0; i < acceptLanguage.length; i++) {
        var lang = acceptLanguage[i];
        var langCode = lang.code.toLowerCase();
        var langRegion = lang.region ? lang.region.toLowerCase() : lang.region;
        var langScript = lang.script ? lang.script.toLowerCase() : lang.script;
        for (var j = 0; j < supported.length; j++) {
          var supportedCode = supported[j].code.toLowerCase();
          var supportedScript = supported[j].script ? supported[j].script.toLowerCase() : supported[j].script;
          var supportedRegion = supported[j].region ? supported[j].region.toLowerCase() : supported[j].region;
          if (langCode === supportedCode && (options.loose || !langScript || langScript === supportedScript) && (options.loose || !langRegion || langRegion === supportedRegion)) {
            return supportedLanguages[j];
          }
        }
      }
      return null;
    }
    module.exports.parse = parse;
    module.exports.pick = pick2;
  }
});

// app/helpers/i18n.ts
init_react();
var import_accept_language_parser = __toModule(require_accept_language_parser());
var locales = {
  de: { en: "English (Germany)", de: "Deutsche (Deutschland)" },
  ch: {
    en: "English (Switzerland)",
    fr: "Fran\xE7ais (Suisse)",
    de: "Deutsche (Schweiz)"
  }
};
var _computedLanguageCodes = Array.from(new Set(Object.values(locales).map((languages) => Object.keys(languages)).flat()));

export {
  locales
};
//# sourceMappingURL=/build/_shared/chunk-M3MQPAQY.js.map
