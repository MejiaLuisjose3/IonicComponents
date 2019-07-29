import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var InicioPage = /** @class */ (function () {
    function InicioPage() {
        this.componentes = [
            {
                icon: 'American-football',
                name: 'Action sheet',
                redirectTo: '/action-sheet'
            },
            {
                icon: 'appstore',
                name: 'Alert',
                redirectTo: '/alert'
            },
            {
                icon: 'beaker',
                name: 'Avatar',
                redirectTo: '/avatar'
            },
            {
                icon: 'tennisball',
                name: 'Botones',
                redirectTo: '/botones'
            },
            {
                icon: 'card',
                name: 'Cards',
                redirectTo: '/card'
            },
            {
                icon: 'add-circle-outline',
                name: 'CheckBox',
                redirectTo: '/check-box'
            }
        ];
    }
    InicioPage.prototype.ngOnInit = function () {
    };
    InicioPage = tslib_1.__decorate([
        Component({
            selector: 'app-inicio',
            templateUrl: './inicio.page.html',
            styleUrls: ['./inicio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InicioPage);
    return InicioPage;
}());
export { InicioPage };
//# sourceMappingURL=inicio.page.js.map