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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/email.ts":
/*!*********************************!*\
  !*** ./src/app/Models/email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(userEmail, feedback) {
        this.userEmail = userEmail;
        this.feedback = feedback;
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/Models/login.ts":
/*!*********************************!*\
  !*** ./src/app/Models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/Models/post.ts":
/*!********************************!*\
  !*** ./src/app/Models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/Models/user.ts":
/*!********************************!*\
  !*** ./src/app/Models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
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
/* harmony import */ var _ui_about_user_body_about_user_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/about-user-body/about-user-body.component */ "./src/app/ui/about-user-body/about-user-body.component.ts");
/* harmony import */ var _ui_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/post/post.component */ "./src/app/ui/post/post.component.ts");
/* harmony import */ var _ui_navigation_tools_navigation_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/navigation-tools/navigation-tools.component */ "./src/app/ui/navigation-tools/navigation-tools.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/authorization/authorization.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'login',
        component: _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__["AuthorisationComponent"],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    },
    {
        path: 'menu',
        component: _ui_navigation_tools_navigation_tools_component__WEBPACK_IMPORTED_MODULE_4__["NavigationToolsComponent"],
        children: [
            {
                path: 'post',
                component: _ui_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"],
            },
            {
                path: 'interesting',
                component: _ui_about_user_body_about_user_body_component__WEBPACK_IMPORTED_MODULE_2__["AboutUserBodyComponent"],
            },
            {
                path: '**',
                component: _ui_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"],
            },
            {
                path: 'auth',
                redirectTo: './login',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = ".wrapper{\r\n    display: flex; \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div style=\"width: 150vh\"></div>\r\n    <router-outlet></router-outlet>\r\n    <div style=\"width: 150vh\"></div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n"

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
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'ISD team! yep yep :)';
        translate.use('en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, setupTranslateFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_login_registration_header_login_registration_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/login-registration-header/login-registration-header.component */ "./src/app/ui/login-registration-header/login-registration-header.component.ts");
/* harmony import */ var _ui_about_user_body_about_user_body_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/about-user-body/about-user-body.component */ "./src/app/ui/about-user-body/about-user-body.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_post_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/post/post.component */ "./src/app/ui/post/post.component.ts");
/* harmony import */ var _ui_navigation_tools_navigation_tools_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/navigation-tools/navigation-tools.component */ "./src/app/ui/navigation-tools/navigation-tools.component.ts");
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate.pipe.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/authorization/authorization.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interceptor/interceptor */ "./src/app/interceptor/interceptor.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular








//primeng








//project














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _ui_login_registration_header_login_registration_header_component__WEBPACK_IMPORTED_MODULE_18__["LoginRegistrationHeaderComponent"],
                _ui_about_user_body_about_user_body_component__WEBPACK_IMPORTED_MODULE_19__["AboutUserBodyComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _ui_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
                _ui_navigation_tools_navigation_tools_component__WEBPACK_IMPORTED_MODULE_22__["NavigationToolsComponent"],
                _translate_pipe__WEBPACK_IMPORTED_MODULE_23__["TranslatePipe"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_29__["UserpageComponent"],
                _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_25__["AuthorisationComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_27__["RegistrationComponent"],
            ],
            imports: [ngx_logger__WEBPACK_IMPORTED_MODULE_6__["LoggerModule"].forRoot({
                    level: ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NgxLoggerLevel"].DEBUG
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_11__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"]
            ],
            exports: [
                _ui_login_registration_header_login_registration_header_component__WEBPACK_IMPORTED_MODULE_18__["LoginRegistrationHeaderComponent"],
                _ui_about_user_body_about_user_body_component__WEBPACK_IMPORTED_MODULE_19__["AboutUserBodyComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _ui_navigation_tools_navigation_tools_component__WEBPACK_IMPORTED_MODULE_22__["NavigationToolsComponent"],
                _ui_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_29__["UserpageComponent"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_28__["Interceptor"],
                    multi: true
                },
                _services_translate_service__WEBPACK_IMPORTED_MODULE_24__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_24__["TranslateService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function setupTranslateFactory(service) {
    return function () { return service.use('en'); };
}


/***/ }),

/***/ "./src/app/authorization/authorization.component.css":
/*!***********************************************************!*\
  !*** ./src/app/authorization/authorization.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .labelSignup{\r\n      font-family: fantasy\r\n  }\r\n  \r\n  input{\r\n      padding: 5px;\r\n      /* border-radius: 5px; \r\n      border-color: rgb(255, 222, 73); */\r\n      width: 200px;\r\n  }\r\n  \r\n  .button1\r\n  {\r\n      font-weight: 700;\r\n    color: rgb(10, 3, 3);\r\n    text-decoration: none;\r\n    justify-content: center;\r\n    padding: .4em 1em calc(.8em + 3px);\r\n    background: rgb(255, 222, 73);\r\n    width: 120px;\r\n    height: 35px;\r\n    box-shadow: 0 -3px rgb(185, 177, 53) inset;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  .button2\r\n  {\r\n      font-weight: 700;\r\n    color: rgb(10, 3, 3);\r\n    text-decoration: none;\r\n    justify-content: center;\r\n    padding: .4em 1em calc(.8em + 3px);\r\n    background: rgb(255, 222, 73);\r\n    width: 150px;\r\n    height: 35px;\r\n    box-shadow: 0 -3px rgb(185, 177, 53) inset;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  .post-username{\r\n      outline: none; \r\n      color: white;\r\n      background-color: rgb(46, 45, 45);\r\n      /* border-radius: 40px;  */\r\n      border-color: rgb(255, 222, 73);\r\n      border-width: 1px;\r\n      border-top: none;\r\n      border-right: none;\r\n      border-left: none;\r\n      margin-left: 0px;\r\n      margin-top: 20px \r\n  }\r\n  \r\n  p{\r\n      padding: 0px;\r\n      margin: 0px;\r\n  }\r\n  \r\n  .regButton{\r\n      color: rgb(10, 3, 3);\r\n      background: rgb(255, 222, 73);\r\n      border-color: black;\r\n      outline: none; \r\n      border-radius: 40px; \r\n      /* margin-left: 0px; */\r\n      margin-bottom: 15px;\r\n  }\r\n  \r\n  .post-email{\r\n      outline: none; \r\n      border-radius: 40px; \r\n      margin: 0 20px; \r\n      margin-left: 10px;\r\n  }\r\n  \r\n  .code{\r\n      outline: none; \r\n      border-radius: 40px; \r\n      margin: 0 20px; \r\n      margin-left: -10px;\r\n  }\r\n  \r\n  .post-pass{\r\n      outline: none; \r\n      border-radius: 40px; \r\n      margin: 0 20px; \r\n      margin-left: -10px;\r\n  }\r\n  \r\n  .post-reppas{\r\n      outline: none; \r\n      border-radius: 40px; \r\n      margin: 0 20px; \r\n      margin-left: -10px;\r\n  }\r\n  \r\n  .outer{\r\n      display: block;\r\n  }\r\n  \r\n  .inner{\r\n      display: block;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-top: 5%;\r\n      margin-bottom: auto;\r\n  }\r\n  \r\n  .container_with_borders{\r\n      border: 3 px;\r\n      border-color: rgb(46, 45, 45);\r\n      border-style: solid;  \r\n      border-radius: 20px;    \r\n      width: 300px;\r\n      position: relative;\r\n      display: flex;\r\n      justify-content: center;\r\n      background-color: rgb(46, 45, 45);\r\n      margin-bottom:10px; \r\n     /* background-image: url(assets/images/nebo.jpg);*/\r\n     box-shadow:  6px 3px 33px 0px rgba(0,0,0,0.31);\r\n  }\r\n  \r\n  .ui-inputgroup{\r\n      display: block;\r\n      position: relative;\r\n      \r\n     \r\n  }\r\n  \r\n  .buttonCBContainer{\r\n      display: block;\r\n      left: 50%\r\n    }\r\n  \r\n   \r\n      "

/***/ }),

/***/ "./src/app/authorization/authorization.component.html":
/*!************************************************************!*\
  !*** ./src/app/authorization/authorization.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\r\n  <div class=\"logo\">\r\n      <img src=\"assets/images/Logo-Sayme.svg\" style=\"width:280px; display: block; margin-left: auto;margin-right: auto\">\r\n  </div>\r\n  <div class=\"inner\">\r\n      <div class=\"container_with_borders\">\r\n          <form #postForm=\"ngForm\" (keydown.enter)=\"onRegister()\">\r\n              <div class=\"ui-g ui-fluid\" style=\"justify-content: center\">\r\n                  \r\n                  <div  style=\"padding: 0px;\" class=\"ui-g-12\">\r\n                      <input [(ngModel)]=\"user.login\" class=\"post-username\" name=\"username\" type=\"text\" pInputText placeholder=\"Username\" autocomplete=\"off\">\r\n                      <br>\r\n                      <input [(ngModel)]=\"user.password\" class=\"post-username\" name=\"username\" type=\"password\" pInputText placeholder=\"Password\"\r\n                          autocomplete=\"off\">\r\n                      <br>\r\n                              <button class=\"regButton\"  style=\"padding:4%;vertical-align:middle; margin-top: 20px; width: 120px;height: 40px; border-radius: 30px;margin-left: 45px;\"\r\n                              pButton (click)=\"onLogin()\">Sign in</button>\r\n                              <br>\r\n\r\n                               <button class=\"regButton\"  style=\"padding:4%;vertical-align:middle; width: 120px;height: 40px; border-radius: 30px;margin-left: 45px;\"\r\n                              pButton (click)=\"onRegistration()\">Sign up</button> \r\n                      \r\n                              \r\n                  </div>\r\n                  \r\n              </div>\r\n          </form>\r\n      </div>\r\n      <p style=' font-family:Roboto, sans-serif;text-align: center; text-decoration: underline ;text-decoration-color: red ;color:black'>{{errorMessage}}</p>\r\n\r\n  </div>\r\n\r\n\r\n\r\n<!-- <div class=\"outer\">\r\n  <div class=\"logo\">\r\n    <img src=\"assets/images/Logo-Sayme.svg\" style=\"width:280px; display: block; margin-left: auto;margin-right: auto\">\r\n  </div>\r\n  <div class=\"inner\">\r\n    <div class=\"container_with_borders\">\r\n      <form #postForm=\"ngForm\" (keydown.enter)=\"onLogin()\">\r\n        <div class=\"ui-g ui-fluid\" style=\"justify-content: center\">\r\n          <div style=\"padding: 10px;\" class=\"ui-g-12\">\r\n            <input [(ngModel)]=\"user.login\" class=\"post-username\" name=\"username\" type=\"text\" pInputText placeholder=\"Username\" autocomplete=\"off\">\r\n            <br>\r\n            <input [(ngModel)]=\"user.password\" class=\"post-username\" name=\"username\" type=\"password\" pInputText placeholder=\"Password\"\r\n              autocomplete=\"off\">\r\n            <br>\r\n\r\n            <button class=\"regButton\" style=\"padding:4%;vertical-align:middle; margin-top: 20px; width: 120px;height: 40px; border-radius: 30px;margin-left: 45px;\"\r\n              pButton (click)=\"onLogin()\">Sign in</button>\r\n            <button class=\"regButton\" style=\"padding:4%;vertical-align:middle; margin-top: 20px; width: 120px;height: 40px; border-radius: 30px;margin-left: 45px;\"\r\n              pButton (click)=\"onRegistration()\">Sign up</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <p style=' font-family:Roboto, sans-serif;text-align: center; text-decoration: underline ;text-decoration-color: red ;color:black'>{{errorMessage}}</p>\r\n  </div> -->\r\n\r\n\r\n  "

/***/ }),

/***/ "./src/app/authorization/authorization.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisationComponent", function() { return AuthorisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var _node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/login */ "./src/app/Models/login.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthorisationComponent = /** @class */ (function () {
    function AuthorisationComponent(loginService, router, cookieService, userserv) {
        this.loginService = loginService;
        this.router = router;
        this.cookieService = cookieService;
        this.userserv = userserv;
        this.url = '/api/user/authenticate';
        this.usersToSearch = [];
        this.user = new _Models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.timeIt = Object(_node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(1, 10000);
        this.errorMessage = '';
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    AuthorisationComponent.prototype.ngOnInit = function () {
    };
    AuthorisationComponent.prototype.onLogin = function () {
        console.log('sdfsdf');
        this.loginService.postLogin();
        console.log('sdfsdf');
        // if(this.user.login&&this.user.password)
        // {
        //   this.loginService.postLoginUser(this.user)
        //   .subscribe((data:Login)=>this.usersToSearch.push(data));
        // }
        // else{
        //   this.errorMessage='Wrong input!';
        // }
    };
    AuthorisationComponent.prototype.onRegistration = function () {
        this.userserv.getUsers().subscribe();
        //this.router.navigate(['/registration']);
    };
    AuthorisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__(/*! ./authorization.component.html */ "./src/app/authorization/authorization.component.html"),
            styles: [__webpack_require__(/*! ./authorization.component.css */ "./src/app/authorization/authorization.component.css")],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], AuthorisationComponent);
    return AuthorisationComponent;
}());



/***/ }),

/***/ "./src/app/interceptor/interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/interceptor/interceptor.ts ***!
  \********************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var Interceptor = /** @class */ (function () {
    function Interceptor(router) {
        this.router = router;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MzU1NzYzMzMsImV4cCI6MTUzNjE4MTEzMywiaWF0IjoxNTM1NTc2MzMzfQ.8RKSatsDQYRkv4UsDAsfpRjewi_Vgb4nmW0w-elnf8g"
            }
        });
        return next.handle(req).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status == 401)
                    _this.router.navigate(['/login']);
            }
        }));
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\ninput{\r\n    padding: 5px;\r\n    /* border-radius: 5px; \r\n    border-color: rgb(255, 222, 73); */\r\n    width: 200px;\r\n}\r\n\r\np{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/* only dashes '-' (not underscores '_') are allowed in css selector`s names */\r\n\r\n/* just lowercase symbols are allowed in selector`s names */\r\n\r\n.labelSignup{\r\n    font-family: fantasy;\r\n}\r\n\r\n/* fix name (use real logic name instead of abstract)*/\r\n\r\n.button1{\r\n    font-weight: 700;\r\n    color: rgb(10, 3, 3);\r\n    text-decoration: none;\r\n    justify-content: center;\r\n    padding: .4em 1em calc(.8em + 3px);\r\n    background: rgb(255, 222, 73);\r\n    width: 120px;\r\n    height: 35px;\r\n    box-shadow: 0 -3px rgb(185, 177, 53) inset;\r\n    transition: 0.2s;\r\n}\r\n\r\n/* fix name */\r\n\r\n.button2{\r\n    font-weight: 700;\r\n    color: rgb(10, 3, 3);\r\n    text-decoration: none;\r\n    justify-content: center;\r\n    padding: .4em 1em calc(.8em + 3px);\r\n    background: rgb(255, 222, 73);\r\n    width: 150px;\r\n    height: 35px;\r\n    box-shadow: 0 -3px rgb(185, 177, 53) inset;\r\n    transition: 0.2s;\r\n}\r\n\r\n.post-username{\r\n    outline: none; \r\n    color: white;\r\n    background-color: rgb(46, 45, 45);\r\n    /* border-radius: 40px;  */\r\n    border-color: rgb(255, 222, 73);\r\n    border-width: 1px;\r\n    border-top: none;\r\n    border-right: none;\r\n    border-left: none;\r\n    margin-left: 0px;\r\n    margin-top: 20px \r\n}\r\n\r\n/* fix selector`s name with dash separator */\r\n\r\n.regButton{\r\n    color: rgb(10, 3, 3);\r\n    background: rgb(255, 222, 73);\r\n    border-color: black;\r\n    outline: none; \r\n    border-radius: 40px; \r\n    /* margin-left: 0px; */\r\n    margin-top: 20px ;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.post-email{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: 10px;\r\n}\r\n\r\n.code{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: -10px;\r\n}\r\n\r\n.post-pass{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: -10px;\r\n}\r\n\r\n.post-reppas{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: -10px;\r\n}\r\n\r\n.outer{\r\n    display: block;\r\n}\r\n\r\n.inner{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5%;\r\n    margin-bottom: auto;\r\n}\r\n\r\n/* only dashes '-' (not underscores '_') are allowed in css selector`s names */\r\n\r\n.container_with_borders{\r\n    border: 3 px;\r\n    border-color: rgb(46, 45, 45);\r\n    border-style: solid;  \r\n    border-radius: 20px;    \r\n    width: 300px;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: rgb(46, 45, 45);\r\n    margin-bottom:10px; \r\n    /* background-image: url(assets/images/nebo.jpg);*/\r\n    box-shadow:  6px 3px 33px 0px rgba(0,0,0,0.31);\r\n}\r\n\r\n.ui-inputgroup{\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n/* use dashes to separate subnames from each other */\r\n\r\n.buttonCBContainer{\r\n    display: block;\r\n    left: 50%\r\n}\r\n\r\n \r\n    "

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\r\n    <div class=\"logo\">\r\n        <img src=\"assets/images/Logo-Sayme.svg\" style=\"width:280px; display: block; margin-left: auto;margin-right: auto\">\r\n    </div>\r\n    <div class=\"inner\">\r\n        <div class=\"container_with_borders\">\r\n            <form #postForm=\"ngForm\" (keydown.enter)=\"onRegister()\">\r\n                <div class=\"ui-g ui-fluid\" style=\"justify-content: center\">\r\n                    \r\n                    <div  style=\"padding: 0px;\" class=\"ui-g-12\">\r\n                        <input [(ngModel)]=\"newUser.login\" class=\"post-username\" name=\"username\" type=\"text\" pInputText placeholder=\"Username\" autocomplete=\"off\">\r\n                        <br>\r\n                        <input [(ngModel)]=\"newUser.mail\" class=\"post-username\" name=\"username\" type=\"text\" pInputText placeholder=\"Email\" autocomplete=\"off\">\r\n                        <br>\r\n                        <input [(ngModel)]=\"newUser.password\" class=\"post-username\" name=\"username\" type=\"password\" pInputText placeholder=\"Password\"\r\n                            autocomplete=\"off\">\r\n                        <br>\r\n                        <input [(ngModel)]=\"repPassword\" class=\"post-username\" name=\"username\" type=\"password\" pInputText placeholder=\"Repeat password\"\r\n                            autocomplete=\"off\">\r\n                        <br>\r\n                        <ng-template #set>\r\n                                <button class=\"regButton\"  style=\"padding:4%;vertical-align:middle; margin-top: 20px; width: 120px;height: 40px; border-radius: 30px;margin-left: 45px;\"\r\n                                pButton (click)=\"onRegister()\">Get code</button>\r\n                        </ng-template>\r\n\r\n                        \r\n\r\n                            <ng-template #unset>\r\n                                    <input [(ngModel)]=\"enteredCode\" class=\"post-username\" style=\"margin-left: auto;margin-right: auto\" name=\"code\" type=\"text\" pInputText\r\n                                        placeholder=\"Enter code we`ve sent on your mail\" autocomplete=\"off\">\r\n                                    <button pButton type=\"button\" class=\"regButton\" pButton (click)=\"onConfirmCode()\"  style=\"padding:4%; margin-top: 20px; width: 150px;height: 40px;display: block; border-radius: 30px;margin-left: 30px;\">Confirm code</button>\r\n                                </ng-template>\r\n                                \r\n                    <div *ngIf=\"!isVisibleCodeInput; then set else unset\" ></div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </form>\r\n        </div>\r\n        <p style=' font-family:Roboto, sans-serif;text-align: center; text-decoration: underline ;text-decoration-color: red ;color:black'>{{errorMessage}}</p>\r\n    </div>\r\n\r\n "

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _Models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var _node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var _node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Models_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/email */ "./src/app/Models/email.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, feedbackService, router, route, logger) {
        this.userService = userService;
        this.feedbackService = feedbackService;
        this.router = router;
        this.route = route;
        this.logger = logger;
        this.usersToSearch = [];
        this.newUser = new _Models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.errorMessage = '';
        this.isVisibleCodeInput = false;
        this.timeIt = Object(_node_modules_rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_6__["timer"])(1, 10000);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onRegister = function () {
        var _this = this;
        if (this.newUser.password && this.newUser.login && this.newUser.mail && this.repPassword) {
            this.usersToSearch.forEach(function (element) {
                if (element.mail === _this.newUser.mail || element.login === _this.newUser.login) {
                    _this.newUser.id = element.id;
                }
            });
            if (!this.newUser.id) {
                if (this.isEmail(this.newUser.mail)) {
                    if ((this.newUser.password.length >= 7 && this.newUser.password.length <= 18) || (this.newUser.login.length >= 5 && this.newUser.login.length <= 18)) {
                        if (this.newUser.password === this.repPassword) {
                            this.generatedCode = this.randomInt(100000, 999999);
                            this.newUser.register_code = String(this.generatedCode);
                            this.errorMessage = '';
                            this.newUser.active = true;
                            this.newUser.bio = '';
                            this.sendTo = new _Models_email__WEBPACK_IMPORTED_MODULE_7__["Email"](this.newUser.mail, this.newUser.register_code);
                            this.feedbackService.sendCode(this.sendTo)
                                .subscribe();
                            this.logger.debug('code for registration has been sent');
                            this.isVisibleCodeInput = true;
                        }
                        else {
                            this.errorMessage = 'Your password and repeated password don`t match! Try again.';
                            this.logger.info('not matching password and repeated password');
                        }
                    }
                    else {
                        this.errorMessage = 'Wrong length of password or login';
                        this.logger.info('Wrong length of password or login');
                    }
                }
                else {
                    this.errorMessage = 'Please enter the email in the correct format';
                    this.logger.info('Not passed email validation');
                }
            }
            else {
                this.errorMessage = 'We already have user with this email or login! Try again.';
                this.logger.info('existing user or email while registering');
            }
        }
        else {
            this.errorMessage = 'Wrong input!';
            this.logger.info('Some of the fields are empty');
        }
    };
    RegistrationComponent.prototype.onConfirmCode = function () {
        var _this = this;
        if (this.enteredCode) {
            if (this.enteredCode === this.newUser.register_code) {
                this.logger.debug('sent and entered codes are equal');
                this.userService.createUser(this.newUser)
                    .subscribe(function (data) { return _this.usersToSearch.push(data); });
                this.logger.info('new user created');
                this.router.navigate(['/login']);
            }
            else {
                this.errorMessage = 'Entered code and sent code don`t match! Try again';
                this.logger.info('sent and entered codes are different');
            }
        }
        else {
            this.errorMessage = 'Wrong input!';
            this.logger.warn('Some of the fields are empty');
        }
    };
    RegistrationComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) { return _this.usersToSearch = data; });
    };
    RegistrationComponent.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    RegistrationComponent.prototype.isEmail = function (search) {
        var serchfind;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        return serchfind;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, logger) {
        this.http = http;
        this.logger = logger;
        this._url = 'api/feedback';
        this.urlCode = 'api/feedback/sendcode';
    }
    FeedbackService.prototype.sendFeedback = function (feedback) {
        this.logger.debug('sending feedback from service');
        return this.http.post(this._url, feedback);
    };
    FeedbackService.prototype.sendCode = function (email) {
        this.logger.debug('sending code in service');
        return this.http.post(this.urlCode, email);
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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




var LoginService = /** @class */ (function () {
    function LoginService(http, cookieService, router, route) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.route = route;
        this.url = '/api/account';
        this.url1 = '/api/account/authenticate';
    }
    // GET
    LoginService.prototype.getResponce = function () {
        return this.http.get(this.url, { observe: 'response' });
    };
    LoginService.prototype.postLogin = function () {
        return this.http.post(this.url1, '').subscribe(function () { }, function (error) { return console.log(error); });
    };
    // POST
    LoginService.prototype.postLoginUser = function (login) {
        return this.http.post(this.url, login);
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.url = '/api/post';
    }
    // GET
    PostService.prototype.getPosts = function () {
        this.logger.debug('getting posts from service');
        return this.http.get(this.url);
    };
    PostService.prototype.getUserPosts = function (id) {
        return this.http.get(this.url + "/" + id.toString());
    };
    // POST
    PostService.prototype.createPost = function (post) {
        this.logger.debug('creating posts from service');
        return this.http.post(this.url, post);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var langPath = "assets/i18n/" + (lang || 'en') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
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
    function UserService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.url = '/api/user';
    }
    UserService.prototype.getUsers = function () {
        this.logger.debug('get users from service');
        return this.http.get(this.url);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + '/' + id.toString());
    };
    UserService.prototype.createUser = function (user) {
        this.logger.debug('create user from service');
        return this.http.post(this.url, user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.url + '/' + user.id.toString(), user);
    };
    UserService.prototype.updateAvatar = function (id_user, file) {
        var formData = new FormData();
        formData.append('image', file);
        return this.http.put(this.url + '/' + id_user.toString(), formData);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/translate.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/translate.pipe.ts ***!
  \***********************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key] || key;
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/ui/about-user-body/about-user-body.component.css":
/*!******************************************************************!*\
  !*** ./src/app/ui/about-user-body/about-user-body.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/about-user-body/about-user-body.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/about-user-body/about-user-body.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n   <!--Here are user image and its names -->\r\n   <div>\r\n      <div>\r\n         <img src=\"\" alt=\"\">\r\n      </div>\r\n      <div>\r\n        <p>{{ 'Username' | translate }}</p>\r\n        <p>user_nickname</p>\r\n      </div>\r\n   </div>\r\n   <!--Here is a box with user bio-->\r\n   <div>\r\n      <div>\r\n         <p>Some info about this user...</p>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/about-user-body/about-user-body.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/about-user-body/about-user-body.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUserBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUserBodyComponent", function() { return AboutUserBodyComponent; });
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

var AboutUserBodyComponent = /** @class */ (function () {
    function AboutUserBodyComponent() {
    }
    AboutUserBodyComponent.prototype.ngOnInit = function () {
    };
    AboutUserBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-user-body',
            template: __webpack_require__(/*! ./about-user-body.component.html */ "./src/app/ui/about-user-body/about-user-body.component.html"),
            styles: [__webpack_require__(/*! ./about-user-body.component.css */ "./src/app/ui/about-user-body/about-user-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUserBodyComponent);
    return AboutUserBodyComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; bottom: 10px;\">\r\n  <p>2018 SayMe Corp.</p> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/login-registration-header/login-registration-header.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/login-registration-header/login-registration-header.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    font-size: 36px;\r\n    padding-top: 10px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/ui/login-registration-header/login-registration-header.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/ui/login-registration-header/login-registration-header.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"wrap\">\r\n  <header>\r\n    <div class = \"title\">Sayme</div>\r\n  </header>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/login-registration-header/login-registration-header.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ui/login-registration-header/login-registration-header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginRegistrationHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationHeaderComponent", function() { return LoginRegistrationHeaderComponent; });
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

var LoginRegistrationHeaderComponent = /** @class */ (function () {
    function LoginRegistrationHeaderComponent() {
    }
    LoginRegistrationHeaderComponent.prototype.ngOnInit = function () {
    };
    LoginRegistrationHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-registration-header',
            template: __webpack_require__(/*! ./login-registration-header.component.html */ "./src/app/ui/login-registration-header/login-registration-header.component.html"),
            styles: [__webpack_require__(/*! ./login-registration-header.component.css */ "./src/app/ui/login-registration-header/login-registration-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginRegistrationHeaderComponent);
    return LoginRegistrationHeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/navigation-tools/navigation-tools.component.css":
/*!********************************************************************!*\
  !*** ./src/app/ui/navigation-tools/navigation-tools.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: #cccccc;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.search-input{\r\n    width: 100px;\r\n    margin-right: 10px; \r\n    padding: 5px 0;\r\n    padding-left: 10px; \r\n    border:rgb(0, 0, 0) solid 1px; \r\n    border-radius: 20px;\r\n    outline: none;\r\n}\r\n\r\n.search-input:focus{\r\n    width: 200px;\r\n    outline: none;\r\n}\r\n\r\n.wrapper-body{\r\n    min-width: 900px;\r\n    max-width: 900px;\r\n}\r\n\r\n.feedback-text{\r\n    font-size: 12px;\r\n    width: 320px;\r\n    height: 150px;\r\n    resize: none; \r\n    border: rgb(201, 201, 38) solid 1px;\r\n    border-radius: 10px;\r\n    outline: none;\r\n    padding: 10px;\r\n}\r\n\r\n.feedback-email{\r\n    font-size: 12px;\r\n    margin-bottom: 15px;\r\n    border: rgb(201, 201, 38) solid 1px;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    outline: none;\r\n    width: 320px;\r\n}\r\n\r\n.feedback-email:focus, .feedback-text:focus{\r\n    box-shadow: inset 0 0 8px gold;\r\n}\r\n\r\n.feedback-send-button{\r\n    border-radius: 5px;\r\n    background: gold;\r\n    margin-right: 10px; \r\n    height: 30px;\r\n    border: 1px solid gold;\r\n}\r\n\r\n.feedback-send-button:hover{\r\n    background: rgb(192, 164, 6);\r\n}\r\n\r\n.feedback-cancel-button{\r\n    border-radius: 5px;\r\n    background: #eeeeee;\r\n    height: 30px;\r\n    border: 1px solid #eeeeee;\r\n}\r\n\r\n.feedback-cancel-button:hover{\r\n    background: #555555;\r\n}\r\n\r\n.sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ui/navigation-tools/navigation-tools.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/navigation-tools/navigation-tools.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-body\">\r\n\r\n\r\n\r\n<img src=\"assets/images/Logo-Sayme.svg\" style= \"width:280px\">\r\n\r\n\r\n<div class=\"sticky\">\r\n<p-menubar [model]=\"items\" styleClass=\"menu\">\r\n    <input type=\"search\" class=\"search-input\" style=\"font-size: 15px; background: rgb(255, 236, 153);\" pInputText placeholder=\"{{ 'Search...'| translate }}\" >\r\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa fa-bug\"></button>\r\n</p-menubar>\r\n</div>\r\n\r\n\r\n<!-- Feedback modal form -->\r\n<p-dialog header=\"Feedback\" \r\n        [(visible)]=\"isFeedbackFormVisible\" \r\n        [resizable]='false' \r\n        [closeOnEscape]='true' \r\n        [dismissableMask]='true' \r\n        [draggable]='false' \r\n        [modal]=\"true\"            \r\n        [width]=\"350\" \r\n        [minWidth]=\"350\" \r\n        [maximizable]=\"true\">\r\n    <p style=\"margin: 0 0 17px 0;\">{{ 'Left your answer or comment here:' | translate }}</p>\r\n    <form #postForm=\"ngForm\" style=\"margin: 0;\">\r\n        <input pInputText required [(ngModel)]=\"useremail\" name=\"useremail\" type=\"email\" class=\"feedback-email\" placeholder=\"{{ 'your email'| translate }}\" autocomplete=\"off\">\r\n        <textarea required [(ngModel)]=\"feedbackText\" style=\"overflow:hidden;\" class=\"feedback-text\" name=\"feedbackText\" placeholder=\"{{ 'your comment' | translate }}\"></textarea>\r\n        <div style=\"float: right; margin-top: 5px;\">\r\n            <button type=\"button\" class=\"feedback-send-button\" (click)=\"onSendFeedback()\">{{ 'Send' | translate }}</button>\r\n            <button type=\"button\" class=\"feedback-cancel-button\" (click)=\"onCancelFeedBack()\">{{ 'Cancel' | translate }}</button>\r\n        </div>\r\n    </form>\r\n</p-dialog>\r\n\r\n<!-- Successfuly sent feedback modal form -->\r\n<p-dialog header=\"Success!\" \r\n        [(visible)]=\"isSuccessFormVisible\" \r\n        [modal]=\"true\" \r\n        [resizable]='false' \r\n        [responsive]=\"true\" \r\n        [closeOnEscape]='true' \r\n        [dismissableMask]='true' \r\n        [draggable]='false' \r\n        [width]=\"350\" \r\n        [minWidth]=\"200\" \r\n        [minY]=\"70\"\r\n        [maximizable]=\"true\" \r\n        [baseZIndex]=\"10000\">\r\n    <p>{{ 'Report was successfuly sent!' | translate }}</p>\r\n    <div style=\"float: right;\">\r\n        <button type=\"button\" pButton (click)=\"isSuccessFormVisible=false\" label=\"OK\" class=\"ui-button-info\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- Left slide sidebar -->\r\n<p-sidebar [(visible)]=\"opened\" id=\"sidebar\" [baseZIndex]=\"10000\" (onHide)=\"open();\" >\r\n    <h1>\r\n        <a routerLink=\" \" style=\"color: #cccccc;\">{{ 'Username' | translate }}</a>\r\n    </h1>\r\n    <h5>\r\n        <a routerLink=\" \" style=\"color: #cccccc;\">{{ 'Followers' | translate}}:</a>\r\n    </h5>\r\n    <h5>\r\n        <a routerLink=\" \" style=\"color: #cccccc;\">{{ 'Following' | translate}}:</a>\r\n    </h5>\r\n    <button pButton type=\"button\" class=\"ui-button-warning\" style=\"width: 200px; height: 30px; margin: 10px 0px;\">{{ 'Settings' | translate }}</button>\r\n    <br>\r\n    <button pButton type=\"button\" class=\"ui-button-danger\" style=\"width: 200px; height: 30px;\">{{ 'Log out' | translate }}</button>\r\n    <br>\r\n    <br>\r\n    <select name=\"language\" id=\"selectLanguage\" (change)=\"setLang($event.target.value);\">\r\n        <option value=\"en\" selected>{{ 'english' | translate }}</option>\r\n        <option value=\"ua\">{{ 'ukranian' | translate }}</option>\r\n        <option value=\"ru\">{{ 'russian' | translate }}</option>\r\n    </select>\r\n</p-sidebar>\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/navigation-tools/navigation-tools.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/navigation-tools/navigation-tools.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavigationToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationToolsComponent", function() { return NavigationToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _Models_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/email */ "./src/app/Models/email.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translate.service */ "./src/app/services/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationToolsComponent = /** @class */ (function () {
    function NavigationToolsComponent(_feedbackService, translate, router, route, logger) {
        this._feedbackService = _feedbackService;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.logger = logger;
        this.opened = false;
        this.isFeedbackFormVisible = false;
        this.isSuccessFormVisible = false;
        this.feedback = new _Models_email__WEBPACK_IMPORTED_MODULE_3__["Email"]('', '');
        this.feedbackText = '';
        this.useremail = '';
        this.language = '';
    }
    NavigationToolsComponent.prototype.ngOnInit = function () {
        this.selectLanguage();
    };
    //!!!FEATURE!!!
    //switching on navigationbar button`s text 
    NavigationToolsComponent.prototype.selectLanguage = function () {
        var _this = this;
        var navigationItems = [];
        switch (this.language) {
            case 'ru':
                navigationItems = ['Новости', 'Интересное', 'Сказать'];
                break;
            case 'ua':
                navigationItems = ['Новини', 'Цікаве', 'Сказати'];
                break;
            default:
                navigationItems = ['News', 'Intresting', 'Say'];
                break;
        }
        this.items = [
            {
                label: ' ',
                icon: 'fas fa-align-justify',
                command: function (onclick) { _this.open(); }
            },
            {
                label: "" + navigationItems[0],
                routerLink: 'post',
            },
            {
                label: "" + navigationItems[1],
                routerLink: 'interesting'
            },
            {
                label: "" + navigationItems[2],
                routerLink: '**'
            }
        ];
    };
    NavigationToolsComponent.prototype.setLang = function (lang) {
        this.language = lang;
        this.selectLanguage();
        this.translate.use(lang);
    };
    ///opens sidebar with user info
    NavigationToolsComponent.prototype.open = function () {
        this.opened = !this.opened;
        return this.opened;
    };
    //shows feedback dialog
    NavigationToolsComponent.prototype.showDialog = function () {
        this.isFeedbackFormVisible = true;
    };
    //closes feedback dialog (info saves)
    NavigationToolsComponent.prototype.onCancelFeedBack = function () {
        this.isFeedbackFormVisible = false;
    };
    //send feedback to server
    NavigationToolsComponent.prototype.onSendFeedback = function () {
        if (this.feedbackText.length > 10 && this.useremail.length > 3) {
            this.isFeedbackFormVisible = false;
            this.isSuccessFormVisible = true;
            this.feedback = new _Models_email__WEBPACK_IMPORTED_MODULE_3__["Email"](this.useremail, this.feedbackText);
            this._feedbackService.sendFeedback(this.feedback)
                .subscribe();
            this.logger.info('feedback was sent');
            this.feedbackText = '';
            this.useremail = '';
        }
        else
            this.logger.info('Wrong size of entered info in feedback');
    };
    NavigationToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-tools',
            template: __webpack_require__(/*! ./navigation-tools.component.html */ "./src/app/ui/navigation-tools/navigation-tools.component.html"),
            styles: [__webpack_require__(/*! ./navigation-tools.component.css */ "./src/app/ui/navigation-tools/navigation-tools.component.css")],
            providers: [_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]]
        }),
        __metadata("design:paramtypes", [_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            _services_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]])
    ], NavigationToolsComponent);
    return NavigationToolsComponent;
}());



/***/ }),

/***/ "./src/app/ui/post/post.component.css":
/*!********************************************!*\
  !*** ./src/app/ui/post/post.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    padding: 5px;\r\n    border-radius: 5px; \r\n    border: powderblue solid 1px;\r\n}\r\n\r\n.post-text{\r\n    resize: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.post-username{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: -10px;\r\n}\r\n\r\n.post-message{\r\n    outline: none;\r\n    border-radius: 40px;\r\n    margin-right: 20px;\r\n    background:  rgb(255, 236, 153);\r\n    border: none;\r\n}\r\n\r\n.post-message{\r\n    outline: none;\r\n    border-radius: 40px;\r\n    margin-right: 20px;\r\n    background:  rgb(255, 236, 153);\r\n    border: none;\r\n}"

/***/ }),

/***/ "./src/app/ui/post/post.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/post/post.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\r\n    <div class=\"inner\">\r\n        <div class=\"container\">\r\n            <form #postForm=\"ngForm\" (keydown.enter)=\"onSay()\">\r\n                <div class=\"ui-g ui-fluid\" >\r\n                    <div style=\"padding: 10px;\" class=\"ui-g-12\">\r\n                        <input [(ngModel)]=\"newPost.username\" class=\"post-username\" name=\"username\" type=\"text\" pInputText placeholder=\"{{ 'Username' | translate}}\" autocomplete=\"off\">\r\n                        <input [(ngModel)]=\"newPost.message\" class=\"post-message\" name=\"text\" type=\"text\" pInputText placeholder=\"{{ 'Say something...' | translate}}\" autocomplete=\"off\">\r\n                        <button style=\" width: 70px; border-radius: 50px;\" pButton (click)=\"onSay()\" icon=\"fa fa-comment\"></button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <p-dataView [value]=\"posts.reverse()\">\r\n        <ng-template let-post pTemplate=\"listItem\">\r\n            <div class=\"ui-g\" style=\"padding: 0 10px; border-bottom: 1px solid #d9d9d9\">\r\n                <div class=\"ui-g-12 ui-md-12 post-container\">\r\n                    <div class=\"ui-g-12\">\r\n                        <p><b>{{post.username}}</b>:</p> \r\n                        <p><textarea class=\"post-text\" readonly style=\"color: black\">{{post.message}}</textarea></p>\r\n                        <p>{{post.post_date | date: 'dd/MM/yyyy HH:mm'}}</p> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataView>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/post/post.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/post/post.component.ts ***!
  \*******************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _Models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _Models_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/post */ "./src/app/Models/post.ts");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = /** @class */ (function () {
    function PostComponent(postService, userService, logger) {
        this.postService = postService;
        this.userService = userService;
        this.logger = logger;
        this.posts = [];
        this.usersToSearch = [];
        this.newPost = new _Models_post__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        this.newUser = new _Models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.maxUserId = 0;
        this.timeIt = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_5__["timer"])(1, 10000);
    }
    // При первом вызове компонента вызывается метод сервиса, который
    // возвращает все посты, которые он нашел по АПИшке, и добавляет их
    // в локальный массив, который в свою очередь общаеться с формой 
    // хтмл файла.
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeIt.subscribe(function (x) { return _this.loadPosts(); });
    };
    // добавляет новый пост в список постов
    PostComponent.prototype.onSay = function () {
        var _this = this;
        if (this.newPost.username.length > 2 &&
            this.newPost.username.length <= 16 &&
            this.newPost.message.length <= 256 &&
            this.newPost.message.length > 0) {
            this.usersToSearch.forEach(function (element) {
                if (element.login == _this.newPost.username) {
                    _this.newPost.id_user = element.id;
                }
            });
            if (!this.newPost.id_user) {
                this.logger.debug('There are no user with entered login. Creating new user');
                this.newUser.login = this.newPost.username;
                this.newUser.mail = ' ';
                this.newUser.password = ' ';
                this.newUser.bio = ' ';
                this.newUser.register_code = '';
                this.newUser.active = true;
                this.userService.createUser(this.newUser).
                    subscribe(function (data) { return _this.usersToSearch.push(data); });
                this.logger.debug('new user created');
                this.usersToSearch.forEach(function (element) {
                    if (element.id > _this.maxUserId) {
                        _this.maxUserId = element.id;
                    }
                });
                this.newPost.id_user = this.maxUserId + 1;
            }
            else
                this.logger.debug('user with this login exist');
            this.loadPosts();
            this.newPost.post_date = new Date();
            this.postService.createPost(this.newPost)
                .subscribe(function (data) { return _this.posts.push(data); });
            this.logger.info('Added new post');
            this.newPost = new _Models_post__WEBPACK_IMPORTED_MODULE_4__["Post"]();
            this.newUser = new _Models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }
    };
    PostComponent.prototype.loadPosts = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) { return _this.usersToSearch = data; });
        this.postService.getPosts()
            .subscribe(function (data) { return _this.posts = data; });
    };
    PostComponent.prototype.getPostDate = function (date) {
        var yyyy = date.getFullYear().toString();
        var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1).toString(); // getMonth() is zero-based
        var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
        var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours().toString();
        var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes().toString();
        return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/ui/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/ui/post/post.component.css")],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: #cccccc;\r\n}\r\n\r\n\r\n.ui-button-text-icon-left .ui-button-text {\r\n    padding: .25em 1em .25em 1em;\r\n}\r\n\r\n\r\n#userimage{\r\n    width: 30%;\r\n    height: 30%; \r\n    margin: 0 auto; \r\n    float: left;\r\n    margin: 2%;\r\n}\r\n\r\n\r\ninput{\r\n    padding: 5px;\r\n    border-radius: 5px; \r\n    border: powderblue solid 1px;\r\n}\r\n\r\n\r\n.post-text{\r\n    resize: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    border: none;\r\n    box-sizing:border-box;\r\n    outline: none; \r\n}\r\n\r\n\r\n.bio{\r\n    word-wrap: break-word;\r\n    font-family: Roboto, sans-serif;\r\n}\r\n\r\n\r\n.userinfo{\r\n    display: block;\r\n    height: 220px;\r\n}\r\n\r\n\r\n.sub{\r\n    float: right\r\n}\r\n\r\n\r\n.post-username{\r\n    outline: none; \r\n    border-radius: 40px; \r\n    margin: 0 20px; \r\n    margin-left: -10px;\r\n}\r\n\r\n\r\n.post-message{\r\n    outline: none;\r\n    border-radius: 40px;\r\n    margin-right: 20px;\r\n    background:  rgb(255, 236, 153);\r\n    border: none;\r\n}"

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpage/userpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\r\n  <div class=\"userinfo\">\r\n      <br>\r\n          <div style= \"float:left; padding-right:3%\">\r\n                <img id=\"image\" [src]=\"imageData\" style=\" width:240px;\">\r\n          </div>\r\n          <div>\r\n              <div style=\"padding: 10px;\">\r\n                    <h2 style=\"display: inline;\">{{user.login}}</h2> \r\n                    <p-button (click)=\"showProfileSettings()\" icon=\"fas fa-cog\" style=\"float:right\"></p-button>\r\n              </div>\r\n              <br>\r\n              <h4 class=\"bio\">About: {{user.bio}}</h4>\r\n          </div>\r\n  </div>\r\n  \r\n  <form #postForm=\"ngForm\">\r\n      <div class=\"ui-g ui-fluid\" >\r\n        <div style=\"padding: 10px;\" class=\"ui-g-12\">\r\n              <input [(ngModel)]=\"newPost.message\" class=\"post-message\" name=\"text\" type=\"text\" pInputText placeholder=\"Say something...\" autocomplete=\"off\" style=\"width: 35%;\">\r\n          <p-button (click)=\"onSay()\" icon=\"fa fa-comment\" style=\"width:70px;\"></p-button>\r\n          <p-button label=\"Submit\" class=\"sub\"></p-button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n  <p-dataView [value]=\"posts.reverse()\">\r\n      <ng-template let-post pTemplate=\"listItem\">\r\n          <div class=\"ui-g\" style=\"padding: 0 10px; border-bottom: 1px solid #d9d9d9\">\r\n              <div class=\"ui-g-12 ui-md-12 post-container\">\r\n                  <div class=\"ui-g-12\">\r\n                      <p><textarea class=\"post-text\" readonly style=\"color: black\">{{post.message}}</textarea></p>\r\n                      <p style=\"color: black\">{{post.post_date | date: 'dd/MM/yyyy HH:mm'}}</p> \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </ng-template>\r\n  </p-dataView>\r\n</div>\r\n\r\n<p-dialog header=\"Profile settings\" [(visible)]=\"displayProfileSettings\" [width]=\"600\" [draggable]=\"false\" \r\n[dismissableMask]=\"true\" [modal]=\"true\" [responsive]=\"true\" [resizable]=\"false\">\r\n    <p>Avatar:</p>\r\n    <p-fileUpload #form name=\"myfile[]\" customUpload=\"true\" accept=\"image/*\" maxFileSize=\"1000000\"\r\n     (uploadHandler)=\"myUploader($event, form)\" showCancelButton=\"false\"></p-fileUpload>\r\n    <p>About:</p>\r\n    <p><textarea rows=\"4\" maxlength=\"256\" class=\"post-text\" style=\"color: black;\">{{user.bio}}</textarea></p>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _Models_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/post */ "./src/app/Models/post.ts");
/* harmony import */ var _Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/user */ "./src/app/Models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(postService, userService) {
        this.postService = postService;
        this.userService = userService;
        this.posts = [];
        this.user = new _Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.userToChange = new _Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.newPost = new _Models_post__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.displayProfileSettings = false;
    }
    UserpageComponent.prototype.ngOnInit = function () {
        this.loadUserPosts();
    };
    UserpageComponent.prototype.loadUserPosts = function () {
        var _this = this;
        this.userService.getUser(32)
            .subscribe(function (data) {
            _this.user = data;
            _this.getPostsFromService(data);
            _this.imageData = 'data:image/jpg;base64,' + data.avatar;
        }, function (err) { return console.error(err); });
    };
    UserpageComponent.prototype.getPostsFromService = function (user) {
        var _this = this;
        this.postService.getUserPosts(user.id)
            .subscribe(function (data) { return _this.posts = data; });
    };
    // добавляет новый пост в список постов
    UserpageComponent.prototype.onSay = function () {
        var _this = this;
        if (this.newPost.message.length <= 256 &&
            this.newPost.message.length > 0) {
            this.newPost.id_user = this.user.id;
            this.newPost.username = this.user.login;
            this.newPost.post_date = new Date();
            this.postService.createPost(this.newPost)
                .subscribe(function (data) { return _this.posts.push(data); });
            this.newPost = new _Models_post__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        }
    };
    // Открыть диалог настройки аккаунта
    UserpageComponent.prototype.showProfileSettings = function () {
        this.displayProfileSettings = !this.displayProfileSettings;
    };
    UserpageComponent.prototype.myUploader = function (event, form) {
        var _this = this;
        var file = event.files[0];
        console.log("file:", file);
        this.userService.updateAvatar(this.user.id, file)
            .subscribe(function () { return (_this.convertToBase64(file)); }, function (err) { return console.error(err); });
        form.clear();
    };
    UserpageComponent.prototype.convertToBase64 = function (file) {
        var that = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            that.imageData = reader.result.toString();
            that.imageData = that.imageData.replace(/^data:image\/[a-z]+;base64,/, "");
        };
    };
    UserpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! ./userpage.component.html */ "./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserpageComponent);
    return UserpageComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan\Desktop\ISD\Sayme\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map