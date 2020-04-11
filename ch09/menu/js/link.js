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
            var url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
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

exports.Link = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9saW5rLmpzeCJdLCJuYW1lcyI6WyJMaW5rIiwidXJsIiwicHJvcHMiLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwidHJpbSIsInJlcGxhY2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxnQkFBTUMsTUFBTSxNQUFNLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsV0FBakIsR0FBK0JDLElBQS9CLEdBQXNDQyxPQUF0QyxDQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxDQUFsQjtBQUNBLG1CQUFPO0FBQUE7QUFBQTtBQUNIO0FBQUE7QUFBQSxzQkFBRyxNQUFNTCxHQUFUO0FBQWUseUJBQUtDLEtBQUwsQ0FBV0M7QUFBMUIsaUJBREc7QUFFSDtBQUZHLGFBQVA7QUFJSDs7OztFQVBjSSxNQUFNQyxTOztRQVVoQlIsSSxHQUFBQSxJIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvJyArIHRoaXMucHJvcHMubGFiZWwudG9Mb3dlckNhc2UoKS50cmltKCkucmVwbGFjZSgnICcsICctJylcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9Pnt0aGlzLnByb3BzLmxhYmVsfTwvYT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IHsgTGluayB9Il19