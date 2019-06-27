(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-clients-clients-module~modules-intern-intern-module"],{

/***/ "./src/app/helpers/animations/animations.helper.ts":
/*!*********************************************************!*\
  !*** ./src/app/helpers/animations/animations.helper.ts ***!
  \*********************************************************/
/*! exports provided: routerTransition, showup, fade, listObjShowupOld, listObjShowup, listNiches, detailExpand, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showup", function() { return showup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listObjShowupOld", function() { return listObjShowupOld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listObjShowup", function() { return listObjShowup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listNiches", function() { return listNiches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailExpand", function() { return detailExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        /* 3 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
        /* 4 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);
var showup = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showup', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20%)' }))
    ])
]);
var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))
    ])
]);
var listObjShowupOld = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listObjShowupOld', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('150ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25,.75,.5,1.25)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-200px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .3, transform: 'translateX(-100px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }),
            ]))
        ]), { optional: true }),
    ])
]);
var listObjShowup = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listObjShowup', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25, .75, .5, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: '0px', width: '70%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .3, height: '10px', width: '80%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, height: '20px', width: '85%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .8, height: '30px', width: '90%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .9, height: '40px', width: '95%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '48px', width: '100%' }),
            ]))
        ]), { optional: true }),
    ])
]);
var listNiches = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listNiches', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('150ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25,.75,.5,1.25)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0,100%,0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: ' translate3d(0,50%,0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: ' translate3d(0,0,0)' }),
            ]))
        ]), { optional: true }),
    ])
]);
var detailExpand = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0', overflow: 'hidden', display: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('325ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);
// @TODO
var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-20%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25,.75,.5,1.25)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.25,.75,.5,1.25)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-20%)' }))
    ])
]);


/***/ }),

/***/ "./src/app/helpers/list/list-components.helpers.ts":
/*!*********************************************************!*\
  !*** ./src/app/helpers/list/list-components.helpers.ts ***!
  \*********************************************************/
/*! exports provided: ComponentDataSource, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDataSource", function() { return ComponentDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var src_app_utils_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/scroll */ "./src/app/utils/scroll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComponentDataSource = /** @class */ (function (_super) {
    __extends(ComponentDataSource, _super);
    function ComponentDataSource(dataList, isExpandable) {
        var _this = _super.call(this) || this;
        _this.data = dataList;
        _this.isExpandable = isExpandable;
        return _this;
    }
    ComponentDataSource.prototype.connect = function () {
        var rows = [];
        if (this.isExpandable) {
            this.data.forEach(function (element) { return rows.push(element, { detailRow: true, element: element }); });
        }
        else {
            this.data.forEach(function (element) { return rows.push(element); });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(rows);
    };
    ComponentDataSource.prototype.disconnect = function () { };
    return ComponentDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));

var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.methodLoad = 'getData';
        this.status_form = { loading: false };
        this.doneLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSize = 5;
        this.page = 1;
        this.orderBy = 'registered_at';
        this.sortedBy = 'desc';
        this.pageSizeOptions = [5, 12, 25, 50, 100, 1000, 10000];
        this.doneAnimation = false;
        this.changePagination = false;
    }
    ListComponent.prototype.subscribeFilters = function () {
        var _this = this;
        this.filterService.filter.subscribe(function (filters) {
            _this.page = 1;
            _this.loadData();
        });
    };
    ListComponent.prototype.setIsMobile = function ($event) {
        var width = $event ? $event.target.innerWidth : window.innerWidth;
        var isMobile = width <= 991;
        if ((this.isMobile != isMobile)) {
            this.dataSource = new ComponentDataSource(this.componentData, isMobile && this.expandedElement);
        }
        if (isMobile) {
            this.displayedColumns = ['show', 'data', 'status', 'number'];
        }
        else {
            this.displayedColumns = ['data', 'status', 'media', 'number'];
        }
        this.isMobile = isMobile;
    };
    ListComponent.prototype.getSearchableFields = function () {
        return "Pesquisa pode ser realizada pelos campos " + this.searchableFields.map(function (field) { return field; }).join(', ');
    };
    ListComponent.prototype.showPagination = function () {
        this.doneAnimation = true;
    };
    ListComponent.prototype.setSort = function ($event) {
        // {active: "data", direction: "asc"}
        this.orderBy = $event.active === 'data' ? 'registered_at' : $event.active;
        this.sortedBy = $event.direction || 'desc';
        this.loadData();
    };
    ListComponent.prototype.isExpansionDetailRow = function (i, row) {
        return row.hasOwnProperty('detailRow');
    };
    ListComponent.prototype.loadData = function (list, mobile) {
        var _this = this;
        this.status_form.loading = true;
        var options = __assign({}, this.options);
        if (!this.safe_pagination) {
            options = __assign({}, this.options, { orderBy: this.orderBy, sortedBy: this.sortedBy, page: this.page, pageSize: this.pageSize });
        }
        if (list) {
            this.componentData = list;
            this.filtredComponentData = list;
            this.setIsMobile();
            this.status_form.loading = false;
            this.doneLoad.emit(true);
            if (this.idTable) {
                Object(src_app_utils_scroll__WEBPACK_IMPORTED_MODULE_4__["scroll"])(this.idTable);
            }
            if (this.changePagination) {
                this.showPagination();
            }
        }
        else {
            this.service[this.methodLoad](options).subscribe(function (data) {
                if (!_this.safe_pagination) {
                    var pagination = data.meta.pagination;
                    _this.setPagination(pagination['total'], pagination['current_page'], pagination['per_page']);
                }
                _this.componentData = data.data;
                _this.filtredComponentData = data.data;
                _this.dataSource = new ComponentDataSource(data.data, mobile);
                _this.setIsMobile();
                _this.status_form.loading = false;
                _this.doneLoad.emit(true);
                if (_this.idTable) {
                    Object(src_app_utils_scroll__WEBPACK_IMPORTED_MODULE_4__["scroll"])(_this.idTable);
                }
                if (_this.changePagination) {
                    _this.showPagination();
                }
            }, function (err) {
                _this.status_form.loading = false;
            });
        }
    };
    ListComponent.prototype.setPagination = function (length, startIndex, pageSize) {
        this.length = length;
        this.page = startIndex;
        this.pageSize = pageSize;
    };
    ListComponent.prototype.onPaginateChange = function (event) {
        if (this.pageSize !== event.pageSize) {
            this.doneAnimation = false;
        }
        this.page = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        this.loadData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"])
    ], ListComponent.prototype, "pagination", void 0);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/helpers/pipes/phone/phone.pipe.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/helpers/pipes/phone/phone.pipe.module.ts ***!
  \**********************************************************/
/*! exports provided: PhonePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipeModule", function() { return PhonePipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.pipe */ "./src/app/helpers/pipes/phone/phone.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhonePipeModule = /** @class */ (function () {
    function PhonePipeModule() {
    }
    PhonePipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]
            ]
        })
    ], PhonePipeModule);
    return PhonePipeModule;
}());



/***/ }),

/***/ "./src/app/helpers/pipes/phone/phone.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/pipes/phone/phone.pipe.ts ***!
  \***************************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (phone, args) {
        var number = '';
        number = phone.length > 11 ? phone.slice(phone.length > 13 ? 4 : 2) : phone;
        number = "(" + number.slice(0, 2) + ") " + number.slice(2);
        return number;
    };
    PhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/modules/common/dashboard/budget/budget.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/common/dashboard/budget/budget.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/common/dashboard/budget/budget.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/common/dashboard/budget/budget.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@detailExpand]=\"(shouldShowBudget && data) ? 'expanded' : 'collapsed'\" class=\"row\">\n    <div class=\"col\">\n        <div class=\"card\" style=\"border-radius: unset!important; margin-bottom: 0!important;\">\n            <app-loading [loading]=\"loading\"></app-loading>\n            <div class=\"card-header card-header-success card-header-icon\">\n                <h6 class=\"card-title\">\n                    Orçamento do mês de {{getMonth()}}\n                </h6>\n            </div>\n            <div class=\"card-body\" style=\"background: #FFFFFF\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"d-flex align-items-center justify-content-space-between\">\n                            <span style=\"margin: 0 10px\">0%</span>\n                            <mat-progress-bar mode=\"determinate\" [value]=\"data\"></mat-progress-bar>\n                            <span style=\"margin: 0 10px\">100%</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/common/dashboard/budget/budget.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/common/dashboard/budget/budget.component.ts ***!
  \*********************************************************************/
/*! exports provided: BudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetComponent", function() { return BudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/animations/animations.helper */ "./src/app/helpers/animations/animations.helper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/account/account.service */ "./src/app/services/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BudgetComponent = /** @class */ (function () {
    function BudgetComponent(filterService, accountService) {
        this.filterService = filterService;
        this.accountService = accountService;
        this.subscribed = false;
        this.shouldShowBudget = false;
        this.loading = false;
    }
    BudgetComponent.prototype.subscribeFiltersUi = function () {
        var _this = this;
        this.filterEvents = this.filterService.filter.subscribe(function (filters) {
            _this.shouldShowBudget = filters.times.id === 'THIS_MONTH';
            if (filters.account && filters.account.id && (_this.account_id !== filters.account.id) && _this.shouldShowBudget) {
                _this.account_id = filters.account.id;
                _this.getBudget();
            }
        });
    };
    BudgetComponent.prototype.getBudget = function () {
        var _this = this;
        this.loading = true;
        this.accountService.getBudget().subscribe(function (data) {
            _this.data = data && data.percentage_consumed || null;
            _this.loading = false;
        }, function (error) {
            _this.loading = true;
            console.log(error);
        });
    };
    BudgetComponent.prototype.getMonth = function () {
        return moment__WEBPACK_IMPORTED_MODULE_3__().format('MMMM');
    };
    BudgetComponent.prototype.ngOnInit = function () {
        this.subscribeFiltersUi();
    };
    BudgetComponent.prototype.ngOnDestroy = function () {
        this.account_id = null;
        this.filterEvents.unsubscribe();
    };
    BudgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-budget',
            template: __webpack_require__(/*! ./budget.component.html */ "./src/app/modules/common/dashboard/budget/budget.component.html"),
            styles: [__webpack_require__(/*! ./budget.component.css */ "./src/app/modules/common/dashboard/budget/budget.component.css")],
            animations: [src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__["detailExpand"]]
        }),
        __metadata("design:paramtypes", [src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"], src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], BudgetComponent);
    return BudgetComponent;
}());



/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-text {\n    color: #3c4858;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 0 !important;\n  }\n  "

/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"border-radius: unset!important\" style=\"margin-bottom: 0!important; border-radius: unset;\">\n    <app-loading [loading]=\"loading\"></app-loading>\n  \n    <div class=\"card-header card-header-success card-header-icon d-flex justify-content-between align-items-center\">\n      <h6 class=\"card-title\">{{title}}</h6>\n      <app-problem-bullet (message)=\"showMessage($event)\" *ngIf=\"showBullet()\"></app-problem-bullet>\n  \n    </div>\n    <div class=\"card-body d-flex align-items-end\" style=\"background: #FFFFFF\">\n  \n      <div class=\"row\"  style=\"width: 100%\">\n        <div class=\"col\">\n          <h2 style=\"color:#3145a9; font-size: 2rem; font-weight: 900;\">\n            <!-- <ng2-odometer *ngIf=\"!(_data === '-')\" [number]=\"_data\" [format]=\"'(.ddd)'\" [animation]=\"'count'\" [value]=\"0\" [auto]=\"true\">\n            </ng2-odometer> -->\n  \n            <span>{{_data}}</span>\n          </h2>\n  \n          <p class=\"error-text\" *ngIf=\"!loading && bullet && shouldShowBullet && message\">\n            Por falha na sua linha telefônica, estamos com dificuldades de atualizar o número de ligações.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var ng2_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-acl */ "./node_modules/ng2-acl/dist/index.js");
/* harmony import */ var ng2_acl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_acl__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardCardComponent = /** @class */ (function () {
    function DashboardCardComponent(filterService, aclService) {
        this.filterService = filterService;
        this.aclService = aclService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.message = false;
        this.loading = true;
        this.shouldShowBullet = false;
    }
    DashboardCardComponent.prototype.showMessage = function ($event) {
        if (!(this.aclService.can('set-bullet'))) {
            this.message = $event;
        }
    };
    DashboardCardComponent.prototype.showBullet = function () {
        return !this.loading && this.bullet && (this.shouldShowBullet || this.aclService.can('set-bullet'));
    };
    DashboardCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterEvents = this.filterService.filter.subscribe(function (filters) {
            if (filters.account && filters.account.id) {
                _this.shouldShowBullet = filters.account.status_call;
                if (!(_this.observable) && _this.method && _this.service) {
                    _this.loading = true;
                    _this.service[_this.method]().subscribe(function (_data) {
                        _this.loading = false;
                        _this._data = (_data && _data.meta) && _data.meta.pagination.total;
                    }, function (error) {
                        _this.loading = false;
                        console.log(error);
                    });
                }
                else {
                    _this.loading = true;
                    _this.change.emit(true);
                }
            }
        });
    };
    DashboardCardComponent.prototype.ngOnChanges = function (changes) {
        if (this.observable && changes.data && changes.data.currentValue) {
            this._data = changes.data.currentValue.error ? '-' : changes.data.currentValue[this.name];
            this.loading = false;
        }
    };
    DashboardCardComponent.prototype.ngOnDestroy = function () {
        this.filterEvents.unsubscribe();
        this.filterService.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", String)
    ], DashboardCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bullet'),
        __metadata("design:type", Boolean)
    ], DashboardCardComponent.prototype, "bullet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", String)
    ], DashboardCardComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('method'),
        __metadata("design:type", String)
    ], DashboardCardComponent.prototype, "method", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service'),
        __metadata("design:type", Object)
    ], DashboardCardComponent.prototype, "service", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], DashboardCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('observable'),
        __metadata("design:type", Object)
    ], DashboardCardComponent.prototype, "observable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('changeFilter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DashboardCardComponent.prototype, "change", void 0);
    DashboardCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-card',
            template: __webpack_require__(/*! ./dashboard-card.component.html */ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-card.component.css */ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"], ng2_acl__WEBPACK_IMPORTED_MODULE_2__["AclService"]])
    ], DashboardCardComponent);
    return DashboardCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-card/dashboard-card.component */ "./src/app/modules/common/dashboard/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/common/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead-list/lead-list.component */ "./src/app/modules/common/dashboard/lead-list/lead-list.component.ts");
/* harmony import */ var src_app_mat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _problem_bullet_problem_bullet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./problem-bullet/problem-bullet.component */ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.ts");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.module */ "./src/app/modules/common/loading/loading.module.ts");
/* harmony import */ var _budget_budget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./budget/budget.component */ "./src/app/modules/common/dashboard/budget/budget.component.ts");
/* harmony import */ var src_app_helpers_pipes_phone_phone_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/helpers/pipes/phone/phone.pipe.module */ "./src/app/helpers/pipes/phone/phone.pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__["DashboardCardComponent"],
                _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_4__["LeadListComponent"],
                _problem_bullet_problem_bullet_component__WEBPACK_IMPORTED_MODULE_6__["ProblemBulletComponent"],
                _budget_budget_component__WEBPACK_IMPORTED_MODULE_8__["BudgetComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_mat_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"],
                src_app_helpers_pipes_phone_phone_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PhonePipeModule"]
            ],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard/dashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard/dashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"idAccount\">\n    <app-dashboard-card (changeFilter)=\"getReports()\" [@detailExpand]=\"idAccount ? 'expanded' : 'collapsed'\" *ngFor=\"let card of cards\"\n        [title]=\"card.title\" [bullet]=\"card.bullet\" [name]=\"card.name\" [data]=\"googleReposts\" class=\"d-flex col-md-3 col-sm-6 col-12\" [method]=\"card.method\"\n        [observable]=\"card.observable\" [service]=\"card.service\"></app-dashboard-card>\n</div>\n\n<app-budget></app-budget>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <app-lead-list></app-lead-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/common/dashboard/dashboard/dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/animations/animations.helper */ "./src/app/helpers/animations/animations.helper.ts");
/* harmony import */ var src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var src_app_services_google_google_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(googleService, filterService, accountService) {
        this.googleService = googleService;
        this.filterService = filterService;
        this.accountService = accountService;
        this.cards = [
            { observable: true, name: "impressions", title: "Quantidade de vezes que o anúncio apareceu" },
            { observable: true, name: "clicks", title: "Cliques no anúncio" },
            { method: 'getCallsAnswereds', bullet: true, service: this.accountService, name: "calls", title: "Ligações Atendidas" },
            { method: 'getCallsMissed', service: this.accountService, name: "calls", title: "Ligações Não Atendidas" }
        ];
        this.shouldShowBudget = false;
    }
    DashboardComponent.prototype.getReports = function () {
        var _this = this;
        this.googleService.getReports().subscribe(function (data) {
            _this.googleReposts = data.attributes ? data.attributes : data;
        }, function (error) { return console.log(error); });
    };
    DashboardComponent.prototype.subscribeFiltersUi = function () {
        var _this = this;
        this.filterEvents = this.filterService.filter.subscribe(function (filters) {
            _this.shouldShowBudget = filters.times.id === 'THIS_MONTH';
            if (filters.account && filters.account.id) {
                _this.idAccount = filters.account.id;
                _this.getReports();
            }
        });
    };
    DashboardComponent.prototype.getMonth = function () {
        return moment__WEBPACK_IMPORTED_MODULE_5__().format('MMMM');
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.subscribeFiltersUi();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.filterEvents.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/common/dashboard/dashboard/dashboard.component.html"),
            animations: [src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__["detailExpand"]]
        }),
        __metadata("design:paramtypes", [src_app_services_google_google_service__WEBPACK_IMPORTED_MODULE_4__["GoogleService"], src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"], src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/common/dashboard/lead-list/lead-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/lead-list/lead-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google {\n    color: rgb(221, 75, 57);\n  }\n  \n  .hidden {\n    display: none!important;\n  }\n  \n  .facebook {\n    color: rgb(59, 89, 152);\n  }\n  \n  .mat-table {\n    overflow: auto;\n  }\n  \n  .element-row {\n    position: relative;\n  }\n  \n  .element-row.disabled {\n    background: rgba(255, 255, 255, 0.3) !important;\n  }\n  \n  .element-row:not(.expanded) {\n    cursor: pointer;\n  }\n  \n  .element-row:not(.expanded):hover {\n    background: #f5f5f5 !important;\n  }\n  \n  .element-row.expanded {\n    border-bottom-color: transparent;\n  }\n  \n  .element-row.expanded .mat-icon.material-icons {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    transition: 0.3s all;\n  }\n  \n  .element-row:not(.expanded) .mat-icon.material-icons {\n    transition: 0.3s all;\n  }\n  "

/***/ }),

/***/ "./src/app/modules/common/dashboard/lead-list/lead-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/lead-list/lead-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"position: relative; margin-bottom: 0!important; border-radius: unset; margin-top: 30px;\">\n    <app-loading [loading]=\"status_form.loading\"></app-loading>\n    <div class=\"card-header card-header-success card-header-icon\">\n        <h6 class=\"card-title\">Ligações</h6>\n    </div>\n    <div *ngIf=\"!isMobile && componentData && (componentData.length > 0)\" id=\"table\" class=\"table-responsive\">\n        <mat-table style=\"background: transparent; overflow-x: hidden; min-width: 800px;\" matSort\n            (matSortChange)=\"setSort($event)\" [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"data\">\n                <mat-header-cell [style.flex]=\"'0 0 150px'\" style=\"background: #FFFFFF\" mat-sort-header=\"data\"\n                    *matHeaderCellDef> Data </mat-header-cell>\n                <mat-cell [style.flex]=\"'0 0 150px'\" *matCellDef=\"let element\">\n                    {{element.registered_at | date:'dd/MM/yyyy'}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <mat-header-cell style=\"background: #FFFFFF\" [style.flex]=\"'0 0 100px'\" mat-sort-header=\"status\"\n                    *matHeaderCellDef> Status </mat-header-cell>\n                <mat-cell [style.flex]=\"'0 0 100px'\" *matCellDef=\"let element\">\n                    {{element.status | titlecase}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"media\">\n                <mat-header-cell class=\"justify-content-center\" style=\"background: #FFFFFF\" *matHeaderCellDef>\n                    Atendimento </mat-header-cell>\n                <mat-cell class=\"justify-content-center\" *matCellDef=\"let element\">\n                    <audio *ngIf=\"element.status.toUpperCase() === 'ATENDIDA'\" controls controlsList=\"nodownload\"\n                        style=\"width: 350px;\">\n                        <source [src]=\"element.url\" type=\"audio/mpeg\">Your browser does not\n                        support the audio element.\n                    </audio>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"number\">\n                <mat-header-cell class=\"justify-content-end\" [style.flex]=\"'0 0 200px'\" style=\"background: #FFFFFF\"\n                    *matHeaderCellDef> Número </mat-header-cell>\n                <mat-cell class=\"justify-content-end\" [style.flex]=\"'0 0 200px'\" *matCellDef=\"let element\">\n                    {{element.from | phone}}\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n            <mat-row *matRowDef=\"let row; let element; columns: displayedColumns;\" class=\"element-row\"\n                [class.disabled]=\"element.status.toUpperCase() !== 'ATENDIDA'\"\n                style=\"padding-top:10px; padding-bottom:10px; height: 80px; min-height: 0px!important; margin: 10px auto; border-radius: 6px; background: #FFFFFF;\">\n            </mat-row>\n\n        </mat-table>\n\n        <mat-paginator *ngIf=\"componentData && !safe_pagination\" #pagination [length]=\"length\" [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPaginateChange($event)\">\n        </mat-paginator>\n\n    </div>\n\n    <div *ngIf=\"isMobile && componentData && (componentData.length > 0)\" id=\"table\" class=\"table-responsive\">\n        <mat-table style=\"background: transparent; overflow-x: hidden\" matSort (matSortChange)=\"setSort($event)\" #table\n            [dataSource]=\"dataSource\" (@listObjShowup.done)=\"showPagination()\" [@listObjShowup]=\"componentData.length\">\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"show\">\n                <mat-header-cell style=\"background: #FFFFFF\" [style.flex]=\"'0 0 50px'\" *matHeaderCellDef>\n                </mat-header-cell>\n                <mat-cell [style.font-size]=\"'11px'\" [style.flex]=\"'0 0 50px'\" *matCellDef=\"let element\">\n                    <mat-icon *ngIf=\"element.status.toUpperCase() === 'ATENDIDA'\">keyboard_arrow_down</mat-icon>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"data\">\n                <mat-header-cell style=\"background: #FFFFFF\" mat-sort-header=\"data\" *matHeaderCellDef> Data\n                </mat-header-cell>\n                <mat-cell [style.font-size]=\"'11px'\" *matCellDef=\"let element\">\n                    {{element.registered_at | date:'dd/MM - hh:mm'}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <mat-header-cell style=\"background: #FFFFFF\" mat-sort-header=\"status\" *matHeaderCellDef> Status\n                </mat-header-cell>\n                <mat-cell [style.font-size]=\"'11px'\" *matCellDef=\"let element\">\n                    {{element.status | titlecase}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"number\">\n                <mat-header-cell class=\"justify-content-end\" style=\"background: #FFFFFF\" *matHeaderCellDef> Número\n                </mat-header-cell>\n                <mat-cell [style.font-size]=\"'11px'\" class=\"justify-content-end\" *matCellDef=\"let element\">\n                    {{element.from | phone}}\n                </mat-cell>\n            </ng-container>\n\n\n            <!-- Expanded Content Column - The detail row is made up of this one column -->\n            <ng-container matColumnDef=\"expandedDetail\">\n                <mat-header-cell class=\"justify-content-center\" style=\"background: #FFFFFF\" *matHeaderCellDef>\n                    Atendimento </mat-header-cell>\n                <mat-cell class=\"justify-content-center\" *matCellDef=\"let element\">\n                    <audio controls controlsList=\"nodownload\" style=\"width: 100%;\">\n                        <source [src]=\"element.element.url\" type=\"audio/mpeg\">Your browser does not\n                        support the audio element.\n                    </audio>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n            <mat-row *matRowDef=\"let row; let element; columns: displayedColumns;\" matRipple class=\"element-row\"\n                [class.expanded]=\"expandedElement == row\"\n                [class.disabled]=\"element.status.toUpperCase() !== 'ATENDIDA'\"\n                (click)=\"expandedElement = expandedElement === row ? null : row\"\n                [style.border-bottom-left-radius]=\"row == expandedElement ? '0px' : '6px'\"\n                [style.border-bottom-right-radius]=\"row == expandedElement ? '0px' : '6px'\"\n                style=\"cursor: pointer; height: 48px; min-height: 0px!important; margin: 10px auto; border-radius: 6px; background: #FFFFFF;\">\n            </mat-row>\n\n            <mat-row *matRowDef=\"let row; let element; columns: ['expandedDetail']; when: isExpansionDetailRow\"\n                [class.hidden]=\"element.element.status.toUpperCase() !== 'ATENDIDA'\"\n                [@detailExpand]=\"row.element == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; margin: -10px 0px 10px 0px; background: #FFFFFF\">\n            </mat-row>\n\n        </mat-table>\n\n        <mat-paginator *ngIf=\"componentData && !safe_pagination\" #pagination [length]=\"length\" [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPaginateChange($event)\">\n        </mat-paginator>\n\n    </div>\n\n    <div *ngIf=\"(!componentData || !(componentData.length > 0)) && !status_form.loading\" id=\"table\"\n        class=\"table-responsive\">\n        <h6 class=\"text-center\" style=\"background: #FFF; padding: 15px;\">Nenhuma ligação registrada</h6>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/common/dashboard/lead-list/lead-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/lead-list/lead-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: LeadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadListComponent", function() { return LeadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_list_list_components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/list/list-components.helpers */ "./src/app/helpers/list/list-components.helpers.ts");
/* harmony import */ var src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/animations/animations.helper */ "./src/app/helpers/animations/animations.helper.ts");
/* harmony import */ var src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadListComponent = /** @class */ (function (_super) {
    __extends(LeadListComponent, _super);
    function LeadListComponent(accountService, $filterService) {
        var _this = _super.call(this) || this;
        _this.accountService = accountService;
        _this.$filterService = $filterService;
        _this.displayedColumns = ['data', 'status', 'media', 'number'];
        return _this;
    }
    LeadListComponent.prototype.initListComponentConfigs = function () {
        this.service = this.accountService;
        this.filterService = this.$filterService;
        this.expandedElement = true;
        this.methodLoad = 'getCalls';
    };
    LeadListComponent.prototype.subscribeFiltersUi = function () {
        var _this = this;
        this.filterEvents = this.filterService.filter.subscribe(function (filter) {
            if (filter.account) {
                _this.page = 1;
                _this.account_id = filter.account.id;
                _this.options = { account_id: filter.account.id };
                _this.loadData(null, window.innerWidth <= 991);
            }
        });
    };
    LeadListComponent.prototype.onresize = function ($event) {
        this.setIsMobile($event);
    };
    LeadListComponent.prototype.ngOnInit = function () {
        this.initListComponentConfigs();
        this.subscribeFiltersUi();
    };
    LeadListComponent.prototype.ngOnDestroy = function () {
        this.filterService.clear();
        this.filterEvents.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LeadListComponent.prototype, "onresize", null);
    LeadListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead-list',
            template: __webpack_require__(/*! ./lead-list.component.html */ "./src/app/modules/common/dashboard/lead-list/lead-list.component.html"),
            styles: [__webpack_require__(/*! ./lead-list.component.css */ "./src/app/modules/common/dashboard/lead-list/lead-list.component.css")],
            providers: [src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]],
            animations: [src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__["listObjShowup"], src_app_helpers_animations_animations_helper__WEBPACK_IMPORTED_MODULE_2__["detailExpand"]]
        }),
        __metadata("design:paramtypes", [src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"]])
    ], LeadListComponent);
    return LeadListComponent;
}(src_app_helpers_list_list_components_helpers__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]));



/***/ }),

/***/ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bullet {\n  margin-top: 15px;\n  background: rgb(253, 147, 9);\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.bullet::before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  position: absolute;\n  /* background: rgba(253, 147, 9, 0.5); */\n  z-index: -1;\n  -webkit-animation: pulse 1s 3 ease-out;\n          animation: pulse 1s 3 ease-out;\n\n}\n\n.bullet::after {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  position: absolute;\n  /* background: rgba(253, 147, 9, 0.5); */\n  z-index: -1;\n  -webkit-animation: pulse 1s 3 ease-out;\n          animation: pulse 1s 3 ease-out;\n\n}\n\n.bullet span {\n  font-family: \"Helvetica Neue\", \"Helvetica\", sans-serif;\n  font-size: 18px;\n  font-weight: bolder;\n  -webkit-font-feature-settings: \"lnum\";\n          font-feature-settings: \"lnum\";\n  fill: white;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(253, 147, 9, 0.4);\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(253, 147, 9, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(253, 147, 9, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 147, 9, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(253, 147, 9, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(253, 147, 9, 0);\n  }\n}\n\n.round {\n  position: relative;\n}\n\n.round label {\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 28px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 28px;\n  margin: 8px 0px;\n}\n\n.round label:after {\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  content: \"\";\n  height: 6px;\n  left: 7px;\n  opacity: 0;\n  position: absolute;\n  top: 8px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  width: 12px;\n}\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden;\n}\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: rgb(253, 147, 9);\n  border-color: rgb(253, 147, 9);\n}\n\n.round input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n}\n\nbody {\n  background-color: #f1f2f3;\n}"

/***/ }),

/***/ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"aclService.can('see-bullet')\" (click)=\"activeMessage()\" class=\"bullet\" title=\"Ver mensagem\">\n  <span>i</span>\n</div>\n\n<div *ngIf=\"aclService.can('set-bullet')\" class=\"container\" title=\"Ativar ou desativar mensagem de aviso sobre PhoneTrack\" >\n  <div class=\"round\">\n    <input (change)=\"activeMessage()\" [checked]=\"status\" type=\"checkbox\" id=\"checkbox\" />\n    <label for=\"checkbox\"></label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProblemBulletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemBulletComponent", function() { return ProblemBulletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-acl */ "./node_modules/ng2-acl/dist/index.js");
/* harmony import */ var ng2_acl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_acl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProblemBulletComponent = /** @class */ (function () {
    function ProblemBulletComponent(aclService, filterService, accountService) {
        this.aclService = aclService;
        this.filterService = filterService;
        this.accountService = accountService;
        this.message = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProblemBulletComponent.prototype.activeMessage = function (a) {
        this.status = !this.status;
        this.message.emit(this.aclService.can('see-bullet') ? !this.status : this.status);
        if (this.aclService.can('set-bullet')) {
            this.accountService.setProblemAccountCalls(this.filterService.getAccount().id, { status_call: this.status }).subscribe(function (res) { }, function (error) { return console.log(error); });
        }
    };
    ProblemBulletComponent.prototype.ngOnInit = function () {
        this.status = this.filterService.getAccount().status_call;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('message'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProblemBulletComponent.prototype, "message", void 0);
    ProblemBulletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-bullet',
            template: __webpack_require__(/*! ./problem-bullet.component.html */ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.html"),
            styles: [__webpack_require__(/*! ./problem-bullet.component.css */ "./src/app/modules/common/dashboard/problem-bullet/problem-bullet.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_acl__WEBPACK_IMPORTED_MODULE_1__["AclService"], src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"], src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], ProblemBulletComponent);
    return ProblemBulletComponent;
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



/***/ }),

/***/ "./src/app/services/google/google.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/google/google.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _filter_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter/filter.service */ "./src/app/services/filter/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoogleService = /** @class */ (function () {
    function GoogleService(http, filterService) {
        this.http = http;
        this.filterService = filterService;
        this.entity = 'google-report';
    }
    GoogleService.prototype.generateGoogleReportsObject = function () {
        return {
            "range": this.filterService.getTime().id,
            "account_id": this.filterService.getAccount().id
        };
    };
    GoogleService.prototype.getReports = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_URL + "/api/" + _this.entity, _this.generateGoogleReportsObject()).subscribe(function (data) { return observer.next(data.data); }, function (error) { return observer.error(error); });
        });
    };
    GoogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _filter_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"]])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/app/utils/scroll.ts":
/*!*********************************!*\
  !*** ./src/app/utils/scroll.ts ***!
  \*********************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
var scroll = function (id) {
    setTimeout(function () {
        var element = document.getElementById('table');
        var options = {
            block: "start",
            behavior: "smooth"
        };
        element.scrollIntoView(options);
    }, 100);
};


/***/ })

}]);
//# sourceMappingURL=modules-clients-clients-module~modules-intern-intern-module.js.map