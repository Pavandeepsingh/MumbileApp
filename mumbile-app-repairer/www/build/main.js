webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cancelride_cancelride__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcceptPage = (function () {
    function AcceptPage(navCtrl, modalCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
    }
    AcceptPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    AcceptPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    AcceptPage.prototype.acceptriderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
    };
    AcceptPage.prototype.showInfo = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cancelride_cancelride__["a" /* CancelridePage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AcceptPage.prototype, "mapElement", void 0);
    AcceptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accept',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\accept\accept.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            <small float-left text-left style="margin-right: auto;">Overview</small>\n            <span style="margin: auto;" (click)="showInfo()">TARUN KUMAR</span>\n            <small float-right text-rignt style="margin-left: auto;" (click)="showInfo()">Info</small>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div #map id="map" class="mymap"></div>\n    <ion-card>\n        <ion-card-content class="text-light">\n            <div class="rider-info heading">\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-list>\n                            <ion-item>\n                                <ion-avatar item-start>\n                                    <img src="assets/imgs/profile_pix.png">\n                                </ion-avatar>\n                                <small class="text-light">Drive to</small>\n                                <h2 class="text-black">\n                                    99 Fore St, Kingsbridge TQ71AB, UK\n                                </h2>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                    <ion-col text-center col-3>\n                        <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n                        <br>\n                        <small>NEVIGATE</small>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <div text-center padding-left padding-right class="btn-fix">\n        <div padding-left padding-right>\n            <button ion-button full class="bg-green full shadow-green btn" (click)="acceptriderPage()">ARRIVED</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\accept\accept.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AcceptPage);
    return AcceptPage;
}());

//# sourceMappingURL=accept.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(197);
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
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.tabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Sign In</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <img src="assets/imgs/logo.png" class="logo">\n    <div padding>\n        <ion-list class="form">\n            <ion-item class="bg-light">\n                <ion-label>Username</ion-label>\n                <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-label>Password</ion-label>\n                <ion-input type="password" value="*******" text-right></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="tabsPage()">LOGIN</button>\n    </div>\n\n    <ion-row padding-left padding-right>\n        <ion-col>New user <strong class="text-green">Sign up</strong></ion-col>\n        <ion-col text-right>Forgot <strong class="text-green">Password?</strong></ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__earnings_earnings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratings_ratings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__ratings_ratings__["a" /* RatingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__earnings_earnings__["a" /* EarningsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-car"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Rating" tabIcon="md-star"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Earning" tabIcon="md-cash"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarningsPage; });
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


var EarningsPage = (function () {
    function EarningsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EarningsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earnings',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\earnings\earnings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col>\n                <ion-label text-center>OFFLINE</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-toggle checked="true"></ion-toggle>\n            </ion-col>\n            <ion-col>\n                <ion-label text-center class="text-white">ONLINE</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <img src="assets/imgs/Earnings.jpg">\n    <ion-card class="summery">\n        <ion-card-header>\n            Earning Summery\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <label>Earning This Week</label>\n                    <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">$ 500.45</h2>\n                </ion-col>\n                <ion-col>\n                    <label>Avg Daily Earnings</label>\n                    <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">$ 140.20</h2>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\earnings\earnings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EarningsPage);
    return EarningsPage;
}());

//# sourceMappingURL=earnings.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
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


var RatingsPage = (function () {
    function RatingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratings',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\ratings\ratings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col>\n                <ion-label text-center>OFFLINE</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-toggle checked="true"></ion-toggle>\n            </ion-col>\n            <ion-col>\n                <ion-label text-center class="text-white">ONLINE</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="bg-green-dark" padding>\n        <p text-center class="text-white title-head">Your current rating</p>\n        <h1 text-center class="text-white">\n            <ion-icon name="md-star"></ion-icon>4.6</h1>\n        <div class="rating-box">\n            <p><span class="text-1">5<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r100"></span><span class="text-2">100</span></p>\n            <p><span class="text-1">4<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r90"></span><span class="text-2">90</span></p>\n            <p><span class="text-1">3<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r60"></span><span class="text-2">60</span></p>\n            <p><span class="text-1">2<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r40"></span><span class="text-2">40</span></p>\n            <p><span class="text-1">1<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r20"></span><span class="text-2">20</span></p>\n        </div>\n    </div>\n    <ion-card class="summery">\n        <ion-card-header>\n            Trip Summary\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <label>Total Trips Yet</label>\n                    <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">870</h2>\n                </ion-col>\n                <ion-col>\n                    <label>Total Rated Trips</label>\n                    <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">700</h2>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\ratings\ratings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accept_accept__ = __webpack_require__(101);
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
        this.checked = false;
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
    HomePage.prototype.acceptPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__accept_accept__["a" /* AcceptPage */]);
    };
    HomePage.prototype.onlineOfflineToggle = function () {
        console.log('checked ' + this.checked);
    };
    HomePage.prototype.declinePage = function () {
        //this.navCtrl.push(AcceptPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col>\n                <ion-label text-center class="text-white">OFFLINE</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-toggle [(ngModel)]="checked" (ionChange)="onlineOfflineToggle()" checked="false"></ion-toggle>\n            </ion-col>\n            <ion-col>\n                <ion-label text-center>ONLINE</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div #map id="map" class="mymap"></div>\n    <!-- <p (click)="locationPage()" class="btn bg-green text-white" text-center padding>Accept rider</p> -->\n	\n	<div *ngIf="checked" class="summery">\n        <ion-card class="text-black">\n            <ion-card-header>\n                <small float-left class="text-light">Passanger Info</small>\n                <small float-right class="text-green" (click)="declinePage()">Decline</small>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="passanger-info heading">\n                    <ion-list>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/profile_pix.png">\n                            </ion-avatar>\n                            <h2 class="text-black">\n                                Tarun Kumar\n                            </h2>\n                            <p class="text-black">4.7\n                                <span class="rateing">\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                </span>\n                            </p>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <ion-row padding class="car-details">\n                    <ion-col>\n                        <small class="text-light">Pick up From</small>\n                        <strong class="text-black">Summit Avenue</strong>\n                    </ion-col>\n                    <ion-col>\n                        <small class="text-light">How far</small>\n                        <strong class="text-black">0.5km away</strong>\n                    </ion-col>\n                </ion-row>\n                <div text-center padding-left padding-right>\n                    <button ion-button full class="bg-green full" (click)="acceptPage()"> ACCEPT <span class="time">(02:29 Min)</span></button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n	\n    <ion-card *ngIf="!checked" class="summery">\n        <ion-card-header>\n            Today\'s Summery\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <label>Total Trips Today</label>\n                    <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">9 Trips</h2>\n                </ion-col>\n                <ion-col>\n                    <label>Today\'s Earning</label>\n                    <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">140.20 $</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <label>Online Today</label>\n                    <ion-icon name="md-time" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">5 Hours</h2>\n                </ion-col>\n                <ion-col>\n                    <label>Today\'s Avg. Ratings</label>\n                    <ion-icon name="md-star" item-start class="text-green"></ion-icon>\n                    <h2 class="text-green">5 Hours</h2>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__acceptrider_acceptrider__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(40);
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
    function LocationPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
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
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    LocationPage.prototype.requestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__acceptrider_acceptrider__["a" /* AcceptriderPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\location\location.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            TARUN KUMAR\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding-left padding-right>\n	<div #map id="map" class="mymap"></div>\n    <ion-card class="">\n        <ion-card-content>\n            <ion-row class="">\n                <ion-col col-2>\n                    <div class="">\n                        <div class="active-stage">\n                            <span class="col-1"><strong class="bg-green"></strong></span>\n                            <span class="col-2"></span>\n                            <span class="col-3"><strong class="bg-yellow"></strong></span>\n\n                        </div>\n                    </div>\n                </ion-col>\n                <ion-col col-10>\n                    <ion-list class="form">\n                        <ion-item class="bg-white border-bottom">\n                            <ion-label text-right>From</ion-label>\n                            <ion-input type="text" class="" value="Your Location"></ion-input>\n                            <ion-icon name="md-locate" class="text-black"></ion-icon>\n                        </ion-item>\n                        <ion-item class="bg-white border-none">\n                            <ion-label text-right>To</ion-label>\n                            <ion-input type="text" value="Sid Ave, Journal Squrnal, NJ"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <div text-center padding-left padding-right class="btn-fix">\n        <div padding-left padding-right>\n            <button ion-button full class="bg-green full btn shadow-green" (click)="requestPage()">DOUBLE TAP TO BEGIN TRIP</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fare_fare__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptriderPage = (function () {
    function AcceptriderPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    AcceptriderPage.prototype.farePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__fare_fare__["a" /* FarePage */]);
    };
    AcceptriderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    AcceptriderPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], AcceptriderPage.prototype, "mapElement", void 0);
    AcceptriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-acceptrider',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\acceptrider\acceptrider.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            TARUN KUMAR\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div #map id="map" class="mymap"></div>\n    <ion-card>\n        <ion-card-content class="text-light">\n            <div class="rider-info heading">\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-list>\n                            <ion-item>\n                                <ion-avatar item-start>\n                                    <img src="assets/imgs/profile_pix.png">\n                                </ion-avatar>\n                                <small class="text-light">Drive to</small>\n                                <h2 class="text-black">\n                                    99 Fore St, Kingsbridge TQ71AB, UK\n                                </h2>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                    <ion-col text-center col-3>\n                        <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n                        <br>\n                        <small>NEVIGATE</small>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <div text-center padding-left padding-right class="btn-fix">\n        <div padding-left padding-right>\n            <button ion-button full class="bg-red btn full shadow-red" (click)="farePage()">DOUBLE TAP END TRIP</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\acceptrider\acceptrider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AcceptriderPage);
    return AcceptriderPage;
}());

//# sourceMappingURL=acceptrider.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarePage; });
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


var FarePage = (function () {
    function FarePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FarePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fare',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\fare\fare.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            RECEIPT\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-light">\n    <div class="bg-white recipt" text-center>\n        <h6>Fare Summery</h6>\n        <div class="outline bg-green"></div>\n\n        <h1 class="text-black">$23.00</h1>\n        <p>22 Oct, 2017, 12:30</p>\n\n\n        <ion-list>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile_pix.png">\n                </ion-avatar>\n                <p class="text-black">Rate now</p>\n                <h2 class="text-black"><strong>TARUN KUMAR</strong></h2>\n            </ion-item>\n        </ion-list>\n    </div>\n    <div class="rateing" padding margin text-center>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n        <ion-icon name="star" class=""></ion-icon>\n    </div>\n    <div padding-left padding-right margin>\n        <button ion-button full class="bg-red text-white btn round shadow-red">SUBMIT RATING</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\fare\fare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FarePage);
    return FarePage;
}());

//# sourceMappingURL=fare.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelridePage; });
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


var CancelridePage = (function () {
    function CancelridePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    CancelridePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CancelridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelride',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\cancelride\cancelride.html"*/'<ion-content padding>\n    <h1 text-right>\n        <ion-icon name="md-close" (click)="dismiss()"></ion-icon>\n    </h1>\n    <div class="modal" padding text-center>\n        <img src="assets/imgs/profile_pix.png">\n        <h1>Tarun Kumar</h1>\n        <h3 class="text-green">+19 987654362</h3>\n        <p class="text-dark"><span>4.7</span>\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n        </p>\n    </div>\n    <div text-center padding-left padding-right class="btn-fix">\n        <div padding-left padding-right>\n            <button ion-button full class="bg-green full shadow-green btn">CANCEL TRIP</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\cancelride\cancelride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], CancelridePage);
    return CancelridePage;
}());

//# sourceMappingURL=cancelride.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mytrips_mytrips__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myprofile_myprofile__ = __webpack_require__(212);
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
    ProfilePage.prototype.aboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    ProfilePage.prototype.helpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.documentsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
    };
    ProfilePage.prototype.settingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.mytripsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mytrips_mytrips__["a" /* MytripsPage */]);
    };
    ProfilePage.prototype.sharePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* SharePage */]);
    };
    ProfilePage.prototype.myprofilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__myprofile_myprofile__["a" /* MyprofilePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col>\n                <ion-label text-center>OFFLINE</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-toggle checked="true"></ion-toggle>\n            </ion-col>\n            <ion-col>\n                <ion-label text-center class="text-white">ONLINE</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list padding>\n        <ion-item padding>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile_pix.png">\n            </ion-avatar>\n            <h2 class="text-dark">Ravinder Singh\n                <small class="text-green" style="float: right;" (click)="myprofilePage()">View Profile</small>\n            </h2>\n            <p class="text-dark"><span>4.7</span>\n                <ion-icon name="md-star" class="text-green"></ion-icon>\n                <ion-icon name="md-star" class="text-green"></ion-icon>\n                <ion-icon name="md-star" class="text-green"></ion-icon>\n                <ion-icon name="md-star" class="text-green"></ion-icon>\n                <ion-icon name="md-star" class="text-green"></ion-icon>\n            </p>\n        </ion-item>\n        <ion-item class="car-detail">\n            <ion-item>\n                <p class="text-">Hyundai WagonR\n                    <span class="text-green" style="float: right;">Change</span>\n                </p>\n                <h2 class="text-dark"><strong>DL ZA 5887</strong></h2>\n            </ion-item>\n        </ion-item>\n    </ion-list>\n    <div padding class="bg-light menu-items">\n        <ion-row>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="helpPage()">\n                    <ion-icon name="md-help-circle" class="text-green"></ion-icon>\n                    <h4>Help</h4>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="documentsPage()">\n                    <ion-icon name="md-paper" class="text-green"></ion-icon>\n                    <h4>Documents</h4>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="settingsPage()">\n                    <ion-icon name="md-settings" class="text-green"></ion-icon>\n                    <h4>Settings</h4>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="mytripsPage()">\n                    <ion-icon name="md-car" class="text-green"></ion-icon>\n                    <h4>My Trips</h4>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="sharePage()">\n                    <ion-icon name="md-share" class="text-green"></ion-icon>\n                    <h4>Share</h4>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="bg-white" padding text-center (click)="aboutPage()">\n                    <ion-icon name="md-alert" class="text-green"></ion-icon>\n                    <h4>About</h4>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            About\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n    <div class="about">\n        <img src="assets/imgs/logo.png" class="logo">\n        <p class="text-light">Cabber 3.1 (0511)</p>\n    </div>\n    <p class="text-green bottom">End user Licence Agreement</p>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
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
            selector: 'page-help',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\help\help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            HELP\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <br>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Cabber Suport</h2>\n        </ion-card-content>\n    </ion-card>\n    <br>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Payment</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Account</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Device</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Vehicle</h2>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
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


var DocumentsPage = (function () {
    function DocumentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\documents\documents.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            DOCUMENTS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p padding class="text-light"><span padding-left padding-right>Driver Documents</span></p>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Driver\'s License</h2>\n            <p>Expires: Feb 25, 2019</p>\n        </ion-card-content>\n    </ion-card>\n    <p padding class="text-light"><span padding-left padding-right>Hundai Wagonr Documents</span></p>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Vehicle Insurance</h2>\n            <p>Expires: Feb 25, 2019</p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Vehicle Registration</h2>\n            <p>Expires: Feb 25, 2019</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\documents\documents.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 209:
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SETTINGS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p padding class="text-light"><span padding-left padding-right>Map Setting</span></p>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Navigation Provider</h2>\n            <p>Google Map</p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2 class="d-flex">Show Triffic on Map\n                <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n            </h2>\n        </ion-card-content>\n    </ion-card>\n    <p padding class="text-light"><span padding-left padding-right>Other</span></p>\n    <ion-card padding>\n        <ion-card-content>\n            <h2 class="d-flex">Account Status\n                <ion-toggle checked="true" color="secondary"></ion-toggle>\n            </h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Contacts</h2>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
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
    }
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\mytrips\mytrips.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            MY TRIPS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-light">\n    <ion-list>\n        <ion-card>\n            <div class="img-box">\n                <img src="assets/imgs/map.png" />\n            </div>\n            <ion-card-content>\n                <p class="text-black">Today 8:21 am <span style="float:right;">$85 <span class="text-light">-</span> $95 </span>\n                </p>\n                <p class="text-light">Suzuki Swift Dezire<span style="float:right;">Cash <span class="text-black">Paid</span></span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <div class="img-box">\n                <img src="assets/imgs/map.png" />\n            </div>\n            <ion-card-content>\n                <p class="text-black">Today 2:45 pm <span style="float:right;">$65.00</span>\n                </p>\n                <p class="text-light">Hyundai xcent<span style="float:right;">Credit Cash <span class="text-black">Paid</span></span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <div class="img-box">\n                <img src="assets/imgs/map.png" />\n            </div>\n            <ion-card-content>\n                <p class="text-black">Today 2:45 pm <span style="float:right;">$65.00</span>\n                </p>\n                <p class="text-light">Hyundai xcent<span style="float:right;">Credit Cash <span class="text-black">Paid</span></span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\mytrips\mytrips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
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


var SharePage = (function () {
    function SharePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\share\share.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Share\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p padding class="text-light"><span padding-left padding-right>Share With</span></p>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Facebook</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Whatsapp</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Twitter</h2>\n        </ion-card-content>\n    </ion-card>\n    <ion-card padding>\n        <ion-card-content>\n            <h2>Google+</h2>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\share\share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
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


var MyprofilePage = (function () {
    function MyprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\myprofile\myprofile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="top-side">\n        <img src="assets/imgs/menu-bg.png">\n        <div class="icon-box">\n            <ion-icon name="md-create" class="bg-green text-white icon"></ion-icon>\n        </div>\n    </div>\n\n    <div class="form" padding>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Fast Name</ion-label>\n                <ion-input type="text" value="Tarun" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Last Name</ion-label>\n                <ion-input type="text" value="Kumar" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Contact Number\n                </ion-label>\n                <ion-input type="text" value="+91 96431487" readonly></ion-input>\n\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Email Address</ion-label>\n                <ion-input type="text" value="cabberdriver@email.com" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="text" value="* * * * * *" readonly></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\myprofile\myprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_request_request__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_location_location__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_help_help__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_share_share__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(40);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__["a" /* AcceptriderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__["a" /* RoderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__["a" /* CancelridePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__["a" /* NevigatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__["a" /* FarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__["a" /* EarningsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__["a" /* AcceptPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__["a" /* AcceptriderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__["a" /* RoderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__["a" /* CancelridePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__["a" /* NevigatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__["a" /* FarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__["a" /* EarningsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__["a" /* AcceptPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';

//import { OfflinePage } from '../pages/offline/offline';
//import { OnlinePage } from '../pages/online/online';
//import { RequestPage } from '../pages/request/request';
//import { AcceptriderPage } from '../pages/acceptrider/acceptrider';
//import { AcceptPage } from '../pages/accept/accept';
//import { RoderPage } from '../pages/roder/roder';
//import { CancelridePage } from '../pages/cancelride/cancelride';
//import { NevigatePage } from '../pages/nevigate/nevigate';
//import { LocationPage } from '../pages/location/location';
//import { FarePage } from '../pages/fare/fare';
//import { RatingsPage } from '../pages/ratings/ratings';
//import { EarningsPage } from '../pages/earnings/earnings';
//import { ProfilePage } from '../pages/profile/profile';
//import { HelpPage } from '../pages/help/help';
//import { DocumentsPage } from '../pages/documents/documents';
//import { SettingsPage } from '../pages/settings/settings';
//import { MytripsPage } from '../pages/mytrips/mytrips';
//import { SharePage } from '../pages/share/share';
//import { MyprofilePage } from '../pages/myprofile/myprofile';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accept_accept__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestPage = (function () {
    function RequestPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RequestPage.prototype.acceptPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accept_accept__["a" /* AcceptPage */]);
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\request\request.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-img">\n    <div class="card-box">\n        <ion-card class="text-black">\n            <ion-card-header>\n                <small float-left class="text-light">Passanger Info</small>\n                <small float-right class="text-green">Decline</small>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="passanger-info heading">\n                    <ion-list>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/profile_pix.png">\n                            </ion-avatar>\n                            <h2 class="text-black">\n                                Tarun Kumar\n                            </h2>\n                            <p class="text-black">4.7\n                                <span class="rateing">\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                <ion-icon name="star" class="text-green"></ion-icon>\n                                </span>\n                            </p>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <ion-row padding class="car-details">\n                    <ion-col>\n                        <small class="text-light">Pick up From</small>\n                        <strong class="text-black">Summit Avenue</strong>\n                    </ion-col>\n                    <ion-col>\n                        <small class="text-light">How far</small>\n                        <strong class="text-black">0.5km away</strong>\n                    </ion-col>\n                </ion-row>\n                <div text-center padding-left padding-right>\n                    <button ion-button full class="bg-green full" (click)="acceptPage()"> ACCEPT <span class="time">(02:29 Min)</span></button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\request\request.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoderPage; });
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


var RoderPage = (function () {
    function RoderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roder',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\roder\roder.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contact\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>Roder</ion-list-header>\n        <ion-item>\n            <ion-icon name="ionic" item-start></ion-icon>\n            @ionicframework\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\roder\roder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RoderPage);
    return RoderPage;
}());

//# sourceMappingURL=roder.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NevigatePage; });
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


var NevigatePage = (function () {
    function NevigatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NevigatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nevigate',template:/*ion-inline-start:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\nevigate\nevigate.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            <small float-left text-left style="margin-right: auto;">Overview</small>\n            <span style="margin: auto;" (click)="showInfo()">TARUN KUMAR</span>\n            <small float-right text-rignt style="margin-left: auto;" (click)="showInfo()">Info</small>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img">\n    <ion-card>\n        <ion-card-content class="text-light">\n            <ion-row>\n                <ion-col col-9>\n                    <ion-list padding-left>\n                        <ion-item>\n                            <h2 class="text-black">\n                                Staight to Manhattan Ave\n                            </h2>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n                <ion-col text-center col-3>\n                    <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n                    <br>\n                    <small class=text-green>420 ft</small>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <div text-center padding-left padding-right class="btn-fix">\n        <div padding-left padding-right>\n            <button ion-button full class="bg-green full shadow-green btn" (click)="acceptriderPage()">ARRIVED</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\SanjayWorkArea\Mumbile\mumbile-app-repairer\src\pages\nevigate\nevigate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NevigatePage);
    return NevigatePage;
}());

//# sourceMappingURL=nevigate.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map