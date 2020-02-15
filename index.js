"use strict";

function decodeEntities(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt|#39|#039|&#96|&#096|pound|euro|dollar|cedil|raquo|rdquo|ldquo|epsilon|Epsilon|delta|Delta|phi|Phi|sigma|Sigma|omega|Omega|ograve|Ograve|oacute|Oacute|agrave|Agrave|aacute|Aacute|egrave|Egrave|eacute|Eacute|aring|Aring|ocirc|Ocirc|atilde|Atilde|ntilde|Ntilde);/g;
  var translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
    "#39": "'",
    "#039": "'",
    "&#96": "`",
    "&#096": "`",
    pound: "£",
    euro: "€",
    dollar: "$",
    acute: "´",
    cedil: "¸",
    raquo: "»",
    rdquo: "“",
    ldquo: "“",
    epsilon: "Ε",
    Epsilon: "Ε",
    delta: "Δ",
    Delta: "Δ",
    phi: "Φ",
    Phi: "Φ",
    sigma: "Σ",
    Sigma: "Σ",
    omega: "Ω",
    Omega: "Ω",
    ograve: "ò",
    Ograve: "Ò",
    oacute: "ó",
    Oacute: "Ó",
    agrave: "à",
    Agrave: "À",
    aacute: "á",
    Aacute: "Á",
    egrave: "è",
    Egrave: "È",
    eacute: "é",
    Eacute: "É",
    aring: "å",
    Aring: "Å",
    ocirc: "ô",
    Ocirc: "Ô",
    atilde: "ã",
    Atilde: "Ã",
    ntilde: "ñ",
    Ntilde: "Ñ"
  };
  return encodedString
    .replace(translate_re, function(match, entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}

/**
 * Expose `unescape`
 */

module.exports = decodeEntities;
