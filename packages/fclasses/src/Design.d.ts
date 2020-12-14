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
import React, { ComponentType } from 'react';
import { HOC } from './FClasses';
export declare type DesignElement<P> = (c: ComponentType<P> | string) => ComponentType<P>;
/**
 * This is the type to use for the components prop of a component with a fluid design.
 */
export declare type DesignableComponents = {
    [key: string]: ComponentType<any>;
};
/**
 * This is the type of a design which can be applied to a component which accepts
 * a components prop of type "C".
 */
export declare type Design<C extends DesignableComponents> = {
    [Key in keyof C]?: (component: C[Key]) => C[Key];
} & {
    _final?: Design<Omit<C, '_final'>>;
};
/**
 * This is the type of the props for a designable whose underlying component
 * accepts a components prop of type "C".
 */
export declare type DesignableProps<C extends DesignableComponents> = {
    design?: Design<C>;
};
export declare type DesignableComponentsProps<C extends DesignableComponents> = {
    components: C;
};
/**
 * This is the type of a  Higher order design which can be applied to a component which accepts
 * a components prop of type "C".
 */
export declare type HOD<C extends DesignableComponents> = (design?: Design<C>) => Design<C>;
/**
 * This is a GOD that accepts any DesignableComponents
 */
export declare type FluidHOD = HOD<DesignableComponents>;
export declare type FluidDesign = Design<DesignableComponents>;
/**
 * Converts a react HTML element to a component. This is a generic, and the type
 * of the props of the resulting component should be specified, eg:
 * ```
 * const Div = asComponent<JSX.IntrinsicElements['div']>('div');
 * ```
 * @param Tag A valid HTML element.
 */
export declare const asComponent: <P extends object>(Tag: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<P, any> | React.FunctionComponent<P>) => React.ComponentClass<P, any> | React.FunctionComponent<P> | ((props: P) => JSX.Element);
export declare const replaceable: <P extends object>(Component: React.ComponentType<P>) => (props: P) => JSX.Element;
export declare const startWith: <P extends object>(ReplacementComponent: React.ComponentType<P>) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
export declare const applyDesign: <C extends DesignableComponents>(components: C, DefaultComponent?: ComponentType<any>) => (design?: Design<C> | undefined) => {};
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
export declare const withDesign: <C extends DesignableComponents>(design: Design<C>) => <P extends DesignableProps<C>>(Component: React.ComponentType<P>) => (props: P) => JSX.Element;
export declare const replaceWith: <P extends object>(Component: React.ComponentType<P>) => HOC;
export declare const remove: <P extends React.HTMLAttributes<HTMLBaseElement>>() => (props: P) => JSX.Element;
declare type WithTransformerProps<P, Q, X> = {
    transformFixed: (p: P) => X;
    transformPassthrough: (p: P) => Q;
};
export declare const withTransformer: <P, Q, X extends Object>(funcs: WithTransformerProps<P, Q, X>) => (Component: React.ComponentType<Q & X>) => (props: P) => JSX.Element;
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
export declare const withFinalDesign: <C extends DesignableComponents>(design: Design<C>) => <P extends DesignableProps<C>>(Component: React.ComponentType<P>) => (props: P) => JSX.Element;
declare type TransformDesign = (design?: Design<any>) => Design<any> | undefined;
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
export declare const extendDesignable: (transformDesign?: TransformDesign) => <C extends DesignableComponents>(start: Function | C, namespace?: string) => <P extends object>(Component: React.ComponentType<P & DesignableComponentsProps<C>>) => React.ComponentType<DesignableProps<C> & P>;
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
export declare const designable: <C extends DesignableComponents>(start: Function | C, namespace?: string) => <P extends object>(Component: React.ComponentType<P & DesignableComponentsProps<C>>) => React.ComponentType<DesignableProps<C> & P>;
declare type DesignOrHod<C extends DesignableComponents> = Design<C> | HOD<C>;
export declare const varyDesign: <C extends DesignableComponents>(...designs: DesignOrHod<C>[]) => (baseDesign?: Design<C>) => any;
export declare const extendDesign: <C extends DesignableComponents>(...designs: DesignOrHod<C>[]) => (baseDesign?: Design<C>) => any;
export {};
//# sourceMappingURL=Design.d.ts.map