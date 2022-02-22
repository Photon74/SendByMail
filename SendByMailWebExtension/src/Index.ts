import * as EventHandlers from "./EventHandlers";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { SendByMailButton } from "./SendByMailButton/SendByMailButton";


// Главная входная точка всего расширения
// Данный файл должен импортировать прямо или косвенно все остальные файлы, 
// чтобы rollup смог собрать их все в один бандл.

// Регистрация расширения позволяет корректно установить все
// обработчики событий, сервисы и прочие сущности web-приложения.
extensionManager.registerExtension({
    name: "SendByMailButton web extension",
    version: "5.5.16",
    controls: [
        { controlTypeName: "SendByMailButton", constructor: SendByMailButton },
    ],
    globalEventHandlers: [ EventHandlers ]
})