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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@bodiless/core");
var universal_cookie_1 = __importDefault(require("universal-cookie"));
var SaveState;
(function (SaveState) {
    SaveState[SaveState["Init"] = 0] = "Init";
    SaveState[SaveState["Pending"] = 1] = "Pending";
    SaveState[SaveState["Complete"] = 2] = "Complete";
    SaveState[SaveState["Errored"] = 3] = "Errored";
})(SaveState || (SaveState = {}));
var backendFilePath = process.env.BODILESS_BACKEND_DATA_FILE_PATH || '';
var backendStaticPath = process.env.BODILESS_BACKEND_STATIC_PATH || '';
// @todo unify response handler for all actions to the backend.
// We need to handle reponses that come in the form of html, such as 404, and
// other messages.
var handle = function (promise, callback) { return promise
    .then(function (res) {
    if (res.status === 200) {
        // @TODO: Display the response in a component instead of an alert.
        // eslint-disable-next-line no-undef
        if (typeof callback === 'function') {
            callback();
        }
        else {
            return 'Success';
        }
    }
    // eslint-disable-next-line no-undef
    throw new Error('An unknown error has occured.');
})
    .catch(function (err) {
    // Use back-end crafted error message if available.
    var errMsg = err.message + "\n";
    if (err.response && err.response.data) {
        errMsg += err.response.data;
    }
    throw new Error(errMsg);
}); };
/**
 * Form component for saving local changes.
 *
 * @component
 * @param props Props
 * @constructor
 */
var SaveChanges = function (props) {
    // Get the author from the cookie.
    var cookies = new universal_cookie_1.default();
    var author = cookies.get('author');
    var context = core_1.useEditContext();
    var ui = props.ui, formState = props.formState, formApi = props.formApi, client = props.client;
    var _a = core_1.getUI(ui), ComponentFormTitle = _a.ComponentFormTitle, ComponentFormLabel = _a.ComponentFormLabel, ComponentFormWarning = _a.ComponentFormWarning, ComponentFormText = _a.ComponentFormText;
    var submits = formState.submits, invalid = formState.invalid;
    var _b = react_1.useState({
        status: SaveState.Init,
    }), state = _b[0], setState = _b[1];
    var formTitle = 'Upload changes';
    react_1.useEffect(function () {
        // If the form is submitted and valid then lets try reset.
        if (submits === 1 && invalid === false) {
            context.showPageOverlay({ hasSpinner: false });
            setState({ status: SaveState.Pending });
            // client.reset()
            handle(client.commit(formApi.getValue('commitMessage'), [backendFilePath, backendStaticPath], [], [], author))
                .then(function () {
                setState({ status: SaveState.Complete });
            })
                .catch(function (error) {
                setState({ status: SaveState.Errored, errorMessage: error.message });
            })
                .finally(function () {
                context.hidePageOverlay();
                formApi.setValue('keepOpen', false);
            });
        }
    }, [submits]);
    var status = state.status, errorMessage = state.errorMessage;
    switch (status) {
        case SaveState.Pending:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Uploading...")));
        case SaveState.Complete:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Operation complete.")));
        case SaveState.Errored:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormWarning, null, errorMessage)));
        case SaveState.Init: {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormLabel, { htmlFor: "commit-txt" }, "Description:"),
                react_1.default.createElement(ComponentFormText, { field: "commitMessage", id: "commit-txt" })));
        }
        default:
            return react_1.default.createElement(react_1.default.Fragment, null);
    }
};
exports.default = SaveChanges;
//# sourceMappingURL=SaveChanges.js.map