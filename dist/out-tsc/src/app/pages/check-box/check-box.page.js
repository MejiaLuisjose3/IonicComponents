import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
var CheckBoxPage = /** @class */ (function () {
    function CheckBoxPage(alertctrl) {
        this.alertctrl = alertctrl;
        this.data = [
            {
                color: 'primary',
                name: 'One Piece',
                id: 'uno',
                selected: false
            }, {
                color: 'primary',
                name: 'Dragon ball',
                id: 'uno',
                selected: false
            }
            // {
            //   color: 'secondary',
            //   name: 'Naruto',
            //   id: 'dos',
            //   selected: true
            // }, {
            //   color: 'tertiary',
            //   name: 'One Piece',
            //   id: 'tres',
            //   selected: false
            // }, {
            //   color: 'success',
            //   name: 'YuGi',
            //   id: 'cuatro',
            //   selected: true
            // }
        ];
    }
    CheckBoxPage.prototype.ngOnInit = function () {
    };
    CheckBoxPage.prototype.onClick = function (check) {
        console.log(check);
    };
    CheckBoxPage.prototype.alertas = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mensaje;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertctrl.create({
                            header: 'Dragon Ball',
                            subHeader: 'Te gusta Dragon Ball?',
                            buttons: [
                                {
                                    text: 'Si',
                                    handler: function () {
                                        console.log('Si');
                                    },
                                }, {
                                    text: 'No',
                                    handler: function () {
                                        console.log('No');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        mensaje = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckBoxPage = tslib_1.__decorate([
        Component({
            selector: 'app-check-box',
            templateUrl: './check-box.page.html',
            styleUrls: ['./check-box.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController])
    ], CheckBoxPage);
    return CheckBoxPage;
}());
export { CheckBoxPage };
;
yield mensaje.present();
//# sourceMappingURL=check-box.page.js.map