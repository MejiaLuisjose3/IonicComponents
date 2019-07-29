import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckBoxPage } from './check-box.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: CheckBoxPage
    }
];
var CheckBoxPageModule = /** @class */ (function () {
    function CheckBoxPageModule() {
    }
    CheckBoxPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [CheckBoxPage]
        })
    ], CheckBoxPageModule);
    return CheckBoxPageModule;
}());
export { CheckBoxPageModule };
//# sourceMappingURL=check-box.module.js.map