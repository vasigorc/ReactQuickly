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

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = { menuItems: [] };
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('http://localhost:3000/menus').then(function (response) {
                return response.json();
            }).then(function (menus) {
                console.log(menus);
                _this2.setState({ menuItems: menus });
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', null, this.state.menuItems.map(function (v, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwicHJvamVjdHMvanN4L2xpbmsuanN4IiwicHJvamVjdHMvanN4L21lbnUuanN4IiwicHJvamVjdHMvanN4L3NjcmlwdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxPOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFNLE1BQU0sTUFBTSxLQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxFQUFsQixHQUFrQixDQUFsQjtBQUNBLG1CQUFPLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQ0gsTUFBQSxhQUFBLENBQUEsR0FBQSxFQUFBLEVBQUcsTUFBSCxHQUFBLEVBQUEsRUFBZSxLQUFBLEtBQUEsQ0FBVyxLQUExQixDQURHLEVBRUgsTUFBQSxhQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FGRyxDQUFQO0FBSUg7Ozs7RUFQYyxNQUFNLFM7O1FBVWhCLEksR0FBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlQsSUFBQSxRQUFBLFFBQUEsUUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLE87OztBQUNGLGFBQUEsSUFBQSxDQUFBLEtBQUEsRUFBbUI7QUFBQSx3QkFBQSxJQUFBLEVBQUEsSUFBQTs7QUFBQSxZQUFBLFFBQUEsMkJBQUEsSUFBQSxFQUFBLENBQUEsS0FBQSxTQUFBLElBQUEsT0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTs7QUFFZixjQUFBLEtBQUEsR0FBYSxFQUFFLFdBQWYsRUFBYSxFQUFiO0FBRmUsZUFBQSxLQUFBO0FBR2xCOzs7OzRDQUVtQjtBQUFBLGdCQUFBLFNBQUEsSUFBQTs7QUFDaEIsa0JBQUEsNkJBQUEsRUFBQSxJQUFBLENBQ1UsVUFBQSxRQUFBLEVBQUE7QUFBQSx1QkFBYyxTQUFkLElBQWMsRUFBZDtBQURWLGFBQUEsRUFBQSxJQUFBLENBRVUsVUFBQSxLQUFBLEVBQVM7QUFDWCx3QkFBQSxHQUFBLENBQUEsS0FBQTtBQUNBLHVCQUFBLFFBQUEsQ0FBYyxFQUFFLFdBQWhCLEtBQWMsRUFBZDtBQUpSLGFBQUEsRUFBQSxLQUFBLENBS2EsVUFBQSxLQUFBLEVBQUE7QUFBQSx1QkFBUyxRQUFBLEdBQUEsQ0FBVCxLQUFTLENBQVQ7QUFMYixhQUFBO0FBTUg7OztpQ0FFUTtBQUNMLG1CQUFPLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQ0YsS0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBeUIsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFVO0FBQ2hDLHVCQUFPLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLEtBQUwsQ0FBQSxFQUFBLEVBQWEsTUFBQSxhQUFBLENBQUMsTUFBRCxJQUFBLEVBQUEsRUFBTSxPQUFOLENBQUEsRUFBQSxDQUFiLENBQVA7QUFESCxhQUFBLENBREUsQ0FBUDtBQUtIOzs7O0VBckJjLE1BQU0sUzs7UUF3QmhCLEksR0FBQSxJOzs7OztBQzFCVCxJQUFBLFFBQUEsUUFBQSxRQUFBLENBQUE7O0FBRUEsU0FBQSxNQUFBLENBQ0ksTUFBQSxhQUFBLENBQUMsTUFBRCxJQUFBLEVBREosSUFDSSxDQURKLEVBRUksU0FBQSxjQUFBLENBRkosTUFFSSxDQUZKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1cmwgPSAnLycgKyB0aGlzLnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoJyAnLCAnLScpXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfT57dGhpcy5wcm9wcy5sYWJlbH08L2E+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCB7IExpbmsgfSIsImltcG9ydCB7IExpbmsgfSBmcm9tICcuL2xpbmsnXG5cbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBtZW51SXRlbXM6IFtdIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZW51cycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKG1lbnVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51cylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudUl0ZW1zOiBtZW51cyB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51SXRlbXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT48TGluayBsYWJlbD17dn0gLz48L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCB7IE1lbnUgfSIsImltcG9ydCB7IE1lbnUgfSBmcm9tICcuL21lbnUnXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWVudSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG4pIl19
