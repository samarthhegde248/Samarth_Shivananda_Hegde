function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/admin-home/admin-home.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/admin-home/admin-home.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleAdminHomeAdminHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-3\">\n    <a href=\"/admin\" class=\"mt-3 home\">Survey Management</a>\n  <div class=\"logout float-right\">\n    <a class=\"btn btn-sm btn-outline-dark  newAdmin-btn mr-2\" routerLink=\"/registration\">Add New Admin</a>\n    <a class=\"btn btn-sm btn-dark \" routerLink=\"/logout\">Logout</a>\n  </div>\n  <hr>\n</div>\n\n<div class=\"container h-100 my-body\">\n  <div class=\"row\">\n    <div class=\"col-md-1\"></div>\n        <div class=\"card col-md-3 col-10 mt-2 my-card\" style=\"width: 16rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Create Survey</h5>\n            <p class=\"card-text\">Want to create a new Survey Form!</p>\n            <a class=\"btn btn-sm btn-outline-info admin-a\" [routerLink]=\"['/createform']\" >Create Survey</a>\n          </div>\n        </div>\n  \n        <div class=\"card col-md-3 col-10 mt-2 my-card\" style=\"width: 16rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Handle Survey</h5>\n            <p class=\"card-text\">\n              Do you want to know the status of the survey? <br>\n              Do you want to edit/launch the existing survey? </p>\n            <a class=\"btn btn-sm btn-outline-info admin-a\" [routerLink]=\"['/editsurvey']\" [routerLinkActive]=\"['active']\">Handle Survey</a>\n          </div>\n        </div>\n  \n        <div class=\"card col-md-3 col-10 mt-2 my-card\" style=\"width: 16rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Survey Details</h5>\n            <p class=\"card-text\">Do you want to see the Survey response?</p>\n            <a class=\"btn btn-sm btn-outline-info admin-a\" [routerLink]=\"['/surveylistdetails']\" [routerLinkActive]=\"['active']\">Survey Details</a>\n          </div>\n      </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/create-survey/create-survey.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/create-survey/create-survey.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleCreateSurveyCreateSurveyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-title\">Create Survey</h2>\n\n<mat-card>\n\n  <form [formGroup]=\"surveyForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n\n    <mat-form-field class=\"full-width\">\n      <input formControlName=\"surveyTitle\" matInput (blur)=\"checkduplicateName()\" placeholder=\"Enter Survey Title\" maxlength=\"50\" [required]=\"true\">  \n    </mat-form-field>\n    <p class=\"text-danger\" *ngIf=\"surveyTitleDuplicate\">Name is Duplicate</p>\n    <div class=\"survey-options\">\n      <div formArrayName=\"surveyQuestions\" class=\"poll-options\">\n        <h3 class=\"list-title\">Add Survey Questions </h3>\n        <ol class=\"list-style\">\n          <li *ngFor=\"let questionCtrl of surveyForm.get('surveyQuestions')['controls']; let i = index\">\n            <div [formGroupName]=\"i\">\n              <div>\n                <mat-form-field class=\"full-width\">\n                  <input formControlName=\"questionTitle\" maxlength=\"200\" matInput placeholder=\"Question title\"\n                    [required]=\"true\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"questionType\" placeholder=\"Question type\" ng-model=\"myVar\" [(value)]=\"selectedOption[i]\"\n                    (selectionChange)=\"onSeletQuestionType(selectedOption[i], i)\" [required]=\"true\">\n                    <mat-option *ngFor=\"let type of questions\" [value]=\"type.value\">\n                      {{type.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n \n                <div formGroupName=\"questionGroup\" [ngSwitch]=\"selectedOption[i]\">\n                  <div *ngSwitchCase=\"'radio'\">\n                    <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                    <ul class=\"question-type\" formArrayName=\"options\">\n                      <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                        <div [formGroupName]=\"j\" >\n                     \n                          <mat-form-field >\n                            <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                              [required]=\"true\">\n                          </mat-form-field>\n                   \n                            <button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\"  color=\"warn\">X\n                  \n                            </button>\n                 \n                        </div>\n                      </li>                      \n                    </ul>\n                    <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                  </div>\n                  <!-- <div *ngIf=\"questionCtrl.controls.questionGroup.controls.showRemarksBox\">\n                    <mat-slide-toggle formControlName=\"showRemarksBox\">\n                      Show Remarks Textarea\n                    </mat-slide-toggle>\n                    <mat-form-field class=\"full-width\">\n                        <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea>\n                      </mat-form-field>\n                  </div> -->\n\n                  </div>\n                  <div *ngSwitchCase=\"'checkbox'\">\n                      <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                    <ul class=\"question-type\" formArrayName=\"options\">\n                      <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                        <div [formGroupName]=\"j\" >\n          \n                          <mat-form-field >\n                            <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                              [required]=\"true\">\n                          \n                          </mat-form-field>\n                    \n                            <button mat-raised-button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\" color=\"warn\">\n                             X\n                            </button>\n                     \n                        </div>\n                      </li>                      \n                    </ul>\n                    <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                  </div>\n                  <!-- <div *ngIf=\"questionCtrl.controls.questionGroup.controls.showRemarksBox\">\n                    <mat-slide-toggle formControlName=\"showRemarksBox\">\n                      Show Remarks Textarea\n                    </mat-slide-toggle>\n                    <mat-form-field class=\"full-width\">\n                        <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea>\n                      </mat-form-field>\n                  </div> -->\n                  </div>\n                  <div *ngSwitchCase=\"'text'\">\n\n                      <!-- <mat-form-field class=\"full-width\">\n                          <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea>\n                        </mat-form-field> -->\n\n                  </div>\n                  <div *ngSwitchCase=\"'textarea'\">\n                    <!-- <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea> -->\n                  </div>\n        \n                </div>\n\n              </div>\n              <button *ngIf=\"i>0\" mat-mini-fab color=\"warn\" type=\"button\" (click)=\"onRemoveQuestion(i)\" class=\"poll-remove-btn\">\n               X\n              </button>\n            </div>\n          </li>\n        </ol>\n        <div *ngIf=\"count < 5\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n          <button type=\"button\" mat-raised-button (click)=\"onAddQuestion()\">\n           Add Question\n          </button>\n        </div>\n      </div>\n\n    </div>\n    <div>\n      <mat-slide-toggle formControlName=\"availability\">\n        Launch the form for user after creation\n      </mat-slide-toggle>\n    </div>\n\n    <div>\n      <mat-form-field>\n        End Date \n        <input formControlName=\"endDatePicker\" matInput [matDatepicker]=\"myDatepicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #myDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"button-row\">\n      <button class=\"full-width\" color=\"primary\" type=\"submit\" mat-raised-button [disabled]=\"!surveyForm.valid\">\n        <span *ngIf=\"!editMode && !surveyTitleDuplicate\">Add New Survey</span>\n        <span *ngIf=\"editMode\">Update Survey</span>\n      </button>\n    </div>\n\n\n  </form>\n\n\n</mat-card>\n\n<!-- {{selectedOption | json}} -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/edit-survey/edit-survey.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/edit-survey/edit-survey.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleEditSurveyEditSurveyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-title\">Edit Survey</h2>\n\n<mat-card>\n\n  <form [formGroup]=\"surveyForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n\n    <mat-form-field class=\"full-width\">\n      <input formControlName=\"surveyTitle\" matInput (blur)=\"checkduplicateName()\" placeholder=\"Enter Survey Title\" maxlength=\"50\" [required]=\"true\">  \n    </mat-form-field>\n    <p class=\"text-danger\" *ngIf=\"surveyTitleDuplicate\">Name is Duplicate</p>\n    <div class=\"survey-options\">\n      <div formArrayName=\"surveyQuestions\" class=\"poll-options\">\n        <h3 class=\"list-title\">Add Survey Questions </h3>\n        <ol class=\"list-style\">\n          <li *ngFor=\"let questionCtrl of surveyForm.get('surveyQuestions')['controls']; let i = index\">\n            <div [formGroupName]=\"i\">\n              <div>\n                <mat-form-field class=\"full-width\">\n                  <input formControlName=\"questionTitle\" maxlength=\"200\" matInput placeholder=\"Question title\"\n                    [required]=\"true\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"questionType\" placeholder=\"Question type\" ng-model=\"myVar\" [(value)]=\"selectedOption[i]\"\n                    (selectionChange)=\"onSeletQuestionType(selectedOption[i], i)\" [required]=\"true\">\n                    <mat-option *ngFor=\"let type of questions\" [value]=\"type.value\">\n                      {{type.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n \n                <div formGroupName=\"questionGroup\" [ngSwitch]=\"selectedOption[i]\">\n                  <div *ngSwitchCase=\"'radio'\">\n                    <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                    <ul class=\"question-type\" formArrayName=\"options\">\n                      <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                        <div [formGroupName]=\"j\" >\n                     \n                          <mat-form-field >\n                            <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                              [required]=\"true\">\n                          </mat-form-field>\n                   \n                            <button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\"  color=\"warn\">X\n                  \n                            </button>\n                 \n                        </div>\n                      </li>                      \n                    </ul>\n                    <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                  </div>\n                  <!-- <div *ngIf=\"questionCtrl.controls.questionGroup.controls.showRemarksBox\">\n                    <mat-slide-toggle formControlName=\"showRemarksBox\">\n                      Show Remarks Textarea\n                    </mat-slide-toggle>\n                    <mat-form-field class=\"full-width\">\n                        <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea>\n                      </mat-form-field>\n                  </div> -->\n\n                  </div>\n                  <div *ngSwitchCase=\"'checkbox'\">\n                      <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                    <ul class=\"question-type\" formArrayName=\"options\">\n                      <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                        <div [formGroupName]=\"j\" >\n          \n                          <mat-form-field >\n                            <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                              [required]=\"true\">\n                          </mat-form-field>\n                    \n                            <button mat-raised-button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\" color=\"warn\">\n                             X\n                            </button>\n                     \n                        </div>\n                      </li>                      \n                    </ul>\n                    <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                  </div>\n                  <!-- <div *ngIf=\"questionCtrl.controls.questionGroup.controls.showRemarksBox\">\n                    <mat-slide-toggle formControlName=\"showRemarksBox\">\n                      Show Remarks Textarea\n                    </mat-slide-toggle>\n                    <mat-form-field class=\"full-width\">\n                        <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea>\n                      </mat-form-field>\n                  </div> -->\n                  </div>\n                  <div *ngSwitchCase=\"'text'\">\n\n                      <!-- <mat-form-field class=\"full-width\"> -->\n                          <!-- <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea> -->\n                        <!-- </mat-form-field> -->\n\n                  </div>\n                  <div *ngSwitchCase=\"'textarea'\">\n                    <!-- <textarea  style=\"resize: none;\" disabled  matInput placeholder=\"Textarea\"></textarea> -->\n                  </div>\n        \n                </div>\n\n              </div>\n              <button *ngIf=\"i>0\" mat-mini-fab color=\"warn\" type=\"button\" (click)=\"onRemoveQuestion(i)\" class=\"poll-remove-btn\">\n               X\n              </button>\n            </div>\n          </li>\n        </ol>\n        <div *ngIf=\"count < 5\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n          <button type=\"button\" mat-raised-button (click)=\"onAddQuestion()\">\n           Add Question\n          </button>\n        </div>\n      </div>\n\n    </div>\n    <div>\n      <mat-slide-toggle formControlName=\"availability\">\n        Launch the form for user after creation\n      </mat-slide-toggle>\n    </div>\n\n    <div>\n      <mat-form-field>\n        End Date \n        <input formControlName=\"endDatePicker\" matInput [matDatepicker]=\"myDatepicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #myDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"button-row\">\n      <button class=\"full-width\" color=\"primary\" type=\"submit\" mat-raised-button [disabled]=\"!surveyForm.valid\">\n        <span *ngIf=\"!editMode && !surveyTitleDuplicate\">Add New Survey</span>\n        <span *ngIf=\"editMode\">Update Survey</span>\n      </button>\n    </div>\n\n\n  </form>\n\n\n</mat-card>\n\n<!-- {{selectedOption | json}} -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/survey-form/survey-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/survey-form/survey-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleSurveyFormSurveyFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>{{ jsonData.surveyTitle}} </h2>\n<div [hidden]=\"submitted\">\n<form [formGroup]=\"userForm\" class=\"jumbotron m-3\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\" *ngFor=\"let data of jsonData.surveyQuestions; let i = index;\">\n      <label for=Que{{i}}>Q{{i+1}}. {{data.Text}} <span class=\"que-required\">*</span></label>\n      <div *ngIf = \"data.Type == 'text'\">\n          <input formControlName=\"Que{{i}}\" type= {{data.Type}} name=\"Que{{i}}\" id=\"Que{{i}}\" required>\n      </div>\n      <div *ngIf = \"data.Type == 'textarea'\">\n        <textarea formControlName=\"Que{{i}}\"  name=\"Que{{i}}\" id=\"Que{{i}}\" rows=\"4\" cols=\"50\" required></textarea>\n      </div>\n      <div *ngIf = \"data.Type == 'radio'\">\n        <div *ngFor=\"let d of data.options; let j = index;\">\n          <input formControlName=\"Que{{i}}\" type=\"{{data.Type}}\" name=\"Que{{i}}\" id=\"Que{{j}}\" value=\"{{d.OptionText}}\" required/>\n          <label for=\"Que{{j}}\">{{d.OptionText}}</label>\n        </div> \n      </div>\n      \n      <div *ngIf = \"data.Type == 'checkbox'\">\n        <div *ngFor=\"let d of data.options; let j = index;\">\n          <input (change)=\"onChange(d.OptionText, $event.target)\" type=\"{{data.Type}}\" name=\"Que{{i}}\" id=\"Que{{j}}\" value=\"{{d.optionText}}\" required/>\n          <label for=\"Que{{i}}\">{{d.OptionText}}</label>\n        </div> \n      </div>\n  </div>\n  <button type=\"submit\" [disabled]=\"userForm.invalid\" class=\"btn btn-primary\">Submit</button>\n</form>\n</div>\n<div [hidden]=\"!submitted\">You submitted the form.</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-email/user-email.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-email/user-email.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleUserEmailUserEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div>\n        <form (ngSubmit)=\"onSubmit()\">\n            <label>Enter the email id's to whom the survey should be shared with <span class=\"text-required\">*</span></label>\n            <br>\n            <div>\n                <textarea id=\"emailid\" name=\"emailid\" rows=\"4\" cols=\"50\" name=\"email\" [(ngModel)]=\"email\" required></textarea>\n                <p class=\"text-danger\" *ngIf=\"this.errorMsg\">Please enter valid Emails</p>\n            </div>\n            \n            <br>\n            <p>Please note, enter the email id's with format &lt;<strong>xyz@abc.com</strong>&gt;  \n                and use \"<strong>,</strong>\" (comma) to seperate email id's and avoid blank spaces. </p>\n            <input class=\"btn btn-sm btn-primary\"  type=\"submit\" value=\"Publish Survey to Users\">\n            <button *ngIf=\"isAdmin\" class=\"btn btn-sm btn-secondary\"  (click)=\"goToAdmin()\">Skip</button>\n         </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminModuleUserSurveyFormlistUserSurveyFormlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid first px-5\">\n    <a href=\"/admin\" class=\"float-left mt-3 home\"> Survey Management</a>\n    <button class=\"btn btn-sm btn-dark float-right mt-3\" (click)=\"navigateBack()\">Back</button>\n</div>\n<hr>\n<div class=\"container mt-3\">\n    <button class=\"btn btn-sm btn-outline-secondary mr-3\" (click)=\"exportexcel()\">Download Excel</button>\n    <!-- <button class=\"btn btn-sm btn-outline-secondary\"  (click)=\"downloadPDF()\">Download PDF</button> -->\n    <!-- <button class=\"btn btn-sm btn-dark float-right \" (click)=\"navigateBack()\">Back</button> -->\n    <div>\n        <br>\n        <div>\n            <label>Start Date</label>\n            <input class=\"ml-2\" type=\"date\" name=\"startdate\" [(ngModel)]=\"startdate\" required>\n        </div>\n        <div>\n            <label> End Date</label>\n            <input class=\"ml-2\" type=\"date\" name=\"enddate\" [(ngModel)]=\"enddate\" required>\n        </div>\n        <button class=\"btn btn-sm btn-info\" (click)=\"filter()\">Filter</button>\n    </div>\n    <div class=\"htmlData mt-3\" id=\"htmlData\" #htmlData>\n        <table id=\"excel-table\" class=\"table table-bordered\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">User Name</th>\n                    <th scope=\"col\">Survey Submission Date</th>\n                    <th scope=\"col\">Survey Name</th>\n                    <th scope=\"col\" style=\"display:none\">Question 1</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 1</th>\n                    <th scope=\"col\" style=\"display:none\">Question 2</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 2</th>\n                    <th scope=\"col\" style=\"display:none\">Question 3</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 3</th>\n                    <th scope=\"col\" style=\"display:none\">Question 4</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 4</th>\n                    <th scope=\"col\" style=\"display:none\">Question 5</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 5</th>\n                    <th scope=\"col\" style=\"display:none\">Question 6</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 6</th>\n\n                </tr>\n            </thead>\n            <tr scope=\"row\" *ngFor=\"let item of displayResponse;\">\n                <td>{{item.usermail}}</td>\n                <td>{{item.submitdate | date:'mediumDate'}}</td>\n                <td>{{item.form_title}}</td>\n                <td style=\"display:none\">{{ item.question0 }}</td>\n                <td style=\"display:none\">{{ item.answer0 }}</td>\n                <td style=\"display:none\">{{ item.question1 }}</td>\n                <td style=\"display:none\">{{ item.answer1 }}</td>\n                <td style=\"display:none\">{{ item.question2 }}</td>\n                <td style=\"display:none\">{{ item.answer2 }}</td>\n                <td style=\"display:none\">{{ item.question3 }}</td>\n                <td style=\"display:none\">{{ item.answer3 }}</td>\n                <td style=\"display:none\">{{ item.question4 }}</td>\n                <td style=\"display:none\">{{ item.answer4 }}</td>\n                <td style=\"display:none\">{{ item.question5 }}</td>\n                <td style=\"display:none\">{{ item.answer5 }}</td>\n                \n            </tr>\n        </table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/login/login.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/login/login.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogin_ModuleLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid my-login h-100\">\n  <div class=\"row \">\n    <!-- <div class=\"col-12 col-sm-7 col-md-8 mt-5 login-text\"> -->\n    <div class=\" col-12 mt-3 login-text\">\n      <h1>Welcome to Campaign Management System</h1>\n      <hr>\n    </div>\n    <hr>\n    <!-- <div class=\"col-12 col-sm-5 col-md-4\"> -->\n      <div class=\"col-md-4\"></div>\n    <div class=\"col-12 col-md-4 mt-5\">\n      <div class=\"login-module\">\n        <h2 class=\"login-text\">Login</h2>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n          <p class=\"text-danger\" *ngIf=\"invalidUser\">Enter valid Username and Password</p>\n            <div class=\"login-name\">\n              <label for=\"username\" class=\"login-text\">Username: </label>\n            </div>\n            <div>\n              <input formControlName=\"username\" id=\"username\" type=\"email\" required>\n            </div>\n            <div class=\"login-name\">\n              <label for=\"password\" class=\"login-text\">Password: </label>\n            </div> \n            <div>\n              <input formControlName=\"password\" id=\"password\" type=\"password\" required>\n          </div>\n          <br>\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-sm btn-primary login-btn\">\n        </form>    \n        <br>\n        <p class=\"login-text\">New User? <a routerLink=\"/registration\">Register here!</a></p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n  \n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-12 col-md-4 mt-5\">\n      <div class=\" col-12 mt-3 login-text\">\n        <h2>Available Forms:-</h2>\n        <hr>\n      </div>\n      <div class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" *ngFor=\"let item of filteredSurveyList; index as i\" href=\"/email/{{item.id}}\" >{{item.form_title}}</a>\n      </div>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n\n</div>\n  <!-- <h1>Welcome to Survey Management System</h1>\n  <br>\n  <div class=\"login-module\">\n    <h2>Login</h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n      <p class=\"text-danger\" *ngIf=\"invalidUser\">Enter valid Username and Password</p>\n      <div class=\"row\">\n        <div class=\"col-md-2 col-4 login-name\">\n          <label for=\"username\">Username: </label>\n        </div>\n        <div class=\"col-md-4 col-6\">\n          <input formControlName=\"username\" id=\"username\" type=\"email\" required>\n        </div>\n        <div class=\"col-md-5\"> </div>\n        <div class=\"col-md-2 col-4 login-name\">\n          <label for=\"password\">Password: </label>\n        </div>\n        <div class=\"col-md-4 col-6\">\n          <input formControlName=\"password\" id=\"password\" type=\"password\" required>\n        </div>\n      </div> \n      <input type=\"submit\" value=\"Login\" class=\"btn btn-sm btn-success\">\n    </form>\n  \n  <br>\n  <p>New User? <a routerLink=\"/registration\">Register here!</a></p>\n</div> -->\n<!-- </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/logout/logout.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/logout/logout.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogin_ModuleLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/registration/registration.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/registration/registration.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogin_ModuleRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-3\">\n    <h3>Registration</h3>\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n\n                <div class=\"col-md-2 col-4 login-name\">\n                    <label for=\"firstname\">Firstname: </label>\n                </div>\n                <div class=\"col-md-4 col-6\">\n                    <input formControlName=\"firstname\" id=\"firstname\" type=\"text\" [required]=\"true\">\n                </div>\n\n            <div class=\"col-md-5\"> </div>\n\n                <div class=\"col-md-2 col-4 login-name\">\n                    <label for=\"lastname\">Lastname: </label>\n                </div>\n                <div class=\"col-md-4 col-6\">\n                    <input formControlName=\"lastname\" id=\"lastname\" type=\"text\" [required]=\"true\">\n                </div>\n\n            <div class=\"col-md-5\"> </div>\n\n                <div class=\"col-md-2 col-4 login-name\">\n                    <label for=\"email\">Email: </label>\n                </div>\n                <div class=\"col-md-4 col-6\">\n                    <input formControlName=\"email\" id=\"email\" type=\"email\" placeholder=\"abc@xyz.com\" [required]=\"true\">\n                    <div *ngIf = \"checkEmail\">\n                        <p class=\"p-text\">Email is already registered</p>\n                    </div>\n                    <p class=\"text-danger\" *ngIf=\"this.registrationForm.controls.email.errors?.pattern\">Enter valid email</p>\n                    <!-- <p *ngIf=\"this.registrationForm.controls.email.dirty\">Test</p> -->\n                </div>\n\n            <div class=\"col-md-5\"> </div>\n                <div class=\"col-md-2 col-4 login-name\">\n                    <label for=\"password\">Password: </label>\n                </div>\n                <div class=\"col-md-4 col-6\">\n                    <input formControlName=\"password\" id=\"password\" type=\"password\" placeholder=\"Minimun 6 characters\" [required]=\"true\">\n                    <!-- <div *ngIf=\"registrationForm.controls.password.errors\" class=\"invalid-feedback\"> -->\n                        <!-- <div *ngIf=\"this.registrationForm.controls.password.errors.required\">Password is required</div> -->\n                        <div class=\"text-danger\" *ngIf=\"this.registrationForm.controls.password.errors?.minlength\">Password must be at least 6 characters</div>\n                    <!-- </div> -->\n                </div>\n                <div class=\"col-md-6\"> </div>\n\n            <br>\n            <input class=\"mx-3 btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!registrationForm.valid\" value=\"Submit\">\n        </div>\n    </form>\n    <div >\n        <button class=\"btn btn-sm btn-dark mt-3\" (click)=\"navigateBack()\">Cancel</button>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-home/user-home.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-home/user-home.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserHomeUserHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-3\">\n  <div class=\"logout\">\n    <a class=\"btn btn-sm btn-dark\" routerLink=\"/logout\">Logout</a>\n  </div>\n  <hr>\n  <div class=\"form-list m-5 p-2\">\n    <h4>Survey Lists</h4>\n    <div *ngFor=\"let item of listOfSurvey; index as i\" class=\"px-2\">\n      {{i+1}}. <a href=\"/survey/{{item.form_id}}\">{{item.form_title}}</a>\n    </div>\n  </div>\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-form-list/survey-form-list.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-form-list/survey-form-list.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurveyFormSurveyFormListSurveyFormListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid first px-5\">\n    <a href=\"/admin\" class=\"float-left mt-3 ml-4 home\"> Survey Management</a>\n    <button class=\"btn btn-sm btn-dark float-right mt-3\" (click)=\"navigateBack()\">Back</button>\n  </div>\n\n<div class=\"container\">\n    <!-- <div>\n        <a href=\"/admin\" class=\"float-left mt-2\">Campaign Management</a>\n    </div>\n    <div class=\"back-btn\">\n        <button class=\"btn btn-sm btn-dark\" (click)=\"navigateBack()\">Back</button>\n    </div> -->\n\n    <!-- <div *ngFor=\"let item of listOfSurvey;\">\n        <a class=\"item-details\" href=\"/survey/{{item.id}}\">{{item.form_title}}</a>\n        <a class=\"item-details\" (click)=\"PublishSurvey(item.id)\">Publish</a>\n        <a class=\"item-details\" (click)=\"deleteSurvey(item.form_id)\">Delete</a>\n        <hr>\n    </div> -->\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Survey Name</th>\n                <!-- <th scope=\"col\">Email</th> -->\n                <th scope=\"col\">Survey Status</th>\n                <th scope=\"col\">Update Survey</th>\n            </tr>\n        </thead>\n        <!-- <input class=\"input-text\" type=\"text\" name=\"email\" id=\"email\" [(ngModel)]=\"email\"> -->\n        <tbody>\n            \n            <tr scope=\"row\" *ngFor=\"let item of listOfSurvey;\">\n                <th><p class=\"item-details\">{{item.form_title}}</p></th>\n                <th *ngIf=\"(item.available == false) && ((item.end_date | date:'MM/dd/yyyy') < (todayDate | date:'MM/dd/yyyy')); else elsePart\">\n                    <p class=\"item-details\">Expired</p>\n                </th>\n                <ng-template #elsePart >\n                    <th *ngIf=\"item.available == false\">\n                        <button class=\"btn btn-sm btn-warning item-details\" (click)=\"PublishSurvey(item.id)\">Publish</button>\n                    </th>\n                </ng-template>\n                \n                <th *ngIf=\"item.available == true\"><p class=\"item-details published\">Published</p></th>\n\n                <th *ngIf=\"(item.available == false) && ((item.end_date | date: 'MM/dd/yyyy') > (todayDate | date: 'MM/dd/yyyy'))\">\n                    <a class=\"btn btn-sm btn-info item-details\" [routerLink]=\"['/editform/',item.id]\">Edit</a>\n                </th>\n                <!-- <ng-template #deletePart> -->\n                    <th *ngIf=\"(item.end_date | date:'MM/dd/yyyy') < (todayDate | date:'MM/dd/yyyy')\">\n                        <button class=\"btn btn-sm btn-danger item-details\" (click)=\"deleteSurvey(item.id)\">Delete</button>\n                    </th>\n                <!-- </ng-template> -->\n                \n            </tr>\n        </tbody> \n    </table>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurveyFormSurveyListSubmissionDetailsSurveyListSubmissionDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h4 class=\"form-details mt-3\">Form Details</h4>\n    <div class=\"survey-details\">\n        <p> <strong>Survey Name:</strong> {{surveyTitleName}}</p>\n        <p> <strong>Survey Created Date: </strong>{{ creationDate | date:'medium'}} </p>\n        <p> <strong>Number of Responses:</strong> {{ numberOfSurveyResponse }}</p>\n    </div>\n    \n</div>\n\n<div class=\"m-3\">\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"displaychart()\">Display Chart</button>\n</div>\n<div *ngIf =\"displayChart\" class=\"chart-wrapper\">\n    <canvas baseChart \n    [data]=\"pieChartData\" \n    [labels]=\"pieChartLabels\" \n    [chartType]=\"pieChartType\"\n    [options]=\"pieChartOptions\"\n    [plugins]=\"pieChartPlugins\"\n    [legend]=\"pieChartLegend\"\n    [colors]=\"chartColors\">\n  </canvas>\n</div>\n\n\n<!-- BARCHART TRY -->\n<!-- <div style=\"width: 80%;\">\n    <div *ngIf =\"displayChart\" class=\"chart-wrapper\" style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"mbarChartLabels\"\n                [options]=\"barChartOptions\"\n                [colors]=\"barChartColors\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n</div> -->\n\n\n<!-- BARCHART TRY END -->\n\n<!-- <div *ngIf =\"displayChart\" class=\"chart-wrapper\">\n    <canvas baseChart \n    [datasets]=\"barChartData\"\n    [labels]=\"barChartLabels\"\n    [options]=\"barChartOptions\"\n    [plugins]=\"barChartPlugins\"\n    [legend]=\"barChartLegend\"\n    [chartType]=\"barChartType\">\n  </canvas>\n</div> -->\n\n\n<!-- table -->\n<div class=\"container\">\n    <button class=\"btn btn-sm btn-outline-secondary mr-3\" (click)=\"exportexcel()\">Download Excel</button>\n    <button class=\"btn btn-sm btn-outline-secondary\"  (click)=\"downloadPDF()\">Download PDF</button>\n    <div class=\"htmlData mt-3\" id=\"htmlData\" #htmlData>\n        <table id=\"excel-table\" class=\"table table-bordered\">\n            <!-- <th>{{this.surveyTitleName}}</th> -->\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">User Name</th>\n                    <th scope=\"col\">Survey Submission Date</th>\n                    <!-- <th scope=\"col\">Survey Name</th> -->\n                    <th scope=\"col\" style=\"display:none\">Question 1</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 1</th>\n                    <th scope=\"col\" style=\"display:none\">Question 2</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 2</th>\n                    <th scope=\"col\" style=\"display:none\">Question 3</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 3</th>\n                    <th scope=\"col\" style=\"display:none\">Question 4</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 4</th>\n                    <th scope=\"col\" style=\"display:none\">Question 5</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 5</th>\n                    <th scope=\"col\" style=\"display:none\">Question 6</th>\n                    <th scope=\"col\" style=\"display:none\">Answer 6</th>\n    \n                </tr>\n            </thead>\n            <tr scope=\"row\" *ngFor=\"let item of dataForTable;\">\n                <td>{{item.usermail}}</td>\n                <td>{{item.submitdate | date:'mediumDate'}}</td>\n                <!-- <td>{{item.form_title}}</td> -->\n                <td style=\"display:none\">{{ item.question0 }}</td>\n                <td style=\"display:none\">{{ item.answer0 }}</td>\n                <td style=\"display:none\">{{ item.question1 }}</td>\n                <td style=\"display:none\">{{ item.answer1 }}</td>\n                <td style=\"display:none\">{{ item.question2 }}</td>\n                <td style=\"display:none\">{{ item.answer2 }}</td>\n                <td style=\"display:none\">{{ item.question3 }}</td>\n                <td style=\"display:none\">{{ item.answer3 }}</td>\n                <td style=\"display:none\">{{ item.question4 }}</td>\n                <td style=\"display:none\">{{ item.answer4 }}</td>\n                <td style=\"display:none\">{{ item.question5 }}</td>\n                <td style=\"display:none\">{{ item.answer5 }}</td>\n                \n            </tr>\n        </table>\n    </div>\n</div>\n\n<!-- table -->\n<div class=\"m-3\">\n    <button class=\"btn btn-sm btn-dark mt-2\" (click)=\"navigateBack()\">Back</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurveyFormUserSurveylistDetailsUserSurveylistDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid first px-5\">\n  <a href=\"/admin\" class=\"float-left mt-3 ml-4 home\"> Survey Management</a>\n  <div class=\"float-right mt-3\">\n    <button class=\"btn btn-sm btn-info  mr-2\" [routerLink]=\"['/usersurvey']\">Survey List</button>\n    <button class=\"btn btn-sm btn-dark \" (click)=\"navigateBack()\">Back</button>\n  </div>\n  \n</div>\n\n<hr>\n<div class=\"container\">\n  <!-- <button class=\"btn btn-sm btn-outline-info m-3\" (click)=\"displaychart()\">Chart</button> -->\n  <div *ngIf=\"displayChart\">\n    <div style=\"display: block\">\n      <canvas baseChart\n              [datasets]=\"barChartData\"\n              [labels]=\"barChartLabels\"\n              [options]=\"barChartOptions\"\n              [legend]=\"barChartLegend\"\n              [chartType]=\"barChartType\">\n      </canvas>\n    </div>\n  </div>\n\n<!-- <button class=\"btn btn-sm btn-outline-info\" [routerLink]=\"['/usersurvey']\">Survey List</button> -->\n<!-- <button class=\"btn btn-sm btn-dark float-right m-3\" (click)=\"navigateBack()\">Back</button> -->\n</div>\n\n<div class=\"container\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Survey Name</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr scope=\"row\" *ngFor=\"let item of listOfSurvey;\">\n                <th><a class=\"item-details\" href=\"/surveylistdetails/{{item.form_title}}\">{{item.form_title}}</a></th>\n            </tr>\n        </tbody> \n    </table>\n</div>\n\n  <!-- //Pie Chart\n  <div>\n    <div style=\"display: block\">\n      <canvas baseChart\n              [data]=\"pieChartData\"\n              [labels]=\"pieChartLabels\"\n              [chartType]=\"pirChartType\">\n      </canvas>\n    </div>\n  </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Admin Module/admin-home/admin-home.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/Admin Module/admin-home/admin-home.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleAdminHomeAdminHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logout {\r\n    text-align: right;\r\n}\r\n\r\n.admin-a {\r\n    /* color: rgb(63, 63, 63) !important; */\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.my-card {\r\n    padding: 0 !important;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.my-body {\r\n    background-image: url(\"background-tech-background.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n/* .logout a{\r\n    color: #2f2f2f;\r\n}\r\n\r\n.logout a:hover{\r\n    color: #afafaf;\r\n} */\r\n\r\n.col {\r\n    border: 1px solid black;\r\n}\r\n\r\n.table-heading{\r\n    text-align: center;\r\n}\r\n\r\n.right-col{\r\n    margin-left: 1px solid gray;\r\n}\r\n\r\n.left-col {\r\n    text-align: center;\r\n    border-right: 2px solid lightgrey;\r\n}\r\n\r\n.home {\r\n    color: black;\r\n    font-size: 24px;\r\n}\r\n\r\n.home:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n@media (min-width:575px){\r\n    .row-height{\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n@media(max-width: 575px){\r\n    .left-col {\r\n        padding: 5px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1REFBdUQ7SUFDdkQsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7O0dBTUc7O0FBQ0g7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9BZG1pbiBNb2R1bGUvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWRtaW4tYSB7XHJcbiAgICAvKiBjb2xvcjogcmdiKDYzLCA2MywgNjMpICFpbXBvcnRhbnQ7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubXktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5teS1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImJhY2tncm91bmQtdGVjaC1iYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKiAubG9nb3V0IGF7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLmxvZ291dCBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbn0gKi9cclxuLmNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRhYmxlLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1jb2x7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmhvbWU6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo1NzVweCl7XHJcbiAgICAucm93LWhlaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIC5sZWZ0LWNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Admin Module/admin-home/admin-home.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Admin Module/admin-home/admin-home.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminHomeComponent */

  /***/
  function srcAppAdminModuleAdminHomeAdminHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
      return AdminHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");

    var AdminHomeComponent = /*#__PURE__*/function () {
      function AdminHomeComponent(theLoginService, _route, _router) {
        _classCallCheck(this, AdminHomeComponent);

        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
      }

      _createClass(AdminHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.getAllSurvey();
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "getAllSurvey",
        value: function getAllSurvey() {
          var _this = this;

          this.theLoginService.getAllSurveyList().subscribe(function (response) {
            console.log(response);
            _this.listOfAvailableSurvey = response;
          });
        }
      }]);

      return AdminHomeComponent;
    }();

    AdminHomeComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_3__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/admin-home/admin-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-home.component.css */
      "./src/app/Admin Module/admin-home/admin-home.component.css"))["default"]]
    })], AdminHomeComponent);
    /***/
  },

  /***/
  "./src/app/Admin Module/create-survey/create-survey.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/Admin Module/create-survey/create-survey.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleCreateSurveyCreateSurveyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-title {\r\n    color: rgb(83, 83, 83);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL2NyZWF0ZS1zdXJ2ZXkvY3JlYXRlLXN1cnZleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4gTW9kdWxlL2NyZWF0ZS1zdXJ2ZXkvY3JlYXRlLXN1cnZleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Admin Module/create-survey/create-survey.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Admin Module/create-survey/create-survey.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateSurveyComponent */

  /***/
  function srcAppAdminModuleCreateSurveyCreateSurveyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function () {
      return CreateSurveyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _model_data_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/data-models */
    "./src/app/model/data-models.ts");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CreateSurveyComponent = /*#__PURE__*/function () {
      function CreateSurveyComponent(theLoginService, _route, _router) {
        _classCallCheck(this, CreateSurveyComponent);

        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
        this.surveyTitleDuplicate = false;
        this.surveyFormName = "";
        this.selectedOption = [];
        this.editMode = false;
        this.count = 0;
        this.questions = [{
          value: 'radio',
          viewValue: 'Single choice(radio)'
        }, {
          value: 'checkbox',
          viewValue: 'Multi choice(checkbox)'
        }, {
          value: 'text',
          viewValue: 'Single line(text)'
        }, {
          value: 'textarea',
          viewValue: 'Multiline(textarea)'
        }];
      }

      _createClass(CreateSurveyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.initForm(); // this.surveyList = this.theLoginService.getAllSurveyList();
            // console.log("SurveyNames", this.surveyList);
            // this.getSurveytitleName();

            this.getSurvey();
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "getSurvey",
        value: function getSurvey() {
          var _this2 = this;

          this.theLoginService.getAllSurveyList().subscribe(function (response) {
            console.log(response);
            _this2.surveyListData = response;
            _this2.surveyList = _this2.surveyListData.map(function (a) {
              return a["form_title"];
            });
            console.log(_this2.surveyList);

            _this2.getSurveytitleName();
          });
        }
      }, {
        key: "getSurveytitleName",
        value: function getSurveytitleName() {
          for (var item in this.surveyList) {
            this.SurveytitleName = String(this.surveyList[item]); // console.log("Survey title names = > ", this.SurveytitleName);
          }
        }
      }, {
        key: "checkduplicateName",
        value: function checkduplicateName() {
          console.log("Inside checking");

          for (var item in this.surveyList) {
            this.SurveytitleName = String(this.surveyList[item]);

            if (this.surveyForm.value.surveyTitle == this.SurveytitleName) {
              this.surveyTitleDuplicate = true;
              console.log("Survey title names = > ", this.SurveytitleName);
              break;
            } else {
              this.surveyTitleDuplicate = false;
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var surveyTitle = '';
          var surveyQuestions = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'surveyTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](surveyTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'surveyQuestions': surveyQuestions,
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'endDatePicker': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
          this.onAddQuestion();
        }
      }, {
        key: "onAddQuestion",
        value: function onAddQuestion() {
          console.log(this.surveyForm);
          this.count = this.surveyForm.controls.surveyQuestions['value'].length;
          var surveyQuestionItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'questionTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({})
          });
          console.log("Array size", this.surveyForm.controls.surveyQuestions['value'].length);
          this.surveyForm.get('surveyQuestions').push(surveyQuestionItem);
        }
      }, {
        key: "onRemoveQuestion",
        value: function onRemoveQuestion(index) {
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({});
          this.surveyForm.get('surveyQuestions').removeAt(index);
          this.selectedOption.splice(index, 1);
          console.log(this.surveyForm);
        }
      }, {
        key: "onSeletQuestionType",
        value: function onSeletQuestionType(questionType, index) {
          if (questionType === 'radio' || questionType === 'checkbox') {
            this.addOptionControls(questionType, index);
          }
        }
      }, {
        key: "addOptionControls",
        value: function addOptionControls(questionType, index) {
          var options = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]); // let showRemarksBox = new FormControl(false);

          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.addControl('options', options); // (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

          this.clearFormArray(this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options);
          this.addOption(index);
          this.addOption(index);
        }
      }, {
        key: "clearFormArray",
        value: function clearFormArray(formArray) {
          while (formArray.length !== 0) {
            formArray.removeAt(0);
          }
        }
      }, {
        key: "addOption",
        value: function addOption(index) {
          var optionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'optionText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options.push(optionGroup);
        }
      }, {
        key: "removeOption",
        value: function removeOption(questionIndex, itemIndex) {
          this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options.removeAt(itemIndex);
        }
      }, {
        key: "postSurvey",
        value: function postSurvey() {
          var _this3 = this;

          var formData = this.surveyForm.value;
          console.log(formData);
          console.log();
          var ID = 0;
          var Type = formData.surveyType;
          var Title = formData.surveyTitle;
          var IsDeleted = formData.availability;
          var IsAnonymous = formData.IsAnonymous;
          var expiry = formData.endDatePicker; //  let Question: Question[] = [];

          var Questions = [];
          var surveyQuestions = formData.surveyQuestions; // let optionArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
          // let survey = new Survey(ID, Type, Title, IsDeleted, IsAnonymous, Questions);

          var survey = new _model_data_models__WEBPACK_IMPORTED_MODULE_3__["Survey"](ID, Title, IsDeleted, expiry, Questions);
          surveyQuestions.forEach(function (question, index, array) {
            var questionItem = {
              'ID': 0,
              "Type": question.questionType,
              "Text": question.questionTitle,
              "options": [],
              "Required": false,
              "Remarks": "",
              "hasRemarks": false
            }; // if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
            //   questionItem.hasRemarks = question.questionGroup.showRemarksBox;
            // }

            if (question.questionGroup.hasOwnProperty('options')) {
              question.questionGroup.options.forEach(function (option) {
                var optionItem = {
                  "ID": 0,
                  "OptionText": option.optionText,
                  "OptionColor": "",
                  "hasRemarks": false
                };
                questionItem.options.push(optionItem);
              });
            }

            survey.Question.push(questionItem);
          });
          console.log('posting survey', survey);
          var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
          var now = Date.now();
          var createDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
          var endDate;

          if (survey.expiry == null) {
            endDate = '';
          } else {
            endDate = pipe.transform(survey.expiry, "yyyy-MM-dd hh:mm:ss");
          }

          var theCreatedForm = new _model_data_models__WEBPACK_IMPORTED_MODULE_3__["CreatedFormDetail"](survey.Title, createDate, endDate, survey.IsDeleted, survey);
          this.surveyFormName = survey.Title;
          console.log(theCreatedForm);
          var receiveSave = this.theLoginService.saveFormFormat(theCreatedForm);
          receiveSave.subscribe(function (response) {
            console.log("After saving dynamic form", response['response']);
            _this3.urlid = response['response'];
            _this3.todayDate = new Date();
            var d1 = Date.parse(formData.endDatePicker);
            console.log("End date", formData.endDatePicker);
            console.log("Date", _this3.todayDate);

            if (formData.availability && (d1 > _this3.todayDate || d1 == _this3.todayDate)) {
              _this3._router.navigate(['email', _this3.urlid]);
            } else {
              _this3._router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.postSurvey();
        }
      }]);

      return CreateSurveyComponent;
    }();

    CreateSurveyComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_4__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    CreateSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-survey',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-survey.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/create-survey/create-survey.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-survey.component.css */
      "./src/app/Admin Module/create-survey/create-survey.component.css"))["default"]]
    })], CreateSurveyComponent);
    /***/
  },

  /***/
  "./src/app/Admin Module/edit-survey/edit-survey.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/Admin Module/edit-survey/edit-survey.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleEditSurveyEditSurveyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-title {\r\n    color: rgb(83, 83, 83);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL2VkaXQtc3VydmV5L2VkaXQtc3VydmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9BZG1pbiBNb2R1bGUvZWRpdC1zdXJ2ZXkvZWRpdC1zdXJ2ZXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2IoODMsIDgzLCA4Myk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Admin Module/edit-survey/edit-survey.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Admin Module/edit-survey/edit-survey.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EditSurveyComponent */

  /***/
  function srcAppAdminModuleEditSurveyEditSurveyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditSurveyComponent", function () {
      return EditSurveyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _model_data_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/data-models */
    "./src/app/model/data-models.ts");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditSurveyComponent = /*#__PURE__*/function () {
      function EditSurveyComponent(theLoginService, _route, _router) {
        _classCallCheck(this, EditSurveyComponent);

        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
        this.surveyTitleDuplicate = false;
        this.surveyFormName = "";
        this.selectedOption = [];
        this.editMode = true;
        this.count = 0;
        this.questions = [{
          value: 'radio',
          viewValue: 'Single choice(radio)'
        }, {
          value: 'checkbox',
          viewValue: 'Multi choice(checkbox)'
        }, {
          value: 'text',
          viewValue: 'Single line(text)'
        }, {
          value: 'textarea',
          viewValue: 'Multiline(textarea)'
        }];
      }

      _createClass(EditSurveyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.urlid = parseInt(this._route.snapshot.paramMap.get('id'));
            console.log(this.urlid);
            this.getSurvey();
            this.initForm();
            this.editForm();
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var surveyTitle = '';
          var surveyQuestions = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'surveyTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](surveyTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'surveyQuestions': surveyQuestions,
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'endDatePicker': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
          this.onAddQuestion();
        }
      }, {
        key: "editForm",
        value: function editForm() {
          var _this4 = this;

          this.theLoginService.getSurveyForm(this.urlid).subscribe(function (response) {
            if (response['IsDeleted'] === false) {
              _this4.savedForm = response;

              _this4.initSavedForm();

              _this4.savedQuestions = _this4.savedForm.Question;

              _this4.createExstingSurvey();

              console.log("Saved Questions", _this4.savedQuestions);
            } else {
              _this4._router.navigate(['admin']);
            }
          });
        }
      }, {
        key: "getSurvey",
        value: function getSurvey() {
          var _this5 = this;

          this.theLoginService.getAllSurveyList().subscribe(function (response) {
            for (var item in response) {
              if (response[item].id == _this5.urlid) {
                _this5.finalTitleName = response[item].form_title;
                console.log("Final title name =>", _this5.finalTitleName);
              }
            }

            console.log("GET SURVEY RESPONSE=> ", response);
            _this5.surveyListData = response;
            _this5.surveyList = _this5.surveyListData.map(function (a) {
              return a["form_title"];
            });

            _this5.getSurveytitleName();
          });
        }
      }, {
        key: "getSurveytitleName",
        value: function getSurveytitleName() {
          for (var item in this.surveyList) {
            this.SurveytitleName = String(this.surveyList[item]); // console.log("Survey title names = > ", this.SurveytitleName);
          }
        }
      }, {
        key: "checkduplicateName",
        value: function checkduplicateName() {
          console.log("Inside checking");

          for (var item in this.surveyList) {
            this.SurveytitleName = String(this.surveyList[item]);

            if (this.surveyForm.value.surveyTitle == this.SurveytitleName) {
              this.surveyTitleDuplicate = true;
              console.log("Survey title names = > ", this.SurveytitleName);
              break;
            } else {
              this.surveyTitleDuplicate = false;
            }
          }
        }
      }, {
        key: "initSavedForm",
        value: function initSavedForm() {
          var surveyTitle = this.savedForm.Title;
          var surveyQuestions = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'surveyTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
              value: this.finalTitleName,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'surveyQuestions': surveyQuestions,
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.savedForm.IsDeleted),
            'endDatePicker': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.savedForm.expiry)
          }); // this.onEditQuestion();
        } // onEditQuestion(){
        //   this.savedForm.Question.forEach(element => {
        //     // console.log("Questions =>",element);
        //   });
        // }

      }, {
        key: "createExstingSurvey",
        value: function createExstingSurvey() {
          for (var i = 0; i < this.savedQuestions.length; i++) {
            this.onAddSavedQuestion(this.savedQuestions[i].Text, this.savedQuestions[i].Type, i);
          }
        }
      }, {
        key: "onAddSavedQuestion",
        value: function onAddSavedQuestion(title, type, indexNo) {
          console.log(this.surveyForm);
          this.count = this.surveyForm.controls.surveyQuestions['value'].length;
          var surveyQuestionItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'questionTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({})
          });
          this.surveyForm.get('surveyQuestions').push(surveyQuestionItem);
          console.log("Array size", this.surveyForm.controls.surveyQuestions['value'].length);
          this.selectedOption.push(type);
          this.onSavedQuestionType(this.selectedOption[indexNo], indexNo);
        }
      }, {
        key: "onAddQuestion",
        value: function onAddQuestion() {
          console.log(this.surveyForm);
          this.count = this.surveyForm.controls.surveyQuestions['value'].length;
          var surveyQuestionItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'questionTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({})
          });
          console.log("Array size", this.surveyForm.controls.surveyQuestions['value'].length);
          this.surveyForm.get('surveyQuestions').push(surveyQuestionItem);
        }
      }, {
        key: "onRemoveQuestion",
        value: function onRemoveQuestion(index) {
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({});
          this.surveyForm.get('surveyQuestions').removeAt(index);
          this.selectedOption.splice(index, 1);
          console.log(this.surveyForm);
        }
      }, {
        key: "onSeletQuestionType",
        value: function onSeletQuestionType(questionType, index) {
          if (questionType === 'radio' || questionType === 'checkbox') {
            this.addOptionControls(questionType, index);
          }
        }
      }, {
        key: "onSavedQuestionType",
        value: function onSavedQuestionType(questionType, index) {
          if (questionType === 'radio' || questionType === 'checkbox') {
            this.savedOptionControls(questionType, index);
          }
        }
      }, {
        key: "savedOptionControls",
        value: function savedOptionControls(questionType, index) {
          var options = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]); // let showRemarksBox = new FormControl(false);

          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.addControl('options', options); // (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

          console.log("Checking here", this.surveyForm);

          for (var i = 0; i < this.savedQuestions[index].options.length; i++) {
            this.savedaddOption(index, this.savedQuestions[index].options[i].OptionText);
          } // this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

        }
      }, {
        key: "addOptionControls",
        value: function addOptionControls(questionType, index) {
          var options = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          var showRemarksBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.addControl('options', options); // (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

          this.clearFormArray(this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options);
          this.addOption(index);
          this.addOption(index);
        }
      }, {
        key: "clearFormArray",
        value: function clearFormArray(formArray) {
          while (formArray.length !== 0) {
            formArray.removeAt(0);
          }
        }
      }, {
        key: "addOption",
        value: function addOption(index) {
          var optionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'optionText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options.push(optionGroup);
        }
      }, {
        key: "savedaddOption",
        value: function savedaddOption(index, value) {
          var optionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'optionText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options.push(optionGroup);
          console.log("I AM IN savedOptionControls()", optionGroup['optionText']);
        }
      }, {
        key: "removeOption",
        value: function removeOption(questionIndex, itemIndex) {
          this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options.removeAt(itemIndex);
        }
      }, {
        key: "postSurvey",
        value: function postSurvey() {
          var _this6 = this;

          var formData = this.surveyForm.value;
          console.log("Final form data=>", formData);
          console.log();
          var ID = 0;
          var Type = formData.surveyType;
          var Title = this.finalTitleName;
          var IsDeleted = formData.availability;
          var IsAnonymous = formData.IsAnonymous;
          var expiry = formData.endDatePicker; //  let Question: Question[] = [];

          var Questions = [];
          var surveyQuestions = formData.surveyQuestions; // let optionArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
          // let survey = new Survey(ID, Type, Title, IsDeleted, IsAnonymous, Questions);

          var survey = new _model_data_models__WEBPACK_IMPORTED_MODULE_3__["Survey"](ID, Title, IsDeleted, expiry, Questions);
          surveyQuestions.forEach(function (question, index, array) {
            var questionItem = {
              'ID': 0,
              "Type": question.questionType,
              "Text": question.questionTitle,
              "options": [],
              "Required": false,
              "Remarks": "",
              "hasRemarks": false
            }; // if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
            //   questionItem.hasRemarks = question.questionGroup.showRemarksBox;
            // }

            if (question.questionGroup.hasOwnProperty('options')) {
              question.questionGroup.options.forEach(function (option) {
                var optionItem = {
                  "ID": 0,
                  "OptionText": option.optionText,
                  "OptionColor": "",
                  "hasRemarks": false
                };
                questionItem.options.push(optionItem);
              });
            }

            survey.Question.push(questionItem);
          });
          console.log('posting survey', survey);
          var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
          var now = Date.now();
          var createDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
          var endDate;

          if (survey.expiry == null) {
            endDate = '';
          } else {
            endDate = pipe.transform(survey.expiry, "yyyy-MM-dd hh:mm:ss");
          }

          var theCreatedForm = new _model_data_models__WEBPACK_IMPORTED_MODULE_3__["CreatedFormDetail"](survey.Title, createDate, endDate, survey.IsDeleted, survey);
          this.surveyFormName = survey.Title;
          console.log(theCreatedForm);
          var receiveSave = this.theLoginService.editSurveyForm(this.urlid, theCreatedForm);
          receiveSave.subscribe(function (response) {
            console.log("After saving dynamic form", response['response']); // this.urlid = response['response'];

            if (formData.availability) {
              _this6._router.navigate(['email', _this6.urlid]);
            } else {
              _this6._router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.postSurvey();
        }
      }]);

      return EditSurveyComponent;
    }();

    EditSurveyComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_4__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    EditSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-survey',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-survey.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/edit-survey/edit-survey.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-survey.component.css */
      "./src/app/Admin Module/edit-survey/edit-survey.component.css"))["default"]]
    })], EditSurveyComponent);
    /***/
  },

  /***/
  "./src/app/Admin Module/material/material.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Admin Module/material/material.module.ts ***!
    \**********************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppAdminModuleMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js"); // import {
    //   MatButtonModule,
    //   MatIconModule,
    //   MatFormFieldModule,
    //   MatInputModule,
    //   MatDatepickerModule,
    //   MatNativeDateModule,
    //   MatCheckboxModule,
    //   MatSidenavModule,
    //   MatToolbarModule,
    //   MatListModule,
    //   MatCardModule,
    //   MatTabsModule,
    //   MatTableModule,
    //   MatSortModule,
    //   MatPaginatorModule,
    //   MatSelectModule,
    //   MatProgressSpinnerModule,
    //   MatDialogModule,
    //   MatExpansionModule,
    //   MatRadioModule,
    //   MatTooltipModule,
    //   MatAutocompleteModule,
    //  MatSlideToggleModule,
    //  MatGridListModule,
    //  MatBadgeModule
    // } from '@angular/material';


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"]],
      exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/Admin Module/survey-form/survey-form.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/Admin Module/survey-form/survey-form.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleSurveyFormSurveyFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".que-required{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL3N1cnZleS1mb3JtL3N1cnZleS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9BZG1pbiBNb2R1bGUvc3VydmV5LWZvcm0vc3VydmV5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWUtcmVxdWlyZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Admin Module/survey-form/survey-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Admin Module/survey-form/survey-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SurveyFormComponent */

  /***/
  function srcAppAdminModuleSurveyFormSurveyFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyFormComponent", function () {
      return SurveyFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_response_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../model/response-data */
    "./src/app/model/response-data.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SurveyFormComponent = /*#__PURE__*/function () {
      function SurveyFormComponent(fb, theLoginService, _route, _router) {
        _classCallCheck(this, SurveyFormComponent);

        this.fb = fb;
        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          Que0: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          Que1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          Que2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          Que3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          Que4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          Que5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.jsonData = {
          surveyTitle: '',
          surveyQuestions: ''
        };
        this.submitted = false;
      }

      _createClass(SurveyFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "user") {
            this.initializeValueOnStartUp();
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "initializeValueOnStartUp",
        value: function initializeValueOnStartUp() {
          var _this7 = this;

          this._route.params.subscribe(function (params) {
            _this7.id = params['id'];
            console.log('Url Id: ', _this7.id);
          });

          this.theLoginService.getSurveyForm(this.id).subscribe(function (response) {
            console.log(response);
            var jsonData = {
              surveyTitle: response['Title'],
              surveyQuestions: response['Question']
            };
            _this7.jsonData = jsonData; //  jsonData.surveyTitle = response['Title'];
            //  jsonData.surveyQuestions=response['Question'];

            console.log("After getting from backend", _this7.jsonData);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.submitted = true; // console.log(this.jsonData.surveyQuestions['0']['Text']);
          // console.log("Form Submitted");
          // console.log(this.userForm.value);

          var theResponse = [];

          var _iterator = _createForOfIteratorHelper(this.jsonData.surveyQuestions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              // console.log("ITEM",this.jsonData.surveyQuestions.indexOf(item), item['Text']);
              // console.log("ITEM ANS", this.userForm.value["Que"+this.jsonData.surveyQuestions.indexOf(item)]);
              var itemPush = new _model_response_data__WEBPACK_IMPORTED_MODULE_1__["SendingResponse"](item['Text'], this.userForm.value["Que" + this.jsonData.surveyQuestions.indexOf(item)]);
              console.log(itemPush);
              theResponse.push(itemPush);
            } // theResponse.question0 = this.jsonData.surveyQuestions['0']['Text'];
            // theResponse.answer0 = this.userForm.value['Que0'];
            // console.log("Sending Response",theResponse);

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
          var now = Date.now();
          var createDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
          var usermail = sessionStorage.getItem("email");
          var theSaveResponse = new _model_response_data__WEBPACK_IMPORTED_MODULE_1__["SaveResponse"](usermail, createDate, this.jsonData.surveyTitle, theResponse);
          this.theLoginService.saveResponseData(theSaveResponse).subscribe(function (response) {
            console.log(response);

            _this8._router.navigateByUrl("/user");
          });
        }
      }, {
        key: "onChange",
        value: function onChange(opt, evnt) {
          console.log(opt);
          console.log(evnt.name);
          console.log(evnt.checked);
          var opts = new Array();
          var savedOpts = this.userForm.get(evnt.name).value;
          var newOpts;

          if (savedOpts != null && savedOpts != undefined && savedOpts != "") {
            opts = savedOpts.split(",");
          }

          if (evnt.checked) {
            opts.push(opt);
          } else {
            opts = this.removeElement(opts, opt);
          }

          console.log("Already stored: ", opts);
          newOpts = opts.join(",");
          this.userForm.controls[evnt.name].setValue(newOpts);
          console.log("Final storing :", this.userForm.controls[evnt.name].value);
        }
      }, {
        key: "removeElement",
        value: function removeElement(opts, opt) {
          var newOpts = [];

          for (var index in opts) {
            if (opt !== opts[index]) {
              newOpts.push(opts[index]);
            }
          }

          return newOpts;
        }
      }]);

      return SurveyFormComponent;
    }();

    SurveyFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_4__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SurveyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-survey-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/survey-form/survey-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey-form.component.css */
      "./src/app/Admin Module/survey-form/survey-form.component.css"))["default"]]
    })], SurveyFormComponent);
    /***/
  },

  /***/
  "./src/app/Admin Module/user-email/user-email.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/Admin Module/user-email/user-email.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleUserEmailUserEmailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-required{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL3VzZXItZW1haWwvdXNlci1lbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4gTW9kdWxlL3VzZXItZW1haWwvdXNlci1lbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmVxdWlyZWR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Admin Module/user-email/user-email.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Admin Module/user-email/user-email.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserEmailComponent */

  /***/
  function srcAppAdminModuleUserEmailUserEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEmailComponent", function () {
      return UserEmailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");

    var UserEmailComponent = /*#__PURE__*/function () {
      function UserEmailComponent(theLoginService, route, router) {
        _classCallCheck(this, UserEmailComponent);

        this.theLoginService = theLoginService;
        this.route = route;
        this.router = router;
        this.isAdmin = false;
        this.sendingList = {
          listOfEmail: ""
        };
        this.errorMsg = false;
      }

      _createClass(UserEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.isAdmin = true;
          }

          this.surveyId = parseInt(this.route.snapshot.paramMap.get("p1"));
          console.log("Survey name from id =>", this.surveyId);
        }
      }, {
        key: "goToAdmin",
        value: function goToAdmin() {
          console.log("goToAdmin Cicked");
          this.router.navigateByUrl('/admin');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.email == null || this.email == undefined) {
            this.errorMsg = true;
          } else if (this.email.trim() == "") {
            this.errorMsg = true;
          } else {
            console.log("Email id's =>", this.email);
            console.log("path id", this.surveyId);
            this.sendingList.listOfEmail = this.email.trim();
            this.theLoginService.inviteForRegistration(this.surveyId, this.sendingList).subscribe(function (response) {
              console.log(response); // this.router.navigateByUrl("/admin");
              // alert("Your form is published successfully");
            });
            this.router.navigateByUrl("/admin");
          }
        }
      }]);

      return UserEmailComponent;
    }();

    UserEmailComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_3__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-email.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-email/user-email.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-email.component.css */
      "./src/app/Admin Module/user-email/user-email.component.css"))["default"]]
    })], UserEmailComponent);
    /***/
  },

  /***/
  "./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminModuleUserSurveyFormlistUserSurveyFormlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table, th, td {\r\n    border: 1px solid black;\r\n} */\r\n\r\n.first{\r\n    display: inline-block;\r\n}\r\n\r\n.home {\r\n    color: black;\r\n    font-size: 24px;\r\n}\r\n\r\n.home:hover {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4gTW9kdWxlL3VzZXItc3VydmV5LWZvcm1saXN0L3VzZXItc3VydmV5LWZvcm1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL0FkbWluIE1vZHVsZS91c2VyLXN1cnZleS1mb3JtbGlzdC91c2VyLXN1cnZleS1mb3JtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSAqL1xyXG5cclxuLmZpcnN0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5ob21lOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: UserSurveyFormlistComponent */

  /***/
  function srcAppAdminModuleUserSurveyFormlistUserSurveyFormlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSurveyFormlistComponent", function () {
      return UserSurveyFormlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserSurveyFormlistComponent = /*#__PURE__*/function () {
      function UserSurveyFormlistComponent(LoginuserService, loc, _router) {
        _classCallCheck(this, UserSurveyFormlistComponent);

        this.LoginuserService = LoginuserService;
        this.loc = loc;
        this._router = _router;
        this.fileName = 'ExcelSheet.xlsx';
        this.newResponseList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
      }

      _createClass(UserSurveyFormlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          if (sessionStorage.getItem('role') == "admin") {
            this.LoginuserService.getUserResponseList().subscribe(function (response) {
              console.log("Response", response);
              _this9.listOfUserResponse = response;
              _this9.surveyTitle = _this9.listOfUserResponse.map(function (a) {
                return a["form_title"];
              });

              for (var item in _this9.listOfUserResponse) {
                console.log("item =>" + _this9.listOfUserResponse[item].submitdate);
                _this9.surveyName = _this9.listOfUserResponse[item].form_title;
                _this9.surveyDate = _this9.pipe.transform(_this9.listOfUserResponse[item].submitdate, 'mediumDate');
                _this9.surveyUser = _this9.listOfUserResponse[item].usermail;
                console.log(_this9.surveyDate + "\t" + _this9.surveyName + "\t" + _this9.surveyUser);
              }

              _this9.displayResponse = _this9.listOfUserResponse;
              console.log(_this9.surveyName);

              _this9.grouping();
            });
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "grouping",
        value: function grouping() {
          var _this10 = this;

          var grouped = lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"](lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](this.listOfUserResponse, 'form_title'), function (rlist) {
            return rlist.map(function (res) {
              return lodash__WEBPACK_IMPORTED_MODULE_4__["omit"](res, 'form_title');
            });
          });
          var sorted = this.surveyTitle.filter(function (item, index) {
            return _this10.surveyTitle.indexOf(item) === index;
          }); // console.log("Group 1 \n",grouped);
          // console.log("Survey Name", sorted);
          // console.log("Sort \n",grouped[this.surveyName].length);
          // console.log("Sorting");
          // for(var item in grouped){
          //   console.log("item =>",grouped[item]);
          // }
        }
      }, {
        key: "filter",
        value: function filter() {
          this.newResponseList.splice(0, this.newResponseList.length);
          console.log("StartDate=>", this.startdate);
          console.log("EndDate=>", this.enddate);

          for (var item in this.listOfUserResponse) {
            var formData = this.listOfUserResponse[item];
            this.surveyDate = this.pipe.transform(this.listOfUserResponse[item].submitdate, 'yyyy-MM-dd');
            console.log("forDate=>", this.surveyDate);
            var start = this.listOfUserResponse[item].submitdate;
            var end = this.listOfUserResponse[item].submitdate;

            if (this.surveyDate >= this.startdate && this.surveyDate <= this.enddate) {
              this.newResponseList.push(formData);
            }
          }

          console.log("New Response List", this.newResponseList);
          this.displayResponse = this.newResponseList;
        }
      }, {
        key: "exportexcel",
        value: function exportexcel() {
          /* table id is passed over here */
          var element = document.getElementById('excel-table');
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].table_to_sheet(element);
          /* generate workbook and add the worksheet */

          var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(wb, ws, 'Sheet1');
          /* save to file */

          xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](wb, this.fileName);
        } // public downloadPDF():void {
        //   let DATA = this.htmlData.nativeElement;
        //   let doc = new jsPDF('p','pt', 'a4');
        //   let handleElement = {
        //     '#editor':function(element,renderer){
        //       return true;
        //     }
        //   };
        //   doc.fromHTML(DATA.innerHTML,15,15,{
        //     'width': 100,
        //     'elementHandlers': handleElement
        //   });
        //   doc.save('angular-demo.pdf');
        // }
        // public downloadPDF(){
        //   const doc = new jsPDF();
        //   autoTable(doc,{html: '#excel-table'})
        //   doc.save('table.pdf');
        // }

      }, {
        key: "navigateBack",
        value: function navigateBack() {
          this.loc.back();
        }
      }]);

      return UserSurveyFormlistComponent;
    }();

    UserSurveyFormlistComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_2__["LoginuserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('htmlData', {
      "static": false
    })], UserSurveyFormlistComponent.prototype, "htmlData", void 0);
    UserSurveyFormlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-survey-formlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-survey-formlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-survey-formlist.component.css */
      "./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.css"))["default"]]
    })], UserSurveyFormlistComponent);
    /***/
  },

  /***/
  "./src/app/Login_Module/login/login.component.css":
  /*!********************************************************!*\
    !*** ./src/app/Login_Module/login/login.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogin_ModuleLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .login-name {\r\n    text-align: right;\r\n} */\r\n.login-text{\r\n    color: white;\r\n}\r\n.my-login {\r\n    background-image: url(\"1.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\nhr {\r\n    border-top: 2px solid white;\r\n}\r\n.login-module{\r\n    /* margin: 3rem; */\r\n    margin: 0 auto !important;\r\n    text-align: center;\r\n    border: 3px solid  lightgrey;\r\n    border-radius: 25px;\r\n    background-color: rgba(243, 243, 243, 0.2);\r\n}\r\ninput {\r\n    border-radius: 20px;\r\n    color:grey;\r\n}\r\n.login-btn{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5fTW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvTG9naW5fTW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubG9naW4tbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSAqL1xyXG4ubG9naW4tdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm15LWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIjEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ubG9naW4tbW9kdWxle1xyXG4gICAgLyogbWFyZ2luOiAzcmVtOyAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjIpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6Z3JleTtcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Login_Module/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Login_Module/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLogin_ModuleLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(theLoginService, _route, _router) {
        _classCallCheck(this, LoginComponent);

        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
        this.invalidUser = false;
        this.filteredSurveyList = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.getSurvey();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var username = '';
          var password = '';
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](username, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }
      }, {
        key: "getSurvey",
        value: function getSurvey() {
          var _this11 = this;

          this.theLoginService.getAllSurveyList().subscribe(function (response) {
            console.log("SurveyList", response);
            _this11.surveyList = response;

            _this11.filterSurveyList();
          });
        }
      }, {
        key: "filterSurveyList",
        value: function filterSurveyList() {
          var _this12 = this;

          var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
          var now = Date.now();
          var nowDate = pipe.transform(now, "yyyy-MM-dd hh:mm:ss");
          this.surveyList.forEach(function (element, index) {
            if (element.available == true && pipe.transform(element.end_date, "yyyy-MM-dd hh:mm:ss") > nowDate) {
              _this12.filteredSurveyList.push(element);
            }
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this13 = this;

          var loginData = this.loginForm.value;
          console.log(loginData);
          var username = loginData.username;
          var password = loginData.password;
          var sessionRole = "failed";
          console.log(username);
          console.log(password);
          this.theLoginService.authenticateUser(loginData).subscribe(function (response) {
            console.log("Authentication doLogin()", response);
            sessionRole = response.access;
            console.log(sessionRole);

            if (!(sessionRole === "failed")) {
              _this13.invalidUser = false;
              var email = username;
              sessionStorage.setItem("role", sessionRole);
              sessionStorage.setItem("email", email);

              if (sessionRole == "admin") {
                _this13._router.navigateByUrl("/admin");
              } else {
                _this13._router.navigateByUrl("/user");
              }
            } else {
              _this13.invalidUser = true;
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_1__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/Login_Module/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/Login_Module/logout/logout.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/Login_Module/logout/logout.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogin_ModuleLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luX01vZHVsZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Login_Module/logout/logout.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Login_Module/logout/logout.component.ts ***!
    \*********************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogin_ModuleLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(theLoginService, _route, _router) {
        _classCallCheck(this, LogoutComponent);

        this.theLoginService = theLoginService;
        this._route = _route;
        this._router = _router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clearSession();
        }
      }, {
        key: "clearSession",
        value: function clearSession() {
          var _this14 = this;

          sessionStorage.removeItem("email");
          sessionStorage.removeItem("role");
          this.theLoginService.logoutUser().subscribe(function (response) {
            console.log("logout respoonse", response);

            _this14._router.navigateByUrl("/login");
          });
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_2__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/logout/logout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/Login_Module/logout/logout.component.css"))["default"]]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/Login_Module/registration/registration.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/Login_Module/registration/registration.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogin_ModuleRegistrationRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-name {\r\n    text-align: right;\r\n}\r\n\r\n.p-text{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5fTW9kdWxlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luX01vZHVsZS9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnAtdGV4dHtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Login_Module/registration/registration.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Login_Module/registration/registration.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppLogin_ModuleRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(LoginService, router, loc) {
        _classCallCheck(this, RegistrationComponent);

        this.LoginService = LoginService;
        this.router = router;
        this.loc = loc; // registrationForm: FormGroup;

        this.checkEmail = false;
        this.userRole = '';
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*.[^ @]*@[^ @]*.com")]),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
          'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userRole)
        });
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.userRole = 'admin';
          } else {
            this.userRole = 'user';
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          console.log("Form Data", this.registrationForm.value);
          var data = {
            firstname: this.registrationForm.controls.firstname.value,
            lastname: this.registrationForm.controls.lastname.value,
            email: this.registrationForm.controls.email.value,
            password: this.registrationForm.controls.password.value,
            role: this.userRole
          };
          console.log(data);
          this.LoginService.registration(data).subscribe(function (response) {
            if (response != null) {
              console.log("User Registered Successfully" + response);

              if (_this15.userRole == "admin") {
                console.log("To admin");

                _this15.router.navigateByUrl("/admin");
              } else {
                _this15.router.navigate(['/login']);
              }
            }

            _this15.checkEmail = true; // console.log("User already exists");
          });
        }
      }, {
        key: "navigateBack",
        value: function navigateBack() {
          this.loc.back();
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_3__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }];
    };

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login_Module/registration/registration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.css */
      "./src/app/Login_Module/registration/registration.component.css"))["default"]]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/User/user-home/user-home.component.css":
  /*!********************************************************!*\
    !*** ./src/app/User/user-home/user-home.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserHomeUserHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logout {\r\n    text-align: right;\r\n}\r\n\r\n.form-list {\r\n    border: 1px solid lightgrey;\r\n    border-radius: 5px;\r\n}\r\n\r\nhr {\r\n    border-top: 2px solid lightgrey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvVXNlci91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybS1saXN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/User/user-home/user-home.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/User/user-home/user-home.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppUserUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserHomeComponent = /*#__PURE__*/function () {
      function UserHomeComponent(theLoginService, _router) {
        _classCallCheck(this, UserHomeComponent);

        this.theLoginService = theLoginService;
        this._router = _router;
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          if (sessionStorage.getItem('role') == "user") {
            var user = sessionStorage.getItem("email");
            this.theLoginService.getSurveyList(user).subscribe(function (response) {
              console.log(response['surveylist']);
              _this16.listOfSurvey = response['surveylist']; // this.data = response['surveylist'].
            });
          } else {
            this._router.navigate(['/login']);
          }
        }
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_1__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-user-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-home/user-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-home.component.css */
      "./src/app/User/user-home/user-home.component.css"))["default"]]
    })], UserHomeComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Admin_Module_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Admin Module/create-survey/create-survey.component */
    "./src/app/Admin Module/create-survey/create-survey.component.ts");
    /* harmony import */


    var _Admin_Module_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Admin Module/survey-form/survey-form.component */
    "./src/app/Admin Module/survey-form/survey-form.component.ts");
    /* harmony import */


    var _Admin_Module_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Admin Module/admin-home/admin-home.component */
    "./src/app/Admin Module/admin-home/admin-home.component.ts");
    /* harmony import */


    var _User_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./User/user-home/user-home.component */
    "./src/app/User/user-home/user-home.component.ts");
    /* harmony import */


    var _Login_Module_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Login_Module/login/login.component */
    "./src/app/Login_Module/login/login.component.ts");
    /* harmony import */


    var _Login_Module_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Login_Module/logout/logout.component */
    "./src/app/Login_Module/logout/logout.component.ts");
    /* harmony import */


    var _Admin_Module_user_survey_formlist_user_survey_formlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Admin Module/user-survey-formlist/user-survey-formlist.component */
    "./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.ts");
    /* harmony import */


    var _surveyForm_survey_form_list_survey_form_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./surveyForm/survey-form-list/survey-form-list.component */
    "./src/app/surveyForm/survey-form-list/survey-form-list.component.ts");
    /* harmony import */


    var _Login_Module_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Login_Module/registration/registration.component */
    "./src/app/Login_Module/registration/registration.component.ts");
    /* harmony import */


    var _surveyForm_user_surveylist_details_user_surveylist_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./surveyForm/user-surveylist-details/user-surveylist-details.component */
    "./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.ts");
    /* harmony import */


    var _surveyForm_survey_list_submission_details_survey_list_submission_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./surveyForm/survey-list-submission-details/survey-list-submission-details.component */
    "./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.ts");
    /* harmony import */


    var _Admin_Module_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Admin Module/user-email/user-email.component */
    "./src/app/Admin Module/user-email/user-email.component.ts");
    /* harmony import */


    var _Admin_Module_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Admin Module/edit-survey/edit-survey.component */
    "./src/app/Admin Module/edit-survey/edit-survey.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _Login_Module_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: 'admin',
      component: _Admin_Module_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__["AdminHomeComponent"]
    }, {
      path: 'user',
      component: _User_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__["UserHomeComponent"]
    }, {
      path: 'logout',
      component: _Login_Module_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]
    }, {
      path: 'createform',
      component: _Admin_Module_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_3__["CreateSurveyComponent"]
    }, {
      path: 'editform/:id',
      component: _Admin_Module_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_15__["EditSurveyComponent"]
    }, {
      path: 'usersurvey',
      component: _Admin_Module_user_survey_formlist_user_survey_formlist_component__WEBPACK_IMPORTED_MODULE_9__["UserSurveyFormlistComponent"]
    }, {
      path: 'survey/:id',
      component: _Admin_Module_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_4__["SurveyFormComponent"]
    }, {
      path: 'surveylistdetails',
      component: _surveyForm_user_surveylist_details_user_surveylist_details_component__WEBPACK_IMPORTED_MODULE_12__["UserSurveylistDetailsComponent"]
    }, {
      path: 'surveylistdetails/:title',
      component: _surveyForm_survey_list_submission_details_survey_list_submission_details_component__WEBPACK_IMPORTED_MODULE_13__["SurveyListSubmissionDetailsComponent"]
    }, {
      path: 'editsurvey',
      component: _surveyForm_survey_form_list_survey_form_list_component__WEBPACK_IMPORTED_MODULE_10__["SurveyFormListComponent"]
    }, {
      path: 'registration',
      component: _Login_Module_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"]
    }, {
      path: 'email/:p1',
      component: _Admin_Module_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_14__["UserEmailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CampaignManagementSystem';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _Admin_Module_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Admin Module/material/material.module */
    "./src/app/Admin Module/material/material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _Admin_Module_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Admin Module/create-survey/create-survey.component */
    "./src/app/Admin Module/create-survey/create-survey.component.ts");
    /* harmony import */


    var _Admin_Module_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Admin Module/survey-form/survey-form.component */
    "./src/app/Admin Module/survey-form/survey-form.component.ts");
    /* harmony import */


    var _Admin_Module_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Admin Module/admin-home/admin-home.component */
    "./src/app/Admin Module/admin-home/admin-home.component.ts");
    /* harmony import */


    var _User_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./User/user-home/user-home.component */
    "./src/app/User/user-home/user-home.component.ts");
    /* harmony import */


    var _Login_Module_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Login_Module/login/login.component */
    "./src/app/Login_Module/login/login.component.ts");
    /* harmony import */


    var _Login_Module_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Login_Module/logout/logout.component */
    "./src/app/Login_Module/logout/logout.component.ts");
    /* harmony import */


    var _Admin_Module_user_survey_formlist_user_survey_formlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Admin Module/user-survey-formlist/user-survey-formlist.component */
    "./src/app/Admin Module/user-survey-formlist/user-survey-formlist.component.ts");
    /* harmony import */


    var _surveyForm_survey_form_list_survey_form_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./surveyForm/survey-form-list/survey-form-list.component */
    "./src/app/surveyForm/survey-form-list/survey-form-list.component.ts");
    /* harmony import */


    var _Login_Module_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Login_Module/registration/registration.component */
    "./src/app/Login_Module/registration/registration.component.ts");
    /* harmony import */


    var _surveyForm_user_surveylist_details_user_surveylist_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./surveyForm/user-surveylist-details/user-surveylist-details.component */
    "./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.ts");
    /* harmony import */


    var _surveyForm_survey_list_submission_details_survey_list_submission_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./surveyForm/survey-list-submission-details/survey-list-submission-details.component */
    "./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.ts");
    /* harmony import */


    var _Admin_Module_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Admin Module/user-email/user-email.component */
    "./src/app/Admin Module/user-email/user-email.component.ts");
    /* harmony import */


    var _Admin_Module_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./Admin Module/edit-survey/edit-survey.component */
    "./src/app/Admin Module/edit-survey/edit-survey.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Admin_Module_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_10__["CreateSurveyComponent"], _Admin_Module_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_11__["SurveyFormComponent"], _Admin_Module_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__["AdminHomeComponent"], _User_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_13__["UserHomeComponent"], _Login_Module_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _Login_Module_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"], _Admin_Module_user_survey_formlist_user_survey_formlist_component__WEBPACK_IMPORTED_MODULE_16__["UserSurveyFormlistComponent"], _surveyForm_survey_form_list_survey_form_list_component__WEBPACK_IMPORTED_MODULE_17__["SurveyFormListComponent"], _Login_Module_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"], _surveyForm_user_surveylist_details_user_surveylist_details_component__WEBPACK_IMPORTED_MODULE_19__["UserSurveylistDetailsComponent"], _surveyForm_survey_list_submission_details_survey_list_submission_details_component__WEBPACK_IMPORTED_MODULE_20__["SurveyListSubmissionDetailsComponent"], _Admin_Module_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_21__["UserEmailComponent"], _Admin_Module_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_22__["EditSurveyComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _Admin_Module_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"]],
      providers: [ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ThemeService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/loginuser.service.ts":
  /*!**************************************!*\
    !*** ./src/app/loginuser.service.ts ***!
    \**************************************/

  /*! exports provided: LoginuserService */

  /***/
  function srcAppLoginuserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginuserService", function () {
      return LoginuserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginuserService = /*#__PURE__*/function () {
      function LoginuserService(http) {
        _classCallCheck(this, LoginuserService);

        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/';
      }

      _createClass(LoginuserService, [{
        key: "authenticateUser",
        value: function authenticateUser(theLoginBean) {
          console.log(theLoginBean);
          return this.http.post("".concat(this.baseUrl) + "login", theLoginBean);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          console.log("I am sending logout() to spring");
          return this.http.get("".concat(this.baseUrl) + "logout");
        }
      }, {
        key: "registration",
        value: function registration(formData) {
          return this.http.post("".concat(this.baseUrl) + "registration", formData);
        }
      }, {
        key: "saveFormFormat",
        value: function saveFormFormat(theCreatedFormDetail) {
          console.log(theCreatedFormDetail);
          return this.http.post("".concat(this.baseUrl) + "dynamicform", theCreatedFormDetail);
        } // getSurveyList(){
        //   return  this.http.get(`${this.baseUrl}`+"surveyList");
        // }

      }, {
        key: "getSurveyList",
        value: function getSurveyList(user) {
          var requestedUser = {
            user: user
          };
          return this.http.post("".concat(this.baseUrl) + "surveyList", requestedUser);
        }
      }, {
        key: "getAllSurveyList",
        value: function getAllSurveyList() {
          return this.http.get("".concat(this.baseUrl) + "getAllSurveyList");
        }
      }, {
        key: "getSurveyForm",
        value: function getSurveyForm(id) {
          return this.http.get("".concat(this.baseUrl) + "survey/" + id);
        }
      }, {
        key: "saveResponseData",
        value: function saveResponseData(theData) {
          console.log(JSON.stringify(theData));
          return this.http.post("".concat(this.baseUrl) + "saveResponse", theData);
        }
      }, {
        key: "getUserResponseList",
        value: function getUserResponseList() {
          return this.http.get("".concat(this.baseUrl) + "userresponseList");
        }
      }, {
        key: "publishSurvey",
        value: function publishSurvey(id) {
          return this.http.get("".concat(this.baseUrl) + "surveyList/" + id);
        }
      }, {
        key: "deleteSurvey",
        value: function deleteSurvey(id) {
          return this.http["delete"]("".concat(this.baseUrl) + "delete/" + id);
        }
      }, {
        key: "inviteForRegistration",
        value: function inviteForRegistration(id, sendingList) {
          return this.http.post("".concat(this.baseUrl) + "invite/" + id, sendingList);
        }
      }, {
        key: "editSurveyForm",
        value: function editSurveyForm(id, theCreatedFormDetail) {
          return this.http.post("".concat(this.baseUrl) + "editSurveyForm/" + id, theCreatedFormDetail);
        }
      }]);

      return LoginuserService;
    }();

    LoginuserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginuserService);
    /***/
  },

  /***/
  "./src/app/model/data-models.ts":
  /*!**************************************!*\
    !*** ./src/app/model/data-models.ts ***!
    \**************************************/

  /*! exports provided: Survey, CreatedFormDetail, Question, Option, Category, Product */

  /***/
  function srcAppModelDataModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Survey", function () {
      return Survey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatedFormDetail", function () {
      return CreatedFormDetail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Survey = function Survey(ID, // public Type : string,
    Title, IsDeleted, // public IsAnonymous : boolean,
    expiry, Question) {
      _classCallCheck(this, Survey);

      this.ID = ID;
      this.Title = Title;
      this.IsDeleted = IsDeleted;
      this.expiry = expiry;
      this.Question = Question;
    };

    var CreatedFormDetail = function CreatedFormDetail(form_title, created_date, end_date, available, form_format) {
      _classCallCheck(this, CreatedFormDetail);

      this.form_title = form_title;
      this.created_date = created_date;
      this.end_date = end_date;
      this.available = available;
      this.form_format = form_format;
    };

    var Question = function Question(ID, Type, Text, options, Required, Remarks, hasRemarks) {
      _classCallCheck(this, Question);

      this.ID = ID;
      this.Type = Type;
      this.Text = Text;
      this.options = options;
      this.Required = Required;
      this.Remarks = Remarks;
      this.hasRemarks = hasRemarks;
    };

    var Option = function Option(ID, OptionText, OptionColor, hasRemarks) {
      _classCallCheck(this, Option);

      this.ID = ID;
      this.OptionText = OptionText;
      this.OptionColor = OptionColor;
      this.hasRemarks = hasRemarks;
    };

    var Category = function Category(id, name, hasSubCategory, parentId) {
      _classCallCheck(this, Category);

      this.id = id;
      this.name = name;
      this.hasSubCategory = hasSubCategory;
      this.parentId = parentId;
    };

    var Product = function Product(id, name, images, oldPrice, newPrice, discount, ratingsCount, ratingsValue, description, availibilityCount, color, size, weight, categoryId) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.images = images;
      this.oldPrice = oldPrice;
      this.newPrice = newPrice;
      this.discount = discount;
      this.ratingsCount = ratingsCount;
      this.ratingsValue = ratingsValue;
      this.description = description;
      this.availibilityCount = availibilityCount;
      this.color = color;
      this.size = size;
      this.weight = weight;
      this.categoryId = categoryId;
    };
    /***/

  },

  /***/
  "./src/app/model/response-data.ts":
  /*!****************************************!*\
    !*** ./src/app/model/response-data.ts ***!
    \****************************************/

  /*! exports provided: SendingResponse, SaveResponse */

  /***/
  function srcAppModelResponseDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendingResponse", function () {
      return SendingResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveResponse", function () {
      return SaveResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SendingResponse = function SendingResponse(question, answer) {
      _classCallCheck(this, SendingResponse);

      this.question = question;
      this.answer = answer;
    };

    var SaveResponse = function SaveResponse(user, submitdate, form_title, data) {
      _classCallCheck(this, SaveResponse);

      this.user = user;
      this.submitdate = submitdate;
      this.form_title = form_title;
      this.data = data;
    };
    /***/

  },

  /***/
  "./src/app/surveyForm/survey-form-list/survey-form-list.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/surveyForm/survey-form-list/survey-form-list.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSurveyFormSurveyFormListSurveyFormListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .back-btn { */\r\n    /* margin-top: 1rem; */\r\n    /* text-align: right; */\r\n    /* } */\r\n    .item-details {\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n}\r\n    .published {\r\n    color: #afafaf;\r\n}\r\n    .input-text{\r\n    width: 100%;\r\n}\r\n    .first{\r\n    display: inline-block;\r\n}\r\n    .home {\r\n    color: black;\r\n    font-size: 24px;\r\n}\r\n    .home:hover {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5Rm9ybS9zdXJ2ZXktZm9ybS1saXN0L3N1cnZleS1mb3JtLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQzNCLE1BQU07SUFFTjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7SUFFQTtJQUNJLGNBQWM7QUFDbEI7SUFFQTtJQUNJLFdBQVc7QUFDZjtJQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtJQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5Rm9ybS9zdXJ2ZXktZm9ybS1saXN0L3N1cnZleS1mb3JtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5iYWNrLWJ0biB7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxcmVtOyAqL1xyXG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbi8qIH0gKi9cclxuXHJcbi5pdGVtLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5wdWJsaXNoZWQge1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maXJzdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaG9tZTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/surveyForm/survey-form-list/survey-form-list.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/surveyForm/survey-form-list/survey-form-list.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SurveyFormListComponent */

  /***/
  function srcAppSurveyFormSurveyFormListSurveyFormListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyFormListComponent", function () {
      return SurveyFormListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SurveyFormListComponent = /*#__PURE__*/function () {
      function SurveyFormListComponent(theLoginService, router, loc) {
        _classCallCheck(this, SurveyFormListComponent);

        this.theLoginService = theLoginService;
        this.router = router;
        this.loc = loc;
        this.email = [];
      }

      _createClass(SurveyFormListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('role') == "admin") {
            this.getSurvey();
          } else {
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "getSurvey",
        value: function getSurvey() {
          var _this17 = this;

          this.theLoginService.getAllSurveyList().subscribe(function (response) {
            console.log(response);
            _this17.listOfSurvey = response;
          });
          this.todayDate = new Date();
          console.log(this.todayDate);
        }
      }, {
        key: "PublishSurvey",
        value: function PublishSurvey(id) {
          var _this18 = this;

          console.log("Publshing Survey " + id); // console.log("Email ->"+ this.email);

          this.theLoginService.publishSurvey(id).subscribe(function (response) {
            console.log("Survey Published");

            _this18.getSurvey();

            _this18.router.navigate(['email', id]);
          });
        }
      }, {
        key: "deleteSurvey",
        value: function deleteSurvey(id) {
          var _this19 = this;

          console.log("In Deleting Survey=====> " + id);
          this.theLoginService.deleteSurvey(id).subscribe(function (response) {
            console.log("Deleted the survey");

            _this19.getSurvey();
          });
        }
      }, {
        key: "navigateBack",
        value: function navigateBack() {
          this.loc.back();
        }
      }]);

      return SurveyFormListComponent;
    }();

    SurveyFormListComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_2__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    SurveyFormListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey-form-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey-form-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-form-list/survey-form-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey-form-list.component.css */
      "./src/app/surveyForm/survey-form-list/survey-form-list.component.css"))["default"]]
    })], SurveyFormListComponent);
    /***/
  },

  /***/
  "./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSurveyFormSurveyListSubmissionDetailsSurveyListSubmissionDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".survey-details {\r\n    border: 1.5px solid white;\r\n    border-radius: 5px;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    color: rgb(50, 130, 156);\r\n    box-shadow:         -7px -7px 5px 0px rgba(50, 50, 50, 0.75);\r\n    background-color: white;\r\n    /* box-shadow:\r\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n  0 100px 80px rgba(0, 0, 0, 0.12)\r\n; */\r\n\r\n  \r\n  \r\n  /* min-height: 200px; */\r\n  /* width: 50vw; */\r\n  /* margin: 50px auto; */\r\n  /* background: white;\r\n  border-radius: 5px; */\r\n}\r\n\r\n.form-details{\r\n    text-decoration: underline;\r\n}\r\n\r\n.htmlData{\r\n  display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5Rm9ybS9zdXJ2ZXktbGlzdC1zdWJtaXNzaW9uLWRldGFpbHMvc3VydmV5LWxpc3Qtc3VibWlzc2lvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsd0JBQXdCO0lBSXhCLDREQUE0RDtJQUM1RCx1QkFBdUI7SUFDdkI7Ozs7Ozs7R0FPRDs7OztFQUlELHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCO3VCQUNxQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleUZvcm0vc3VydmV5LWxpc3Qtc3VibWlzc2lvbi1kZXRhaWxzL3N1cnZleS1saXN0LXN1Ym1pc3Npb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cnZleS1kZXRhaWxzIHtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDUwLCAxMzAsIDE1Nik7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtN3B4IC03cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAtN3B4IC03cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICAtN3B4IC03cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBib3gtc2hhZG93OlxyXG4gIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXHJcbiAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcclxuICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxyXG4gIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcclxuICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKVxyXG47ICovXHJcblxyXG4gIFxyXG4gIFxyXG4gIC8qIG1pbi1oZWlnaHQ6IDIwMHB4OyAqL1xyXG4gIC8qIHdpZHRoOiA1MHZ3OyAqL1xyXG4gIC8qIG1hcmdpbjogNTBweCBhdXRvOyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cclxufVxyXG5cclxuLmZvcm0tZGV0YWlsc3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaHRtbERhdGF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SurveyListSubmissionDetailsComponent */

  /***/
  function srcAppSurveyFormSurveyListSubmissionDetailsSurveyListSubmissionDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyListSubmissionDetailsComponent", function () {
      return SurveyListSubmissionDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);

    var SurveyListSubmissionDetailsComponent = /*#__PURE__*/function () {
      function SurveyListSubmissionDetailsComponent(LoginuserService, activateRoute, loc, _router) {
        _classCallCheck(this, SurveyListSubmissionDetailsComponent);

        this.LoginuserService = LoginuserService;
        this.activateRoute = activateRoute;
        this.loc = loc;
        this._router = _router;
        this.numberOfSurveyResponse = 0;
        this.sortedNewArr = [];
        this.newArrsubmission = [];
        this.dataForTable = [];
        this.labelData = [];
        this.chartData = [];
        this.labelSurvey = "";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.displayChart = false;
        this.pieChartOptions = {
          responsive: true
        };
        this.pieChartLabels = this.labelData;
        this.pieChartData = this.chartData;
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.chartColors = [{
          backgroundColor: ["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
        }];
      }

      _createClass(SurveyListSubmissionDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          if (sessionStorage.getItem('role') == "admin") {
            this.surveyTitleName = this.activateRoute.snapshot.paramMap.get("title");
            console.log("Survey Title", this.surveyTitleName);
            this.labelSurvey = this.surveyTitleName;
            this.LoginuserService.getUserResponseList().subscribe(function (response) {
              console.log("listOfUserResponse", response);
              _this20.listOfUserResponse = response;
              _this20.surveyTitle = _this20.listOfUserResponse.map(function (a) {
                return a["form_title"];
              });

              _this20.LoginuserService.getAllSurveyList().subscribe(function (response) {
                console.log("listOfSurvey", response);
                _this20.listOfSurvey = response;

                _this20.getCreationDate();
              });

              _this20.grouping(); // const groupBy = (array, key) => {
              //   // Return the end result
              //   return array.reduce((result, currentValue) => {
              //     // If an array already present for key, push it to the array. Else create an array and push the object
              //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
              //       currentValue
              //     );
              //     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
              //     return result;
              //   }, {}); // empty object is the initial value for result object
              // };
              // const personGroupedByColor = groupBy(this.listOfUserResponse, 'form_title');
              // console.log("Sorted New", personGroupedByColor);

            });
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "grouping",
        value: function grouping() {
          var _this21 = this;

          var grouped = lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"](lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](this.listOfUserResponse, 'form_title'), function (rlist) {
            return rlist.map(function (res) {
              return lodash__WEBPACK_IMPORTED_MODULE_4__["omit"](res, 'form_title');
            });
          });
          console.log("Group 1 \n", grouped);

          if (grouped[this.surveyTitleName] == undefined) {
            this.numberOfSurveyResponse = 0;
          } else {
            this.numberOfSurveyResponse = grouped[this.surveyTitleName].length;
          }

          console.log("Number of Responses ", this.numberOfSurveyResponse);
          console.log("Sorted array", grouped[this.surveyTitleName]);
          this.dataForTable = grouped[this.surveyTitleName];
          var submission = lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"](lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](grouped[this.surveyTitleName], 'submitdate'), function (dlist) {
            return dlist.map(function (res) {
              return lodash__WEBPACK_IMPORTED_MODULE_4__["omit"](res, 'submitdate');
            });
          });
          console.log("Submission Dates", submission); // console.log(this.pipe.transform(submission, 'mediumDate'));

          var result = this.listOfUserResponse.map(function (a) {
            return _this21.pipe.transform(a.submitdate);
          }, 'mediumDate');
          console.log("Result => ", result);
          var newArrresult = null;

          if (grouped[this.surveyTitleName] != undefined) {
            newArrresult = grouped[this.surveyTitleName].map(function (a) {
              return _this21.pipe.transform(a.submitdate);
            }, 'mediumDate');
            console.log("newArrresult => ", newArrresult);
          } //Sorting newArrresult


          var res = Array.from(new Set(newArrresult));

          for (var i = 0; i < res.length; i++) {
            this.sortedNewArr.push(res);
          }

          console.log("Sorted New Arr by sorting", this.sortedNewArr);
          var tempLabelData = [];
          this.sortedNewArr.forEach(function (item, index) {
            tempLabelData.push(item[index]);
            console.log(tempLabelData);

            _this21.labelData.push(tempLabelData);

            tempLabelData = [];
          });
          var results = lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"](lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](newArrresult));

          if (results[this.sortedNewArr[0]] != undefined) {
            console.log("new sorted new Arr", results[this.sortedNewArr[0]].length);
            this.newArrsubmission.push(results[this.sortedNewArr[0]].length);
          } // var newArrRes = [];
          // let newArr = grouped[this.surveyTitleName];
          // console.log("****", newArr);
          // for(let i=0; i<newArr.length; i++){
          //   console.log("Inside New Arr", newArr[i].submitdate);
          //   let res  = newArr.map(a => this.pipe.transform(a.submitdate),'mediumDate');
          //   newArrRes.push(res);
          // }
          // console.log("Formated date from new Arr", newArrRes);
          // let newArrsubmission = _.mapValues(_.groupBy(newArrRes));
          // console.log("new sorted new Arr", newArrsubmission);
          // for(let i=0; i<2; i++){
          //   console.log("new sorted new Arr", newArrsubmission.length);
          // }


          console.log("***********");

          if (grouped[this.labelSurvey] == undefined) {
            this.labelData.forEach(function (item) {
              return _this21.chartData.push(0);
            });
          } else {
            this.labelData.forEach(function (item) {
              return _this21.chartData.push(0);
            });
            this.labelData.forEach(function (item, index) {
              return grouped[_this21.labelSurvey].forEach(function (element) {
                var checkDate = _this21.pipe.transform(element["submitdate"], 'mediumDate');

                if (item[0] === checkDate) {
                  _this21.chartData[index] += 1;
                }
              });
            });
          }

          console.log("LABEL DATA: ", this.labelData);
          console.log("CHART DATA: ", this.chartData);
          console.log("***********"); // var map = {}; 
          //   this.listOfUserResponse.forEach(function(val){
          //   map[val.submitdate] = map[val.submitdate] || {};
          //   map[val.submitdate][val.type] = map[val.submitdate][val.form_title] || 0;
          //   map[val.submitdate][val.form_title]++;
          // });
          // console.log("Map", map);
          //Sorting for Table
        }
      }, {
        key: "getCreationDate",
        value: function getCreationDate() {
          var _this22 = this;

          console.log("Hello");
          this.listOfSurvey.forEach(function (item, index) {
            console.log(item);
            if (item.form_title == _this22.surveyTitleName) _this22.creationDate = item.created_date;
          }); // for(var item in this.listOfSurvey){
          //   if(this.listOfSurvey[item].form_title == this.surveyTitleName)
          //     this.creationDate = this.listOfSurvey[item].created_date;
          //   }
        }
      }, {
        key: "navigateBack",
        value: function navigateBack() {
          this.loc.back();
        } // events
        // public chartClicked(e: any): void {
        //   console.log(e);
        // }
        // public chartHovered(e: any): void {
        //   console.log(e);
        // }
        // public randomize(): void {
        //   let data = [
        //     Math.round(Math.random() * 100),
        //     Math.round(Math.random() * 100),
        //     Math.round(Math.random() * 100),
        //     Math.random() * 100,
        //     Math.round(Math.random() * 100),
        //     Math.random() * 100,
        //     Math.round(Math.random() * 100)
        //   ];
        //   let clone = JSON.parse(JSON.stringify(this.pieChartData));
        //   clone[0].data = data;
        //   this.pieChartData = clone;
        // }
        //////////////////////////////////////////////////////////////////////////////////////////
        //   public barChartOptions:any = {
        //     scaleShowVerticalLines: false,
        //     responsive: true
        //   };
        //   public mbarChartLabels:string[] = this.labelData;
        //   public barChartType:string = 'bar';
        //   public barChartLegend:boolean = true;
        //   public barChartColors:Array<any> = [
        //   {
        //     backgroundColor: 'rgba(105,159,177,1)',
        //     borderColor: 'rgba(105,159,177,1)',
        //     pointBackgroundColor: 'rgba(105,159,177,1)',
        //     pointBorderColor: '#fafafa',
        //     pointHoverBackgroundColor: '#fafafa',
        //     pointHoverBorderColor: 'rgba(105,159,177)'
        //   },
        //   { 
        //     backgroundColor: 'rgba(77,20,96,0.8)',
        //     borderColor: 'rgba(77,20,96,1)',
        //     pointBackgroundColor: 'rgba(77,20,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,20,96,1)'
        //   }
        // ];
        //   public barChartData:any[] = [
        //     {data: this.chartData, label: this.labelSurvey}
        //   ];
        //   // events
        //   public chartClicked(e:any):void {
        //     console.log(e);
        //   }
        //   public chartHovered(e:any):void {
        //     console.log(e);
        //   }
        //   public randomize():void {
        //     let data = [
        //       Math.round(Math.random() * 100),
        //       Math.round(Math.random() * 100),
        //       Math.round(Math.random() * 100),
        //       (Math.random() * 100),
        //       Math.round(Math.random() * 100),
        //       (Math.random() * 100),
        //       Math.round(Math.random() * 100)];
        //     let clone = JSON.parse(JSON.stringify(this.barChartData));
        //     clone[0].data = data;
        //     this.barChartData = clone;
        //   }
        ///////////////////////////////////////////////////////////////////////////////
        // barChartOptions: ChartOptions = {
        //   responsive: true,
        // };
        // barChartLabels: Label[] = this.sortedNewArr;
        // barChartType: ChartType = 'bar';
        // barChartLegend = true;
        // barChartPlugins = [];
        // barChartData: ChartDataSets[] = [
        //   { data: this.newArrsubmission, label: 'Best Fruits' }
        // ];

      }, {
        key: "displaychart",
        value: function displaychart() {
          this.displayChart = !this.displayChart;
        }
      }, {
        key: "exportexcel",
        value: function exportexcel() {
          /* table id is passed over here */
          var element = document.getElementById('excel-table');
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].table_to_sheet(element);
          /* generate workbook and add the worksheet */

          var wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(wb, ws, 'Sheet1');
          /* save to file */

          xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](wb, "".concat(this.surveyTitleName, ".xlsx"));
        }
      }, {
        key: "downloadPDF",
        value: function downloadPDF() {
          var DATA = this.htmlData.nativeElement; // https://stackoverflow.com/questions/55019343/how-to-generate-a-pdf-using-angular-7

          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__('p', 'pt', 'a4');
          var handleElement = {
            '#editor': function editor(element, renderer) {
              return true;
            }
          };
          doc.fromHTML(DATA.innerHTML, 15, 15, {
            'width': 200,
            'elementHandlers': handleElement
          });
          doc.save("".concat(this.surveyTitleName, ".pdf"));
        }
      }]);

      return SurveyListSubmissionDetailsComponent;
    }();

    SurveyListSubmissionDetailsComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_2__["LoginuserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('htmlData', {
      "static": false
    })], SurveyListSubmissionDetailsComponent.prototype, "htmlData", void 0);
    SurveyListSubmissionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey-list-submission-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey-list-submission-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey-list-submission-details.component.css */
      "./src/app/surveyForm/survey-list-submission-details/survey-list-submission-details.component.css"))["default"]]
    })], SurveyListSubmissionDetailsComponent);
    /***/
  },

  /***/
  "./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSurveyFormUserSurveylistDetailsUserSurveylistDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".first-block{\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n/* .home{\r\n    margin-left: 3rem;\r\n    margin-top: 1rem;\r\n    color: black;\r\n} */\r\n\r\n.back-btn{\r\n    /* text-align: right !important; */\r\n    float:right;\r\n}\r\n\r\nhr {\r\n    border-top: 2px solid lightgray;\r\n}\r\n\r\n.first{\r\n    display: inline-block;\r\n}\r\n\r\n.home {\r\n    color: black;\r\n    font-size: 24px;\r\n}\r\n\r\n.home:hover {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5Rm9ybS91c2VyLXN1cnZleWxpc3QtZGV0YWlscy91c2VyLXN1cnZleWxpc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5Rm9ybS91c2VyLXN1cnZleWxpc3QtZGV0YWlscy91c2VyLXN1cnZleWxpc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LWJsb2Nre1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC5ob21le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59ICovXHJcblxyXG4uYmFjay1idG57XHJcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyAqL1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5maXJzdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaG9tZTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: UserSurveylistDetailsComponent */

  /***/
  function srcAppSurveyFormUserSurveylistDetailsUserSurveylistDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSurveylistDetailsComponent", function () {
      return UserSurveylistDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loginuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../loginuser.service */
    "./src/app/loginuser.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserSurveylistDetailsComponent = /*#__PURE__*/function () {
      function UserSurveylistDetailsComponent(LoginuserService, loc, _router) {
        _classCallCheck(this, UserSurveylistDetailsComponent);

        this.LoginuserService = LoginuserService;
        this.loc = loc;
        this._router = _router;
        this.surveyLen = [];
        this.sorted = [];
        this.testdata = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.displayChart = false; //Chart
        // Bar Chart

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartLabels = this.testdata;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
          data: this.surveyLen,
          label: 'Number of Submissions'
        }];
      }

      _createClass(UserSurveylistDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          if (sessionStorage.getItem('role') == "admin") {
            this.LoginuserService.getUserResponseList().subscribe(function (response) {
              console.log(response);
              _this23.listOfUserResponse = response;
              _this23.surveyTitle = _this23.listOfUserResponse.map(function (a) {
                return a["form_title"];
              });

              _this23.LoginuserService.getAllSurveyList().subscribe(function (response) {
                console.log(response);
                _this23.listOfSurvey = response;
              });

              _this23.grouping();
            });
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "grouping",
        value: function grouping() {
          var grouped = lodash__WEBPACK_IMPORTED_MODULE_3__["mapValues"](lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](this.listOfUserResponse, 'form_title'), function (rlist) {
            return rlist.map(function (res) {
              return lodash__WEBPACK_IMPORTED_MODULE_3__["omit"](res, 'form_title');
            });
          });
          this.sorted = Array.from(new Set(this.surveyTitle));
          console.log("Group 1 \n", grouped);
          console.log("Survey Name", this.sorted);
          console.log("Surey Test", this.testdata); // console.log("TEsting ===>", this.sorted[0]);

          for (var item in this.sorted) {
            var x = String(this.sorted[item]);
            this.testdata.push(x);
            var xlen = grouped[x].length;
            this.surveyLen.push(xlen);
            console.log("Loop name" + x + "Length " + xlen);
            console.log("Looping", grouped[x]);
          }

          console.log("Survey Length", this.surveyLen);
        } // public pieChartLabels = this.testdata;
        // public pieChartData = this.surveyLen;
        // public pieChartType = 'pie';

      }, {
        key: "displaychart",
        value: function displaychart() {
          this.displayChart = !this.displayChart;
        }
      }, {
        key: "navigateBack",
        value: function navigateBack() {
          this.loc.back();
        }
      }]);

      return UserSurveylistDetailsComponent;
    }();

    UserSurveylistDetailsComponent.ctorParameters = function () {
      return [{
        type: _loginuser_service__WEBPACK_IMPORTED_MODULE_2__["LoginuserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    UserSurveylistDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-surveylist-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-surveylist-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-surveylist-details.component.css */
      "./src/app/surveyForm/user-surveylist-details/user-surveylist-details.component.css"))["default"]]
    })], UserSurveylistDetailsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Learn\GitProfile\Samarth_Shivananda_Hegde\9-CampaignManagementSystem\Project\capstone-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map