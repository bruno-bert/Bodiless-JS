import React, { ComponentType } from 'react';
/**
 * Enable or disable printing of design keys in markup for a component and
 * all children.
 *
 * @param showDesignKey true to enable (the default), false to disable.
 */
export declare const withShowDesignKeys: (showDesignKeys?: boolean) => <P extends object>(C: React.ComponentType<P>) => (props: P) => JSX.Element;
export declare const useShowDesignKeys: () => boolean;
//# sourceMappingURL=Context.d.ts.map