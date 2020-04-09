"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                {
                    className: "btn btn-primary",
                    onClick: this.props.handleClick },
                this.props.label
            );
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
            return React.createElement(
                "a",
                { onClick: this.props.handleClick, href: "#" },
                this.props.label
            );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9lbGVtZW50cy5qc3giXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJMaW5rIiwiTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFVLGlCQURQO0FBRUgsNkJBQVMsS0FBS0MsS0FBTCxDQUFXQyxXQUZqQjtBQUdFLHFCQUFLRCxLQUFMLENBQVdFO0FBSGIsYUFBUDtBQUtIOzs7O0VBUGdCQyxNQUFNQyxTOztJQVVyQkMsSTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFBTztBQUFBO0FBQUEsa0JBQUcsU0FBUyxLQUFLTCxLQUFMLENBQVdDLFdBQXZCLEVBQW9DLE1BQUssR0FBekM7QUFDRixxQkFBS0QsS0FBTCxDQUFXRTtBQURULGFBQVA7QUFHSDs7OztFQUxjQyxNQUFNQyxTOztJQVFuQkUsSTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFBTyw2QkFBSyxTQUFTLEtBQUtOLEtBQUwsQ0FBV0MsV0FBekIsRUFBc0MsT0FBTSxJQUE1QyxFQUFpRCxLQUFJLGlCQUFyRCxFQUF1RSxNQUFLLEdBQTVFLEdBQVA7QUFDSDs7OztFQUhjRSxNQUFNQyxTIiwiZmlsZSI6ImVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgPC9hPlxuICAgIH1cbn1cblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfSB3aWR0aD1cIjQwXCIgc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgaHJlZj1cIiNcIiAvPlxuICAgIH1cbn0iXX0=