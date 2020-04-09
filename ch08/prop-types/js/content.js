"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var number = 1;
            return React.createElement(
                "div",
                null,
                React.createElement(Button, { buttonLabel: "Start" }),
                React.createElement(Button, null),
                React.createElement(Button, { title: number }),
                React.createElement(Button, null),
                React.createElement(Button, { email: "not-a-valid-email" }),
                React.createElement(Button, { email: "vasigorc@gmail.com" })
            );
        }
    }]);

    return Content;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9jb250ZW50LmpzeCJdLCJuYW1lcyI6WyJDb250ZW50IiwibnVtYmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTzs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxnQkFBTUMsU0FBUyxDQUFmO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksb0NBQUMsTUFBRCxJQUFRLGFBQVksT0FBcEIsR0FESjtBQUVJLG9DQUFDLE1BQUQsT0FGSjtBQUdJLG9DQUFDLE1BQUQsSUFBUSxPQUFPQSxNQUFmLEdBSEo7QUFJSSxvQ0FBQyxNQUFELE9BSko7QUFLSSxvQ0FBQyxNQUFELElBQVEsT0FBTSxtQkFBZCxHQUxKO0FBTUksb0NBQUMsTUFBRCxJQUFRLE9BQU0sb0JBQWQ7QUFOSixhQURKO0FBVUg7Ozs7RUFiaUJDLE1BQU1DLFMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gMVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbkxhYmVsPVwiU3RhcnRcIi8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e251bWJlcn0vPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGVtYWlsPVwibm90LWEtdmFsaWQtZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZW1haWw9XCJ2YXNpZ29yY0BnbWFpbC5jb21cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19