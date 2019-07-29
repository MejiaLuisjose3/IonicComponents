import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AvatarPage } from './avatar.page';
var routes = [
    {
        path: '',
        component: AvatarPage
    }
];
var AvatarPageModule = /** @class */ (function () {
    function AvatarPageModule() {
    }
    AvatarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AvatarPage]
        })
    ], AvatarPageModule);
    return AvatarPageModule;
}());
export { AvatarPageModule };
//# sourceMappingURL=avatar.module.js.map