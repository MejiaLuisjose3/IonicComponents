import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
var AlertPage = /** @class */ (function () {
    function AlertPage(AlertCtrl) {
        this.AlertCtrl = AlertCtrl;
    }
    AlertPage.prototype.ngOnInit = function () {
    };
    AlertPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: [
                                {
                                    text: 'cancelado',
                                    role: 'cancel',
                                    cssClass: 'secundary',
                                    handler: function (blah) {
                                        console.log('Cancelado');
                                    }
                                },
                                {
                                    text: 'ok',
                                    cssClass: 'primary',
                                    handler: function (blah) {
                                        console.log('OK');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertPrompt = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: 'Prompt!',
                            subHeader: 'Aprendiendo Ionic',
                            inputs: [
                                {
                                    name: 'nombre',
                                    type: 'text',
                                    placeholder: 'Ingrese Su Nombre'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        // console.log(JSON.stringify(data));
                                        _this.titulo = data.nombre;
                                        console.log(_this.titulo);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage = tslib_1.__decorate([
        Component({
            selector: 'app-alert',
            templateUrl: './alert.page.html',
            styleUrls: ['./alert.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController])
    ], AlertPage);
    return AlertPage;
}());
export { AlertPage };
//# sourceMappingURL=alert.page.js.map