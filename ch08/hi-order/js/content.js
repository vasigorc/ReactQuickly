"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedButton = LoadWebsite(Button);
var EnhancedLink = LoadWebsite(Link);
var EnhancedLogo = LoadWebsite(Logo);

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(EnhancedButton, null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(EnhancedLink, null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(EnhancedLogo, null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
            );
        }
    }]);

    return Content;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9jb250ZW50LmpzeCJdLCJuYW1lcyI6WyJFbmhhbmNlZEJ1dHRvbiIsIkxvYWRXZWJzaXRlIiwiQnV0dG9uIiwiRW5oYW5jZWRMaW5rIiwiTGluayIsIkVuaGFuY2VkTG9nbyIsIkxvZ28iLCJDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUJDLFlBQVlDLE1BQVosQ0FBdkI7QUFDQSxJQUFNQyxlQUFlRixZQUFZRyxJQUFaLENBQXJCO0FBQ0EsSUFBTUMsZUFBZUosWUFBWUssSUFBWixDQUFyQjs7SUFFTUMsTzs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSxvQ0FBQyxjQUFELE9BREo7QUFFSSwrQ0FGSjtBQUdJLCtDQUhKO0FBSUksb0NBQUMsWUFBRCxPQUpKO0FBS0ksK0NBTEo7QUFNSSwrQ0FOSjtBQU9JLG9DQUFDLFlBQUQsT0FQSjtBQVFJLCtDQVJKO0FBU0ksK0NBVEo7QUFVSSxnREFBUSxJQUFHLE9BQVgsRUFBbUIsS0FBSSxFQUF2QixFQUEwQixPQUFNLEtBQWhDLEVBQXNDLFFBQU8sS0FBN0M7QUFWSixhQURKO0FBY0g7Ozs7RUFoQmlCQyxNQUFNQyxTIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbmhhbmNlZEJ1dHRvbiA9IExvYWRXZWJzaXRlKEJ1dHRvbilcbmNvbnN0IEVuaGFuY2VkTGluayA9IExvYWRXZWJzaXRlKExpbmspXG5jb25zdCBFbmhhbmNlZExvZ28gPSBMb2FkV2Vic2l0ZShMb2dvKVxuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxFbmhhbmNlZEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxFbmhhbmNlZExpbmsgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8RW5oYW5jZWRMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBpZD1cImZyYW1lXCIgc3JjPVwiXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI1MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19