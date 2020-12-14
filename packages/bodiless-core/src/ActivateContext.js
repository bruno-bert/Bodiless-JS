"use strict";
/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActivateOnEffectActivator = exports.useActivateOnEffect = exports.withActivateOnEffect = exports.ActivateOnEffectProvider = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("./hooks");
var defaultActivateOnEffectState = {
    id: '',
    setId: function () { return undefined; },
};
/* Activate Context is a context that stores the id that should activate its own context when
 * it is created
 */
var activateOnEffect = react_1.default.createContext(defaultActivateOnEffectState);
exports.ActivateOnEffectProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState(''), id = _b[0], setId = _b[1];
    var value = { id: id, setId: setId };
    return react_1.default.createElement(activateOnEffect.Provider, { value: value }, children);
};
/**
 * WithActivateContext is a HOC that wraps the Component in a ActivateContextProvider
 * @param Component The component to wrap
 */
exports.withActivateOnEffect = (function (Component) { return function (props) { return (react_1.default.createElement(exports.ActivateOnEffectProvider, null,
    react_1.default.createElement(Component, __assign({}, props)))); }; });
/**
 * useActivateContext is a hook that returns the ActivateContext
 */
exports.useActivateOnEffect = function () { return react_1.default.useContext(activateOnEffect); };
/**
 * useActivateOnEffect is a hook that will check if a id is stored in the ActivateContext
 * if it is it will run the iseContextActivator hook
 * @param uuid id of the component to check
 */
exports.useActivateOnEffectActivator = function (uuid) {
    // Cast is necessary bc useContextActivator returns a boolean for 'data-bl-activator'
    var onClick = hooks_1.useContextActivator().onClick;
    var _a = exports.useActivateOnEffect(), id = _a.id, setId = _a.setId;
    // useEffect has to be at the top level so we have to put the conditional inside the hook
    react_1.default.useEffect(function () {
        if (id === uuid && onClick) {
            onClick('');
            setId('');
        }
    });
};
//# sourceMappingURL=ActivateContext.js.map