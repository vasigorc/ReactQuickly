'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Content = exports.EnhancedLogo = exports.EnhancedLink = exports.EnhancedButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loadWebsite = require('./load-website');

var _elements = require('./elements');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return React.createElement(
                'div',
                null,
                React.createElement(EnhancedButton, null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(EnhancedLink, null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(EnhancedLogo, null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('iframe', { id: 'frame', src: '', width: '600', height: '500' })
            );
        }
    }]);

    return Content;
}(React.Component);

exports.EnhancedButton = EnhancedButton;
exports.EnhancedLink = EnhancedLink;
exports.EnhancedLogo = EnhancedLogo;
exports.Content = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9jb250ZW50LmpzeCJdLCJuYW1lcyI6WyJFbmhhbmNlZEJ1dHRvbiIsIkJ1dHRvbiIsIkVuaGFuY2VkTGluayIsIkxpbmsiLCJFbmhhbmNlZExvZ28iLCJMb2dvIiwiQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsOEJBQVlDLGdCQUFaLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSw4QkFBWUMsY0FBWixDQUFyQjtBQUNBLElBQU1DLGVBQWUsOEJBQVlDLGNBQVosQ0FBckI7O0lBRU1DLE87Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksb0NBQUMsY0FBRCxPQURKO0FBRUksK0NBRko7QUFHSSwrQ0FISjtBQUlJLG9DQUFDLFlBQUQsT0FKSjtBQUtJLCtDQUxKO0FBTUksK0NBTko7QUFPSSxvQ0FBQyxZQUFELE9BUEo7QUFRSSwrQ0FSSjtBQVNJLCtDQVRKO0FBVUksZ0RBQVEsSUFBRyxPQUFYLEVBQW1CLEtBQUksRUFBdkIsRUFBMEIsT0FBTSxLQUFoQyxFQUFzQyxRQUFPLEtBQTdDO0FBVkosYUFESjtBQWNIOzs7O0VBaEJpQkMsTUFBTUMsUzs7UUFtQm5CUixjLEdBQUFBLGM7UUFBZ0JFLFksR0FBQUEsWTtRQUFjRSxZLEdBQUFBLFk7UUFBY0UsTyxHQUFBQSxPIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkV2Vic2l0ZSB9IGZyb20gJy4vbG9hZC13ZWJzaXRlJ1xuaW1wb3J0IHsgQnV0dG9uLCBMaW5rLCBMb2dvIH0gZnJvbSAnLi9lbGVtZW50cydcblxuY29uc3QgRW5oYW5jZWRCdXR0b24gPSBMb2FkV2Vic2l0ZShCdXR0b24pXG5jb25zdCBFbmhhbmNlZExpbmsgPSBMb2FkV2Vic2l0ZShMaW5rKVxuY29uc3QgRW5oYW5jZWRMb2dvID0gTG9hZFdlYnNpdGUoTG9nbylcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RW5oYW5jZWRCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8RW5oYW5jZWRMaW5rIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEVuaGFuY2VkTG9nbyAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJmcmFtZVwiIHNyYz1cIlwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgeyBFbmhhbmNlZEJ1dHRvbiwgRW5oYW5jZWRMaW5rLCBFbmhhbmNlZExvZ28sIENvbnRlbnQgfSJdfQ==