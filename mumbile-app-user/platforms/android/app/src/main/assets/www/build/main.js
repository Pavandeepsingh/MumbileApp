webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, loginProvider, http) {
        //  this.loginProvider.getUsers().subscribe(data => {
        //       this.users = data;
        //       console.log(this.users);
        //       console.log(data);
        //     })
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.http = http;
        this.http.get('https://jsonplaceholder.typicode.com/users', {}, {})
            .then(function (data) {
            console.log(data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    LoginPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Sign In</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/logo.png" class="logo">\n    <div padding>\n        <ion-list class="form">\n            <ion-item class="bg-light">\n                <ion-label>Username</ion-label>\n                <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-label>Password</ion-label>\n                <ion-input type="password" value="*******" text-right></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="homePage()">LOGIN</button>\n    </div>\n\n    <ion-row padding-left padding-right>\n        <ion-col (click)="signupPage()"><small>New user <strong class="text-green">Sign up</strong></small></ion-col>\n        <ion-col text-right><small>Forgot <strong class="text-green">Password?</strong></small></ion-col>\n    </ion-row>\n    <p padding text-center class="option-login"><span>OR CONTINUE WITH</span></p>\n    <ion-row padding-left padding-right>\n        <ion-col><button ion-button full icon-left class="bg-blue text-white btn round shadow-blue"><ion-icon name="logo-facebook"></ion-icon>Facebook</button></ion-col>\n        <ion-col><button ion-button full icon-left class="bg-white text-dark btn round shadow-black"><ion-icon name="logo-googleplus"></ion-icon>Google</button></ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferralcodePage = (function () {
    function ReferralcodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ReferralcodePage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ReferralcodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReferralcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referralcode',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/referralcode/referralcode.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Referral Code</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding>\n    <h1 text-right>\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n    </h1>\n    <ion-card>\n        <img src="assets/imgs/menu-bg.png" />\n        <ion-card-content>\n            <div padding-top padding-right padding-left>\n                <ion-card-title class="text-green">\n                    Do you have any referral code?\n                </ion-card-title>\n                <p padding-top>\n                    Add referral code and get your <br> first cab ride free.\n                </p>\n                <ion-list class="form">\n                    <ion-item class="bg-light">\n                        <ion-input type="text" value="Add 6 digit referral code" class="text-light"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <p><strong class="text-black">I Dont\'have </strong><strong class="text-green" style="float: right;" (click)="homePage()">Continue</strong></p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/referralcode/referralcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ReferralcodePage);
    return ReferralcodePage;
}());

//# sourceMappingURL=referralcode.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choosecab_choosecab__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationPage = (function () {
    function LocationPage(navCtrl, geolocation, androidPermissions) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.getAndPlotCurrentLocation();
    };
    LocationPage.prototype.getAndPlotCurrentLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    LocationPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    LocationPage.prototype.choosecabPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choosecab_choosecab__["a" /* ChoosecabPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/location/location.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <!--        <ion-title>location</ion-title>-->\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div #map id="map" class="mymap"></div>\n    <ion-card class="shadow-black">\n        <ion-card-content>\n            <div class="shadow-black border-radius">\n                <ion-row>\n                    <ion-col class="location-icon">\n                        <strong class="bg-green"></strong>\n                    </ion-col>\n                    <ion-col class="pad-0">\n                        <ion-item class="bg-white border-bottom">\n                            <!-- <ion-label text-right>From</ion-label> -->\n                            <ion-input type="text" class="" placeholder="location from"></ion-input>\n                            <ion-icon name="md-locate" class="text-black"></ion-icon>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="location-icon">\n                        <strong class="bg-yellow"></strong>\n                    </ion-col>\n                    <ion-col class="pad-0">\n                        <ion-item class="bg-white">\n                            <!--  <ion-label text-right>To</ion-label> -->\n                            <ion-input type="text" class="" placeholder="location to"></ion-input>\n                            <ion-icon name="md-locate" class="text-black"></ion-icon>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class="past-location" padding-top>\n                <ion-list>\n                    <ion-item class="text-light">\n                        <p>\n                            <ion-icon name="time" padding-right></ion-icon>\n                            James Avenue, Nj\n                        </p>\n                    </ion-item>\n                    <ion-item class="text-light">\n                        <p>\n                            <ion-icon name="time" padding-right></ion-icon>\n                            James Avenue, Nj\n                        </p>\n                    </ion-item>\n                    <ion-item class="text-light">\n                        <p>\n                            <ion-icon name="time" padding-right></ion-icon>\n                            James Avenue, Nj\n                        </p>\n                    </ion-item>\n                </ion-list>\n            </div>\n			<button ion-button full class="bg-green text-white btn round shadow-green" (click)="choosecabPage()">Continue</button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/location/location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosecabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChoosecabPage = (function () {
    function ChoosecabPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChoosecabPage.prototype.schedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
    };
    ChoosecabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choosecab',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/choosecab/choosecab.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img">\n    <div class="drop">\n        <span class="text-black">Symmit\n                  <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="pickup">\n        <span class="text-black">Newark\n         <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="card-box">\n        <ion-card class="text-black">\n            <ion-card-header>\n\n                <small text-left class="mr-a"> \n                    <ion-icon padding-right name="md-card" class="text-green"></ion-icon>\n                   Cash\n                </small>\n                <span text-center class="mx-a">Choose Cab Type</span>\n                <small text-right class="ml-a">\n                     <ion-icon padding-right name="md-person-add" class=text-green></ion-icon>\n                    1\n                </small>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="cab-scroll bg-white">\n                    <div class="cab-container">\n                        <div class="cab-type">\n                            <div class="img-box">\n                                <img src="assets/imgs/car-1.png">\n                                <ion-badge item-end class="bg-green">2 mins</ion-badge>\n                            </div>\n                            <h4 class="text-black ">GoShare</h4>\n                            <small class="text-light ">$45 - $50</small>\n                        </div>\n                        <div class="cab-type">\n                            <div class="img-box active">\n                                <img src="assets/imgs/car-1.png">\n                                <ion-badge item-end class="bg-green">2 mins</ion-badge>\n                            </div>\n                            <h4 class="text-black ">GoMeOnly</h4>\n                            <small class="text-light ">$45 - $50</small>\n                        </div>\n                        <div class="cab-type ">\n                            <div class="img-box">\n                                <img src="assets/imgs/car-1.png">\n                                <ion-badge item-end class="bg-green">2 mins</ion-badge>\n                            </div>\n                            <h4 class="text-black ">GoBigger</h4>\n                            <small class="text-light ">$45 - $50</small>\n                        </div>\n                        <div class="cab-type ">\n                            <div class="img-box">\n                                <img src="assets/imgs/car-1.png">\n                                <ion-badge item-end class="bg-green">2 mins</ion-badge>\n                            </div>\n                            <h4 class="text-black">GoFast</h4>\n                            <small class="text-light ">$45 - $50</small>\n                        </div>\n                        <div class="cab-type ">\n                            <div class="img-box">\n                                <img src="assets/imgs/car-1.png">\n                                <ion-badge item-end class="bg-green">2 mins</ion-badge>\n                            </div>\n                            <h4 class="text-black ">GoShare</h4>\n                            <small class="text-light ">$45 - $50</small>\n                        </div>\n                    </div>\n                </div>\n                <ion-row padding-left padding-right>\n                    <ion-col col-2>\n                        <button ion-button full class="bg-green  shadow-green full"> <ion-icon name="md-time"></ion-icon></button>\n                    </ion-col>\n                    <ion-col col-10>\n                        <button ion-button full class="bg-green shadow-green full" (click)="schedulePage()">REQUEST CAB</button>\n                    </ion-col>\n                </ion-row>\n\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/choosecab/choosecab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ChoosecabPage);
    return ChoosecabPage;
}());

//# sourceMappingURL=choosecab.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookride_bookride__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulePage = (function () {
    function SchedulePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SchedulePage.prototype.bookridePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bookride_bookride__["a" /* BookridePage */]);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/schedule/schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-img">\n    <div class="drop">\n        <span class="text-black">Symmit\n         <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="pickup">\n        <span class="text-black">Newark\n         <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="card-box">\n        <ion-card text-center class="text-black">\n            <ion-card-header text-center class="text-black">\n                Schedule Pick Up\n            </ion-card-header>\n            <ion-card-content>\n                <small class="text-light">Select Date</small>\n                <h2 padding-bottom class="fw-5">September 17,Sunday</h2>\n                <small class="text-light">Select time</small>\n                <h2 padding-bottom class="fw-5">05:00 pm</h2>\n                <ion-row>\n                    <ion-col col-6>\n                        <button ion-button full style="float: left;" class="text-green bg-white shadow-black full">CANCEL</button>\n                    </ion-col>\n                    <ion-col col-6>\n                        <button ion-button full class="shadow-green bg-green full" style="float: right;" (click)="bookridePage()">CONIFIRM</button>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ridefullinfo_ridefullinfo__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookridePage = (function () {
    function BookridePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookridePage.prototype.ridefullinfoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */]);
    };
    BookridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookride',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/bookride/bookride.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-img">\n    <div class="drop">\n        <span class="text-black">Symmit\n         <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="pickup">\n        <span class="text-black">Newark\n         <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n        </span>\n    </div>\n    <div class="card-box">\n        <ion-card class="text-black">\n            <ion-card-header>\n                <small float-left class="text-light">Driver Info</small>\n                <small float-right class="text-green">Cancel Ride</small>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="menu heading">\n                    <ion-list>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/fare.png">\n                            </ion-avatar>\n                            <h2 class="text-black">\n                                Tarun Kumar\n                                <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n                            </h2>\n                            <p class="text-black">4.7\n                                <span class="rateing">\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                </span>\n                            </p>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <ion-row padding class="car-details">\n                    <ion-col>\n                        <small class="text-light">Select Date</small>\n                        <strong class="text-black">DL1 ZA 5887</strong>\n                    </ion-col>\n                    <ion-col>\n                        <small class="text-light">Select Date</small>\n                        <strong class="text-black">DL1 ZA 5887</strong>\n                    </ion-col>\n                </ion-row>\n                <div text-center padding-left padding-right>\n                    <button ion-button full class="bg-green full" (click)="ridefullinfoPage()">CONTACT</button>\n\n                    <ion-icon name="ios-arrow-down" class="text-light" (click)="ridefullinfoPage()"></ion-icon>\n                </div>\n\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/bookride/bookride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookridePage);
    return BookridePage;
}());

//# sourceMappingURL=bookride.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidefullinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farerate_farerate__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RidefullinfoPage = (function () {
    function RidefullinfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RidefullinfoPage.prototype.fareratePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__farerate_farerate__["a" /* FareratePage */]);
    };
    RidefullinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ridefullinfo',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/ridefullinfo/ridefullinfo.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img">\n    <div class="card-box">\n        <ion-card class="text-black">\n            <ion-card-header>\n                <small float-left class="text-black">Driver Info</small>\n                <small float-right class="text-green">Cancel Ride</small>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="menu heading">\n                    <ion-list>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/fare.png">\n                            </ion-avatar>\n                            <h2 class="text-black">\n                                Tarun Kumar\n                                <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n                            </h2>\n                            <p class="text-black">4.7\n                                <span class="rateing">\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                </span>\n                            </p>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <ion-row padding class="car-details">\n                    <ion-col>\n                        <small class="text-light">Hyundai Wargon</small>\n                        <strong class="text-black">DL1 ZA 5887</strong>\n                    </ion-col>\n                    <ion-col text-right>\n                        <small class="text-light">Arriving in</small>\n                        <strong class="text-black">04 mins</strong>\n                    </ion-col>\n                </ion-row>\n                <div text-center padding-left padding-right padding-bottom>\n                    <button ion-button full class="bg-green full" (click)="fareratePage()">CONTACT</button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div class="trip-info">\n        <div class="card-box">\n            <ion-card class="text-black">\n                <ion-card-header>\n                    <small float-left class="text-black">Trip Info</small>\n                </ion-card-header>\n                <ion-card-content padding-left padding-right>\n                    <ion-row>\n                        <ion-col col-2>\n                            <div class="">\n                                <div class="active-stage">\n                                    <span class="col-1"><strong class="bg-green"></strong></span>\n                                    <span class="col-2"></span>\n                                    <span class="col-3"><strong class="bg-yellow"></strong></span>\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-10>\n                            <ion-list class="form">\n                                <ion-item class="">\n                                    <small class="text-light">From</small>\n                                    <h6 class="">Newark Ave,Journal Square,Nj</h6>\n                                </ion-item>\n                                <ion-item class="">\n                                    <small class="text-light">To</small>\n\n                                    <h6 class="text-black">Sid Ave,Journal Square,Nj</h6>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row padding-left padding-right padding-bottom class="car-details">\n                        <ion-col>\n                            <small class="text-light">Distance</small>\n                            <strong class="text-black">08 km</strong>\n                        </ion-col>\n                        <ion-col>\n                            <div text-left>\n                                <small class="text-light">Arrivial</small>\n                                <strong class="text-black">12:38 pm</strong>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n\n    <div class="payment">\n        <div class="card-box">\n            <ion-card class="text-black">\n                <ion-card-content>\n                    <ion-row class="" padding>\n                        <ion-col>\n                            <small class="text-light">Payment</small>\n                            <br>\n                            <strong class="text-black">Debit Card</strong>\n                        </ion-col>\n                        <ion-col text-right>\n                            <small class="text-black">$70.00</small>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/ridefullinfo/ridefullinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RidefullinfoPage);
    return RidefullinfoPage;
}());

//# sourceMappingURL=ridefullinfo.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FareratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FareratePage = (function () {
    function FareratePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FareratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-farerate',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/farerate/farerate.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>RECEIPT</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="bg-white recipt" text-center>\n        <h6>Fare Summery</h6>\n        <div class="outline bg-green"></div>\n\n        <h1 class="text-black">$23.00</h1>\n        <p>22 Oct, 2017, 12:30</p>\n\n\n        <ion-list>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/fare.png">\n                </ion-avatar>\n                <p class="text-black">Rate now</p>\n                <h2 class="text-black"><strong>TARUN KUMAR</strong></h2>\n            </ion-item>\n        </ion-list>\n    </div>\n    <div class="rateing" padding margin text-center>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n    </div>\n    <div padding-left padding-right margin>\n        <button ion-button full class="bg-red text-white btn round shadow-red">SUBMIT RATING</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/farerate/farerate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FareratePage);
    return FareratePage;
}());

//# sourceMappingURL=farerate.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs/Rx';
//import { HTTP } from '@ionic-native/http';
//import {Http ,Response } from '@angular/http';



//import { Observable } from 'rxjs/Observable';

var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        this.apiUrl = 'https://jsonplaceholder.typicode.com/';
        console.log('Hello LoginProvider Provider');
        // this.http.get(this.apiUrl)
        //         .do((res : Response ) => console.log(res.json()))
        //         .map((res : Response ) => res.json())
    }
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.verificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    SignupPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Sign Up</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/logo.png" class="logo">\n    <div class="active-stage" padding>\n        <ion-row text-center>\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n            <ion-col><span class=""><strong class="bg-light"></strong></span></ion-col>\n            <ion-col><span class="col-3"><strong class="bg-light"></strong></span></ion-col>\n        </ion-row>\n    </div>\n    <div>\n        <ion-row class="rows">\n            <ion-col col-3 text-center>\n                <div class="bg-light form camra mb-1">\n                    <ion-icon name="camera" class="text-light"></ion-icon>\n                </div>\n            </ion-col>\n            <ion-col col-9>\n                <ion-list class="form mb-1">\n                    <ion-item class="bg-light">\n                        <ion-label>First Name</ion-label>\n                        <ion-input type="text" value="Tarun" text-right></ion-input>\n                    </ion-item>\n                    <ion-item class="bg-light">\n                        <ion-label>Last Name</ion-label>\n                        <ion-input type="text" value="Kumar" text-right></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n\n        </ion-row>\n        <ion-list class="form">\n            <!--\n<ion-item class="bg-light">\n    <ion-label>Username</ion-label>\n    <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n</ion-item>\n-->\n            <ion-item class="bg-light">\n                <ion-label>Create Password</ion-label>\n                <ion-input type="password" value="*******" text-right></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-label>Confirm Password</ion-label>\n                <ion-input type="password" value="*******" text-right></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-label>Phone number</ion-label>\n                <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="verificationPage()">SIGN UP NOW</button>\n    </div>\n\n    <ion-row padding text-center>\n        <ion-col (click)="loginPage()">Already registered? <strong class="text-green">Sign in</strong></ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcard_addcard__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.addcardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addcard_addcard__["a" /* AddcardPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/verification/verification.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Verification</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/logo.png" class="logo">\n    <div class="active-stage" padding>\n        <ion-row text-center>\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n            <ion-col><span class=""><strong class="bg-green"></strong></span></ion-col>\n            <ion-col><span class="col-3"><strong class="bg-light"></strong></span></ion-col>\n        </ion-row>\n    </div>\n    <br>\n    <p text-center padding>Enter confirmation code<br>sent to you on your SMS!</p>\n    <div padding-top>\n        <ion-list class="form">\n            <ion-item class="bg-light">\n                <ion-input type="text" value="6543210" text-center></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="addcardPage()">NEXT</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__referralcode_referralcode__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddcardPage = (function () {
    function AddcardPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    AddcardPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AddcardPage.prototype.referralcodePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__referralcode_referralcode__["a" /* ReferralcodePage */]);
        modal.present();
    };
    AddcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcard',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/addcard/addcard.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            SIGN UP\n            <small float-right padding-right (click)="homePage()">Skip</small>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/logo.png" class="logo">\n    <div class="active-stage" padding>\n        <ion-row text-center>\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n            <ion-col><span class=""><strong class="bg-green"></strong></span></ion-col>\n            <ion-col><span class="col-3"><strong class="bg-green"></strong></span></ion-col>\n        </ion-row>\n    </div>\n    <br>\n    <div padding><img src="assets/imgs/atm_card.png" alt="atm_card">\n    </div>\n\n    <div>\n\n        <ion-list class="form mb-1">\n            <ion-item class="bg-light">\n                <ion-label>Card Number</ion-label>\n                <ion-input type="text" value="5886 1121 2254 2142" text-right></ion-input>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6 style="border-right: 0.55px solid #c8c7cc;">\n                    <ion-item class="bg-light">\n                        <ion-label>Expiry Date</ion-label>\n                        <ion-input type="text" value="12/25" text-right></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item class="bg-light">\n                        <ion-label>Expiry Date</ion-label>\n                        <ion-input type="text" value="12/25" text-right></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="referralcodePage()">ADD CARD</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/addcard/addcard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], AddcardPage);
    return AddcardPage;
}());

//# sourceMappingURL=addcard.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>PAYMENTS</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>Payment Methods</p>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/icon_cash.png">\n            </ion-avatar>\n            <h1><strong>Cash</strong></h1>\n            <p class="text-light"><small>Pay with cash While Drive Show you amount</small></p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/icon_card.png">\n            </ion-avatar>\n            <h1><strong>Cards</strong></h1>\n            <p class="text-light"><small>Add Credit or Card and pay while booking cab.</small></p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/icon-paytm.png">\n            </ion-avatar>\n            <h1><strong>PayTm</strong></h1>\n            <p class="text-light"><small>Pay directly from your PayTm Wallet.</small></p>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/help/help.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>HELP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>choose your issue</p>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Trips and fare</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue regarding your trip and fare</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Payment</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>problim while paying fare or related issue</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>App Usability</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue while using our App</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Account</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>your account info can\'t change details or change Password .</small>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="top-side">\n        <img src="assets/imgs/menu-bg.png">\n        <div class="icon-box">\n            <ion-icon name="md-create" class="bg-green text-white icon"></ion-icon>\n        </div>\n    </div>\n\n    <div class="form" padding-right padding-left padding-top>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Fast Name</ion-label>\n                <ion-input type="text" value="Sumit" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Last Name</ion-label>\n                <ion-input type="text" value="Kumar" readonly></ion-input>\n            </ion-item>\n            <div class="d-flex">\n                <ion-item>\n                    <ion-label floating>Contact Number</ion-label>\n                    <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n                </ion-item>\n                <div class="checkmark text-right">\n                    <ion-icon name="ios-checkmark-circle" class="text-green"></ion-icon>\n                </div>\n            </div>\n            <div class="d-flex">\n                <ion-item>\n                    <ion-label floating>Email Address</ion-label>\n                    <ion-input type="text" value="cabber@email.com" readonly></ion-input>\n                </ion-item>\n                <div class="checkmark text-right">\n                    <ion-icon name="ios-close-circle" class="text-red"></ion-icon>\n                </div>\n            </div>\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="text" value="* * * * * *" readonly></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MytripsPage = (function () {
    function MytripsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab = "past";
    }
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/mytrips/mytrips.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>MY TRIPS</ion-title>\n    </ion-navbar>\n    <div class="bg-green">\n        <ion-segment [(ngModel)]="tab" padding-left padding-right>\n            <ion-segment-button value="past" class="text-white">\n                PAST\n            </ion-segment-button>\n            <ion-segment-button value="upcoming" class="text-white">\n                UPCOMING\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="tab">\n        <ion-list *ngSwitchCase="\'past\'">\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 8:21 am <span style="float:right;">$85 <span class="text-light">-</span> $95 </span>\n                    </p>\n                    <p class="text-light">Suzuki Swift Dezire<span style="float:right;">Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 2:45 pm <span style="float:right;">$65.00</span>\n                    </p>\n                    <p class="text-light">Hyundai xcent<span style="float:right;">Credit Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 2:45 pm <span style="float:right;">$65.00</span>\n                    </p>\n                    <p class="text-light">Hyundai xcent<span style="float:right;">Credit Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'upcoming\'">\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 2:45 pm <span style="float:right;">$65.00</span>\n                    </p>\n                    <p class="text-light">Hyundai xcent<span style="float:right;">Credit Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 8:21 am <span style="float:right;">$85 <span class="text-light">-</span> $95 </span>\n                    </p>\n                    <p class="text-light">Suzuki Swift Dezire<span style="float:right;">Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <div class="img-box">\n                    <img src="assets/imgs/map.png" />\n                </div>\n                <ion-card-content>\n                    <p class="text-black">Today 8:21 am <span style="float:right;">$85 <span class="text-light">-</span> $95 </span>\n                    </p>\n                    <p class="text-light">Suzuki Swift Dezire<span style="float:right;">Cash <span class="text-black">Paid</span></span>\n                    </p>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/mytrips/mytrips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReferPage = (function () {
    function ReferPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refer',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/refer/refer.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <img src="assets/imgs/menu-bg.png">\n    <div padding-left padding-right>\n        <ion-card class="bg-green shadow-green">\n            <ion-card-content text-center>\n                <p class="text-white">Your Referral Code</p>\n                <h6 class="text-white">532461</h6>\n            </ion-card-content>\n        </ion-card>\n        <div padding-left padding-right padding-top>\n            <h4 class="text-green">Refer and earn</h4>\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n        </div>\n        <ion-row>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/fb.png">\n            </ion-col>\n            <ion-col col-3 text-center padding padding>\n                <img src="assets/imgs/wpp.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/tw.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/more.png">\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/refer/refer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ReferPage);
    return ReferPage;
}());

//# sourceMappingURL=refer.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_verification_verification__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addcard_addcard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_referralcode_referralcode__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_location_location__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_choosecab_choosecab__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_locading_locading__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bookride_bookride__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ridefullinfo_ridefullinfo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_farerate_farerate__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mytrips_mytrips__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_refer_refer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_android_permissions__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_referralcode_referralcode__["a" /* ReferralcodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_choosecab_choosecab__["a" /* ChoosecabPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_locading_locading__["a" /* LocadingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bookride_bookride__["a" /* BookridePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_farerate_farerate__["a" /* FareratePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addcard_addcard__["a" /* AddcardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_referralcode_referralcode__["a" /* ReferralcodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_choosecab_choosecab__["a" /* ChoosecabPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_locading_locading__["a" /* LocadingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bookride_bookride__["a" /* BookridePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_farerate_farerate__["a" /* FareratePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addcard_addcard__["a" /* AddcardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_http__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_referralcode_referralcode__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mytrips_mytrips__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_refer_refer__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { SplashPage } from '../pages/splash/splash';




//import { SignupPage } from '../pages/signup/signup';
//import { VerificationPage } from '../pages/verification/verification';
//import { AddcardPage } from '../pages/addcard/addcard';

//import { LocationPage } from '../pages/location/location';
//import { ChoosecabPage } from '../pages/choosecab/choosecab';
//import { SchedulePage } from '../pages/schedule/schedule';
//import { LocadingPage } from '../pages/locading/locading';
//import { BookridePage } from '../pages/bookride/bookride';
//import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
//import { FareratePage } from '../pages/farerate/farerate';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.mytripsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_mytrips_mytrips__["a" /* MytripsPage */]);
    };
    MyApp.prototype.settingsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.referPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_refer_refer__["a" /* ReferPage */]);
    };
    MyApp.prototype.loginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.profilePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.referralcodePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_referralcode_referralcode__["a" /* ReferralcodePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <div class="menu heading">\n            <ion-list>\n                <ion-item menuClose (click)="profilePage()">\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile_pix.png">\n                    </ion-avatar>\n                    <h2 class="text-white"><strong>Tarun Kumar</strong></h2>\n                    <p class="text-white">View Profile</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </ion-header>\n\n    <ion-content class="menu" padding>\n        <ion-list>\n            <ion-item menuClose (click)="homePage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-navigate" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>Home</h2>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item menuClose (click)="mytripsPage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-car" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>My Trips</h2>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item menuClose (click)="settingsPage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-card" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>Payment</h2>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item menuClose (click)="helpPage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-alert" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>Help</h2>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item menuClose (click)="referPage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-share" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>Refer and Earn</h2>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item menuClose (click)="loginPage()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-power" class="text-green"></ion-icon>\n                </ion-avatar>\n                <h2>Logout</h2>\n            </ion-item>\n        </ion-list>\n        <!--\n<ion-list>\n    <ion-item menuClose (click)="referralcodePage()">\n        <ion-avatar item-start>\n        </ion-avatar>\n        <h2>Referral Code</h2>\n    </ion-item>\n</ion-list>\n-->\n    </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashPage = (function () {
    function SplashPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/splash/splash.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Splash</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Ionic Menu Starter</h3>\n\n    <p>\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/splash/splash.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocadingPage = (function () {
    function LocadingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LocadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locading',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/locading/locading.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Locadinge</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Ionic Menu Starter</h3>\n\n    <p>\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/locading/locading.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LocadingPage);
    return LocadingPage;
}());

//# sourceMappingURL=locading.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        /*
        this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.loadMap(latLng);
        }, (err) => {
            console.log(err);
        });
        */
    };
    HomePage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 4,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    HomePage.prototype.locationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/home/home.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div #map id="map" class="mymap"></div> \n    <ion-card class="search shadow-black">\n        <ion-card-content (click)="locationPage()">\n            <span class="dot"></span>\n            <ion-searchbar (ionInput)="getItems($event)" placeholder="Where to go?"></ion-searchbar>\n            <ion-icon name="md-locate" class="text-black"></ion-icon>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Desktop/mumbile app/MumbileApp/mumbile-app-user/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map