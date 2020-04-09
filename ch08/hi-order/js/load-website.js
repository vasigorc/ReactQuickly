'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9sb2FkLXdlYnNpdGUuanN4Il0sIm5hbWVzIjpbIkxvYWRXZWJzaXRlIiwiQ29tcG9uZW50IiwiX0xvYWRXZWJzaXRlIiwicHJvcHMiLCJzdGF0ZSIsImxhYmVsIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZXZlbnQiLCJpZnJhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiZ2V0VXJsIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJSZWFjdCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQUEsUUFDekJDLFlBRHlCO0FBQUE7O0FBRTNCLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsa0JBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPO0FBQ3JCOzs7O0FBRGEsYUFBYixDQUtBLE1BQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUF5QixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUF6QjtBQVBlO0FBUWxCOztBQVYwQjtBQUFBO0FBQUEscUNBV2xCO0FBQ0wsdUJBQU8sMkNBQVA7QUFDSDtBQWIwQjtBQUFBO0FBQUEsd0NBY2ZDLEtBZGUsRUFjUjtBQUNmLG9CQUFJQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxHQUFqQyxHQUF1QyxLQUFLQyxNQUFMLEVBQXBEO0FBQ0g7QUFoQjBCO0FBQUE7QUFBQSxnREFpQlA7QUFDaEJDLHdCQUFRQyxHQUFSLENBQVlDLFNBQVNDLFdBQVQsQ0FBcUIsSUFBckIsQ0FBWjtBQUNIO0FBbkIwQjtBQUFBO0FBQUEscUNBb0JsQjtBQUNMSCx3QkFBUUMsR0FBUixDQUFZLEtBQUtYLEtBQWpCO0FBQ0E7OztBQUdBLHVCQUFPLG9CQUFDLFNBQUQsZUFBZSxLQUFLQSxLQUFwQixFQUErQixLQUFLRCxLQUFwQyxFQUFQO0FBQ0g7QUExQjBCOztBQUFBO0FBQUEsTUFDSmUsTUFBTWpCLFNBREY7QUE0Qi9COzs7OztBQUdBQyxpQkFBYWlCLFdBQWIsR0FBMkIsbUJBQTNCO0FBQ0EsV0FBT2pCLFlBQVA7QUFDSCxDQWpDRCIsImZpbGUiOiJsb2FkLXdlYnNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMb2FkV2Vic2l0ZSA9IChDb21wb25lbnQpID0+IHtcbiAgICBjbGFzcyBfTG9hZFdlYnNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge2xhYmVsOiAnUnVuJ31cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWFrZSBzdXJlIHRoYXQgaW4gdGhpcyBtZXRob2QsIFwidGhpc1wiIGlzIGFsd2F5cyBhbiBpbnN0YW5jZVxuICAgICAgICAgICAgICogb2YgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgfVxuICAgICAgICBnZXRVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9eC1mcmFtZS1vcHRpb25zJ1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lJykuc3JjID0gdGhpcy5nZXRVcmwoKVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coUmVhY3RET00uZmluZERPTU5vZGUodGhpcykpXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGFzc2VzIHN0YXRlIGFuZCBwcm9wcyBhcyBwcm9wZXJ0aWVzIHVzaW5nIHNwcmVhZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIGRpc3BsYXkgbmFtZSBmb3IgdGhlIEhpZ2hlci1PcmRlciBDb21wb25lbnRcbiAgICAgKi9cbiAgICBfTG9hZFdlYnNpdGUuZGlzcGxheU5hbWUgPSAnRW5oYW5jZWRDb21wb25lbnQnXG4gICAgcmV0dXJuIF9Mb2FkV2Vic2l0ZVxufSJdfQ==