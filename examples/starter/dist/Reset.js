"use strict";
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
var react_1 = __importStar(require("react"));
var core_1 = require("@bodiless/core");
var ResetState;
(function (ResetState) {
    ResetState[ResetState["Init"] = 0] = "Init";
    ResetState[ResetState["Pending"] = 1] = "Pending";
    ResetState[ResetState["Complete"] = 2] = "Complete";
    ResetState[ResetState["Errored"] = 3] = "Errored";
})(ResetState || (ResetState = {}));
/**
 * Form component for reverting local changes.
 *
 * @component
 * @param props Props
 * @constructor
 */
var Reset = function (props) {
    var context = core_1.useEditContext();
    var ui = props.ui, formState = props.formState, formApi = props.formApi, client = props.client;
    var _a = core_1.getUI(ui), ComponentFormTitle = _a.ComponentFormTitle, ComponentFormLabel = _a.ComponentFormLabel, ComponentFormWarning = _a.ComponentFormWarning, ComponentFormDescription = _a.ComponentFormDescription;
    var submits = formState.submits, invalid = formState.invalid;
    var _b = react_1.useState({
        status: ResetState.Init,
    }), state = _b[0], setState = _b[1];
    react_1.useEffect(function () {
        // If the form is submitted and valid then lets try reset.
        if (submits === 1 && invalid === false) {
            context.showPageOverlay({ hasSpinner: false });
            setState({ status: ResetState.Pending });
            client.reset()
                .then(function () {
                setState({ status: ResetState.Complete });
                formApi.setValue('reload', true);
            })
                .catch(function (error) {
                setState({ status: ResetState.Errored, errorMessage: error.message });
            })
                .finally(function () {
                context.hidePageOverlay();
                formApi.setValue('keepOpen', false);
            });
        }
    }, [submits]);
    var status = state.status, errorMessage = state.errorMessage;
    var formTitle = 'Revert to saved';
    switch (status) {
        case ResetState.Init: {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormLabel, { htmlFor: "reset-txt" }, "Discard local changes")));
        }
        case ResetState.Pending:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Resetting...")));
        case ResetState.Complete:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Operation complete."),
                react_1.default.createElement(ComponentFormDescription, null, "Local changes were discarded.")));
        case ResetState.Errored:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormWarning, null, errorMessage)));
        default:
            return react_1.default.createElement(react_1.default.Fragment, null);
    }
};
exports.default = Reset;
//# sourceMappingURL=Reset.js.map