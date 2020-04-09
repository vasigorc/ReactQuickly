'use strict';

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
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { className: 'btn' },
        this.props.buttonLabel
      );
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = { buttonLabel: 'Submit' };

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,
  email: function email(props, propName, componentName) {
    var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9idXR0b24uanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiYnV0dG9uTGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImhhbmRsZXIiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwic3RyaW5nIiwiZW1haWwiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJlbWFpbFJlZ3VsYXJFeHByZXNzaW9uIiwidGVzdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7OzZCQUNPO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUSxXQUFVLEtBQWxCO0FBQXlCLGFBQUtDLEtBQUwsQ0FBV0M7QUFBcEMsT0FBUDtBQUNEOzs7O0VBSGdCQyxNQUFNQyxTOztBQU16QkosT0FBT0ssWUFBUCxHQUFzQixFQUFDSCxhQUFhLFFBQWQsRUFBdEI7O0FBRUFGLE9BQU9NLFNBQVAsR0FBbUI7QUFDakJDLFdBQVNDLFVBQVVDLElBQVYsQ0FBZUMsVUFEUDtBQUVqQkMsU0FBT0gsVUFBVUksTUFGQTtBQUdqQkMsU0FBTyxlQUFTWixLQUFULEVBQWdCYSxRQUFoQixFQUEwQkMsYUFBMUIsRUFBeUM7QUFDOUMsUUFBSUMseUJBQXlCLG9GQUE3QjtBQUNBLFFBQUksQ0FBQ0EsdUJBQXVCQyxJQUF2QixDQUE0QmhCLE1BQU1hLFFBQU4sQ0FBNUIsQ0FBTCxFQUFtRDtBQUNqRCxhQUFPLElBQUlJLEtBQUosQ0FBVSwwQkFBVixDQUFQO0FBQ0Q7QUFDRjtBQVJnQixDQUFuQiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPnt0aGlzLnByb3BzLmJ1dHRvbkxhYmVsfTwvYnV0dG9uPlxuICAgIH1cbiAgfVxuICBcbiAgQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtidXR0b25MYWJlbDogJ1N1Ym1pdCd9XG4gIFxuICBCdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW1haWw6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgbGV0IGVtYWlsUmVndWxhckV4cHJlc3Npb24gPSAvXihbXFx3LV0rKD86XFwuW1xcdy1dKykqKUAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkL2lcbiAgICAgIGlmICghZW1haWxSZWd1bGFyRXhwcmVzc2lvbi50ZXN0KHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRW1haWwgdmFsaWRhdGlvbiBmYWlsZWQhJylcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0=