/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
(function (APIVersion) {
    APIVersion[APIVersion["v1_x"] = 1] = "v1_x";
    APIVersion[APIVersion["v2_0_0"] = 2] = "v2_0_0";
})(exports.APIVersion || (exports.APIVersion = {}));
var APIVersion = exports.APIVersion;
;
var APIVersion;
(function (APIVersion) {
    function fromString(value) {
        if (!value) {
            return APIVersion.v1_x;
        }
        var index = value.indexOf('.');
        var major;
        if (index > 0) {
            major = parseInt(value.substr(0, index));
        }
        else {
            major = parseInt(value);
        }
        if (isNaN(major)) {
            return APIVersion.v1_x;
        }
        if (major >= 2) {
            return APIVersion.v2_0_0;
        }
        return APIVersion.v1_x;
    }
    APIVersion.fromString = fromString;
})(APIVersion = exports.APIVersion || (exports.APIVersion = {}));
//# sourceMappingURL=typescriptService.js.map