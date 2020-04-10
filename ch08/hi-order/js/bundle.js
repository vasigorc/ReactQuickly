(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Content = exports.EnhancedLogo = exports.EnhancedLink = exports.EnhancedButton = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _loadWebsite = require('./load-website');

var _elements = require('./elements');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var EnhancedButton = (0, _loadWebsite.LoadWebsite)(_elements.Button);
var EnhancedLink = (0, _loadWebsite.LoadWebsite)(_elements.Link);
var EnhancedLogo = (0, _loadWebsite.LoadWebsite)(_elements.Logo);

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', null, React.createElement(EnhancedButton, null), React.createElement('br', null), React.createElement('br', null), React.createElement(EnhancedLink, null), React.createElement('br', null), React.createElement('br', null), React.createElement(EnhancedLogo, null), React.createElement('br', null), React.createElement('br', null), React.createElement('iframe', { id: 'frame', src: '', width: '600', height: '500' }));
        }
    }]);

    return Content;
}(React.Component);

exports.EnhancedButton = EnhancedButton;
exports.EnhancedLink = EnhancedLink;
exports.EnhancedLogo = EnhancedLogo;
exports.Content = Content;

},{"./elements":2,"./load-website":3}],2:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement("button", {
                className: "btn btn-primary",
                onClick: this.props.handleClick }, this.props.label);
        }
    }]);

    return Button;
}(React.Component);

var Link = function (_React$Component2) {
    _inherits(Link, _React$Component2);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: "render",
        value: function render() {
            return React.createElement("a", { onClick: this.props.handleClick, href: "#" }, this.props.label);
        }
    }]);

    return Link;
}(React.Component);

var Logo = function (_React$Component3) {
    _inherits(Logo, _React$Component3);

    function Logo() {
        _classCallCheck(this, Logo);

        return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
    }

    _createClass(Logo, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "images/logo.png", href: "#" });
        }
    }]);

    return Logo;
}(React.Component);

exports.Button = Button;
exports.Link = Link;
exports.Logo = Logo;

},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LoadWebsite = function LoadWebsite(Component) {
    var _LoadWebsite = function (_React$Component) {
        _inherits(_LoadWebsite, _React$Component);

        function _LoadWebsite(props) {
            _classCallCheck(this, _LoadWebsite);

            var _this = _possibleConstructorReturn(this, (_LoadWebsite.__proto__ || Object.getPrototypeOf(_LoadWebsite)).call(this, props));

            _this.state = { label: 'Run'
                /**
                 * Make sure that in this method, "this" is always an instance
                 * of this component.
                 */
            };_this.state.handleClick = _this.handleClick.bind(_this);
            return _this;
        }

        _createClass(_LoadWebsite, [{
            key: 'getUrl',
            value: function getUrl() {
                return 'https://caniuse.com/#feat=x-frame-options';
            }
        }, {
            key: 'handleClick',
            value: function handleClick(event) {
                var iframe = document.getElementById('frame').src = this.getUrl();
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                console.log(ReactDOM.findDOMNode(this));
            }
        }, {
            key: 'render',
            value: function render() {
                console.log(this.state);
                /**
                 * Passes state and props as properties using spread
                 */
                return React.createElement(Component, _extends({}, this.state, this.props));
            }
        }]);

        return _LoadWebsite;
    }(React.Component);
    /**
     * Defines a display name for the Higher-Order Component
     */

    _LoadWebsite.displayName = 'EnhancedComponent';
    return _LoadWebsite;
};

exports.LoadWebsite = LoadWebsite;

},{}],4:[function(require,module,exports){
'use strict';

var _content = require('./content');

ReactDOM.render(React.createElement(_content.Content, null), document.getElementById('content'));

},{"./content":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianN4L2NvbnRlbnQuanN4IiwianN4L2VsZW1lbnRzLmpzeCIsImpzeC9sb2FkLXdlYnNpdGUuanN4IiwianN4L3NjcmlwdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsZ0JBQUEsQ0FBQTs7QUFDQSxJQUFBLFlBQUEsUUFBQSxZQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsQ0FBQSxHQUFBLGFBQUEsV0FBQSxFQUFZLFVBQW5DLE1BQXVCLENBQXZCO0FBQ0EsSUFBTSxlQUFlLENBQUEsR0FBQSxhQUFBLFdBQUEsRUFBWSxVQUFqQyxJQUFxQixDQUFyQjtBQUNBLElBQU0sZUFBZSxDQUFBLEdBQUEsYUFBQSxXQUFBLEVBQVksVUFBakMsSUFBcUIsQ0FBckI7O0lBRU0sVTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFDSSxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUNJLE1BQUEsYUFBQSxDQUFBLGNBQUEsRUFESixJQUNJLENBREosRUFFSSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBRkosSUFFSSxDQUZKLEVBR0ksTUFBQSxhQUFBLENBQUEsSUFBQSxFQUhKLElBR0ksQ0FISixFQUlJLE1BQUEsYUFBQSxDQUFBLFlBQUEsRUFKSixJQUlJLENBSkosRUFLSSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBTEosSUFLSSxDQUxKLEVBTUksTUFBQSxhQUFBLENBQUEsSUFBQSxFQU5KLElBTUksQ0FOSixFQU9JLE1BQUEsYUFBQSxDQUFBLFlBQUEsRUFQSixJQU9JLENBUEosRUFRSSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBUkosSUFRSSxD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QStCLEtBQXRDLEtBQU8sQ0FBQSxDQUFQO0FBQ0g7QUExQjBCLFNBQUEsQ0FBQTs7QUFBQSxlQUFBLFlBQUE7QUFBQSxLQUFBLENBQ0osTUFESSxTQUFBLENBQUE7QUE0Qi9COzs7O0FBR0EsaUJBQUEsV0FBQSxHQUFBLG1CQUFBO0FBQ0EsV0FBQSxZQUFBO0FBaENKLENBQUE7O1FBbUNTLFcsR0FBQSxXOzs7OztBQ25DVCxJQUFBLFdBQUEsUUFBQSxXQUFBLENBQUE7O0FBRUEsU0FBQSxNQUFBLENBQ0ksTUFBQSxhQUFBLENBQUMsU0FBRCxPQUFBLEVBREosSUFDSSxDQURKLEVBRUksU0FBQSxjQUFBLENBRkosU0FFSSxDQUZKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgTG9hZFdlYnNpdGUgfSBmcm9tICcuL2xvYWQtd2Vic2l0ZSdcbmltcG9ydCB7IEJ1dHRvbiwgTGluaywgTG9nbyB9IGZyb20gJy4vZWxlbWVudHMnXG5cbmNvbnN0IEVuaGFuY2VkQnV0dG9uID0gTG9hZFdlYnNpdGUoQnV0dG9uKVxuY29uc3QgRW5oYW5jZWRMaW5rID0gTG9hZFdlYnNpdGUoTGluaylcbmNvbnN0IEVuaGFuY2VkTG9nbyA9IExvYWRXZWJzaXRlKExvZ28pXG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEVuaGFuY2VkQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEVuaGFuY2VkTGluayAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxFbmhhbmNlZExvZ28gLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIGlkPVwiZnJhbWVcIiBzcmM9XCJcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjUwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW5oYW5jZWRCdXR0b24sIEVuaGFuY2VkTGluaywgRW5oYW5jZWRMb2dvLCBDb250ZW50IH0iLCJjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGEgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L2E+XG4gICAgfVxufVxuXG5jbGFzcyBMb2dvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aW1nIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IHdpZHRoPVwiNDBcIiBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBocmVmPVwiI1wiIC8+XG4gICAgfVxufVxuXG5leHBvcnQgeyBCdXR0b24sIExpbmssIExvZ28gfSIsImNvbnN0IExvYWRXZWJzaXRlID0gKENvbXBvbmVudCkgPT4ge1xuICAgIGNsYXNzIF9Mb2FkV2Vic2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7bGFiZWw6ICdSdW4nfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYWtlIHN1cmUgdGhhdCBpbiB0aGlzIG1ldGhvZCwgXCJ0aGlzXCIgaXMgYWx3YXlzIGFuIGluc3RhbmNlXG4gICAgICAgICAgICAgKiBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIGdldFVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD14LWZyYW1lLW9wdGlvbnMnXG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUnKS5zcmMgPSB0aGlzLmdldFVybCgpXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQYXNzZXMgc3RhdGUgYW5kIHByb3BzIGFzIHByb3BlcnRpZXMgdXNpbmcgc3ByZWFkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgZGlzcGxheSBuYW1lIGZvciB0aGUgSGlnaGVyLU9yZGVyIENvbXBvbmVudFxuICAgICAqL1xuICAgIF9Mb2FkV2Vic2l0ZS5kaXNwbGF5TmFtZSA9ICdFbmhhbmNlZENvbXBvbmVudCdcbiAgICByZXR1cm4gX0xvYWRXZWJzaXRlXG59XG5cbmV4cG9ydCB7IExvYWRXZWJzaXRlIH0iLCJpbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9jb250ZW50J1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENvbnRlbnQgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKSJdfQ==
