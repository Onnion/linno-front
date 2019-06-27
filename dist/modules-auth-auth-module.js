(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/auth/components/login/login.component.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");
/* harmony import */ var _common_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/loading/loading.module */ "./src/app/modules/common/loading/loading.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _mat_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _common_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"]
            ],
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/auth/components/login/login.component.ts");

var AuthRoutes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 90px;\n    text-align: center;\n    top: -90px;\n    -webkit-animation-name: card;\n    animation-name: card;\n    -webkit-animation-duration: 600ms;\n    animation-duration: 600ms;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n}\n\n.card .logo {\n    width: 80%;\n}\n\n@-webkit-keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n}\n\n@keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n}\n\n.card-header{\n    position: relative;\n    overflow: hidden;\n    top: -40px;\n    width: 100%;\n    padding: 25px;\n    border-radius: 3px;\n    background: linear-gradient(60deg, rgb(238, 238, 238), #dfdfdf);\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.card-header h4{\n    font-weight: 400;\n    color: #fff;\n    margin-bottom: 25px;\n    margin-top: 5px;\n}\n\n.social-btns i{\n    font-size: 21px;\n    color: #fff;\n}\n\n.social-btns button{\n    margin: 0 8px;\n}\n\n.tip{\n    margin-top: -20px;\n}\n\n.form-row, .card-form, .mat-form-field{\n    width: 100%;\n}\n\n.card-form{\n    padding: 5px;\n}\n\n.form-row{\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-top: 13px;\n}\n\n.form-row i{\n    position: relative;\n    top: -5px;\n    margin-right: 15px;\n    color: #555;\n}\n\n.card-footer{\n    margin: 0px;\n    text-align: center;\n}\n\n/*.img-fluid {*/\n\n/*max-width: 40%!important;*/\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-full\" style=\"background: #2f5584;\">\n  <div class=\"background\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-4 col-md-5 col-sm-12\">\n        <div class=\"card m-0\">\n\n          <app-loading [loading]=\"status.loading\"></app-loading>\n\n          <div class=\"row\" style=\"width: 100%\">\n            <div class=\"col\" style=\"padding: 15px\">\n              <img class=\"logo\" src=\"assets/img/logo.png\" alt=\"Revenda\">\n            </div>\n          </div>\n          <!--<p class=\"tip\">Or Be Classical</p>-->\n          <form [formGroup]=\"form\" (submit)=\"submit()\" (keyup.enter)=\"submit()\">\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Email</mat-label>\n              <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\n              <mat-icon matSuffix>email</mat-icon>\n              <!-- <mat-hint>Hint</mat-hint> -->\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Senha</mat-label>\n              <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\">\n              <mat-icon matSuffix>lock_outline</mat-icon>\n              <!-- <mat-hint>Hint</mat-hint> -->\n            </mat-form-field>\n\n            <div class=\"card-footer\">\n              <button [disabled]=\"status.loading\" style=\"background: #2f5584\" class=\"btn btn-block\"\n                type=\"submit\">{{btn_title}}</button>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/notify/notify.service */ "./src/app/services/notify/notify.service.ts");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../validators */ "./src/app/validators/index.ts");
/* harmony import */ var _app_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.roles */ "./src/app/app.roles.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, fb, router, notify, customValidators, activeRoute) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.notify = notify;
        this.customValidators = customValidators;
        this.activeRoute = activeRoute;
        this.status = { loading: false };
    }
    LoginComponent.prototype.controlStateLogin = function (state) {
        if (state === 'loading') {
            this.status.loading = true;
            this.btn_title = 'Entrando';
        }
        else {
            this.status.loading = false;
            this.btn_title = 'Entrar';
        }
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (!this.status.loading && this.form.valid) {
            this.controlStateLogin('loading');
            var redirect = this.activeRoute.snapshot.params['redirect'];
            var data = this.form.value;
            this.authService.loginUser(data.email, data.password, redirect).subscribe(function (res) { }, function (error) { _this.controlStateLogin('error'); });
        }
    };
    LoginComponent.prototype.initFormControls = function () {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidators.emailFormat]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(["/" + _app_roles__WEBPACK_IMPORTED_MODULE_6__["ROLES_ACL"][this.authService.getDataUser().type].path]);
        }
        this.initFormControls();
        this.btn_title = 'Entrar';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/auth/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _validators__WEBPACK_IMPORTED_MODULE_5__["FormBuilderValidators"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/common/loading/loading.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/common/loading/loading.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  display: flex;\n  vertical-align: middle;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  position: absolute;\n  min-width: 100%;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1);\n  top: 0;\n  z-index: 999;\n}\n"

/***/ }),

/***/ "./src/app/modules/common/loading/loading.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/common/loading/loading.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"loading\">\n  <mat-spinner diameter=\"30\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/common/loading/loading.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/common/loading/loading.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.minHeight = '100%';
        this.display = 'flex';
        this.justifyContent = 'center';
        this.alignItems = 'center';
        this.position = 'absolute';
        this.minWidth = '100%';
        this.left = '0';
        this.top = '0';
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    LoadingComponent.prototype.ngOnChanges = function (changes) {
        var loading = changes.loading;
        this.display = !loading.currentValue ? 'none' : 'flex';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.min-height'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "minHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.justify-content'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.align-items'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.position'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.min-width'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "minWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.left'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "left", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.top'),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/modules/common/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/modules/common/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/modules/common/loading/loading.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/common/loading/loading.module.ts ***!
  \**********************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.component */ "./src/app/modules/common/loading/loading.component.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mat.module */ "./src/app/mat.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mat_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map