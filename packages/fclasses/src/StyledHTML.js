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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wbr = exports.Video = exports.Var = exports.Ul = exports.U = exports.Tt = exports.Tr = exports.Title = exports.Time = exports.Thead = exports.Th = exports.Tfoot = exports.Textarea = exports.Td = exports.Tbody = exports.Table = exports.Sup = exports.Summary = exports.Sub = exports.Style = exports.Strong = exports.Strike = exports.Span = exports.Source = exports.Small = exports.Select = exports.Section = exports.Script = exports.Samp = exports.S = exports.Ruby = exports.Rt = exports.Rp = exports.Q = exports.Progress = exports.Pre = exports.Param = exports.P = exports.Output = exports.Option = exports.Optgroup = exports.Ol = exports.Noscript = exports.Noframes = exports.Nav = exports.Meter = exports.Meta = exports.Menu = exports.Mark = exports.Map = exports.Li = exports.Legend = exports.Label = exports.Keygen = exports.Kbd = exports.Ins = exports.Input = exports.Img = exports.Iframe = exports.I = exports.Html = exports.Hr = exports.Hgroup = exports.Header = exports.Head = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Frameset = exports.Frame = exports.Form = exports.Footer = exports.Font = exports.Figure = exports.Figcaption = exports.Fieldset = exports.Embed = exports.Em = exports.Dt = exports.Dl = exports.Div = exports.Dir = exports.Dfn = exports.Details = exports.Del = exports.Dd = exports.Datalist = exports.Colgroup = exports.Col = exports.Code = exports.Cite = exports.Center = exports.Caption = exports.Canvas = exports.Button = exports.Br = exports.Body = exports.Blockquote = exports.Big = exports.Bdo = exports.Bdi = exports.Basefont = exports.Base = exports.B = exports.Audio = exports.Aside = exports.Article = exports.Area = exports.Applet = exports.Address = exports.Acronym = exports.Abbr = exports.A = void 0;
var FClasses_1 = require("./FClasses");
exports.A = FClasses_1.stylable('a');
exports.Abbr = FClasses_1.stylable('abbr');
exports.Acronym = FClasses_1.stylable('acronym');
exports.Address = FClasses_1.stylable('address');
exports.Applet = FClasses_1.stylable('applet');
exports.Area = FClasses_1.stylable('area');
exports.Article = FClasses_1.stylable('article');
exports.Aside = FClasses_1.stylable('aside');
exports.Audio = FClasses_1.stylable('audio');
exports.B = FClasses_1.stylable('b');
exports.Base = FClasses_1.stylable('base');
exports.Basefont = FClasses_1.stylable('basefont');
exports.Bdi = FClasses_1.stylable('bdi');
exports.Bdo = FClasses_1.stylable('bdo');
exports.Big = FClasses_1.stylable('big');
exports.Blockquote = FClasses_1.stylable('blockquote');
exports.Body = FClasses_1.stylable('body');
exports.Br = FClasses_1.stylable('br');
exports.Button = FClasses_1.stylable('button');
exports.Canvas = FClasses_1.stylable('canvas');
exports.Caption = FClasses_1.stylable('caption');
exports.Center = FClasses_1.stylable('center');
exports.Cite = FClasses_1.stylable('cite');
exports.Code = FClasses_1.stylable('code');
exports.Col = FClasses_1.stylable('col');
exports.Colgroup = FClasses_1.stylable('colgroup');
exports.Datalist = FClasses_1.stylable('datalist');
exports.Dd = FClasses_1.stylable('dd');
exports.Del = FClasses_1.stylable('del');
exports.Details = FClasses_1.stylable('details');
exports.Dfn = FClasses_1.stylable('dfn');
exports.Dir = FClasses_1.stylable('dir');
exports.Div = FClasses_1.stylable('div');
exports.Dl = FClasses_1.stylable('dl');
exports.Dt = FClasses_1.stylable('dt');
exports.Em = FClasses_1.stylable('em');
exports.Embed = FClasses_1.stylable('embed');
exports.Fieldset = FClasses_1.stylable('fieldset');
exports.Figcaption = FClasses_1.stylable('figcaption');
exports.Figure = FClasses_1.stylable('figure');
exports.Font = FClasses_1.stylable('font');
exports.Footer = FClasses_1.stylable('footer');
exports.Form = FClasses_1.stylable('form');
exports.Frame = FClasses_1.stylable('frame');
exports.Frameset = FClasses_1.stylable('frameset');
exports.H1 = FClasses_1.stylable('h1');
exports.H2 = FClasses_1.stylable('h2');
exports.H3 = FClasses_1.stylable('h3');
exports.H4 = FClasses_1.stylable('h4');
exports.H5 = FClasses_1.stylable('h5');
exports.H6 = FClasses_1.stylable('h6');
exports.Head = FClasses_1.stylable('head');
exports.Header = FClasses_1.stylable('header');
exports.Hgroup = FClasses_1.stylable('hgroup');
exports.Hr = FClasses_1.stylable('hr');
exports.Html = FClasses_1.stylable('html');
exports.I = FClasses_1.stylable('i');
exports.Iframe = FClasses_1.stylable('iframe');
exports.Img = FClasses_1.stylable('img');
exports.Input = FClasses_1.stylable('input');
exports.Ins = FClasses_1.stylable('ins');
exports.Kbd = FClasses_1.stylable('kbd');
exports.Keygen = FClasses_1.stylable('keygen');
exports.Label = FClasses_1.stylable('label');
exports.Legend = FClasses_1.stylable('legend');
exports.Li = FClasses_1.stylable('li');
exports.Map = FClasses_1.stylable('map');
exports.Mark = FClasses_1.stylable('mark');
exports.Menu = FClasses_1.stylable('menu');
exports.Meta = FClasses_1.stylable('meta');
exports.Meter = FClasses_1.stylable('meter');
exports.Nav = FClasses_1.stylable('nav');
exports.Noframes = FClasses_1.stylable('noframes');
exports.Noscript = FClasses_1.stylable('noscript');
exports.Ol = FClasses_1.stylable('ol');
exports.Optgroup = FClasses_1.stylable('optgroup');
exports.Option = FClasses_1.stylable('option');
exports.Output = FClasses_1.stylable('output');
exports.P = FClasses_1.stylable('p');
exports.Param = FClasses_1.stylable('param');
exports.Pre = FClasses_1.stylable('pre');
exports.Progress = FClasses_1.stylable('progress');
exports.Q = FClasses_1.stylable('q');
exports.Rp = FClasses_1.stylable('rp');
exports.Rt = FClasses_1.stylable('rt');
exports.Ruby = FClasses_1.stylable('ruby');
exports.S = FClasses_1.stylable('s');
exports.Samp = FClasses_1.stylable('samp');
exports.Script = FClasses_1.stylable('script');
exports.Section = FClasses_1.stylable('section');
exports.Select = FClasses_1.stylable('select');
exports.Small = FClasses_1.stylable('small');
exports.Source = FClasses_1.stylable('source');
exports.Span = FClasses_1.stylable('span');
exports.Strike = FClasses_1.stylable('strike');
exports.Strong = FClasses_1.stylable('strong');
exports.Style = FClasses_1.stylable('style');
exports.Sub = FClasses_1.stylable('sub');
exports.Summary = FClasses_1.stylable('summary');
exports.Sup = FClasses_1.stylable('sup');
exports.Table = FClasses_1.stylable('table');
exports.Tbody = FClasses_1.stylable('tbody');
exports.Td = FClasses_1.stylable('td');
exports.Textarea = FClasses_1.stylable('textarea');
exports.Tfoot = FClasses_1.stylable('tfoot');
exports.Th = FClasses_1.stylable('th');
exports.Thead = FClasses_1.stylable('thead');
exports.Time = FClasses_1.stylable('time');
exports.Title = FClasses_1.stylable('title');
exports.Tr = FClasses_1.stylable('tr');
exports.Tt = FClasses_1.stylable('tt');
exports.U = FClasses_1.stylable('u');
exports.Ul = FClasses_1.stylable('ul');
exports.Var = FClasses_1.stylable('var');
exports.Video = FClasses_1.stylable('video');
exports.Wbr = FClasses_1.stylable('wbr');
//# sourceMappingURL=StyledHTML.js.map