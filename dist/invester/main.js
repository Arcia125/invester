(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advisor.guard.ts":
/*!**********************************!*\
  !*** ./src/app/advisor.guard.ts ***!
  \**********************************/
/*! exports provided: AdvisorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorGuard", function() { return AdvisorGuard; });
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvisorGuard = /** @class */ (function () {
    function AdvisorGuard(auth, router, logger) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.logger = logger;
        this.auth.user$.subscribe(function (user) { return (_this.user = user); });
    }
    AdvisorGuard.prototype._canActivate = function (next, state) {
        if (this.user.role === 'advisor') {
            return true;
        }
        return false;
    };
    AdvisorGuard.prototype.canActivate = function (next, state) {
        var canActivate = this._canActivate(next, state);
        this.logger.silly('AdvisorGuard canActivate ', canActivate);
        return canActivate;
    };
    AdvisorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_log_log_service__WEBPACK_IMPORTED_MODULE_0__["LogService"]])
    ], AdvisorGuard);
    return AdvisorGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_advisor_contact_single_contact_single_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/advisor/contact-single/contact-single.component */ "./src/app/features/advisor/contact-single/contact-single.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _advisor_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advisor.guard */ "./src/app/advisor.guard.ts");
/* harmony import */ var _features_advisor_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/advisor/home/home.component */ "./src/app/features/advisor/home/home.component.ts");
/* harmony import */ var _features_client_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/client/home/home.component */ "./src/app/features/client/home/home.component.ts");
/* harmony import */ var _features_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/login/login.component */ "./src/app/features/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _features_advisor_advisor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/advisor/advisor.component */ "./src/app/features/advisor/advisor.component.ts");
/* harmony import */ var _features_advisor_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/advisor/contacts/contacts.component */ "./src/app/features/advisor/contacts/contacts.component.ts");
/* harmony import */ var _features_advisor_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/advisor/opportunities/opportunities.component */ "./src/app/features/advisor/opportunities/opportunities.component.ts");
/* harmony import */ var _features_advisor_opportunity_single_opportunity_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/advisor/opportunity-single/opportunity-single.component */ "./src/app/features/advisor/opportunity-single/opportunity-single.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'login', component: _features_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: '', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: 'advisor',
                canActivate: [_advisor_guard__WEBPACK_IMPORTED_MODULE_4__["AdvisorGuard"]],
                component: _features_advisor_advisor_component__WEBPACK_IMPORTED_MODULE_9__["AdvisorComponent"],
                children: [
                    {
                        path: '',
                        component: _features_advisor_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                    },
                    {
                        path: 'contacts/:id',
                        component: _features_advisor_contact_single_contact_single_component__WEBPACK_IMPORTED_MODULE_2__["ContactSingleComponent"]
                    },
                    {
                        path: 'contacts',
                        component: _features_advisor_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"]
                    },
                    {
                        path: 'opportunities/:id',
                        component: _features_advisor_opportunity_single_opportunity_single_component__WEBPACK_IMPORTED_MODULE_12__["OpportunitySingleComponent"]
                    },
                    {
                        path: 'opportunities',
                        component: _features_advisor_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_11__["OpportunitiesComponent"]
                    }
                ]
            },
            {
                path: 'client',
                component: _features_client_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            },
        ]
    },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _services_opportunity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/opportunity.service */ "./src/app/services/opportunity.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/login/login.module */ "./src/app/features/login/login.module.ts");
/* harmony import */ var _features_advisor_advisor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/advisor/advisor.module */ "./src/app/features/advisor/advisor.module.ts");
/* harmony import */ var _features_client_client_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/client/client.module */ "./src/app/features/client/client.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mock_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock-data.service */ "./src/app/mock-data.service.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shared-components.module */ "./src/app/components/shared-components.module.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _features_advisor_contact_single_contact_single_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./features/advisor/contact-single/contact-single.component */ "./src/app/features/advisor/contact-single/contact-single.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _features_advisor_contact_single_contact_single_component__WEBPACK_IMPORTED_MODULE_22__["ContactSingleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__["PipesModule"],
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_18__["SharedComponentsModule"],
                _features_advisor_advisor_module__WEBPACK_IMPORTED_MODULE_8__["AdvisorModule"],
                _features_client_client_module__WEBPACK_IMPORTED_MODULE_9__["ClientModule"],
                _features_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_mock_data_service__WEBPACK_IMPORTED_MODULE_14__["MockDataService"], { delay: 300 }) : [],
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_log_log_service__WEBPACK_IMPORTED_MODULE_16__["LogService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _services_contact_service__WEBPACK_IMPORTED_MODULE_21__["ContactService"],
                _services_opportunity_service__WEBPACK_IMPORTED_MODULE_0__["OpportunityService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, logger) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.logger = logger;
        this.user = null;
        this.auth.user$.subscribe(function (user) { return (_this.user = user); });
    }
    AuthGuard.prototype._canActivate = function (next, state) {
        if (this.user) {
            // a user is logged in / found in storage
            if (state.url === '/') {
                // we're on the blank '/' page, we need to redirect to one of the user verticals
                this.router.navigate(['/' + this.user.role]);
                return false;
            }
            // we're on the right track, continue navigation
            return true;
        }
        // no user is logged in, redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        var canActivate = this._canActivate(next, state);
        this.logger.silly('AuthGuard canActivate ', canActivate);
        return canActivate;
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/create-contact-dialog/create-contact-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/create-contact-dialog/create-contact-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-contents {\n  padding: 25px;\n}\n\n@media (max-width: 700px) {\n  app-modal-form-group {\n    flex-direction: column;\n  }\n}"

/***/ }),

/***/ "./src/app/components/create-contact-dialog/create-contact-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/create-contact-dialog/create-contact-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a Contact</h1>\n<div mat-dialog-contents class=\"modal-contents\">\n  <form #form=\"ngForm\">\n    <app-modal-form-group>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.firstName\" placeholder=\"First Name\" name=\"firstName\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.lastName\" placeholder=\"Last Name\" name=\"lastName\" required>\n      </mat-form-field>\n    </app-modal-form-group>\n    <app-modal-form-group>\n      <mat-form-field [style.width.%]=\"100\">\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"data.birthday\" placeholder=\"Birthday\" name=\"birthday\"\n          required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </app-modal-form-group>\n    <mat-form-field [style.width.%]=\"100\">\n      <input matInput [(ngModel)]=\"data.advisor\" placeholder=\"Advisor\" name=\"advisor\" required>\n    </mat-form-field>\n    <app-modal-form-group>\n      <mat-form-field [style.width.%]=\"100\">\n        <input matInput [(ngModel)]=\"data.address.street\" placeholder=\"Street Address\" name=\"address.street\" required>\n      </mat-form-field>\n    </app-modal-form-group>\n    <app-modal-form-group>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.address.city\" placeholder=\"City\" name=\"address.city\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.address.state\" placeholder=\"State\" name=\"address.state\" required>\n      </mat-form-field>\n    </app-modal-form-group>\n    <mat-form-field [style.width.%]=\"100\">\n      <input matInput [(ngModel)]=\"data.address.postalCode\" placeholder=\"Zip\" name=\"address.postalCode\" required>\n    </mat-form-field>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"closeDialog()\">CANCEL</button>\n  <button mat-button [mat-dialog-close]=\"data\" [disabled]=\"!form.valid\">CREATE CONTACT</button>\n</div>"

/***/ }),

/***/ "./src/app/components/create-contact-dialog/create-contact-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/create-contact-dialog/create-contact-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContactDialogComponent", function() { return CreateContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CreateContactDialogComponent = /** @class */ (function () {
    function CreateContactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateContactDialogComponent.prototype.ngOnInit = function () {
    };
    CreateContactDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    CreateContactDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-contact-dialog',
            template: __webpack_require__(/*! ./create-contact-dialog.component.html */ "./src/app/components/create-contact-dialog/create-contact-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-contact-dialog.component.css */ "./src/app/components/create-contact-dialog/create-contact-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CreateContactDialogComponent);
    return CreateContactDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-form-group/modal-form-group.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/modal-form-group/modal-form-group.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: space-between;\n}"

/***/ }),

/***/ "./src/app/components/modal-form-group/modal-form-group.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-form-group/modal-form-group.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/modal-form-group/modal-form-group.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-form-group/modal-form-group.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalFormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormGroupComponent", function() { return ModalFormGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalFormGroupComponent = /** @class */ (function () {
    function ModalFormGroupComponent() {
    }
    ModalFormGroupComponent.prototype.ngOnInit = function () {
    };
    ModalFormGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-form-group',
            template: __webpack_require__(/*! ./modal-form-group.component.html */ "./src/app/components/modal-form-group/modal-form-group.component.html"),
            styles: [__webpack_require__(/*! ./modal-form-group.component.css */ "./src/app/components/modal-form-group/modal-form-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalFormGroupComponent);
    return ModalFormGroupComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n  <div class=\"message-container\">\n    <h1>\n      404 - Page not found.\n    </h1>\n    <a [routerLink]=\"'/'\">\n      back to site\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/shared-components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared-components.module.ts ***!
  \********************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _two_line_info_two_line_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./two-line-info/two-line-info.component */ "./src/app/components/two-line-info/two-line-info.component.ts");
/* harmony import */ var _create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-contact-dialog/create-contact-dialog.component */ "./src/app/components/create-contact-dialog/create-contact-dialog.component.ts");
/* harmony import */ var _modal_form_group_modal_form_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal-form-group/modal-form-group.component */ "./src/app/components/modal-form-group/modal-form-group.component.ts");
/* harmony import */ var _svg_chevron_svg_chevron_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg-chevron/svg-chevron.component */ "./src/app/components/svg-chevron/svg-chevron.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]];
var exportedDeclarations = [_two_line_info_two_line_info_component__WEBPACK_IMPORTED_MODULE_16__["TwoLineInfoComponent"], _create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__["CreateContactDialogComponent"], _modal_form_group_modal_form_group_component__WEBPACK_IMPORTED_MODULE_18__["ModalFormGroupComponent"], _svg_chevron_svg_chevron_component__WEBPACK_IMPORTED_MODULE_19__["SvgChevronComponent"]];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ].concat(materialModules),
            entryComponents: [_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__["CreateContactDialogComponent"]],
            declarations: exportedDeclarations.slice(),
            exports: exportedDeclarations.concat(materialModules, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]])
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/svg-chevron/svg-chevron.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/svg-chevron/svg-chevron.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\nsvg {\n  height: 100%;\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/svg-chevron/svg-chevron.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/svg-chevron/svg-chevron.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg [attr.viewBox]=\"getViewBox()\">\n  <path d=\"M 97.101682,39.687822 59.743753,76.667996 C 56.512958,80.047904 45.925892,83.487454 38.350921,75.773314 L 2.8618825,38.763317 a 10.099962,10.099962 0 0 1 0,-13.877506 9.1257526,9.1257526 0 0 1 13.3009345,0 L 48.957869,59.06265 83.253998,25.263566 a 9.5035071,9.5035071 0 0 1 13.847684,0 c 3.817308,3.976362 3.817308,10.437952 0,14.414315 z\"\n    [attr.fill]=\"fill\" clip-rule=\"evenodd\" fill-rule=\"evenodd\" [attr.transform]=\"getTransform()\" />\n</svg>"

/***/ }),

/***/ "./src/app/components/svg-chevron/svg-chevron.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/svg-chevron/svg-chevron.component.ts ***!
  \*****************************************************************/
/*! exports provided: SvgChevronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgChevronComponent", function() { return SvgChevronComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/direction.enum */ "./src/app/enums/direction.enum.ts");
/* harmony import */ var _helpers_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/svg */ "./src/app/helpers/svg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SvgChevronComponent = /** @class */ (function () {
    function SvgChevronComponent() {
        this.fill = '#262626';
        this.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__["Direction"].down;
        this._directionAngles = (_a = {},
            _a[_enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__["Direction"].up] = 180,
            _a[_enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__["Direction"].down] = 0,
            _a[_enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__["Direction"].right] = -90,
            _a[_enums_direction_enum__WEBPACK_IMPORTED_MODULE_1__["Direction"].left] = 90,
            _a);
        this._height = 100;
        this._width = 100;
        var _a;
    }
    SvgChevronComponent.prototype.ngOnInit = function () { };
    SvgChevronComponent.prototype.getViewBox = function () {
        return "0 0 " + this._width + " " + this._height;
    };
    SvgChevronComponent.prototype.getTransform = function () {
        var angle = this._directionAngles[this.direction];
        var x = this._width / 2;
        var y = this._height / 2;
        return Object(_helpers_svg__WEBPACK_IMPORTED_MODULE_2__["getSvgRotation"])(angle, x, y);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SvgChevronComponent.prototype, "fill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgChevronComponent.prototype, "direction", void 0);
    SvgChevronComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-svg-chevron], app-svg-chevron',
            template: __webpack_require__(/*! ./svg-chevron.component.html */ "./src/app/components/svg-chevron/svg-chevron.component.html"),
            styles: [__webpack_require__(/*! ./svg-chevron.component.css */ "./src/app/components/svg-chevron/svg-chevron.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SvgChevronComponent);
    return SvgChevronComponent;
}());



/***/ }),

/***/ "./src/app/components/two-line-info/two-line-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/two-line-info/two-line-info.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  font-size: 1rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}"

/***/ }),

/***/ "./src/app/components/two-line-info/two-line-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/two-line-info/two-line-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>{{ label }}</h6>\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/two-line-info/two-line-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/two-line-info/two-line-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: TwoLineInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoLineInfoComponent", function() { return TwoLineInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwoLineInfoComponent = /** @class */ (function () {
    function TwoLineInfoComponent() {
    }
    TwoLineInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TwoLineInfoComponent.prototype, "label", void 0);
    TwoLineInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two-line-info',
            template: __webpack_require__(/*! ./two-line-info.component.html */ "./src/app/components/two-line-info/two-line-info.component.html"),
            styles: [__webpack_require__(/*! ./two-line-info.component.css */ "./src/app/components/two-line-info/two-line-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoLineInfoComponent);
    return TwoLineInfoComponent;
}());



/***/ }),

/***/ "./src/app/enums/direction.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/direction.enum.ts ***!
  \*****************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["right"] = "right";
    Direction["down"] = "down";
    Direction["left"] = "left";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./src/app/features/advisor/advisor.component.css":
/*!********************************************************!*\
  !*** ./src/app/features/advisor/advisor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/advisor/advisor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/advisor/advisor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<advisor-header></advisor-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/features/advisor/advisor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/advisor/advisor.component.ts ***!
  \*******************************************************/
/*! exports provided: AdvisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorComponent", function() { return AdvisorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvisorComponent = /** @class */ (function () {
    function AdvisorComponent() {
    }
    AdvisorComponent.prototype.ngOnInit = function () {
    };
    AdvisorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advisor',
            template: __webpack_require__(/*! ./advisor.component.html */ "./src/app/features/advisor/advisor.component.html"),
            styles: [__webpack_require__(/*! ./advisor.component.css */ "./src/app/features/advisor/advisor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvisorComponent);
    return AdvisorComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/advisor.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/advisor/advisor.module.ts ***!
  \****************************************************/
/*! exports provided: AdvisorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorModule", function() { return AdvisorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/advisor/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/features/advisor/header/header.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared-components.module */ "./src/app/components/shared-components.module.ts");
/* harmony import */ var _advisor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advisor.component */ "./src/app/features/advisor/advisor.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/features/advisor/contacts/contacts.component.ts");
/* harmony import */ var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./opportunities/opportunities.component */ "./src/app/features/advisor/opportunities/opportunities.component.ts");
/* harmony import */ var _opportunity_single_opportunity_single_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./opportunity-single/opportunity-single.component */ "./src/app/features/advisor/opportunity-single/opportunity-single.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdvisorModule = /** @class */ (function () {
    function AdvisorModule() {
    }
    AdvisorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _advisor_component__WEBPACK_IMPORTED_MODULE_8__["AdvisorComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"], _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_10__["OpportunitiesComponent"], _opportunity_single_opportunity_single_component__WEBPACK_IMPORTED_MODULE_11__["OpportunitySingleComponent"]]
        })
    ], AdvisorModule);
    return AdvisorModule;
}());



/***/ }),

/***/ "./src/app/features/advisor/contact-single/contact-single.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/advisor/contact-single/contact-single.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 60px 40px;\n}\n\n.form-content {}\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\nmat-form-field {\n  flex: 1;\n}\n\n@media (min-width: 700px) {\n  mat-form-field:not(:first-child) {\n    margin-left: 1rem;\n  }\n}\n\n.error {\n  color: red;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n\n@media (max-width: 700px) {\n  app-modal-form-group {\n    flex-direction: column;\n  }\n}"

/***/ }),

/***/ "./src/app/features/advisor/contact-single/contact-single.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/advisor/contact-single/contact-single.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loadingSpinner>\n  <div class=\"loading-container\">\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n</ng-template>\n<div class=\"content\" *ngIf=\"!loading; else loadingSpinner\">\n  <h1>{{ contact | userDisplayName }}</h1>\n  <form #form=\"ngForm\">\n    <div *ngIf=\"error\" class=\"error\">{{ error }}</div>\n    <div class=\"form-content\">\n      <app-modal-form-group>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"contact.firstName\" placeholder=\"First Name\" name=\"firstName\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"contact.lastName\" placeholder=\"Last Name\" name=\"lastName\" required>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"contact.birthday\" placeholder=\"Birthday\" name=\"birthday\"\n            required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [(ngModel)]=\"contact.advisor\" placeholder=\"Advisor\" name=\"advisor\" required>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [(ngModel)]=\"contact.address.street\" placeholder=\"Street Address\" name=\"address.street\"\n            required>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"contact.address.city\" placeholder=\"City\" name=\"address.city\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"contact.address.state\" placeholder=\"State\" name=\"address.state\" required>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [(ngModel)]=\"contact.address.postalCode\" placeholder=\"Zip\" name=\"address.postalCode\" required>\n        </mat-form-field>\n      </app-modal-form-group>\n    </div>\n    <div class=\"actions\">\n      <button *ngIf=\"form.touched\" mat-flat-button color=\"primary\" (click)=\"onSubmit()\">Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/features/advisor/contact-single/contact-single.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/advisor/contact-single/contact-single.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSingleComponent", function() { return ContactSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactSingleComponent = /** @class */ (function () {
    function ContactSingleComponent(contactService, route, logger, router) {
        var _this = this;
        this.contactService = contactService;
        this.route = route;
        this.logger = logger;
        this.router = router;
        this.loading = true;
        this.handleSubmitSuccess = function (response) {
            _this.logger.info('Successfully updated contact ', response);
            _this.error = null;
            _this.loading = true;
            _this.contactSubscription.unsubscribe();
            _this.initializeContactSubscription();
        };
        this.handleSubmitError = function (errorResponse) {
            var errorMessage = (errorResponse.body && errorResponse.body.error) || 'Error updating contact';
            _this.error = errorMessage;
        };
    }
    ContactSingleComponent.prototype.ngOnInit = function () {
        this.initializeContactSubscription();
    };
    ContactSingleComponent.prototype.initializeContactSubscription = function () {
        var _this = this;
        this.contact$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.contactService.getContact(params.get('id')); }));
        this.contactSubscription = this.contact$.subscribe(function (contact) {
            _this.loading = false;
            _this.contact = contact;
        });
    };
    ContactSingleComponent.prototype.onSubmit = function () {
        this.contactService.updateContact(this.route.snapshot.params['id'], this.contact).subscribe(this.handleSubmitSuccess, this.handleSubmitError);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ContactSingleComponent.prototype, "form", void 0);
    ContactSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-single',
            template: __webpack_require__(/*! ./contact-single.component.html */ "./src/app/features/advisor/contact-single/contact-single.component.html"),
            styles: [__webpack_require__(/*! ./contact-single.component.css */ "./src/app/features/advisor/contact-single/contact-single.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_log_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactSingleComponent);
    return ContactSingleComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/contacts/contacts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/features/advisor/contacts/contacts.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-svg-chevron {\n  width: .75rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.chevron-button {}\n\n.chevron-button-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}"

/***/ }),

/***/ "./src/app/features/advisor/contacts/contacts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/advisor/contacts/contacts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"contacts$ | async\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let contact\">{{contact | userDisplayName}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"birthday\">\n    <mat-header-cell *matHeaderCellDef>Birthday</mat-header-cell>\n    <mat-cell *matCellDef=\"let contact\">{{ contact.birthday | date }}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"advisor\">\n    <mat-header-cell *matHeaderCellDef>Advisor</mat-header-cell>\n    <mat-cell *matCellDef=\"let contact\">{{ contact.advisor }}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let contact\" class=\"chevron-button-container\">\n      <a [routerLink]=\"'./' + contact.id\">\n        <button mat-icon-button class=\"chevron-button\">\n          <app-svg-chevron [direction]=\"'right'\"></app-svg-chevron>\n        </button>\n      </a>\n    </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/features/advisor/contacts/contacts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/advisor/contacts/contacts.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(logger, contactService) {
        this.logger = logger;
        this.contactService = contactService;
        this.displayedColumns = ['name', 'birthday', 'advisor', 'actions'];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.contacts$ = this.contactService.getContacts();
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/features/advisor/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/features/advisor/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/header/header.component.css":
/*!**************************************************************!*\
  !*** ./src/app/features/advisor/header/header.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  display: flex;\n  list-style-type: none;\n  font-size: 1rem;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\nli:last-child {\n  cursor: pointer;\n}\n\nnav {\n  width: 100%;\n}\n\n.box-shadow-menu-container {\n  margin-left: auto;\n}\n\n.box-shadow-menu {\n  position: relative;\n  padding-left: 1.25em;\n  top: -25%;\n}\n\n.box-shadow-menu:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 1em;\n  height: 0.15em;\n  background: #fff;\n  box-shadow: 0 0.25em 0 0 #fff, 0 0.5em 0 0 #fff;\n}\n\nmat-sidenav-container,\nmat-sidenav {\n  background: #3f51b5;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\nmat-sidenav-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.mobile-nav {\n  height: 100%;\n}\n\n.mobile-nav ul {\n  flex-direction: column;\n  height: 100%;\n  max-height: 85vh;\n  justify-content: space-between;\n  align-items: center;\n  width: 40vw;\n  font-size: 1rem;\n}\n\n.desktop-nav {\n  margin-left: 40px;\n}\n\n.desktop-nav li:last-child {\n  margin-left: auto;\n}\n\n.desktop-nav li:not(:last-child) {\n  margin-right: 1rem;\n}"

/***/ }),

/***/ "./src/app/features/advisor/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/advisor/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #mobileNav>\n  <div class=\"box-shadow-menu-container\" (click)=\"navIsOpen = !navIsOpen\">\n    <a class=\"box-shadow-menu\">\n    </a>\n  </div>\n  <mat-sidenav-container class=\"mobile-nav-container\">\n    <mat-sidenav #sideNav mode=\"side\" [opened]=\"navIsOpen\">\n      <nav class=\"mobile-nav\">\n        <ul>\n          <li *ngFor=\"let link of links\">\n            <a [routerLink]=\"link.href\" (click)=\"navIsOpen = false\">{{ link.text }}</a>\n          </li>\n          <li (click)=\"onClickLogout()\">\n            <a>Logout</a>\n          </li>\n        </ul>\n      </nav>\n    </mat-sidenav>\n  </mat-sidenav-container>\n</ng-template>\n<mat-toolbar color=\"primary\">\n  <a [routerLink]=\"'/advisor'\">Invester</a>\n  <nav class=\"desktop-nav\" *ngIf=\"(isDesktop$ | async); else mobileNav\">\n    <ul>\n      <li *ngFor=\"let link of links\">\n        <a [routerLink]=\"link.href\">{{ link.text }}</a>\n      </li>\n      <li>\n        <a (click)=\"onClickLogout()\">Logout</a>\n      </li>\n    </ul>\n  </nav>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/features/advisor/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/advisor/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/breakpoint.service */ "./src/app/services/breakpoint.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router, breakpointService) {
        this.auth = auth;
        this.router = router;
        this.breakpointService = breakpointService;
        this.navIsOpen = false;
        this.links = [
            {
                href: '/advisor',
                text: 'Dashboard'
            },
            {
                href: './contacts',
                text: 'Contacts'
            },
            {
                href: './opportunities',
                text: 'Opportunities'
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isDesktop$ = this.breakpointService.isDesktop$;
    };
    HeaderComponent.prototype.onClickLogout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advisor-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/features/advisor/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/features/advisor/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_2__["BreakpointService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/features/advisor/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 60px 40px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.greeting {\n  margin-bottom: 3rem;\n}\n\nmat-grid-list {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.dashboard-info {\n  margin-bottom: 3rem;\n}"

/***/ }),

/***/ "./src/app/features/advisor/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/advisor/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"greeting\">Hello, {{ auth.user$ | async | userDisplayName }}</h2>\n  <mat-grid-list class=\"dashboard-info\" [cols]=\"numberOfColumns\" rowHeight=\"60px\">\n    <mat-grid-tile [colspan]=\"columnSpan\">\n      <app-two-line-info label=\"Assets\">{{ (userService.dashboard$ | async)?.assets | currency | placeholder }}</app-two-line-info>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"columnSpan\">\n      <app-two-line-info label=\"Donations\">{{ (userService.dashboard$ | async)?.donations | currency | placeholder }}</app-two-line-info>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"columnSpan\">\n      <app-two-line-info label=\"Contacts\">{{ (userService.dashboard$ | async)?.contacts | placeholder }}</app-two-line-info>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"columnSpan\">\n      <app-two-line-info label=\"Opportunities\">{{ (userService.dashboard$ | async)?.opportunities | placeholder }}</app-two-line-info>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list [cols]=\"numberOfColumns\" rowHeight=\"30px\" [gutterSize]=\"actionGutters\">\n    <mat-grid-tile [colspan]=\"actionColumnSpan\" [rowspan]=\"rowSpan\">\n      <button mat-raised-button color=\"primary\" [style.width.%]=\"100\" (click)=\"openCreateContactDialog()\">CREATE\n        CONTACT</button>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"actionColumnSpan\" [rowspan]=\"rowSpan\">\n      <button mat-raised-button color=\"primary\" [style.width.%]=\"100\">CREATE OPPORTUNITY</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/features/advisor/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/advisor/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/breakpoint.service */ "./src/app/services/breakpoint.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _components_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/create-contact-dialog/create-contact-dialog.component */ "./src/app/components/create-contact-dialog/create-contact-dialog.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, userService, breakpoint, dialog, logger, contactService, router) {
        var _this = this;
        this.auth = auth;
        this.userService = userService;
        this.breakpoint = breakpoint;
        this.dialog = dialog;
        this.logger = logger;
        this.contactService = contactService;
        this.router = router;
        this.columnSpan = 1;
        this.isDesktop$ = breakpoint.isDesktop$.subscribe(function (isDesktop) {
            _this.logger.info("HomeComponent is in " + (isDesktop ? 'desktop' : 'mobile') + " mode");
            _this.isDesktop = isDesktop;
            _this.numberOfColumns = isDesktop ? 4 : 2;
            _this.rowSpan = isDesktop ? 2 : 1;
            _this.actionGutters = isDesktop ? '50px' : '10px';
            _this.actionColumnSpan = isDesktop ? 2 : 2;
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.isDesktop$.unsubscribe();
    };
    HomeComponent.prototype.openCreateContactDialog = function () {
        var _this = this;
        var data = {
            firstName: '',
            lastName: '',
            birthday: null,
            advisor: '',
            address: {
                street: '',
                city: '',
                state: '',
                postalCode: ''
            }
        };
        var options = {
            width: '500px',
            maxWidth: '90vw',
            maxHeight: '80vh',
            data: data
        };
        var dialogRef = this.dialog.open(_components_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateContactDialogComponent"], options);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.logger.info('CreateContactDialogComponent closed ', result);
            if (!result) {
                return;
            }
            _this.contactService.createContact(result).subscribe(function (response) {
                _this.logger.info('Response: ', response);
                _this.router.navigate(["advisor/contacts/" + response.id]);
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/advisor/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/features/advisor/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_3__["BreakpointService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_log_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/opportunities/opportunities.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/features/advisor/opportunities/opportunities.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-svg-chevron {\n  width: .75rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.chevron-button {}\n\n.chevron-button-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}"

/***/ }),

/***/ "./src/app/features/advisor/opportunities/opportunities.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/advisor/opportunities/opportunities.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"opportunities$ | async\">\n  <ng-container matColumnDef=\"amount\">\n    <mat-header-cell *matHeaderCellDef>Amount</mat-header-cell>\n    <mat-cell *matCellDef=\"let opportunity\">{{opportunity.amount}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"advisor\">\n    <mat-header-cell *matHeaderCellDef>Advisor</mat-header-cell>\n    <mat-cell *matCellDef=\"let opportunity\">{{ opportunity.advisor }}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"dateCreated\">\n    <mat-header-cell *matHeaderCellDef>Date Created</mat-header-cell>\n    <mat-cell *matCellDef=\"let opportunity\">{{ opportunity.dateCreated | date }}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"lastActivity\">\n    <mat-header-cell *matHeaderCellDef>Last Activity</mat-header-cell>\n    <mat-cell *matCellDef=\"let opportunity\">{{ opportunity.lastActivity.type }}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let opportunity\" class=\"chevron-button-container\">\n      <a [routerLink]=\"'./' + opportunity.id\">\n        <button mat-icon-button class=\"chevron-button\">\n          <app-svg-chevron [direction]=\"'right'\"></app-svg-chevron>\n        </button>\n      </a>\n    </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/features/advisor/opportunities/opportunities.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/advisor/opportunities/opportunities.component.ts ***!
  \***************************************************************************/
/*! exports provided: OpportunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesComponent", function() { return OpportunitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_opportunity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/opportunity.service */ "./src/app/services/opportunity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent(opportunityService) {
        this.opportunityService = opportunityService;
        this.displayedColumns = ['amount', 'advisor', 'dateCreated', 'lastActivity', 'actions'];
    }
    OpportunitiesComponent.prototype.ngOnInit = function () {
        this.opportunities$ = this.opportunityService.getOpportunities();
    };
    OpportunitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opportunities',
            template: __webpack_require__(/*! ./opportunities.component.html */ "./src/app/features/advisor/opportunities/opportunities.component.html"),
            styles: [__webpack_require__(/*! ./opportunities.component.css */ "./src/app/features/advisor/opportunities/opportunities.component.css")]
        }),
        __metadata("design:paramtypes", [_services_opportunity_service__WEBPACK_IMPORTED_MODULE_1__["OpportunityService"]])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "./src/app/features/advisor/opportunity-single/opportunity-single.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/features/advisor/opportunity-single/opportunity-single.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 60px 40px;\n}\n\n.form-content {}\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\nmat-form-field {\n  flex: 1;\n}\n\n@media (min-width: 700px) {\n  mat-form-field:not(:first-child) {\n    margin-left: 1rem;\n  }\n}\n\n.error {\n  color: red;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n\n@media (max-width: 700px) {\n  app-modal-form-group {\n    flex-direction: column;\n  }\n}"

/***/ }),

/***/ "./src/app/features/advisor/opportunity-single/opportunity-single.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/advisor/opportunity-single/opportunity-single.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loadingSpinner>\n  <div class=\"loading-container\">\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n</ng-template>\n<div class=\"content\" *ngIf=\"!loading; else loadingSpinner\">\n  <h1>Opportunity</h1>\n  <form #form=\"ngForm\">\n    <div *ngIf=\"error\" class=\"error\">{{ error }}</div>\n    <div class=\"form-content\">\n      <app-modal-form-group>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"opportunity.amount\" [readonly]=\"true\" placeholder=\"Amount\" name=\"amount\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"opportunity.advisor\" placeholder=\"Advisor\" name=\"advisor\" required>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"opportunity.dateCreated\" placeholder=\"Date Created\"\n            name=\"dateCreated\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker [disabled]=\"true\"></mat-datepicker>\n        </mat-form-field>\n      </app-modal-form-group>\n      <app-modal-form-group>\n        <mat-form-field [style.width.%]=\"100\">\n          <input matInput [(ngModel)]=\"opportunity.lastActivity.type\" [readonly]=\"true\" placeholder=\"Last Activity\"\n            name=\"lastActivity.type\">\n        </mat-form-field>\n      </app-modal-form-group>\n    </div>\n    <div class=\"actions\">\n      <button *ngIf=\"form.touched\" mat-flat-button color=\"primary\" (click)=\"onSubmit()\">Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/features/advisor/opportunity-single/opportunity-single.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/advisor/opportunity-single/opportunity-single.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OpportunitySingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitySingleComponent", function() { return OpportunitySingleComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_opportunity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/opportunity.service */ "./src/app/services/opportunity.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpportunitySingleComponent = /** @class */ (function () {
    function OpportunitySingleComponent(opportunityService, route, logger) {
        var _this = this;
        this.opportunityService = opportunityService;
        this.route = route;
        this.logger = logger;
        this.loading = true;
        this.handleSubmitSuccess = function (response) {
            _this.logger.info('Successfully updated opportunity ', response);
            _this.error = null;
            _this.loading = true;
            _this.opportunitySubscription.unsubscribe();
            _this.initializeOpportunitySubscription();
        };
        this.handleSubmitError = function (errorResponse) {
            var errorMessage = (errorResponse.body && errorResponse.body.error) || 'Error updating opportunity';
            _this.error = errorMessage;
        };
    }
    OpportunitySingleComponent.prototype.ngOnInit = function () {
        this.initializeOpportunitySubscription();
    };
    OpportunitySingleComponent.prototype.initializeOpportunitySubscription = function () {
        var _this = this;
        this.opportunity$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.opportunityService.getOpportunity(params.get('id')); }));
        this.opportunitySubscription = this.opportunity$.subscribe(function (opportunity) {
            _this.loading = false;
            _this.opportunity = opportunity;
        });
    };
    OpportunitySingleComponent.prototype.onSubmit = function () {
        this.opportunityService.updateOpportunity(this.route.snapshot.params['id'], this.opportunity).subscribe(this.handleSubmitSuccess, this.handleSubmitError);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], OpportunitySingleComponent.prototype, "form", void 0);
    OpportunitySingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunity-single',
            template: __webpack_require__(/*! ./opportunity-single.component.html */ "./src/app/features/advisor/opportunity-single/opportunity-single.component.html"),
            styles: [__webpack_require__(/*! ./opportunity-single.component.css */ "./src/app/features/advisor/opportunity-single/opportunity-single.component.css")]
        }),
        __metadata("design:paramtypes", [_services_opportunity_service__WEBPACK_IMPORTED_MODULE_4__["OpportunityService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_log_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]])
    ], OpportunitySingleComponent);
    return OpportunitySingleComponent;
}());



/***/ }),

/***/ "./src/app/features/client/client.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/client/client.module.ts ***!
  \**************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/client/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/features/client/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/features/client/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/client/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/features/client/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/features/client/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/features/client/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/client/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/features/client/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/login/header/header.component.css":
/*!************************************************************!*\
  !*** ./src/app/features/login/header/header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/login/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/features/login/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Invester</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/features/login/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/login/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/features/login/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/features/login/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/features/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/features/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  max-width: 90vw;\n  margin-top: 20vh;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\n\nform {}\n\nform .fields {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 0 0 10px;\n}\n\nbutton {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/features/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/features/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<login-header></login-header>\n<mat-card>\n  <h1 mat-card-title>Login</h1>\n  <form (ngSubmit)=\"onSubmitForm($event)\" #loginForm=\"ngForm\">\n    <div class=\"fields\">\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.email\" placeholder=\"Email\" name=\"email\" type=\"email\" autocomplete=\"username email\"\n          required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.password\" placeholder=\"Password\" name=\"password\" type=\"password\" autocomplete=\"current-password\"\n          required>\n      </mat-form-field>\n    </div>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid && !submitting\">LOGIN</button>\n    </mat-card-actions>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/features/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, api, router) {
        this.auth = auth;
        this.api = api;
        this.router = router;
        this.data = {
            email: '',
            password: ''
        };
        this.submitting = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.onSubmitForm = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.submitting = true;
                        event.preventDefault();
                        _a = this.data, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.auth.loginWithCredentials(email, password)];
                    case 1:
                        user = _b.sent();
                        this.router.navigate([user && user.role === 'advisor' ? '/advisor' : '/client']);
                        this.submitting = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/features/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/login/login.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/login/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/features/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/features/login/header/header.component.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared-components.module */ "./src/app/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/helpers/generate-fake-guid.ts":
/*!***********************************************!*\
  !*** ./src/app/helpers/generate-fake-guid.ts ***!
  \***********************************************/
/*! exports provided: generateFakeGuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFakeGuid", function() { return generateFakeGuid; });
var generateFakeGuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};


/***/ }),

/***/ "./src/app/helpers/svg.ts":
/*!********************************!*\
  !*** ./src/app/helpers/svg.ts ***!
  \********************************/
/*! exports provided: getSvgRotation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgRotation", function() { return getSvgRotation; });
function getSvgRotation(angle, originX, originY) {
    var args = [angle];
    if (originX) {
        args.push(originX);
    }
    if (originY) {
        args.push(originY);
    }
    return "rotate(" + args.join(' ') + ")";
}


/***/ }),

/***/ "./src/app/mock-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/mock-data.service.ts ***!
  \**************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var MockDataService = /** @class */ (function () {
    function MockDataService() {
        var _this = this;
        this.chooseRandom = function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        };
        this.createMockList = function (count, callback) {
            var arr = [];
            for (var i = count; i > 0; i--) {
                arr.push(callback());
            }
            return arr;
        };
        this.mockAddress = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ street: faker__WEBPACK_IMPORTED_MODULE_0__["address"].streetAddress(), city: faker__WEBPACK_IMPORTED_MODULE_0__["address"].city(), state: faker__WEBPACK_IMPORTED_MODULE_0__["address"].state(), postalCode: faker__WEBPACK_IMPORTED_MODULE_0__["address"].zipCode() }, overrides);
        };
        this.mockUser = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ id: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), accountId: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), dashboardId: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), email: faker__WEBPACK_IMPORTED_MODULE_0__["internet"].email(), birthday: faker__WEBPACK_IMPORTED_MODULE_0__["date"].past(20), firstName: faker__WEBPACK_IMPORTED_MODULE_0__["name"].firstName(), lastName: faker__WEBPACK_IMPORTED_MODULE_0__["name"].lastName(), image: faker__WEBPACK_IMPORTED_MODULE_0__["internet"].avatar(), role: _this.chooseRandom(['advisor', 'client']), token: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), address: _this.mockAddress(overrides.address) }, overrides);
        };
        this.mockContact = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ id: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), birthday: faker__WEBPACK_IMPORTED_MODULE_0__["date"].past(20), advisor: faker__WEBPACK_IMPORTED_MODULE_0__["name"].findName(), firstName: faker__WEBPACK_IMPORTED_MODULE_0__["name"].firstName(), lastName: faker__WEBPACK_IMPORTED_MODULE_0__["name"].lastName(), address: _this.mockAddress(overrides.address) }, overrides);
        };
        this.mockOpportunity = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ id: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), contactId: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), advisor: faker__WEBPACK_IMPORTED_MODULE_0__["name"].findName(), amount: faker__WEBPACK_IMPORTED_MODULE_0__["random"].number({ min: -5000, max: 1000000 }), dateCreated: faker__WEBPACK_IMPORTED_MODULE_0__["date"].recent(), lastActivity: _this.mockActivity(overrides.lastActivity) }, overrides);
        };
        this.mockActivity = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ id: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), sourceId: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), type: _this.chooseRandom(['call', 'notes']), dateCreated: faker__WEBPACK_IMPORTED_MODULE_0__["date"].recent() }, overrides);
        };
        this.mockDashboard = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return __assign({ id: faker__WEBPACK_IMPORTED_MODULE_0__["random"].uuid(), assets: faker__WEBPACK_IMPORTED_MODULE_0__["random"].number({ min: -5000, max: 1000000 }), donations: faker__WEBPACK_IMPORTED_MODULE_0__["random"].number({ min: -5000, max: 1000000 }), contacts: faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(15), opportunities: faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(25) }, overrides);
        };
    }
    MockDataService.prototype.createDb = function () {
        var testUser = this.mockUser({
            id: 'test-user',
            dashboardId: 'test-dashboard',
            accountId: 'test-account',
            email: 'test@test.com',
            role: 'advisor',
        });
        // tslint:disable:no-console
        console.time('Create Mock Database');
        var users = [
            testUser,
            this.mockUser({
                id: 'test-client',
                dashboardId: 'test-client-dashboard',
                accountId: 'test-client-account',
                role: 'client',
            })
        ].concat(this.createMockList(faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(20), this.mockUser));
        var testOpportunityActivity = this.mockActivity({
            id: 'test-opportunity-activity',
            sourceId: 'test-opportunity',
            type: 'call'
        });
        var activities = [
            testOpportunityActivity
        ].concat(this.createMockList(faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(50), this.mockActivity));
        var testOpportunity = this.mockOpportunity({
            id: 'test-opportunity',
            contactId: '588b9214-6ec9-4519-8c30-62467ae95354',
            lastActivity: testOpportunityActivity
        });
        var opportunities = [
            testOpportunity,
            this.mockOpportunity({
                id: 'test-opportunity',
                contactId: '588b9214-6ec9-4519-8c30-62467ae95354',
                lastActivity: testOpportunityActivity
            }),
            this.mockOpportunity({
                id: 'test-opportunity',
                contactId: '588b9214-6ec9-4519-8c30-62467ae95354',
                lastActivity: testOpportunityActivity
            })
        ];
        var contacts = [
            this.mockContact({
                id: '588b9214-6ec9-4519-8c30-62467ae95354',
            }),
            this.mockContact({
                id: '38d2d7a0-fce9-4942-99e0-7819eda1bc9c',
            })
        ].concat(this.createMockList(faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(50), this.mockContact));
        var dashboards = [
            this.mockDashboard({
                id: 'test-dashboard',
                contacts: contacts.length,
                opportunities: opportunities.length
            })
        ].concat(this.createMockList(faker__WEBPACK_IMPORTED_MODULE_0__["random"].number(20), this.mockDashboard));
        var data = { users: users, dashboards: dashboards, contacts: contacts, opportunities: opportunities, activities: activities };
        console.timeEnd('Create Mock Database');
        console.log('Mock Databse created with data: ', data);
        return data;
    };
    return MockDataService;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-display-name.pipe */ "./src/app/pipes/user-display-name.pipe.ts");
/* harmony import */ var _placeholder_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder.pipe */ "./src/app/pipes/placeholder.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var exportedDeclarations = [_user_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__["UserDisplayNamePipe"], _placeholder_pipe__WEBPACK_IMPORTED_MODULE_3__["PlaceholderPipe"]];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: exportedDeclarations.slice(),
            exports: exportedDeclarations.slice()
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/placeholder.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/placeholder.pipe.ts ***!
  \*******************************************/
/*! exports provided: PlaceholderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderPipe", function() { return PlaceholderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceholderPipe = /** @class */ (function () {
    function PlaceholderPipe() {
    }
    PlaceholderPipe.prototype.transform = function (value, placeholder) {
        if (placeholder === void 0) { placeholder = '-'; }
        return typeof value === null || value === null ? placeholder : value;
    };
    PlaceholderPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'placeholder'
        })
    ], PlaceholderPipe);
    return PlaceholderPipe;
}());



/***/ }),

/***/ "./src/app/pipes/user-display-name.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/user-display-name.pipe.ts ***!
  \*************************************************/
/*! exports provided: UserDisplayNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplayNamePipe", function() { return UserDisplayNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserDisplayNamePipe = /** @class */ (function () {
    function UserDisplayNamePipe() {
    }
    UserDisplayNamePipe.prototype.transform = function (value, fullName) {
        if (fullName === void 0) { fullName = true; }
        if (!value) {
            return null;
        }
        if (fullName) {
            return value.firstName + " " + value.lastName;
        }
        return value.firstName;
    };
    UserDisplayNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userDisplayName'
        })
    ], UserDisplayNamePipe);
    return UserDisplayNamePipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(httpClient, logger) {
        this.httpClient = httpClient;
        this.logger = logger;
        this.baseEndpoint = '/api/';
    }
    ApiService.prototype.getFullEndpoint = function (path) {
        return "" + this.baseEndpoint + path;
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = {}; }
        var endpoint = this.getFullEndpoint(path);
        var observable = this.httpClient.get(endpoint, params);
        this.logger.info('GET ', endpoint, observable);
        return observable;
    };
    ApiService.prototype.post = function (path, params) {
        if (params === void 0) { params = {}; }
        var endpoint = this.getFullEndpoint(path);
        var observable = this.httpClient.post(endpoint, params);
        this.logger.info('POST ', endpoint, observable);
        return observable;
    };
    ApiService.prototype.put = function (path, params) {
        if (params === void 0) { params = {}; }
        var endpoint = this.getFullEndpoint(path);
        var observable = this.httpClient.put(endpoint, params);
        this.logger.info('PUT ', endpoint, observable);
        return observable;
    };
    ApiService.prototype.delete = function (path, params) {
        if (params === void 0) { params = {}; }
        var endpoint = this.getFullEndpoint(path);
        var observable = this.httpClient.delete(endpoint, params);
        this.logger.info('DELETE ', endpoint, observable);
        return observable;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AuthService = /** @class */ (function () {
    function AuthService(api, storage, logger) {
        this.api = api;
        this.storage = storage;
        this.logger = logger;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        var userFromStorage = storage.get(storage.keys.user);
        logger.info('AuthService got user from storage: ', userFromStorage);
        this.user$.next(userFromStorage);
    }
    AuthService.prototype.authenticateWithApi = function (email, password) {
        this.logger.silly('AuthService.authenticateWithApi called with email ', email, 'password ', password);
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            this.logger.info('AuthService.authenticateWithApi using custom auth endpoint for testing environment.');
            return this.api.get('users/test-user');
        }
        return this.api.post('authenticate', { email: email, password: password });
    };
    AuthService.prototype.loginUser = function (user) {
        this.logger.silly('AuthService.loginUser called with user ', user);
        this.storage.set(this.storage.keys.user, user);
        this.user$.next(user);
    };
    AuthService.prototype.loginWithCredentials = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.silly('AuthService.loginWithCredentials called with email ', email, 'password', password);
                        return [4 /*yield*/, this.authenticateWithApi(email, password).toPromise()];
                    case 1:
                        user = _a.sent();
                        this.logger.silly('user authenticated.');
                        this.loginUser(user);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.logger.info('logging out...');
        this.storage.set(this.storage.keys.user, null);
        this.user$.next(null);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _log_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/breakpoint.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/breakpoint.service.ts ***!
  \************************************************/
/*! exports provided: BreakpointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointService", function() { return BreakpointService; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var resultMatches = function (result) { return result.matches; };
var invert = function (value) { return !value; };
var getResultMatches = function (observable) {
    return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(resultMatches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resultMatches));
};
var getNotResultMatches = function (observable) {
    return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(resultMatches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resultMatches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(invert));
};
var BreakpointService = /** @class */ (function () {
    function BreakpointService(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.breakpoints = {
            desktop: '(min-width: 700px)',
            notDesktop: '(max-width: 700px)'
        };
        this.isDesktop$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false), getResultMatches(breakpointObserver.observe([
            this.breakpoints.desktop
        ])), getNotResultMatches(breakpointObserver.observe([
            this.breakpoints.notDesktop
        ])));
    }
    BreakpointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], BreakpointService);
    return BreakpointService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_generate_fake_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/generate-fake-guid */ "./src/app/helpers/generate-fake-guid.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactService = /** @class */ (function () {
    function ContactService(logger, api) {
        this.logger = logger;
        this.api = api;
    }
    ContactService.prototype.createContact = function (data) {
        this.logger.info('ContactService#createContact ', data);
        return this.api.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? 'contacts' : "contacts/" + Object(_helpers_generate_fake_guid__WEBPACK_IMPORTED_MODULE_1__["generateFakeGuid"])(), data);
    };
    ContactService.prototype.getContacts = function (path) {
        if (path === void 0) { path = ''; }
        this.logger.silly('ContactService#getContacts');
        return this.api.get("contacts" + path);
    };
    ContactService.prototype.getContact = function (contactId) {
        this.logger.silly('ContactyService#getContact ', contactId);
        return this.api.get("contacts/" + contactId);
    };
    ContactService.prototype.updateContact = function (contactId, contact) {
        this.logger.silly('ContactService#updateContact ', contactId, contact);
        return this.api.put("contacts/" + contactId, contact);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_log_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/log/log-level-to-string.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/log/log-level-to-string.ts ***!
  \*****************************************************/
/*! exports provided: logLevelToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLevelToString", function() { return logLevelToString; });
/* harmony import */ var _log_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-levels */ "./src/app/services/log/log-levels.ts");

function logLevelToString(logLevel) {
    return _log_levels__WEBPACK_IMPORTED_MODULE_0__["logLevels"][logLevel];
}


/***/ }),

/***/ "./src/app/services/log/log-level.enum.ts":
/*!************************************************!*\
  !*** ./src/app/services/log/log-level.enum.ts ***!
  \************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["error"] = 0] = "error";
    LogLevel[LogLevel["warning"] = 1] = "warning";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["silly"] = 3] = "silly";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "./src/app/services/log/log-levels.ts":
/*!********************************************!*\
  !*** ./src/app/services/log/log-levels.ts ***!
  \********************************************/
/*! exports provided: logLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLevels", function() { return logLevels; });
var logLevels = {
    0: 'error',
    1: 'warning',
    2: 'info',
    3: 'silly'
};


/***/ }),

/***/ "./src/app/services/log/log.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/log/log.service.ts ***!
  \*********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_level_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-level.enum */ "./src/app/services/log/log-level.enum.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/app/services/log/log.ts");
/* harmony import */ var _log_level_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-level-to-string */ "./src/app/services/log/log-level-to-string.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogService = /** @class */ (function () {
    function LogService() {
        var _this = this;
        this.logLevel = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].error : _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].silly;
        this.defaultFormatter = function (level) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return [Object(_log_level_to_string__WEBPACK_IMPORTED_MODULE_4__["logLevelToString"])(level).toUpperCase() + ": "].concat(args);
        };
        this.silly = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.log.apply(_this, [_log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].silly, window.console.log.bind(window.console)].concat(args));
        };
        this.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.log.apply(_this, [_log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].info, window.console.log.bind(window.console)].concat(args));
        };
        this.warning = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.log.apply(_this, [_log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].warning, window.console.warn.bind(window.console)].concat(args));
        };
        this.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.log.apply(_this, [_log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].error, window.console.warn.bind(window.console)].concat(args));
        };
        // sets the default formatter
        this.formatter = this.defaultFormatter;
    }
    LogService.prototype.log = function (level, logFn) {
        if (logFn === void 0) { logFn = window.console.log.bind(window.console); }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= level) {
            _log__WEBPACK_IMPORTED_MODULE_3__["log"].apply(void 0, [level, logFn, this.formatter].concat(args));
        }
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/log/log.ts":
/*!*************************************!*\
  !*** ./src/app/services/log/log.ts ***!
  \*************************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony import */ var _log_level_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-level-to-string */ "./src/app/services/log/log-level-to-string.ts");

var log = function (logLevel, logFn, formatFn) {
    if (logFn === void 0) { logFn = console.log.bind(window.console); }
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var message = typeof formatFn === 'function' ? formatFn.apply(void 0, [logLevel].concat(args)) : [Object(_log_level_to_string__WEBPACK_IMPORTED_MODULE_0__["logLevelToString"])(logLevel).toUpperCase()].concat(args);
    if (Array.isArray(message)) {
        logFn.apply(void 0, message);
    }
    else {
        logFn(message);
    }
};


/***/ }),

/***/ "./src/app/services/opportunity.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/opportunity.service.ts ***!
  \*************************************************/
/*! exports provided: OpportunityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityService", function() { return OpportunityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpportunityService = /** @class */ (function () {
    function OpportunityService(logger, api) {
        this.logger = logger;
        this.api = api;
    }
    OpportunityService.prototype.getOpportunities = function () {
        this.logger.info('OpportunityService#getOpportunities');
        return this.api.get('opportunities');
    };
    OpportunityService.prototype.getOpportunity = function (opportunityId) {
        this.logger.info('OpportunityService#getOpportunity ', opportunityId);
        return this.api.get("opportunities/" + opportunityId);
    };
    OpportunityService.prototype.updateOpportunity = function (opportunityId, opportunity) {
        this.logger.info('OpportunityService#updateOpportunity', opportunityId);
        return this.api.put("opportunities/" + opportunityId, opportunity);
    };
    OpportunityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], OpportunityService);
    return OpportunityService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log/log.service */ "./src/app/services/log/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(logger) {
        this.logger = logger;
        this.keys = {
            user: 'invester-user'
        };
        this.memoryStorage = {};
    }
    StorageService.prototype.set = function (key, value) {
        var parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
        this.logger.silly('StorageService setting key ', key, 'to value ', value);
        try {
            localStorage.setItem(key, parsedValue);
        }
        catch (err) {
            console.error(err);
            this.memoryStorage[key] = parsedValue;
        }
    };
    StorageService.prototype.get = function (key) {
        this.logger.silly('StorageService getting key ', key);
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (err) {
            console.error(err);
            return this.memoryStorage[key];
        }
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_log_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(auth, api) {
        var _this = this;
        this.auth = auth;
        this.api = api;
        this.auth.user$.subscribe(function (user) { return (_this.user = user); });
    }
    Object.defineProperty(UserService.prototype, "dashboard$", {
        get: function () {
            if (!this._dashboard$) {
                return this._dashboard$ = this.getDashboardViaApi();
            }
            return this._dashboard$;
        },
        set: function (dashboard$) {
            this._dashboard$ = dashboard$;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getDashboardViaApi = function () {
        return this.api.get("dashboards/" + this.user.dashboardId);
    };
    /**
     * @description to manually pull the data from the api
     */
    UserService.prototype.fetchDashboardInfo = function () {
        return this.dashboard$ = this.getDashboardViaApi();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UserService);
    return UserService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arcia/projects/node/invester/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map