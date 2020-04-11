(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

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

var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            var url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
            return React.createElement('div', null, React.createElement('a', { href: url }, this.props.label), React.createElement('br', null));
        }
    }]);

    return Link;
}(React.Component);

exports.Link = Link;

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _link = require('./link');

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

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            var menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact Us'];
            return React.createElement('div', null, menuItems.map(function (v, i) {
                return React.createElement('div', { key: i }, React.createElement(_link.Link, { label: v }));
            }));
        }
    }]);

    return Menu;
}(React.Component);

exports.Menu = Menu;

},{"./link":1}],3:[function(require,module,exports){
'use strict';

var _menu = require('./menu');

ReactDOM.render(React.createElement(_menu.Menu, null), document.getElementById('menu'));

},{"./menu":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibWVudS9qc3gvbGluay5qc3giLCJtZW51L2pzeC9tZW51LmpzeCIsIm1lbnUvanN4L3NjcmlwdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxPOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFNLE1BQU0sTUFBTSxLQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxFQUFsQixHQUFrQixDQUFsQjtBQUNBLG1CQUFPLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQ0gsTUFBQSxhQUFBLENBQUEsR0FBQSxFQUFBLEVBQUcsTUFBSCxHQUFBLEVBQUEsRUFBZSxLQUFBLEtBQUEsQ0FBVyxLQUExQixDQURHLEVBRUgsTUFBQSxhQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FGRyxDQUFQO0FBSUg7Ozs7RUFQYyxNQUFNLFM7O1FBVWhCLEksR0FBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlQsSUFBQSxRQUFBLFFBQUEsUUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLE87Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsZ0JBQU0sWUFBWSxDQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsRUFBbEIsWUFBa0IsQ0FBbEI7QUFHQSxtQkFBTyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUNGLFVBQUEsR0FBQSxDQUFjLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBVTtBQUNyQix1QkFBTyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsRUFBSyxLQUFMLENBQUEsRUFBQSxFQUFhLE1BQUEsYUFBQSxDQUFDLE1BQUQsSUFBQSxFQUFBLEVBQU0sT0FBTixDQUFBLEVBQUEsQ0FBYixDQUFQO0FBREgsYUFBQSxDQURFLENBQVA7QUFLSDs7OztFQVZjLE1BQU0sUzs7UUFhaEIsSSxHQUFBLEk7Ozs7O0FDZlQsSUFBQSxRQUFBLFFBQUEsUUFBQSxDQUFBOztBQUVBLFNBQUEsTUFBQSxDQUNJLE1BQUEsYUFBQSxDQUFDLE1BQUQsSUFBQSxFQURKLElBQ0ksQ0FESixFQUVJLFNBQUEsY0FBQSxDQUZKLE1BRUksQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXJsID0gJy8nICsgdGhpcy5wcm9wcy5sYWJlbC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKCcgJywgJy0nKVxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+e3RoaXMucHJvcHMubGFiZWx9PC9hPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgeyBMaW5rIH0iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi9saW5rJ1xuXG5jbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAgICAgICdIb21lJywgJ0Fib3V0JywgJ1NlcnZpY2VzJywgJ1BvcnRmb2xpbycsICdDb250YWN0IFVzJ1xuICAgICAgICBdXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PjxMaW5rIGxhYmVsPXt2fSAvPjwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IHsgTWVudSB9IiwiaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vbWVudSdcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxNZW51IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbikiXX0=
