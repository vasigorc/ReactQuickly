'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'a',
                    { href: url },
                    this.props.label
                ),
                React.createElement('br', null)
            );
        }
    }]);

    return Link;
}(React.Component);

exports.default = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9saW5rLmpzeCJdLCJuYW1lcyI6WyJMaW5rIiwidXJsIiwicHJvcHMiLCJsYWJlbCIsInRvTG93ZXJjYXNlIiwidHJpbSIsInJlcGxhY2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsZ0JBQU1DLE1BQU0sTUFBTSxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLFdBQWpCLEdBQStCQyxJQUEvQixHQUFzQ0MsT0FBdEMsQ0FBOEMsR0FBOUMsRUFBbUQsR0FBbkQsQ0FBbEI7QUFDQSxtQkFBTztBQUFBO0FBQUE7QUFDSDtBQUFBO0FBQUEsc0JBQUcsTUFBTUwsR0FBVDtBQUFlLHlCQUFLQyxLQUFMLENBQVdDO0FBQTFCLGlCQURHO0FBRUg7QUFGRyxhQUFQO0FBSUg7Ozs7RUFQNkJJLE1BQU1DLFM7O2tCQUFuQlIsSSIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1cmwgPSAnLycgKyB0aGlzLnByb3BzLmxhYmVsLnRvTG93ZXJjYXNlKCkudHJpbSgpLnJlcGxhY2UoJyAnLCAnLScpXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfT57dGhpcy5wcm9wcy5sYWJlbH08L2E+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59Il19