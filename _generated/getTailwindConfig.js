var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.camelcase/index.js"(exports, module2) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module2.exports = camelCase2;
  }
});

// src/_generated/tokens.module.js
var require_tokens_module = __commonJS({
  "src/_generated/tokens.module.js"(exports, module2) {
    module2.exports = {
      colors: {
        core: {
          focus: {
            value: "#1885fb",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#1885fb",
              type: "color"
            },
            name: "colorsCoreFocus",
            attributes: {
              category: "colors",
              type: "core",
              family: "core",
              weight: "focus"
            },
            path: ["colors", "core", "focus"]
          },
          Primary: {
            "Alpha-10": {
              value: "#1513191a",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#1513191a",
                type: "color"
              },
              name: "colorsCorePrimaryAlpha10",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "Primary",
                style: "Alpha-10"
              },
              path: ["colors", "core", "Primary", "Alpha-10"]
            },
            "Alpha-15": {
              value: "#15131926",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#15131926",
                type: "color"
              },
              name: "colorsCorePrimaryAlpha15",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "Primary",
                style: "Alpha-15"
              },
              path: ["colors", "core", "Primary", "Alpha-15"]
            },
            "Alpha-30": {
              value: "#1513194d",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#1513194d",
                type: "color"
              },
              name: "colorsCorePrimaryAlpha30",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "Primary",
                style: "Alpha-30"
              },
              path: ["colors", "core", "Primary", "Alpha-30"]
            },
            "Alpha-60": {
              value: "#15131999",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#15131999",
                type: "color"
              },
              name: "colorsCorePrimaryAlpha60",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "Primary",
                style: "Alpha-60"
              },
              path: ["colors", "core", "Primary", "Alpha-60"]
            },
            "Alpha-90": {
              value: "#151319e6",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#151319e6",
                type: "color"
              },
              name: "colorsCorePrimaryAlpha90",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "Primary",
                style: "Alpha-90"
              },
              path: ["colors", "core", "Primary", "Alpha-90"]
            },
            Base: {
              value: "#151319",
              type: "color",
              description: "DEPRECATED_TOKEN: Removal 20/11/2022",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#151319",
                type: "color",
                description: "DEPRECATED_TOKEN: Removal 20/11/2022"
              },
              name: "colorsCorePrimaryBase",
              attributes: {
                value: "#151319",
                type: "core",
                description: "DEPRECATED_TOKEN: Removal 20/11/2022",
                filePath: "tokens/core.json",
                isSource: true,
                original: {
                  value: "#151319",
                  type: "color",
                  description: "DEPRECATED_TOKEN: Removal 20/11/2022"
                },
                name: "Base",
                attributes: {},
                path: ["colors", "core", "Primary", "Base"],
                comment: "DEPRECATED_TOKEN: Removal 20/11/2022",
                category: "colors",
                family: "core",
                weight: "Primary",
                style: "Base"
              },
              path: ["colors", "core", "Primary", "Base"],
              comment: "DEPRECATED_TOKEN: Removal 20/11/2022"
            }
          },
          White: {
            "Alpha-10": {
              value: "#ffffff1a",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffff1a",
                type: "color"
              },
              name: "colorsCoreWhiteAlpha10",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Alpha-10"
              },
              path: ["colors", "core", "White", "Alpha-10"]
            },
            "Alpha-15": {
              value: "#ffffff26",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffff26",
                type: "color"
              },
              name: "colorsCoreWhiteAlpha15",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Alpha-15"
              },
              path: ["colors", "core", "White", "Alpha-15"]
            },
            "Alpha-30": {
              value: "#ffffff4d",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffff4d",
                type: "color"
              },
              name: "colorsCoreWhiteAlpha30",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Alpha-30"
              },
              path: ["colors", "core", "White", "Alpha-30"]
            },
            "Alpha-60": {
              value: "#ffffff99",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffff99",
                type: "color"
              },
              name: "colorsCoreWhiteAlpha60",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Alpha-60"
              },
              path: ["colors", "core", "White", "Alpha-60"]
            },
            "Alpha-90": {
              value: "#ffffffe6",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffffe6",
                type: "color"
              },
              name: "colorsCoreWhiteAlpha90",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Alpha-90"
              },
              path: ["colors", "core", "White", "Alpha-90"]
            },
            Base: {
              value: "#ffffff",
              type: "color",
              filePath: "tokens/core.json",
              isSource: true,
              original: {
                value: "#ffffff",
                type: "color"
              },
              name: "colorsCoreWhiteBase",
              attributes: {
                category: "colors",
                type: "core",
                family: "core",
                weight: "White",
                style: "Base"
              },
              path: ["colors", "core", "White", "Base"]
            }
          }
        },
        Night: {
          100: {
            value: "#dbdbde",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#dbdbde",
              type: "color"
            },
            name: "colorsNight100",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "100"
            },
            path: ["colors", "Night", "100"]
          },
          200: {
            value: "#c1bfc4",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#c1bfc4",
              type: "color"
            },
            name: "colorsNight200",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "200"
            },
            path: ["colors", "Night", "200"]
          },
          300: {
            value: "#a09fa3",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#a09fa3",
              type: "color"
            },
            name: "colorsNight300",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "300"
            },
            path: ["colors", "Night", "300"]
          },
          400: {
            value: "#838287",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#838287",
              type: "color"
            },
            name: "colorsNight400",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "400"
            },
            path: ["colors", "Night", "400"]
          },
          500: {
            value: "#69676b",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#69676b",
              type: "color"
            },
            name: "colorsNight500",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "500"
            },
            path: ["colors", "Night", "500"]
          },
          600: {
            value: "#4e4c52",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#4e4c52",
              type: "color"
            },
            name: "colorsNight600",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "600"
            },
            path: ["colors", "Night", "600"]
          },
          700: {
            value: "#2e2b33",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#2e2b33",
              type: "color"
            },
            name: "colorsNight700",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "700"
            },
            path: ["colors", "Night", "700"]
          },
          800: {
            value: "#151319",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#151319",
              type: "color"
            },
            name: "colorsNight800",
            attributes: {
              category: "colors",
              type: "Night",
              family: "Night",
              weight: "800"
            },
            path: ["colors", "Night", "800"]
          }
        },
        Neutral: {
          100: {
            value: "#faf8f4",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#faf8f4",
              type: "color"
            },
            name: "colorsNeutral100",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "100"
            },
            path: ["colors", "Neutral", "100"]
          },
          200: {
            value: "#f5f3ef",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#f5f3ef",
              type: "color"
            },
            name: "colorsNeutral200",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "200"
            },
            path: ["colors", "Neutral", "200"]
          },
          300: {
            value: "#e8e6e2",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#e8e6e2",
              type: "color"
            },
            name: "colorsNeutral300",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "300"
            },
            path: ["colors", "Neutral", "300"]
          },
          400: {
            value: "#d1cfcc",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#d1cfcc",
              type: "color"
            },
            name: "colorsNeutral400",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "400"
            },
            path: ["colors", "Neutral", "400"]
          },
          500: {
            value: "#b5b4b1",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#b5b4b1",
              type: "color"
            },
            name: "colorsNeutral500",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "500"
            },
            path: ["colors", "Neutral", "500"]
          },
          600: {
            value: "#949390",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#949390",
              type: "color"
            },
            name: "colorsNeutral600",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "600"
            },
            path: ["colors", "Neutral", "600"]
          },
          700: {
            value: "#787775",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#787775",
              type: "color"
            },
            name: "colorsNeutral700",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "700"
            },
            path: ["colors", "Neutral", "700"]
          },
          800: {
            value: "#5e5e5c",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#5e5e5c",
              type: "color"
            },
            name: "colorsNeutral800",
            attributes: {
              category: "colors",
              type: "Neutral",
              family: "Neutral",
              weight: "800"
            },
            path: ["colors", "Neutral", "800"]
          }
        },
        Info: {
          100: {
            value: "#eef6ff",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#eef6ff",
              type: "color"
            },
            name: "colorsInfo100",
            attributes: {
              category: "colors",
              type: "Info",
              family: "Info",
              weight: "100"
            },
            path: ["colors", "Info", "100"]
          },
          200: {
            value: "#c2d9ff",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#c2d9ff",
              type: "color"
            },
            name: "colorsInfo200",
            attributes: {
              category: "colors",
              type: "Info",
              family: "Info",
              weight: "200"
            },
            path: ["colors", "Info", "200"]
          },
          300: {
            value: "#7aadff",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#7aadff",
              type: "color"
            },
            name: "colorsInfo300",
            attributes: {
              category: "colors",
              type: "Info",
              family: "Info",
              weight: "300"
            },
            path: ["colors", "Info", "300"]
          },
          400: {
            value: "#316ccc",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#316ccc",
              type: "color"
            },
            name: "colorsInfo400",
            attributes: {
              category: "colors",
              type: "Info",
              family: "Info",
              weight: "400"
            },
            path: ["colors", "Info", "400"]
          },
          500: {
            value: "#133c80",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#133c80",
              type: "color"
            },
            name: "colorsInfo500",
            attributes: {
              category: "colors",
              type: "Info",
              family: "Info",
              weight: "500"
            },
            path: ["colors", "Info", "500"]
          }
        },
        Success: {
          100: {
            value: "#f3f9de",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#f3f9de",
              type: "color"
            },
            name: "colorsSuccess100",
            attributes: {
              category: "colors",
              type: "Success",
              family: "Success",
              weight: "100"
            },
            path: ["colors", "Success", "100"]
          },
          200: {
            value: "#c3e072",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#c3e072",
              type: "color"
            },
            name: "colorsSuccess200",
            attributes: {
              category: "colors",
              type: "Success",
              family: "Success",
              weight: "200"
            },
            path: ["colors", "Success", "200"]
          },
          300: {
            value: "#86ad1b",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#86ad1b",
              type: "color"
            },
            name: "colorsSuccess300",
            attributes: {
              category: "colors",
              type: "Success",
              family: "Success",
              weight: "300"
            },
            path: ["colors", "Success", "300"]
          },
          400: {
            value: "#547a00",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#547a00",
              type: "color"
            },
            name: "colorsSuccess400",
            attributes: {
              category: "colors",
              type: "Success",
              family: "Success",
              weight: "400"
            },
            path: ["colors", "Success", "400"]
          },
          500: {
            value: "#2f4500",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#2f4500",
              type: "color"
            },
            name: "colorsSuccess500",
            attributes: {
              category: "colors",
              type: "Success",
              family: "Success",
              weight: "500"
            },
            path: ["colors", "Success", "500"]
          }
        },
        Warning: {
          100: {
            value: "#fff2e1",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#fff2e1",
              type: "color"
            },
            name: "colorsWarning100",
            attributes: {
              category: "colors",
              type: "Warning",
              family: "Warning",
              weight: "100"
            },
            path: ["colors", "Warning", "100"]
          },
          200: {
            value: "#ffc675",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ffc675",
              type: "color"
            },
            name: "colorsWarning200",
            attributes: {
              category: "colors",
              type: "Warning",
              family: "Warning",
              weight: "200"
            },
            path: ["colors", "Warning", "200"]
          },
          300: {
            value: "#ff8827",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ff8827",
              type: "color"
            },
            name: "colorsWarning300",
            attributes: {
              category: "colors",
              type: "Warning",
              family: "Warning",
              weight: "300"
            },
            path: ["colors", "Warning", "300"]
          },
          400: {
            value: "#c94900",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#c94900",
              type: "color"
            },
            name: "colorsWarning400",
            attributes: {
              category: "colors",
              type: "Warning",
              family: "Warning",
              weight: "400"
            },
            path: ["colors", "Warning", "400"]
          },
          500: {
            value: "#873200",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#873200",
              type: "color"
            },
            name: "colorsWarning500",
            attributes: {
              category: "colors",
              type: "Warning",
              family: "Warning",
              weight: "500"
            },
            path: ["colors", "Warning", "500"]
          }
        },
        Error: {
          100: {
            value: "#ffebee",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ffebee",
              type: "color"
            },
            name: "colorsError100",
            attributes: {
              category: "colors",
              type: "Error",
              family: "Error",
              weight: "100"
            },
            path: ["colors", "Error", "100"]
          },
          200: {
            value: "#ffb3ba",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ffb3ba",
              type: "color"
            },
            name: "colorsError200",
            attributes: {
              category: "colors",
              type: "Error",
              family: "Error",
              weight: "200"
            },
            path: ["colors", "Error", "200"]
          },
          300: {
            value: "#ff5c5c",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ff5c5c",
              type: "color"
            },
            name: "colorsError300",
            attributes: {
              category: "colors",
              type: "Error",
              family: "Error",
              weight: "300"
            },
            path: ["colors", "Error", "300"]
          },
          400: {
            value: "#db0f24",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#db0f24",
              type: "color"
            },
            name: "colorsError400",
            attributes: {
              category: "colors",
              type: "Error",
              family: "Error",
              weight: "400"
            },
            path: ["colors", "Error", "400"]
          },
          500: {
            value: "#99001e",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#99001e",
              type: "color"
            },
            name: "colorsError500",
            attributes: {
              category: "colors",
              type: "Error",
              family: "Error",
              weight: "500"
            },
            path: ["colors", "Error", "500"]
          }
        },
        Sale: {
          100: {
            value: "#ffebf1",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ffebf1",
              type: "color"
            },
            name: "colorsSale100",
            attributes: {
              category: "colors",
              type: "Sale",
              family: "Sale",
              weight: "100"
            },
            path: ["colors", "Sale", "100"]
          },
          200: {
            value: "#ffbbcb",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#ffbbcb",
              type: "color"
            },
            name: "colorsSale200",
            attributes: {
              category: "colors",
              type: "Sale",
              family: "Sale",
              weight: "200"
            },
            path: ["colors", "Sale", "200"]
          },
          300: {
            value: "#f95383",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#f95383",
              type: "color"
            },
            name: "colorsSale300",
            attributes: {
              category: "colors",
              type: "Sale",
              family: "Sale",
              weight: "300"
            },
            path: ["colors", "Sale", "300"]
          },
          400: {
            value: "#e02259",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#e02259",
              type: "color"
            },
            name: "colorsSale400",
            attributes: {
              category: "colors",
              type: "Sale",
              family: "Sale",
              weight: "400"
            },
            path: ["colors", "Sale", "400"]
          },
          500: {
            value: "#a00d46",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#a00d46",
              type: "color"
            },
            name: "colorsSale500",
            attributes: {
              category: "colors",
              type: "Sale",
              family: "Sale",
              weight: "500"
            },
            path: ["colors", "Sale", "500"]
          }
        },
        Accent: {
          100: {
            value: "#f3eafa",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#f3eafa",
              type: "color"
            },
            name: "colorsAccent100",
            attributes: {
              category: "colors",
              type: "Accent",
              family: "Accent",
              weight: "100"
            },
            path: ["colors", "Accent", "100"]
          },
          200: {
            value: "#d9b8f3",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#d9b8f3",
              type: "color"
            },
            name: "colorsAccent200",
            attributes: {
              category: "colors",
              type: "Accent",
              family: "Accent",
              weight: "200"
            },
            path: ["colors", "Accent", "200"]
          },
          300: {
            value: "#b278e2",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#b278e2",
              type: "color"
            },
            name: "colorsAccent300",
            attributes: {
              category: "colors",
              type: "Accent",
              family: "Accent",
              weight: "300"
            },
            path: ["colors", "Accent", "300"]
          },
          400: {
            value: "#72419b",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#72419b",
              type: "color"
            },
            name: "colorsAccent400",
            attributes: {
              category: "colors",
              type: "Accent",
              family: "Accent",
              weight: "400"
            },
            path: ["colors", "Accent", "400"]
          },
          500: {
            value: "#573772",
            type: "color",
            filePath: "tokens/core.json",
            isSource: true,
            original: {
              value: "#573772",
              type: "color"
            },
            name: "colorsAccent500",
            attributes: {
              category: "colors",
              type: "Accent",
              family: "Accent",
              weight: "500"
            },
            path: ["colors", "Accent", "500"]
          }
        }
      },
      spacings: {
        x: {
          value: "4px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "4",
            type: "spacing"
          },
          name: "spacingsX",
          attributes: {
            category: "spacings",
            type: "x",
            family: "x"
          },
          path: ["spacings", "x"]
        },
        x2: {
          value: "8px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "8",
            type: "spacing"
          },
          name: "spacingsX2",
          attributes: {
            category: "spacings",
            type: "x2",
            family: "x2"
          },
          path: ["spacings", "x2"]
        },
        x3: {
          value: "12px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "12",
            type: "spacing"
          },
          name: "spacingsX3",
          attributes: {
            category: "spacings",
            type: "x3",
            family: "x3"
          },
          path: ["spacings", "x3"]
        },
        x4: {
          value: "16px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "16",
            type: "spacing"
          },
          name: "spacingsX4",
          attributes: {
            category: "spacings",
            type: "x4",
            family: "x4"
          },
          path: ["spacings", "x4"]
        },
        x6: {
          value: "24px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "24",
            type: "spacing"
          },
          name: "spacingsX6",
          attributes: {
            category: "spacings",
            type: "x6",
            family: "x6"
          },
          path: ["spacings", "x6"]
        },
        x8: {
          value: "32px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "32",
            type: "spacing"
          },
          name: "spacingsX8",
          attributes: {
            category: "spacings",
            type: "x8",
            family: "x8"
          },
          path: ["spacings", "x8"]
        },
        x10: {
          value: "40px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "40",
            type: "spacing"
          },
          name: "spacingsX10",
          attributes: {
            category: "spacings",
            type: "x10",
            family: "x10"
          },
          path: ["spacings", "x10"]
        },
        x12: {
          value: "48px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "48",
            type: "spacing"
          },
          name: "spacingsX12",
          attributes: {
            category: "spacings",
            type: "x12",
            family: "x12"
          },
          path: ["spacings", "x12"]
        },
        x14: {
          value: "56px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "56",
            type: "spacing"
          },
          name: "spacingsX14",
          attributes: {
            category: "spacings",
            type: "x14",
            family: "x14"
          },
          path: ["spacings", "x14"]
        },
        x16: {
          value: "64px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "64",
            type: "spacing"
          },
          name: "spacingsX16",
          attributes: {
            category: "spacings",
            type: "x16",
            family: "x16"
          },
          path: ["spacings", "x16"]
        },
        x18: {
          value: "72px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "72",
            type: "spacing"
          },
          name: "spacingsX18",
          attributes: {
            category: "spacings",
            type: "x18",
            family: "x18"
          },
          path: ["spacings", "x18"]
        },
        x20: {
          value: "80px",
          type: "spacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "80",
            type: "spacing"
          },
          name: "spacingsX20",
          attributes: {
            category: "spacings",
            type: "x20",
            family: "x20"
          },
          path: ["spacings", "x20"]
        }
      },
      "border-radius": {
        "element-border": {
          value: "4px",
          type: "borderRadius",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "4",
            type: "borderRadius"
          },
          name: "borderRadiusElementBorder",
          attributes: {
            category: "border-radius",
            type: "element-border",
            family: "element-border"
          },
          path: ["border-radius", "element-border"]
        },
        "focus-border": {
          value: "6px",
          type: "borderRadius",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "6",
            type: "borderRadius"
          },
          name: "borderRadiusFocusBorder",
          attributes: {
            category: "border-radius",
            type: "focus-border",
            family: "focus-border"
          },
          path: ["border-radius", "focus-border"]
        }
      },
      fontFamilies: {
        inter: {
          value: "Inter",
          type: "fontFamilies",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Inter",
            type: "fontFamilies"
          },
          name: "fontFamiliesInter",
          attributes: {
            category: "fontFamilies",
            type: "inter",
            family: "inter"
          },
          path: ["fontFamilies", "inter"]
        },
        "noto-serif-display": {
          value: "'Noto Serif Display'",
          type: "fontFamilies",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Noto Serif Display",
            type: "fontFamilies"
          },
          name: "fontFamiliesNotoSerifDisplay",
          attributes: {
            category: "fontFamilies",
            type: "noto-serif-display",
            family: "noto-serif-display"
          },
          path: ["fontFamilies", "noto-serif-display"]
        },
        arial: {
          value: "Arial",
          type: "fontFamilies",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Arial",
            type: "fontFamilies"
          },
          name: "fontFamiliesArial",
          attributes: {
            category: "fontFamilies",
            type: "arial",
            family: "arial"
          },
          path: ["fontFamilies", "arial"]
        }
      },
      lineHeights: {
        base: {
          value: "24",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "24",
            type: "lineHeights"
          },
          name: "lineHeightsBase",
          attributes: {
            category: "lineHeights",
            type: "base",
            family: "base"
          },
          path: ["lineHeights", "base"]
        },
        xs: {
          value: "20",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "20",
            type: "lineHeights"
          },
          name: "lineHeightsXs",
          attributes: {
            category: "lineHeights",
            type: "xs",
            family: "xs"
          },
          path: ["lineHeights", "xs"]
        },
        "2xs": {
          value: "16",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "16",
            type: "lineHeights"
          },
          name: "lineHeights2xs",
          attributes: {
            category: "lineHeights",
            type: "2xs",
            family: "2xs"
          },
          path: ["lineHeights", "2xs"]
        },
        "3xs": {
          value: "12",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "12",
            type: "lineHeights"
          },
          name: "lineHeights3xs",
          attributes: {
            category: "lineHeights",
            type: "3xs",
            family: "3xs"
          },
          path: ["lineHeights", "3xs"]
        },
        xl: {
          value: "56",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "56",
            type: "lineHeights"
          },
          name: "lineHeightsXl",
          attributes: {
            category: "lineHeights",
            type: "xl",
            family: "xl"
          },
          path: ["lineHeights", "xl"]
        },
        lg: {
          value: "36",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "36",
            type: "lineHeights"
          },
          name: "lineHeightsLg",
          attributes: {
            category: "lineHeights",
            type: "lg",
            family: "lg"
          },
          path: ["lineHeights", "lg"]
        },
        md: {
          value: "32",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "32",
            type: "lineHeights"
          },
          name: "lineHeightsMd",
          attributes: {
            category: "lineHeights",
            type: "md",
            family: "md"
          },
          path: ["lineHeights", "md"]
        },
        sm: {
          value: "28",
          type: "lineHeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "28",
            type: "lineHeights"
          },
          name: "lineHeightsSm",
          attributes: {
            category: "lineHeights",
            type: "sm",
            family: "sm"
          },
          path: ["lineHeights", "sm"]
        }
      },
      fontWeights: {
        "inter-0": {
          value: 400,
          type: "fontWeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Regular",
            type: "fontWeights"
          },
          name: "fontWeightsInter0",
          attributes: {
            category: "fontWeights",
            type: "inter-0",
            family: "inter-0"
          },
          path: ["fontWeights", "inter-0"]
        },
        "inter-1": {
          value: 700,
          type: "fontWeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Bold",
            type: "fontWeights"
          },
          name: "fontWeightsInter1",
          attributes: {
            category: "fontWeights",
            type: "inter-1",
            family: "inter-1"
          },
          path: ["fontWeights", "inter-1"]
        },
        "noto-serif-display-2": {
          value: 700,
          type: "fontWeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Bold",
            type: "fontWeights"
          },
          name: "fontWeightsNotoSerifDisplay2",
          attributes: {
            category: "fontWeights",
            type: "noto-serif-display-2",
            family: "noto-serif-display-2"
          },
          path: ["fontWeights", "noto-serif-display-2"]
        },
        "arial-3": {
          value: 700,
          type: "fontWeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Bold",
            type: "fontWeights"
          },
          name: "fontWeightsArial3",
          attributes: {
            category: "fontWeights",
            type: "arial-3",
            family: "arial-3"
          },
          path: ["fontWeights", "arial-3"]
        },
        "arial-4": {
          value: 400,
          type: "fontWeights",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "Regular",
            type: "fontWeights"
          },
          name: "fontWeightsArial4",
          attributes: {
            category: "fontWeights",
            type: "arial-4",
            family: "arial-4"
          },
          path: ["fontWeights", "arial-4"]
        }
      },
      fontSize: {
        "4xs": {
          value: "10px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "10",
            type: "fontSizes"
          },
          name: "fontSize4xs",
          attributes: {
            category: "fontSize",
            type: "4xs",
            family: "4xs"
          },
          path: ["fontSize", "4xs"]
        },
        "3xs": {
          value: "12px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "12",
            type: "fontSizes"
          },
          name: "fontSize3xs",
          attributes: {
            category: "fontSize",
            type: "3xs",
            family: "3xs"
          },
          path: ["fontSize", "3xs"]
        },
        "2xs": {
          value: "14px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "14",
            type: "fontSizes"
          },
          name: "fontSize2xs",
          attributes: {
            category: "fontSize",
            type: "2xs",
            family: "2xs"
          },
          path: ["fontSize", "2xs"]
        },
        base: {
          value: "16px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "16",
            type: "fontSizes"
          },
          name: "fontSizeBase",
          attributes: {
            category: "fontSize",
            type: "base",
            family: "base"
          },
          path: ["fontSize", "base"]
        },
        xs: {
          value: "18px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "18",
            type: "fontSizes"
          },
          name: "fontSizeXs",
          attributes: {
            category: "fontSize",
            type: "xs",
            family: "xs"
          },
          path: ["fontSize", "xs"]
        },
        sm: {
          value: "20px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "20",
            type: "fontSizes"
          },
          name: "fontSizeSm",
          attributes: {
            category: "fontSize",
            type: "sm",
            family: "sm"
          },
          path: ["fontSize", "sm"]
        },
        md: {
          value: "24px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "24",
            type: "fontSizes"
          },
          name: "fontSizeMd",
          attributes: {
            category: "fontSize",
            type: "md",
            family: "md"
          },
          path: ["fontSize", "md"]
        },
        lg: {
          value: "28px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "28",
            type: "fontSizes"
          },
          name: "fontSizeLg",
          attributes: {
            category: "fontSize",
            type: "lg",
            family: "lg"
          },
          path: ["fontSize", "lg"]
        },
        xl: {
          value: "40px",
          type: "fontSizes",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "40",
            type: "fontSizes"
          },
          name: "fontSizeXl",
          attributes: {
            category: "fontSize",
            type: "xl",
            family: "xl"
          },
          path: ["fontSize", "xl"]
        }
      },
      letterSpacing: {
        0: {
          value: "0.012em",
          type: "letterSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "1.2%",
            type: "letterSpacing"
          },
          name: "letterSpacing0",
          attributes: {
            category: "letterSpacing",
            type: "0",
            family: "0"
          },
          path: ["letterSpacing", "0"]
        },
        base: {
          value: "0.192em",
          type: "letterSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "0.192em",
            type: "letterSpacing"
          },
          name: "letterSpacingBase",
          attributes: {
            category: "letterSpacing",
            type: "base",
            family: "base"
          },
          path: ["letterSpacing", "base"]
        }
      },
      paragraphSpacing: {
        0: {
          value: "0",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "0",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing0",
          attributes: {
            category: "paragraphSpacing",
            type: "0",
            family: "0"
          },
          path: ["paragraphSpacing", "0"]
        },
        1: {
          value: "20",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "20",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing1",
          attributes: {
            category: "paragraphSpacing",
            type: "1",
            family: "1"
          },
          path: ["paragraphSpacing", "1"]
        },
        2: {
          value: "24",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "24",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing2",
          attributes: {
            category: "paragraphSpacing",
            type: "2",
            family: "2"
          },
          path: ["paragraphSpacing", "2"]
        },
        3: {
          value: "28",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "28",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing3",
          attributes: {
            category: "paragraphSpacing",
            type: "3",
            family: "3"
          },
          path: ["paragraphSpacing", "3"]
        },
        4: {
          value: "32",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "32",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing4",
          attributes: {
            category: "paragraphSpacing",
            type: "4",
            family: "4"
          },
          path: ["paragraphSpacing", "4"]
        },
        5: {
          value: "36",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "36",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing5",
          attributes: {
            category: "paragraphSpacing",
            type: "5",
            family: "5"
          },
          path: ["paragraphSpacing", "5"]
        },
        6: {
          value: "40",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "40",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing6",
          attributes: {
            category: "paragraphSpacing",
            type: "6",
            family: "6"
          },
          path: ["paragraphSpacing", "6"]
        },
        7: {
          value: "48",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "48",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing7",
          attributes: {
            category: "paragraphSpacing",
            type: "7",
            family: "7"
          },
          path: ["paragraphSpacing", "7"]
        },
        8: {
          value: "56",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "56",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing8",
          attributes: {
            category: "paragraphSpacing",
            type: "8",
            family: "8"
          },
          path: ["paragraphSpacing", "8"]
        },
        9: {
          value: "80",
          type: "paragraphSpacing",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "80",
            type: "paragraphSpacing"
          },
          name: "paragraphSpacing9",
          attributes: {
            category: "paragraphSpacing",
            type: "9",
            family: "9"
          },
          path: ["paragraphSpacing", "9"]
        }
      },
      textCase: {
        none: {
          value: "none",
          type: "textCase",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "none",
            type: "textCase"
          },
          name: "textCaseNone",
          attributes: {
            category: "textCase",
            type: "none",
            family: "none"
          },
          path: ["textCase", "none"]
        },
        uppercase: {
          value: "uppercase",
          type: "textCase",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "uppercase",
            type: "textCase"
          },
          name: "textCaseUppercase",
          attributes: {
            category: "textCase",
            type: "uppercase",
            family: "uppercase"
          },
          path: ["textCase", "uppercase"]
        }
      },
      textDecoration: {
        none: {
          value: "none",
          type: "textDecoration",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "none",
            type: "textDecoration"
          },
          name: "textDecorationNone",
          attributes: {
            category: "textDecoration",
            type: "none",
            family: "none"
          },
          path: ["textDecoration", "none"]
        },
        "line-through": {
          value: "line-through",
          type: "textDecoration",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "line-through",
            type: "textDecoration"
          },
          name: "textDecorationLineThrough",
          attributes: {
            category: "textDecoration",
            type: "line-through",
            family: "line-through"
          },
          path: ["textDecoration", "line-through"]
        },
        underline: {
          value: "underline",
          type: "textDecoration",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "underline",
            type: "textDecoration"
          },
          name: "textDecorationUnderline",
          attributes: {
            category: "textDecoration",
            type: "underline",
            family: "underline"
          },
          path: ["textDecoration", "underline"]
        }
      },
      paragraphIndent: {
        0: {
          value: "0px",
          type: "dimension",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "0px",
            type: "dimension"
          },
          name: "paragraphIndent0",
          attributes: {
            category: "paragraphIndent",
            type: "0",
            family: "0"
          },
          path: ["paragraphIndent", "0"]
        }
      },
      screen: {
        sm: {
          value: "640px",
          type: "dimension",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "640px",
            type: "dimension"
          },
          name: "screenSm",
          attributes: {
            category: "screen",
            type: "sm",
            family: "sm"
          },
          path: ["screen", "sm"]
        },
        md: {
          value: "768px",
          type: "dimension",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "768px",
            type: "dimension"
          },
          name: "screenMd",
          attributes: {
            category: "screen",
            type: "md",
            family: "md"
          },
          path: ["screen", "md"]
        },
        lg: {
          value: "1024px",
          type: "dimension",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "1024px",
            type: "dimension"
          },
          name: "screenLg",
          attributes: {
            category: "screen",
            type: "lg",
            family: "lg"
          },
          path: ["screen", "lg"]
        }
      },
      aspectRatio: {
        "ratio-1-1": {
          value: "1",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "1 / 1"
          },
          name: "aspectRatioRatio11",
          attributes: {
            category: "aspectRatio",
            type: "ratio-1-1",
            family: "ratio-1-1"
          },
          path: ["aspectRatio", "ratio-1-1"]
        },
        "ratio-5-4": {
          value: "1.25",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "5 / 4"
          },
          name: "aspectRatioRatio54",
          attributes: {
            category: "aspectRatio",
            type: "ratio-5-4",
            family: "ratio-5-4"
          },
          path: ["aspectRatio", "ratio-5-4"]
        },
        "ratio-4-3": {
          value: "1.333",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "4 / 3"
          },
          name: "aspectRatioRatio43",
          attributes: {
            category: "aspectRatio",
            type: "ratio-4-3",
            family: "ratio-4-3"
          },
          path: ["aspectRatio", "ratio-4-3"]
        },
        "ratio-20-3": {
          value: "6.667",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "20 / 3"
          },
          name: "aspectRatioRatio203",
          attributes: {
            category: "aspectRatio",
            type: "ratio-20-3",
            family: "ratio-20-3"
          },
          path: ["aspectRatio", "ratio-20-3"]
        },
        "ratio-20-7": {
          value: "2.857",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "20 / 7"
          },
          name: "aspectRatioRatio207",
          attributes: {
            category: "aspectRatio",
            type: "ratio-20-7",
            family: "ratio-20-7"
          },
          path: ["aspectRatio", "ratio-20-7"]
        },
        "ratio-16-9": {
          value: "1.778",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "16 / 9"
          },
          name: "aspectRatioRatio169",
          attributes: {
            category: "aspectRatio",
            type: "ratio-16-9",
            family: "ratio-16-9"
          },
          path: ["aspectRatio", "ratio-16-9"]
        },
        "ratio-4-5": {
          value: "0.8",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "4 / 5"
          },
          name: "aspectRatioRatio45",
          attributes: {
            category: "aspectRatio",
            type: "ratio-4-5",
            family: "ratio-4-5"
          },
          path: ["aspectRatio", "ratio-4-5"]
        },
        "ratio-3-4": {
          value: "0.75",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "3 / 4"
          },
          name: "aspectRatioRatio34",
          attributes: {
            category: "aspectRatio",
            type: "ratio-3-4",
            family: "ratio-3-4"
          },
          path: ["aspectRatio", "ratio-3-4"]
        },
        "ratio-9-16": {
          value: "0.563",
          filePath: "tokens/core.json",
          isSource: true,
          original: {
            value: "9 / 16"
          },
          name: "aspectRatioRatio916",
          attributes: {
            category: "aspectRatio",
            type: "ratio-9-16",
            family: "ratio-9-16"
          },
          path: ["aspectRatio", "ratio-9-16"]
        }
      },
      font: {
        "Noto Serif Display": {
          700: {
            italic: {
              value: "fonts/noto/noto-serif-display-v16-latin-ext-700italic",
              formats: ["woff2", "woff", "ttf", "svg"],
              filePath: "tokens/fonts.json",
              isSource: true,
              original: {
                value: "fonts/noto/noto-serif-display-v16-latin-ext-700italic",
                formats: ["woff2", "woff", "ttf", "svg"]
              },
              name: "fontNotoSerifDisplay700Italic",
              attributes: {
                category: "font",
                type: "Noto Serif Display",
                family: "Noto Serif Display",
                weight: "700",
                style: "italic"
              },
              path: ["font", "Noto Serif Display", "700", "italic"]
            }
          }
        },
        Inter: {
          400: {
            normal: {
              value: "fonts/inter/inter-regular-webfont-v1",
              formats: ["woff2", "woff", "eot", "ttf", "svg"],
              filePath: "tokens/fonts.json",
              isSource: true,
              original: {
                value: "fonts/inter/inter-regular-webfont-v1",
                formats: ["woff2", "woff", "eot", "ttf", "svg"]
              },
              name: "fontInter400Normal",
              attributes: {
                category: "font",
                type: "Inter",
                family: "Inter",
                weight: "400",
                style: "normal"
              },
              path: ["font", "Inter", "400", "normal"]
            }
          },
          700: {
            normal: {
              value: "fonts/inter/inter-bold-webfont-v1",
              formats: ["woff2", "woff", "eot", "ttf", "svg"],
              filePath: "tokens/fonts.json",
              isSource: true,
              original: {
                value: "fonts/inter/inter-bold-webfont-v1",
                formats: ["woff2", "woff", "eot", "ttf", "svg"]
              },
              name: "fontInter700Normal",
              attributes: {
                category: "font",
                type: "Inter",
                family: "Inter",
                weight: "700",
                style: "normal"
              },
              path: ["font", "Inter", "700", "normal"]
            }
          }
        }
      }
    };
  }
});

// ../../node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "../../node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: () => _default
    });
    function createPlugin(plugin, config) {
      return {
        handler: plugin,
        config
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// ../../node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS({
  "../../node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: () => _default
    });
    var _createPlugin = /* @__PURE__ */ _interopRequireDefault(require_createPlugin());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// ../../node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "../../node_modules/tailwindcss/plugin.js"(exports, module2) {
    var createPlugin = require_create_plugin();
    module2.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// ../../node_modules/@tailwindcss/line-clamp/src/index.js
var require_src = __commonJS({
  "../../node_modules/@tailwindcss/line-clamp/src/index.js"(exports, module2) {
    var plugin = require_plugin();
    var baseStyles = {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical"
    };
    var lineClamp = plugin(
      function({ matchUtilities, addUtilities, theme, variants, e }) {
        const values = theme("lineClamp");
        matchUtilities(
          {
            "line-clamp": (value) => ({
              ...baseStyles,
              "-webkit-line-clamp": `${value}`
            })
          },
          { values }
        );
        addUtilities(
          [
            {
              ".line-clamp-none": {
                "-webkit-line-clamp": "unset"
              }
            }
          ],
          variants("lineClamp")
        );
      },
      {
        theme: {
          lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6"
          }
        },
        variants: {
          lineClamp: ["responsive"]
        }
      }
    );
    module2.exports = lineClamp;
  }
});

// src/getTailwindConfig.ts
var getTailwindConfig_exports = {};
__export(getTailwindConfig_exports, {
  getFontFamiliesFromTokens: () => getFontFamiliesFromTokens,
  getSpacingFromTokens: () => getSpacingFromTokens,
  getTailwindConfig: () => getTailwindConfig
});
module.exports = __toCommonJS(getTailwindConfig_exports);
var import_lodash = __toESM(require_lodash());
var import_tokens = __toESM(require_tokens_module());
var colors = extractNestedTokens(import_tokens.default, "colors", "colors");
colors["transparent"] = "transparent";
var borderRadius = extractNestedTokens(
  import_tokens.default,
  "borderRadius",
  "border-radius"
);
var fonFamilies = getFontFamiliesFromTokens(import_tokens.default);
var _a;
var fontSizes = extractSimpleTokens((_a = import_tokens.default) == null ? void 0 : _a.fontSize, "fontSize");
var _a2;
var lineHeights = extractSimpleTokens(
  (_a2 = import_tokens.default) == null ? void 0 : _a2.lineHeights,
  "lineHeights",
  "px"
);
var _a3;
var fontWeights = extractSimpleTokens((_a3 = import_tokens.default) == null ? void 0 : _a3.fontWeights, "fontWeights");
var _a4;
var letterSpacing = extractSimpleTokens(
  (_a4 = import_tokens.default) == null ? void 0 : _a4.letterSpacing,
  "letterSpacing"
);
var spacing = getSpacingFromTokens(import_tokens.default);
var _a5;
var screen = extractSimpleTokens((_a5 = import_tokens.default) == null ? void 0 : _a5.screen, "screen");
var _a6;
var aspectRatio = extractSimpleTokens((_a6 = import_tokens.default) == null ? void 0 : _a6.aspectRatio, "aspectRatio");
function getTailwindConfig({ content }) {
  return {
    content: content || ["**/*.{js,css}"],
    separator: "_",
    theme: {
      colors,
      fontFamily: fonFamilies,
      fontSize: fontSizes,
      lineHeight: lineHeights,
      fontWeight: { ...fontWeights, bold: 700 },
      screens: screen,
      aspectRatio,
      textUnderlineOffset: {
        lg: "6px",
        base: "5px",
        sm: "4px",
        xs: "3px",
        xxs: "2px"
      },
      extend: {
        borderRadius,
        letterSpacing,
        spacing,
        keyframes: {
          slideDown: {
            "0%": { opacity: "0", transform: "translateY(-100%)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          slideUp: {
            "0%": { opacity: "1", transform: "translateY(0)" },
            "100%": { opacity: "0", transform: "translateY(-100%)" }
          },
          slideOutLeft: {
            "0%": { left: "-100%" },
            "100%": { left: 0 }
          },
          slideBackLeft: {
            "0%": { left: 0 },
            "100%": { left: "-100%" }
          },
          appear: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          },
          disappear: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 }
          }
        },
        animation: {
          slideDown: "slideDown 0.5s ease-in-out",
          slideUp: "slideUp 0.5s ease-in-out",
          slideOutLeft: "slideOutLeft 0.3s ease-in-out forwards",
          slideBackLeft: "slideBackLeft 0.3s ease-in-out forwards",
          appear: "appear 0.3s ease-in-out forwards",
          disappear: "disappear 0.3s ease-in-out forwards"
        },
        transitionProperty: {
          background: "background",
          top: "top",
          left: "left",
          boxShadow: "box-shadow"
        },
        minHeight: spacing,
        maxHeight: {
          ...spacing,
          "80vh": "80vh"
        },
        maxWidth: {
          ...spacing,
          sm: screen.sm,
          md: screen.md,
          lg: screen.lg,
          "60vw": "60vw"
        },
        minWidth: spacing,
        content: {
          empty: '" "'
        },
        scale: {
          "100": "100%"
        },
        top: spacing,
        right: spacing,
        bottom: spacing,
        left: spacing,
        backgroundSize: {
          // Used by link component
          "0-1": "0 1px",
          "100-1": "100% 1px",
          "0-2": "0 2px",
          "100-2": "100% 2px"
        },
        boxShadow: {
          "accent200-0": `inset 0 0px 0 0 ${colors.accent200}`,
          "accent200-bottom-12": `inset 0 -12px 0 0 ${colors.accent200}`,
          "accent300-bottom-12": `inset 0 -12px 0 0 ${colors.accent300}`,
          "accent400-0": `inset 0 0px 0 0 ${colors.accent400}`,
          "accent400-bottom-12": `inset 0 -12px 0 0 ${colors.accent400}`,
          "accent500-bottom-12": `inset 0 -12px 0 0 ${colors.accent500}`
        }
      }
    },
    plugins: [require_src()],
    future: {
      hoverOnlyWhenSupported: true
    }
  };
}
function extractNestedTokens(tokens2, tokenName, tokenType) {
  if (!tokens2) {
    return {};
  }
  const result = {};
  const extract = (obj) => {
    for (const key in obj) {
      const item = obj[key];
      if (item.value && item.name) {
        const name = (0, import_lodash.default)(item.name.replace(tokenName, ""));
        result[name] = item.value;
      } else {
        extract(item);
      }
    }
  };
  extract(tokens2[tokenType]);
  return result;
}
function extractSimpleTokens(tokens2, tokenName, unit) {
  if (!tokens2) {
    return {};
  }
  const result = {};
  for (const key in tokens2) {
    const item = tokens2[key];
    if (item.value && item.name) {
      const name = (0, import_lodash.default)(item.name.replace(tokenName, ""));
      result[name] = unit ? `${item.value}${unit}` : item.value;
    }
  }
  return result;
}
function getSpacingFromTokens(tokens2) {
  const spacings = extractSimpleTokens(tokens2 == null ? void 0 : tokens2.spacings, "spacings");
  const negativeSpacings = {};
  for (const key in tokens2 == null ? void 0 : tokens2.spacings) {
    const item = tokens2 == null ? void 0 : tokens2.spacings[key];
    if (item.value && item.name) {
      const name = (0, import_lodash.default)(item.name.replace("spacings", ""));
      const negativSpaceName = "n" + name;
      negativeSpacings[negativSpaceName] = `${-parseInt(item.value)}`;
    }
  }
  return { ...spacings, ...negativeSpacings };
}
function getFontFamiliesFromTokens(tokens2) {
  const fonts = extractSimpleTokens(tokens2 == null ? void 0 : tokens2.fontFamilies, "fontFamilies");
  const result = {
    standard: [fonts.inter, "sans-serif"],
    emotional: [fonts.notoSerifDisplay, "serif"],
    custom: [fonts.arial, "sans-serif"]
  };
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFontFamiliesFromTokens,
  getSpacingFromTokens,
  getTailwindConfig
});
