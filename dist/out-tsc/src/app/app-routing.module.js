import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
    { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
    { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
    { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
    { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
    { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
    { path: 'check-box', loadChildren: './pages/check-box/check-box.module#CheckBoxPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map