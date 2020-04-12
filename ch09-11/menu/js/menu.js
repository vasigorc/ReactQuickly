'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _link = require('./link');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return React.createElement(
                'div',
                null,
                this.state.menuItems.map(function (v, i) {
                    return React.createElement(
                        'div',
                        { key: i },
                        React.createElement(_link.Link, { label: v })
                    );
                })
            );
        }
    }]);

    return Menu;
}(React.Component);

exports.Menu = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9tZW51LmpzeCJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJzdGF0ZSIsIm1lbnVJdGVtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZW51cyIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnJvciIsIm1hcCIsInYiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxJOzs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFFQyxXQUFXLEVBQWIsRUFBYjtBQUZlO0FBR2xCOzs7OzRDQUVtQjtBQUFBOztBQUNoQkMsa0JBQU0sNkJBQU4sRUFDS0MsSUFETCxDQUNVLFVBQUNDLFFBQUQ7QUFBQSx1QkFBY0EsU0FBU0MsSUFBVCxFQUFkO0FBQUEsYUFEVixFQUVLRixJQUZMLENBRVUsaUJBQVM7QUFDWEcsd0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBLHVCQUFLQyxRQUFMLENBQWMsRUFBRVIsV0FBV08sS0FBYixFQUFkO0FBQ0gsYUFMTCxFQUtPRSxLQUxQLENBS2E7QUFBQSx1QkFBU0osUUFBUUMsR0FBUixDQUFZSSxLQUFaLENBQVQ7QUFBQSxhQUxiO0FBTUg7OztpQ0FFUTtBQUNMLG1CQUFPO0FBQUE7QUFBQTtBQUNGLHFCQUFLWCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJXLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2hDLDJCQUFPO0FBQUE7QUFBQSwwQkFBSyxLQUFLQSxDQUFWO0FBQWEsNENBQUMsVUFBRCxJQUFNLE9BQU9ELENBQWI7QUFBYixxQkFBUDtBQUNILGlCQUZBO0FBREUsYUFBUDtBQUtIOzs7O0VBckJjRSxNQUFNQyxTOztRQXdCaEJsQixJLEdBQUFBLEkiLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tICcuL2xpbmsnXG5cbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBtZW51SXRlbXM6IFtdIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZW51cycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKG1lbnVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51cylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudUl0ZW1zOiBtZW51cyB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51SXRlbXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT48TGluayBsYWJlbD17dn0gLz48L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCB7IE1lbnUgfSJdfQ==