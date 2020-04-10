'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return React.createElement(
                'div',
                null,
                menuItems.map(function (v, i) {
                    return React.createElement(
                        'div',
                        { key: i },
                        React.createElement(_link2.default, { label: v })
                    );
                })
            );
        }
    }]);

    return Menu;
}(React.Component);

exports.Menu = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9tZW51LmpzeCJdLCJuYW1lcyI6WyJNZW51IiwibWVudUl0ZW1zIiwibWFwIiwidiIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFNQyxZQUFZLENBQ2QsTUFEYyxFQUNOLE9BRE0sRUFDRyxVQURILEVBQ2UsV0FEZixFQUM0QixZQUQ1QixDQUFsQjtBQUdBLG1CQUFPO0FBQUE7QUFBQTtBQUNGQSwwQkFBVUMsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLDJCQUFPO0FBQUE7QUFBQSwwQkFBSyxLQUFLQSxDQUFWO0FBQ0gsNENBQUMsY0FBRCxJQUFNLE9BQU9ELENBQWI7QUFERyxxQkFBUDtBQUdILGlCQUpBO0FBREUsYUFBUDtBQU9IOzs7O0VBWmNFLE1BQU1DLFM7O1FBZWhCTixJLEdBQUFBLEkiLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcblxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgICAgICAnSG9tZScsICdBYm91dCcsICdTZXJ2aWNlcycsICdQb3J0Zm9saW8nLCAnQ29udGFjdCBVcydcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGFiZWw9e3Z9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCB7IE1lbnUgfSJdfQ==