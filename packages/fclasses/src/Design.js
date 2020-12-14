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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendDesign = exports.varyDesign = exports.designable = exports.extendDesignable = exports.withFinalDesign = exports.withTransformer = exports.remove = exports.replaceWith = exports.withDesign = exports.applyDesign = exports.startWith = exports.replaceable = exports.asComponent = void 0;
// eslint-disable-next-line import/no-extraneous-dependencies
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var addProps_1 = require("./addProps");
var Context_1 = require("./Context");
/**
 * Converts a react HTML element to a component. This is a generic, and the type
 * of the props of the resulting component should be specified, eg:
 * ```
 * const Div = asComponent<JSX.IntrinsicElements['div']>('div');
 * ```
 * @param Tag A valid HTML element.
 */
exports.asComponent = function (Tag) {
    if (typeof Tag !== 'string')
        return Tag;
    var AsComponent = function (props) { return react_1.default.createElement(Tag, __assign({}, props)); };
    return AsComponent;
};
/**
 * is an HOC that will attach a displayName to an object
 * @param name the name of the displayName.
 */
var withDisplayName = function (name) { return function (Component) {
    var WithDisplayName = function (props) { return react_1.default.createElement(Component, __assign({}, props)); };
    var newMeta = lodash_1.mergeWith({}, Component, { displayName: name });
    return Object.assign(WithDisplayName, newMeta);
}; };
var designContextDefault = undefined;
var DesignContext = react_1.default.createContext(designContextDefault);
exports.replaceable = function (Component) {
    var Replaceable = function (props) {
        var UpstreamComponent = react_1.useContext(DesignContext);
        var FinalComponent = UpstreamComponent || Component;
        return react_1.default.createElement(FinalComponent, __assign({}, props));
    };
    return Replaceable;
};
exports.startWith = function (ReplacementComponent) { return (function (Component) { return function (props) {
    var UpstreamComponent = react_1.useContext(DesignContext);
    return UpstreamComponent
        ? react_1.default.createElement(Component, __assign({}, props))
        : (react_1.default.createElement(DesignContext.Provider, { value: ReplacementComponent },
            react_1.default.createElement(Component, __assign({}, props))));
}; }); };
exports.applyDesign = function (components, DefaultComponent) {
    if (DefaultComponent === void 0) { DefaultComponent = react_1.Fragment; }
    return (function (design) {
        var incomingDesign = design || {};
        // const keysToApply = intersection(Object.keys(components), Object.keys(incomingDesign));
        var keysToApply = Object.keys(incomingDesign);
        var appliedDesign = keysToApply.reduce(function (acc, key) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[key] = incomingDesign[key](exports.replaceable(components[key] || DefaultComponent)), _a)));
        }, {});
        var unNamedComponents = __assign(__assign({}, components), appliedDesign);
        // Lets wrap the object so that we can name it after the key.
        if (!design)
            return __assign({}, components);
        return Object.keys(unNamedComponents).reduce(function (acc, name) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[name] = withDisplayName(name)(unNamedComponents[name]), _a)));
        }, {});
    });
};
/**
 * Creates an HOC which applies a specified design to the wrapped component.
 *
 * A design is a keyed set of HOC's which should be applied to constituant elements
 * of the wrapped component. The wrapped component itself should accept a components
 * prop, and be wrapped in the `designable` HOC to define a set of base components
 * to which the HOC's should apply.
 *
 * @param design
 * The design to apply
 *
 * @return
 * HOC which applies the design to the wrapped component.
 *
 */
exports.withDesign = function (design) { return (function (Component) {
    var WithDesign = function (props) {
        var designFromProps = props.design;
        var finalDesign = design;
        if (designFromProps) {
            var keysToWrap = lodash_1.intersection(Object.keys(designFromProps), Object.keys(design));
            var wrappedDesign = keysToWrap.reduce(function (acc, key) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[key] = lodash_1.flowRight(designFromProps[key], design[key]), _a)));
            }, {});
            finalDesign = __assign(__assign(__assign({}, design), designFromProps), wrappedDesign);
        }
        return react_1.default.createElement(Component, __assign({}, props, { design: finalDesign }));
    };
    return WithDesign;
}); };
exports.replaceWith = function (Component) { return (function () { return Component; }); };
exports.remove = function () { return function (props) {
    var children = props.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children);
}; };
var Transformer = /** @class */ (function (_super) {
    __extends(Transformer, _super);
    function Transformer(props) {
        var _this = _super.call(this, props) || this;
        _this.fixedProps = {};
        var transformFixed = props.transformFixed, passedProps = props.passedProps;
        _this.fixedProps = transformFixed(passedProps);
        return _this;
    }
    Transformer.prototype.render = function () {
        var _a = this.props, Component = _a.Component, transformPassthrough = _a.transformPassthrough, passedProps = _a.passedProps;
        var props = __assign(__assign({}, this.fixedProps), transformPassthrough(passedProps));
        return react_1.default.createElement(Component, __assign({}, props));
    };
    return Transformer;
}(react_1.default.Component));
exports.withTransformer = function (funcs) { return (function (Component) { return function (props) {
    var transformFixed = funcs.transformFixed, transformPassthrough = funcs.transformPassthrough;
    var tprops = {
        Component: Component,
        transformFixed: transformFixed,
        transformPassthrough: transformPassthrough,
        passedProps: props,
    };
    return react_1.default.createElement(Transformer, __assign({}, tprops));
}; }); };
/**
 * @private
 *
 * Takes a design and returns a hOD which extends a base design (flows the HOC's for each key
 * in the new design to each key in the base design, adding keys if they do not exist.
 *
 * @param design The design which will extend the base design.
 *
 * @return HOD which extends a base design with the provided design.
 */
var extendDesign$ = function (design) { return (function (baseDesign) {
    if (baseDesign === void 0) { baseDesign = {}; }
    return Object.getOwnPropertyNames(design).reduce(function (acc, key) {
        var _a, _b;
        return (acc[key]
            // We just checked for key in acc and we are iterating design.
            ? __assign(__assign({}, acc), (_a = {}, _a[key] = lodash_1.flow(acc[key], design[key]), _a))
            : __assign(__assign({}, acc), (_b = {}, _b[key] = design[key], _b)));
    }, baseDesign);
}); };
/**
 * Specifies a design which should be applied to a component "finally" (ie after
 * all normal designs have been applied). This is useful if you want to be sure
 * that your design will take effect even if a normal design uses `replaceWith`
 * to replace a component.
 *
 * Note that just like `withDesign`, this may be called more than once on the
 * same component, and the final designs will be applied "outside-in", just
 * like normal designs.
 *
 * @param design
 * The design to apply
 *
 * @return
 * An HOC which applies the speciried design to the wrapped component after
 * all other designes
 */
exports.withFinalDesign = function (design) { return (function (Component) {
    var WithFinalDesign = function (props) {
        var designFromProps = props.design;
        var finalFromProps = (designFromProps || {})._final;
        // eslint-disable-next-line no-underscore-dangle
        var _final = finalFromProps ? extendDesign$(finalFromProps)(design) : design;
        var finalDesign = __assign(__assign({}, designFromProps), { _final: _final });
        return react_1.default.createElement(Component, __assign({}, props, { design: finalDesign }));
    };
    return WithFinalDesign;
}); };
/**
 * May be used to extend the design specification of an underlying designable component.
 * This allows you to add constituent sub-components to the design, and pass the original
 * design on to the underlying component.
 *
 * @param transformDesign An optional transformer function which can be used to alter the
 *   design of the original component (for example to remove irrelevant entries).  If this
 *   function returns `undefined`, the design will be removed from the underlying component.
 *
 * @return A function with the same signature as `designable`.
 */
exports.extendDesignable = function (transformDesign) {
    if (transformDesign === void 0) { transformDesign = lodash_1.identity; }
    return (function (start, namespace) {
        if (namespace === void 0) { namespace = '?'; }
        return (function (Component) {
            var designKeys = typeof start !== 'function'
                ? Object.keys(start).reduce(function (keys, key) {
                    var _a;
                    return (__assign(__assign({}, keys), (_a = {}, _a[key] = addProps_1.addPropsIf(Context_1.useShowDesignKeys)({ 'data-bl-design-key': namespace + ":" + key }), _a)));
                }, {})
                : undefined;
            var transformFixed = function (props) {
                var design = props.design;
                var _a = design || {}, _final = _a._final, restDesign = __rest(_a, ["_final"]);
                // eslint-disable-next-line no-underscore-dangle
                var design$ = _final
                    ? extendDesign$(_final)(restDesign)
                    : restDesign;
                var apply = typeof start === 'function' ? start : exports.applyDesign(start);
                return { components: apply(design$) };
            };
            var transformPassthrough = function (props) {
                var design = props.design, rest = __rest(props, ["design"]);
                var newDesign = transformDesign(design);
                return (newDesign ? __assign(__assign({}, rest), { design: newDesign }) : rest);
            };
            // const transformPassthrough = (props:DesignableProps<C>&P) => omit(props, ['design']) as P;
            var Designable = lodash_1.flow(exports.withTransformer({ transformFixed: transformFixed, transformPassthrough: transformPassthrough }), designKeys ? exports.withDesign(designKeys) : lodash_1.identity)(Component);
            return Designable;
        });
    });
};
/**
 * Makes a component "designable". A designable component defines a set of constituent
 * sub-components which can be modified by applying one or more HOC's.  You specify the
 * HOC's to apply to each sub-component via the `withDesign` HOC.
 *
 * @param startComponents An object defining the set of constituent subcomponents. Each key
 *   is a string which identifies the component. Each value is the component itself, which
 *   will be modified by any HOC's provided by withDesign.
 *
 * @return An HOC which yields a designable version of the component to which it is applied.
 */
exports.designable = exports.extendDesignable(function () { return undefined; });
var varyDesign$ = function (design) { return (function (baseDesign) {
    if (baseDesign === void 0) { baseDesign = {}; }
    return (Object.getOwnPropertyNames(baseDesign).length === 0
        ? design
        : Object.getOwnPropertyNames(baseDesign).reduce(function (acc, baseKey) { return (Object.getOwnPropertyNames(design).reduce(function (innerAcc, key) {
            var _a;
            return (__assign(__assign({}, innerAcc), (_a = {}, _a[baseKey + key] = lodash_1.flow(baseDesign[baseKey], design[key]), _a)));
        }, (acc))); }, {}));
}); };
var flowDesignsWith = function (func) { return (function () {
    var designs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        designs[_i] = arguments[_i];
    }
    return function (baseDesign) {
        if (baseDesign === void 0) { baseDesign = {}; }
        return (lodash_1.flow.apply(void 0, designs.map(function (design) { return ((typeof design === 'function') ? func(design()) : func(design)); }))(baseDesign));
    };
}); };
exports.varyDesign = flowDesignsWith(varyDesign$);
exports.extendDesign = flowDesignsWith(extendDesign$);
//# sourceMappingURL=Design.js.map