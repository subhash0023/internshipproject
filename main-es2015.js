(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'careerproject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 266, vars: 0, consts: [[1, "outer-1"], [1, "container", "my-4"], [1, "row"], [1, "wid-25", "mt-3"], ["src", "/assets/legacy_images/logo_w_copy@1.5x.svg", 1, "img-responsive"], [1, "navigation-bar"], ["href", "#products", 1, "text-dark", "ml-1", "mr-4"], ["href", "#solution", 1, "text-dark", "mx-4"], ["href", "#pricing", 1, "text-dark", "ml-4", "mr-5"], [1, "navigation-bar", "wid-35"], ["href", "#", 1, "dark-outline-btn"], ["href", "#", 1, "dark-color-btn"], [1, "container-fluid", "p-0"], [1, "col-md-6", "col-sm-12", 2, "min-height", "300px"], ["href", "#", 1, ""], ["src", "/assets/legacy_images/ankita_careers_img.png", "height", "500px", "width", "auto"], [1, "col-md-6", "leftshift", "col-sm-12"], [1, "first-row-message"], [1, "colored-heading"], [2, "position", "relative"], [1, "custom-border-bottom", 2, "font-weight", "400"], [1, "text-dark", 2, "margin-top", "8px"], [1, "mt-5"], ["href", "#", 1, "dark-color-btn", "spaced-button"], [1, "d-flex", "flex-row", "my-5", "mx-5"], [1, "container", "pl-5", "img-backg"], ["src", "/assets/legacy_images/hp_techcrunch_logo@1.5x.svg", "height", "25px", "width", "auto"], [1, "container", "img-backg"], ["src", "/assets/legacy_images/hp_cnbc_logo@1.5x.svg", "height", "25px", "width", "auto"], [1, "container-fluid", "img-backg"], ["src", "/assets/legacy_images/hp_yourstore_logo@1.5x.svg", "height", "25px", "width", "auto"], ["src", "/assets/legacy_images/hp_pymnts_logo@1.5x.svg", "height", "25px", "width", "auto"], ["src", "/assets/legacy_images/hp_medici_logo@1.5x.svg", "height", "25px", "width", "auto"], [1, "container", "pr-5", "img-backg"], ["src", "/assets/legacy_images/hp_tet_logo@1.5x.svg", "height", "25px", "width", "auto"], [1, "container", "d-flex", "flex-row", "mt-5", "mx-5", "px-5"], ["href", "#"], ["src", "/assets/legacy_images/card_wave_bg@1.5x.svg", "height", "990px", "width", "1250px", 1, "img-fluid"], [1, "col-lg-8"], [1, "text-muted", "mb-0"], [1, "text-muted", "my-0"], [1, "text-muted", "mt-0", "mb-4"], [1, "pl-0", "ml-3", "mt-3"], [1, "small", "text-muted", "mb-1"], [1, "small", "text-muted", "mb-4"], [1, "pl-0", "ml-3", "my-3"], [1, "container", "navigation-barsw", "col-lg-4", "pl-5"], [1, "list-group", "w-ul", "pl-5"], [1, "small", "w-bold-purple"], [1, "small", "w-bold"], [1, "text-muted", 2, "font-weight", "400"], [1, "small", "w-bold", "mt-2"], [1, "small", "text-muted"], ["action", "#!", 1, "text-center", "border", "rounded", "border-light", "p-5", "mx-5", "my-5", "rounded"], [1, "h2", "mb-4"], ["type", "text", "id", "defaultRegisterFormFirstName", "placeholder", "Enter full name", 1, "form-control", "mb-4"], [1, "form-row", "mb-4"], [1, "col"], ["type", "email", "id", "defaultRegisterFormEmail", "placeholder", "Enter E-mail", 1, "form-control"], ["type", "text", "id", "defaultRegisterPhonePassword", "placeholder", "Phone number", "aria-describedby", "defaultRegisterFormPhoneHelpBlock", 1, "form-control"], ["type", "text", "id", "defaultRegisterFormEmail", "placeholder", "Current City", 1, "form-control"], ["type", "url", "id", "defaultRegisterPhonePassword", "placeholder", "Website/ Portfolio/ Behance/ Github(optional)", 1, "form-control"], ["type", "text", "id", "defaultRegisterFormEmail", "placeholder", "Resume", 1, "form-control"], ["type", "url", "id", "defaultRegisterPhonePassword", "placeholder", "Cover Letter", 1, "form-control"], [1, "mb-4", "text-center"], ["type", "submit", 1, "dark-color-btn"], ["id", "defaultRegisterFormPhoneHelpBlock", 1, "form-text", "text-muted", "mb-4"], [1, "container", "my-5"], [1, "footer-w-30"], ["src", "/assets/legacy_images/logo_w_copy@1.5x.svg", "width", "100px"], [1, "text-dark"], [1, "footer-w-15"], [1, "footer-ul"], [1, "footer-li"], ["href", "#", 1, "footer-link"], [1, "footer-w-25"], ["href", "mailto:letstalk@open.money", 1, "mail-link"], [1, "footer-list-icon"], ["src", "/assets/legacy_images/social_icon_facebook_colour@1.5x.svg"], ["src", "/assets/legacy_images/social_icon_twitter_colour@1.5x.svg"], ["src", "/assets/legacy_images/social_icon_linkedin_colour@1.5x.svg"], ["src", "/assets/legacy_images/social_icon_insta_colour@1.5x.svg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "GetStarted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Be a part of building a revolutionary product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Open is a home to a bunch of hustlers who are building a business banking platform that is fast changing the way business bank and manage their finances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Being the world's fastest growing SME neobank, we are constantly trying to push boundaries at offering heartly Customer-Experiences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "We're home to some of the smartest & brightest 150+ minds in the fintech space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "We're a Series B funded startups backed by leading international funds like Tiger Global, Speedinvest, Beenext, Angelist, Recruit, Tanglin Venture Partners, 3one4 Capital, Unicorn India Ventures to name a few.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "We're a tight-knit of creators nand amkers who are shaking up the way business banking rollsfor over 350000 businesse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " What you'll be doing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Delivering sales targets for your city/ category in the given timeframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Delivring processe as per timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Communication of company policy and vision to prospective buyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Developing and managing deep trade relations with the market Achieve sales targets through in person makes visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Engage buyers and work with business owners to help them grow along with the platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Manage buyer communication and intervene to resolve disputes as and when required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Work closely with our cross functional operatoions teams to streamline processand assits in intelligently scaling a vibrant business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " What you'll bring along:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Should be confident & active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Should be Graduate/BTech/MBA with a strong sales & business development skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Should have good knowledge about SAAS Sales,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Should have good convincing ability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Why work at Open?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "You'll be part of the early tribe that is changing the way business banking rolls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Every atom of your work will impact the way millions of businesses are run");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "You'll work with some of the brightest minds who'll celebrate your quirks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "You'll find growth and fun to be two-way streets - how you thrive and the way you jive,in turn drives Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "About the Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "LOCATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Kerala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "DEPARTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "1+years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "SALARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "1.3-3.5 lakhs per Annum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Submit Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "small", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Thank You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Open Financial Technologies Pvt. Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Tower 2, 3rd floor, RGA Tech Park, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Sarjapur Road, Bengaluru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Karnataka - 560035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Contact uUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Open Business Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Open Business Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Let's Talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Connect with our experts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "letstalk@open.money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navigation-bar[_ngcontent-%COMP%]{\r\n\r\n}\r\n.navigation-barsw[_ngcontent-%COMP%]{\r\n\r\n}\r\n.navigation-barsw[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n.navigation-barsw[_ngcontent-%COMP%]   .w-ul[_ngcontent-%COMP%]   .w-bold-purple[_ngcontent-%COMP%]{\r\n  color: #639;\r\n  font-weight: bolder;\r\n  font-size: small;\r\n}\r\n.navigation-barsw[_ngcontent-%COMP%]   .w-ul[_ngcontent-%COMP%]   .w-bold[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n\r\n}\r\n.navigation-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\nlist-style: none;\r\n}\r\n.navigation-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  margin: 0 10px;\r\n}\r\n\r\n.img-back[_ngcontent-%COMP%]:after{\r\n  top: -100px;\r\n  right: 0;\r\n  position: absolute;\r\n  content: '';\r\n  width: 100vw;\r\n  background-repeat: no-repeat;\r\n  background-position: right top;\r\n  height: 100vh;\r\n  background: url('/assets/legacy_images/hero_circle.svg');\r\n\r\n}\r\n\r\n.dark-color-btn[_ngcontent-%COMP%]{\r\n  border-radius: 24px;\r\n  box-sizing: border-box;\r\n  min-height: 38px;\r\n  min-width: 140px;\r\n  padding: 7px 20px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 2.5;\r\n  border: none;\r\n  cursor: pointer;\r\n  background: linear-gradient(90deg,#9f62c9 0,#639 100%);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,.2);\r\n  color: #fff;\r\n}\r\n.dark-outline-btn[_ngcontent-%COMP%]{\r\n  padding: 4px 40px 7px 40px;\r\n  border-radius: 24px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  box-sizing: border-box;\r\n\r\n  border: 2px solid #639;\r\n  cursor: pointer;\r\n  color: #639;\r\n  background: 0 0;\r\n}\r\n@media(max-width: 768px){\r\n  .nav-center-element[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.first-row-message[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 70px;\r\n  transform: translateY(-50%);\r\n  }\r\n.custom-border-bottom[_ngcontent-%COMP%]:   before[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100px;\r\n  height: 6px;\r\n  border-radius: 4px;\r\n  background: linear-gradient(90deg,#9f62c9 0,#639 100%);\r\n  \r\n  bottom: -25px;\r\n  left: 0;\r\n\r\n}\r\n.spaced-button[_ngcontent-%COMP%] {\r\n  padding: 12px 70px;\r\n}\r\n.colored-heading[_ngcontent-%COMP%]{\r\n  color: #639;\r\n}\r\n\r\n.footer-ul[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.footer-ul[_ngcontent-%COMP%]   .footer-li[_ngcontent-%COMP%]{\r\n  margin: 10px 0;\r\n}\r\n.footer-ul[_ngcontent-%COMP%]   .footer-li[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%], .mail-link[_ngcontent-%COMP%]{\r\n  color: #3e3e3e;\r\n  font-size: 13px;\r\n  text-decoration: none;\r\n}\r\n.footer-ul[_ngcontent-%COMP%]   .footer-li[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover, .mail-link[_ngcontent-%COMP%]:hover{\r\n  text-decoration: none;\r\n}\r\n.mail-link[_ngcontent-%COMP%]{\r\n  font-size: inherit!important;\r\n}\r\n.footer-list-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.footer-list-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin: 5px;\r\n}\r\n.footer-list-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n  height: 30px;\r\n  -webkit-filter: grayscale(100%); \r\n  filter: grayscale(100%);\r\nopacity: 0.25;\r\n}\r\n.footer-w-30[_ngcontent-%COMP%]{\r\n  width:30%;\r\n}\r\n.footer-w-15[_ngcontent-%COMP%]{\r\nwidth: 15%;\r\n}\r\n.footer-w-25[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n}\r\n@media(max-width: 768px){\r\n  .footer-w-30[_ngcontent-%COMP%], .footer-w-15[_ngcontent-%COMP%], .footer-w-25[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n.svgCornerBR[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;  \r\n  transform: rotate(270deg);\r\n}\r\n.footer1-w-25[_ngcontent-%COMP%]{\r\n  width:25%;\r\n}\r\n.footer2-w-40[_ngcontent-%COMP%]{\r\nwidth: 40%;\r\n}\r\n.footer3-w-35[_ngcontent-%COMP%]{\r\n  width: 35%;\r\n}\r\n@media(max-width: 768px){\r\n  .footer1-w-25[_ngcontent-%COMP%], .footer2-w-40[_ngcontent-%COMP%], .footer3-w-35[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    \r\n  }\r\n}\r\n.dark-color-btn-submit[_ngcontent-%COMP%]{\r\n  border-radius: 24px;\r\n  box-sizing: border-box;\r\n  min-height: 2px;\r\n  min-width: 140px;\r\n  padding: 7px 20px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 2.5;\r\n  border: none;\r\n  cursor: pointer;\r\n  background: linear-gradient(90deg,#9f62c9 0,#639 100%);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,.2);\r\n  color: #fff;\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n .first-row-message[_ngcontent-%COMP%]{\r\n   left: 250px;\r\n }\r\n}\r\n@media(max-width: 768px){\r\n  .first-row-message[_ngcontent-%COMP%]{\r\n    position: relative;\r\n  }\r\n\r\n}\r\n.outer-1[_ngcontent-%COMP%]{\r\n  border: 3px solid black;\r\n\r\n  width: 100%;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBOztHQUVHO0FBQ0g7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHdEQUF3RDs7QUFFMUQ7QUFDQTs7R0FFRztBQUNIO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUVmLHNEQUFzRDtFQUN0RCxxQ0FBcUM7RUFDckMsV0FBVztBQUNiO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCOztFQUV0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCO0FBR0Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBRWxCLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLE9BQU87O0FBRVQ7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCLEVBQUUscUJBQXFCO0VBQ3RELHVCQUF1QjtBQUN6QixhQUFhO0FBQ2I7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNGO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFDdUIsU0FBUyxFQUNMLDBCQUEwQjtFQUM3RCx5QkFBeUI7QUFDM0I7QUFHQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjtBQUNGO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBRWYsc0RBQXNEO0VBQ3RELHFDQUFxQztFQUNyQyxXQUFXOztBQUViO0FBQ0EsNkNBQTZDO0FBRTdDLG1CQUFtQjtBQUVuQixtQkFBbUI7QUFDbkI7Q0FDQztHQUNFLFdBQVc7Q0FDYjtBQUNEO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUVBO0VBQ0UsdUJBQXVCOztFQUV2QixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5uYXZpZ2F0aW9uLWJhcntcclxuXHJcbn1cclxuLm5hdmlnYXRpb24tYmFyc3d7XHJcblxyXG59XHJcbi5uYXZpZ2F0aW9uLWJhcnN3IHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm5hdmlnYXRpb24tYmFyc3cgLnctdWwgLnctYm9sZC1wdXJwbGV7XHJcbiAgY29sb3I6ICM2Mzk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5uYXZpZ2F0aW9uLWJhcnN3IC53LXVsIC53LWJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxufVxyXG4ubmF2aWdhdGlvbi1iYXIgdWwge1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5uYXZpZ2F0aW9uLWJhciB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLyogLmltZy1iYWNre1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly91YXQtc3RhdGljLmJhbmtvcGVuLmNvL2Fzc2V0cy9pbWFnZXMvaGVyb19jaXJjbGUuc3ZnJyk7XHJcbn0gKi9cclxuLmltZy1iYWNrOmFmdGVye1xyXG4gIHRvcDogLTEwMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvbGVnYWN5X2ltYWdlcy9oZXJvX2NpcmNsZS5zdmcnKTtcclxuXHJcbn1cclxuLyogLmltZy1iYWNrZ3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vdWF0LXN0YXRpYy5iYW5rb3Blbi5jby9hc3NldHMvaW1hZ2VzL2hwX3RlY2hjcnVuY2hfbG9nb0AxLjV4LnN2ZycpO1xyXG59ICovXHJcbi5kYXJrLWNvbG9yLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLWhlaWdodDogMzhweDtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjOWY2MmM5KSx0bygjNjM5KSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCM5ZjYyYzkgMCwjNjM5IDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLDAsMCwuMik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kYXJrLW91dGxpbmUtYnRue1xyXG4gIHBhZGRpbmc6IDRweCA0MHB4IDdweCA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzYzOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM2Mzk7XHJcbiAgYmFja2dyb3VuZDogMCAwO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLm5hdi1jZW50ZXItZWxlbWVudHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBmaXJzdCByb3cgKi9cclxuLmZpcnN0LXJvdy1tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNzBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG5cclxuXHJcbi5jdXN0b20tYm9yZGVyLWJvdHRvbTogYmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oIzlmNjJjOSksdG8oIzYzOSkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjOWY2MmM5IDAsIzYzOSAxMDAlKTtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjNjM5OyAqL1xyXG4gIGJvdHRvbTogLTI1cHg7XHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuXHJcbi5zcGFjZWQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMnB4IDcwcHg7XHJcbn1cclxuLmNvbG9yZWQtaGVhZGluZ3tcclxuICBjb2xvcjogIzYzOTtcclxufVxyXG5cclxuLyogLS0tLWZvb3RlciBpY29uICovXHJcbi5mb290ZXItdWx7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZm9vdGVyLXVsIC5mb290ZXItbGl7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmZvb3Rlci11bCAuZm9vdGVyLWxpIC5mb290ZXItbGluaywgLm1haWwtbGlua3tcclxuICBjb2xvcjogIzNlM2UzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLXVsIC5mb290ZXItbGkgLmZvb3Rlci1saW5rOmhvdmVyLCAubWFpbC1saW5rOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1haWwtbGlua3tcclxuICBmb250LXNpemU6IGluaGVyaXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpc3QtaWNvbiB1bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb290ZXItbGlzdC1pY29uIHVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uZm9vdGVyLWxpc3QtaWNvbiBpbWd7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxub3BhY2l0eTogMC4yNTtcclxufVxyXG5cclxuLmZvb3Rlci13LTMwe1xyXG4gIHdpZHRoOjMwJTtcclxufVxyXG4uZm9vdGVyLXctMTV7XHJcbndpZHRoOiAxNSU7XHJcbn1cclxuLmZvb3Rlci13LTI1e1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAuZm9vdGVyLXctMzAsLmZvb3Rlci13LTE1LCAuZm9vdGVyLXctMjV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc3ZnQ29ybmVyQlIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyMS13LTI1e1xyXG4gIHdpZHRoOjI1JTtcclxufVxyXG4uZm9vdGVyMi13LTQwe1xyXG53aWR0aDogNDAlO1xyXG59XHJcbi5mb290ZXIzLXctMzV7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5mb290ZXIxLXctMjUsIC5mb290ZXIyLXctNDAsIC5mb290ZXIzLXctMzV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICB9XHJcbn1cclxuXHJcbi5kYXJrLWNvbG9yLWJ0bi1zdWJtaXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1pbi1oZWlnaHQ6IDJweDtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjOWY2MmM5KSx0bygjNjM5KSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCM5ZjYyYzkgMCwjNjM5IDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLDAsMCwuMik7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcbi8qIC5idXR0b24tc2l6ZSgxMHB4OyAxMHB4OyAxZW07IDEuNWVtOyAwKTsgKi9cclxuXHJcbi8qIC0tLS1oZWFkZXItLS0tICovXHJcblxyXG4vKiAtLS1idXNpbmVzcy0tLSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gLmZpcnN0LXJvdy1tZXNzYWdle1xyXG4gICBsZWZ0OiAyNTBweDtcclxuIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLmZpcnN0LXJvdy1tZXNzYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5vdXRlci0xe1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\career\careerproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map