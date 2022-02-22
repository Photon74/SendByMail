define(['@docsvision/webclient/System/$RequestManager', '@docsvision/webclient/System/LayoutServices', '@docsvision/webclient/System/ExtensionManager', 'tslib', '@docsvision/webclient/System/BaseControl', '@docsvision/webclient/System/ControlImpl', 'react'], (function ($RequestManager, LayoutServices, ExtensionManager, tslib, BaseControl, ControlImpl, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    // Все функции, классы и переменные используемые за пределами модуля (т.е. файла)
    // должны экспортироваться (содержать ключевое слово export в объявлении).
    function someHandler(sender, e) {
        sender.layout.getService(LayoutServices.$CardId);
        sender.layout.getService($RequestManager.$RequestManager);
    }

    var EventHandlers = /*#__PURE__*/Object.freeze({
        __proto__: null,
        someHandler: someHandler
    });

    var SendByMailButtonParams = /** @class */ (function (_super) {
        tslib.__extends(SendByMailButtonParams, _super);
        function SendByMailButtonParams() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.standardCssClass = "sendbymail-button";
            return _this;
        }
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
            return (React__default["default"].createElement("div", null,
                React__default["default"].createElement("button", null, "SendByMail")));
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
