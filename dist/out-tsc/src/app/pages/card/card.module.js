import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardPage } from './card.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: CardPage
    }
];
var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [CardPage]
        })
    ], CardPageModule);
    return CardPageModule;
}());
export { CardPageModule };
//# sourceMappingURL=card.module.js.map