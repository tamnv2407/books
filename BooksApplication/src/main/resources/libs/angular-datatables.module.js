"use strict";
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_datatables_directive_1 = require("./angular-datatables.directive");
var DataTablesModule = DataTablesModule_1 = (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    return DataTablesModule;
}());
DataTablesModule = DataTablesModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [angular_datatables_directive_1.DataTableDirective],
        exports: [angular_datatables_directive_1.DataTableDirective]
    })
], DataTablesModule);
exports.DataTablesModule = DataTablesModule;
var DataTablesModule_1;
