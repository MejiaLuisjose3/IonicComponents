import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BotonesPage } from './botones.page';
var routes = [
    {
        path: '',
        component: BotonesPage
    }
];
var BotonesPageModule = /** @class */ (function () {
    function BotonesPageModule() {
    }
    BotonesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BotonesPage]
        })
    ], BotonesPageModule);
    return BotonesPageModule;
}());
export { BotonesPageModule };
//# sourceMappingURL=botones.module.js.map