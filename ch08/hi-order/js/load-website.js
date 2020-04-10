'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

exports.LoadWebsite = LoadWebsite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9sb2FkLXdlYnNpdGUuanN4Il0sIm5hbWVzIjpbIkxvYWRXZWJzaXRlIiwiQ29tcG9uZW50IiwiX0xvYWRXZWJzaXRlIiwicHJvcHMiLCJzdGF0ZSIsImxhYmVsIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZXZlbnQiLCJpZnJhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiZ2V0VXJsIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJSZWFjdCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBZTtBQUFBLFFBQ3pCQyxZQUR5QjtBQUFBOztBQUUzQiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGtCQUFLQyxLQUFMLEdBQWEsRUFBQ0MsT0FBTztBQUNyQjs7OztBQURhLGFBQWIsQ0FLQSxNQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FBeUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBekI7QUFQZTtBQVFsQjs7QUFWMEI7QUFBQTtBQUFBLHFDQVdsQjtBQUNMLHVCQUFPLDJDQUFQO0FBQ0g7QUFiMEI7QUFBQTtBQUFBLHdDQWNmQyxLQWRlLEVBY1I7QUFDZixvQkFBSUMsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsR0FBakMsR0FBdUMsS0FBS0MsTUFBTCxFQUFwRDtBQUNIO0FBaEIwQjtBQUFBO0FBQUEsZ0RBaUJQO0FBQ2hCQyx3QkFBUUMsR0FBUixDQUFZQyxTQUFTQyxXQUFULENBQXFCLElBQXJCLENBQVo7QUFDSDtBQW5CMEI7QUFBQTtBQUFBLHFDQW9CbEI7QUFDTEgsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLWCxLQUFqQjtBQUNBOzs7QUFHQSx1QkFBTyxvQkFBQyxTQUFELGVBQWUsS0FBS0EsS0FBcEIsRUFBK0IsS0FBS0QsS0FBcEMsRUFBUDtBQUNIO0FBMUIwQjs7QUFBQTtBQUFBLE1BQ0plLE1BQU1qQixTQURGO0FBNEIvQjs7Ozs7QUFHQUMsaUJBQWFpQixXQUFiLEdBQTJCLG1CQUEzQjtBQUNBLFdBQU9qQixZQUFQO0FBQ0gsQ0FqQ0Q7O1FBbUNTRixXLEdBQUFBLFciLCJmaWxlIjoibG9hZC13ZWJzaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9hZFdlYnNpdGUgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY2xhc3MgX0xvYWRXZWJzaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtsYWJlbDogJ1J1bid9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1ha2Ugc3VyZSB0aGF0IGluIHRoaXMgbWV0aG9kLCBcInRoaXNcIiBpcyBhbHdheXMgYW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqIG9mIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgZ2V0VXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuICdodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXgtZnJhbWUtb3B0aW9ucydcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpLnNyYyA9IHRoaXMuZ2V0VXJsKClcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFBhc3NlcyBzdGF0ZSBhbmQgcHJvcHMgYXMgcHJvcGVydGllcyB1c2luZyBzcHJlYWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBkaXNwbGF5IG5hbWUgZm9yIHRoZSBIaWdoZXItT3JkZXIgQ29tcG9uZW50XG4gICAgICovXG4gICAgX0xvYWRXZWJzaXRlLmRpc3BsYXlOYW1lID0gJ0VuaGFuY2VkQ29tcG9uZW50J1xuICAgIHJldHVybiBfTG9hZFdlYnNpdGVcbn1cblxuZXhwb3J0IHsgTG9hZFdlYnNpdGUgfSJdfQ==