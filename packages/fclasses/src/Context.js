"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShowDesignKeys = exports.withShowDesignKeys = void 0;
var react_1 = __importStar(require("react"));
var FClassesContext = react_1.createContext({});
/**
 * Enable or disable printing of design keys in markup for a component and
 * all children.
 *
 * @param showDesignKey true to enable (the default), false to disable.
 */
exports.withShowDesignKeys = function (showDesignKeys) {
    if (showDesignKeys === void 0) { showDesignKeys = true; }
    return function (C) {
        var WithShowDesignKeys = function (props) {
            var value = __assign(__assign({}, react_1.useContext(FClassesContext)), { showDesignKeys: showDesignKeys });
            return (react_1.default.createElement(FClassesContext.Provider, { value: value },
                react_1.default.createElement(C, __assign({}, props))));
        };
        return WithShowDesignKeys;
    };
};
exports.useShowDesignKeys = function () { return Boolean(react_1.useContext(FClassesContext).showDesignKeys); };
//# sourceMappingURL=Context.js.map