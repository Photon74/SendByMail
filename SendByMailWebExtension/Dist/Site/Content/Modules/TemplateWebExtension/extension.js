define(['@docsvision/webclient/System/ExtensionManager', 'tslib', '@docsvision/webclient/System/BaseControl', '@docsvision/webclient/System/ControlImpl', '@docsvision/webclient/System/Readwrite', 'react'], (function (ExtensionManager, tslib, BaseControl, ControlImpl, Readwrite, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    // Все функции, классы и переменные используемые за пределами модуля (т.е. файла)
    // должны экспортироваться (содержать ключевое слово export в объявлении).
    // export function someHandler(sender: LayoutControl, e: IEventArgs) {
    //     let cardIdService = sender.layout.getService($CardId);
    //     let requestManager = sender.layout.getService($RequestManager);
    //     requestManager.get
    // }

    var EventHandlers = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var SendByMailButtonParams = /** @class */ (function (_super) {
        tslib.__extends(SendByMailButtonParams, _super);
        function SendByMailButtonParams() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.standardCssClass = "sendbymail-button";
            return _this;
        }
        tslib.__decorate([
            Readwrite.rw
        ], SendByMailButtonParams.prototype, "services", void 0);
        return SendByMailButtonParams;
    }(BaseControl.BaseControlParams));
    var SendByMailButton = /** @class */ (function (_super) {
        tslib.__extends(SendByMailButton, _super);
        function SendByMailButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SendByMailButton.prototype.createParams = function () {
            return new SendByMailButtonParams();
        };
        SendByMailButton.prototype.createImpl = function () {
            return new ControlImpl.ControlImpl(this.props, this.state, this.renderControl.bind(this));
        };
        SendByMailButton.prototype.renderControl = function () {
            var _this = this;
            this.state.description = this.layout.controls.get("documentName").value;
            var url = this.state.services.urlResolver.resolveApiUrl('GetEmail', 'Email') + '?cardId=' + this.layout.cardInfo.id;
            this.state.services.requestManager.get(url).then(function (e) {
                var attr = document.createAttribute('href');
                attr.value = "mailto:{0}&body={1}".format(e, _this.state.description);
                document.getElementById('sendemailbuttonlink').attributes.setNamedItem(attr);
                return "";
            });
            return (React__default["default"].createElement("div", null,
                React__default["default"].createElement("a", { id: 'sendemailbuttonlink', href: "" }, "SendByMail")));
        };
        return SendByMailButton;
    }(BaseControl.BaseControl));

    // Главная входная точка всего расширения
    // Данный файл должен импортировать прямо или косвенно все остальные файлы, 
    // чтобы rollup смог собрать их все в один бандл.
    // Регистрация расширения позволяет корректно установить все
    // обработчики событий, сервисы и прочие сущности web-приложения.
    ExtensionManager.extensionManager.registerExtension({
        name: "SendByMailButton web extension",
        version: "5.5.16",
        controls: [
            { controlTypeName: "SendByMailButton", constructor: SendByMailButton },
        ],
        globalEventHandlers: [EventHandlers]
    });

}));
//# sourceMappingURL=extension.js.map
