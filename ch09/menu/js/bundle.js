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
            var url = '/' + this.props.label.toLowercase().trim().replace(' ', '-');
            return React.createElement('div', null, React.createElement('a', { href: url }, this.props.label), React.createElement('br', null));
        }
    }]);

    return Link;
}(React.Component);

exports.default = Link;

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

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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
                return React.createElement('div', { key: i }, React.createElement(_link2.default, { label: v }));
            }));
        }
    }]);

    return Menu;
}(React.Component);

exports.Menu = Menu;

},{"./link":1}],3:[function(require,module,exports){
'use strict';

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

ReactDOM.render(React.createElement(_menu2.default, null), document.getElementById('menu'));

},{"./menu":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibWVudS9qc3gvbGluay5qc3giLCJtZW51L2pzeC9tZW51LmpzeCIsIm1lbnUvanN4L3NjcmlwdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsTzs7Ozs7Ozs7Ozs7aUNBQ1I7QUFDTCxnQkFBTSxNQUFNLE1BQU0sS0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsR0FBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsRUFBbEIsR0FBa0IsQ0FBbEI7QUFDQSxtQkFBTyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUNILE1BQUEsYUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFHLE1BQUgsR0FBQSxFQUFBLEVBQWUsS0FBQSxLQUFBLENBQVcsS0FBMUIsQ0FERyxFQUVILE1BQUEsYUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLENBRkcsQ0FBUDtBQUlIOzs7O0VBUDZCLE1BQU0sUzs7a0JBQW5CLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBckIsSUFBQSxRQUFBLFFBQUEsUUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLE87Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsZ0JBQU0sWUFBWSxDQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsRUFBbEIsWUFBa0IsQ0FBbEI7QUFHQSxtQkFBTyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUNGLFVBQUEsR0FBQSxDQUFjLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBVTtBQUNyQix1QkFBTyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsRUFBSyxLQUFMLENBQUEsRUFBQSxFQUNILE1BQUEsYUFBQSxDQUFDLE9BQUQsT0FBQSxFQUFBLEVBQU0sT0FBTixDQUFBLEVBQUEsQ0FERyxDQUFQO0FBREgsYUFBQSxDQURFLENBQVA7QUFPSDs7OztFQVpjLE1BQU0sUzs7UUFlaEIsSSxHQUFBLEk7Ozs7O0FDakJULElBQUEsUUFBQSxRQUFBLFFBQUEsQ0FBQTs7Ozs7Ozs7QUFFQSxTQUFBLE1BQUEsQ0FDSSxNQUFBLGFBQUEsQ0FBQyxPQUFELE9BQUEsRUFESixJQUNJLENBREosRUFFSSxTQUFBLGNBQUEsQ0FGSixNQUVJLENBRkoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvJyArIHRoaXMucHJvcHMubGFiZWwudG9Mb3dlcmNhc2UoKS50cmltKCkucmVwbGFjZSgnICcsICctJylcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9Pnt0aGlzLnByb3BzLmxhYmVsfTwvYT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn0iLCJpbXBvcnQgTGluayBmcm9tICcuL2xpbmsnXG5cbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICAgICAgJ0hvbWUnLCAnQWJvdXQnLCAnU2VydmljZXMnLCAnUG9ydGZvbGlvJywgJ0NvbnRhY3QgVXMnXG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGxhYmVsPXt2fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgeyBNZW51IH0iLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWVudSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG4pIl19
