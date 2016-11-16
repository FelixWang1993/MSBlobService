/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/sharedProcessMain.nls.ru",{"vs/base/common/errors":["{0}. Код ошибки: {1}","Отказано в разрешении (HTTP {0})","Отказано в разрешении","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Неизвестная ошибка подключения ({0})","Произошла неизвестная ошибка подключения. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим.","{0}: {1}","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","Произошла системная ошибка ({0})","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","{0} (всего ошибок: {1})","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","Не реализовано","Недопустимый аргумент: {0}","Недопустимый аргумент","Недопустимое состояние: {0}","Недопустимое состояние","Сбой загрузки требуемого файла. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим. Обновите содержимое браузера, чтобы повторить попытку.","Не удалось загрузить требуемый файл. Перезапустите приложение, чтобы повторить попытку. Дополнительные сведения: {0}."],"vs/base/common/json":["Недопустимый символ","Недопустимый числовой формат","Требуется имя свойства","Требуется значение","Требуется двоеточие","Требуется запятая","Требуется закрывающая фигурная скобка","Требуется закрывающая квадратная скобка","Ожидается конец файла"],"vs/base/common/severity":["Ошибка","Предупреждение","Сведения"],"vs/base/node/zip":["{0} не найдено в ZIP-архиве."],"vs/code/node/argv":["Arguments in `--goto` mode should be in the format of `FILE(:LINE(:COLUMN))`.","Открыть редактор несовпадений. Требуется указать два пути к файлам в качестве аргументов.","Отключить все установленные расширения.","Открыть файл по пути, указанному в определенной строке и столбце (требуется добавить :line[:column] к пути).","Языковой стандарт, который следует использовать (например, en-US или zh-TW).","Принудительно запустить новый экземпляр Code.",'Запустите с включенной командой "Developer: Startup Performance".',"Принудительно открыть файл или папку в последнем активном окне.","Указывает каталог, в котором хранятся данные пользователей, используется в случае выполнения от имени привилегированного пользователя.",'Печать подробного вывода (подразумевает использование параметра "--wait").',"Дождаться закрытия окна, прежде чем вернуть результат.","Задайте корневой путь для расширений.","Перечислить существующие расширения.","Устанавливает расширение.","Удаляет расширение.","Печать версии.","Распечатать данные об использовании.","Usage","options","paths","Options"],"vs/platform/configuration/common/configurationRegistry":["Добавляет параметры конфигурации.","Краткая сводка параметров. Эта метка будет использоваться в файле параметров в качестве разделяющего комментария.","Описание свойств конфигурации.","Если тип configuration.type задан, то он должен иметь значение object","configuration.title должно быть строкой","configuration.properties должно быть объектом"],"vs/platform/extensionManagement/common/extensionManagement":["Расширения"],"vs/platform/extensionManagement/node/extensionGalleryService":["Extension not found","Не удалось найти версию {0}, совместимую с этой версией кода."],"vs/platform/extensionManagement/node/extensionManagementService":["Недопустимое расширение: package.json не является файлом JSON.","Недопустимое расширение: несоответствие имени манифеста.","Недопустимое расширение: несоответствие издателя манифеста.","Недопустимое расширение: несоответствие версии манифеста.","Перезапустите код перед переустановкой {0}.","Перезапустите код перед переустановкой {0}.","Не удалось найти расширение"],"vs/platform/extensions/common/extensionsRegistry":["Пустое описание расширения",'свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно быть типа object','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" может быть опущено или должно быть типа "string []"','свойство "{0}" может быть опущено или должно быть типа "string []"','оба свойства, "{0}" и "{1}", должны быть либо указаны, либо опущены','свойство "{0}" может быть опущено или должно иметь тип string',"Ожидается, что функция main ({0}) будет включена в папку расширения ({1}). Из-за этого расширение может стать непереносимым.",'оба свойства, "{0}" и "{1}", должны быть либо указаны, либо опущены',"Отображаемое имя расширения, используемого в коллекции VS Code.","Категории, используемые коллекцией VS Code для классификации расширения.","Баннер, используемый в магазине VS Code.","Цвет баннера в заголовке страницы магазина VS Code.","Цветовая тема для шрифта, используемого в баннере.","Издатель расширения VS Code.","События активации для расширения кода VS Code.","Зависимости от других расширений. Идентификатор расширения — всегда ${publisher}.${name}. Например: vscode.csharp.","Скрипт, выполняемый перед публикацией пакета в качестве расширения VS Code.","Все публикации расширения VS Code, представленные этим пакетом."],"vs/platform/extensions/node/extensionValidator":["Не удалось проанализировать значение engines.vscode {0}. Используйте, например, ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x и т. д.","Версия, указанная в engines.vscode ({0}), недостаточно конкретная. Для версий vscode до 1.0.0 укажите по крайней мере основной и дополнительный номер версии. Например, 0.10.0, 0.10.x, 0.11.0 и т. д.","Версия, указанная в engines.vscode ({0}), недостаточно конкретная. Для версий vscode после 1.0.0 укажите по крайней мере основной номер версии. Например, 1.10.0, 1.10.x, 1.x.x, 2.x.x и т. д.",'Расширение несовместимо с кодом "{0}". Расширению требуется: {1}.',"Версия расширения несовместима с semver."],"vs/platform/request/common/request":["HTTP","Используемый параметр прокси. Если он не задан, он будет взят из переменных среды http_proxy и https_proxy.","Должен ли сертификат прокси-сервера проверяться по списку предоставленных ЦС.","The value to send as the 'Proxy-Authorization' header for every network request."],"vs/platform/telemetry/common/telemetryService":["Телеметрия","Разрешить отправку сведений об использовании и ошибках в корпорацию Майкрософт."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/code/node/sharedProcessMain.nls.ru.js.map