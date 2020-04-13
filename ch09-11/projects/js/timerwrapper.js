'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer() {
        _classCallCheck(this, Timer);

        return _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));
    }

    _createClass(Timer, [{
        key: 'render',
        value: function render() {
            if (this.props.timeLeft == 0) {
                document.getElementById('end-of-time').play();
            }
            if (this.props.timeLeft == null || this.props.timeLeft == 0) return React.createElement('div', null);
            return React.createElement(
                'h1',
                null,
                'Time left: ',
                this.props.timeLeft
            );
        }
    }]);

    return Timer;
}(React.Component);

var Button = function (_React$Component2) {
    _inherits(Button, _React$Component2);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this2.startTimer = _this2.startTimer.bind(_this2);
        return _this2;
    }
    /**
     * Triggers the new timer (reset) from
     * a user click. Calls startTimer
     * from @TimerWrapper
     */


    _createClass(Button, [{
        key: 'startTimer',
        value: function startTimer(event) {
            return this.props.startTimer(this.props.time);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { type: 'button', className: 'btn-default btn',
                    onClick: this.startTimer },
                this.props.time,
                ' seconds'
            );
        }
    }]);

    return Button;
}(React.Component);

var TimerWrapper = function (_React$Component3) {
    _inherits(TimerWrapper, _React$Component3);

    function TimerWrapper(props) {
        _classCallCheck(this, TimerWrapper);

        var _this3 = _possibleConstructorReturn(this, (TimerWrapper.__proto__ || Object.getPrototypeOf(TimerWrapper)).call(this, props));

        _this3.state = { timeLeft: null, timer: null };
        _this3.startTimer = _this3.startTimer.bind(_this3);
        return _this3;
    }

    // triggers the new timer (reset)


    _createClass(TimerWrapper, [{
        key: 'startTimer',
        value: function startTimer(timeLeft) {
            var _this4 = this;

            clearInterval(this.state.timer);
            var timer = setInterval(function () {
                var timeLeft = _this4.state.timeLeft - 1;
                if (timeLeft == 0) clearInterval(timer);
                _this4.setState({ timeLeft: timeLeft });
            }, 1000);
            return this.setState({ timeLeft: timeLeft, timer: timer });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row-fluid' },
                React.createElement(
                    'h2',
                    null,
                    'Timer'
                ),
                React.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    React.createElement(Button, { time: '5', startTimer: this.startTimer }),
                    React.createElement(Button, { time: '10', startTimer: this.startTimer }),
                    React.createElement(Button, { time: '15', startTimer: this.startTimer })
                ),
                React.createElement(Timer, { timeLeft: this.state.timeLeft }),
                React.createElement('audio', { id: 'end-of-time', src: 'resources/flute_c_long_01.wav', preload: 'auto' })
            );
        }
    }]);

    return TimerWrapper;
}(React.Component);

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC90aW1lcndyYXBwZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyIiwicHJvcHMiLCJ0aW1lTGVmdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJzdGFydFRpbWVyIiwiYmluZCIsImV2ZW50IiwidGltZSIsIlRpbWVyV3JhcHBlciIsInN0YXRlIiwidGltZXIiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsZ0JBQUksS0FBS0MsS0FBTCxDQUFXQyxRQUFYLElBQXVCLENBQTNCLEVBQThCO0FBQzFCQyx5QkFBU0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0MsSUFBdkM7QUFDSDtBQUNELGdCQUFJLEtBQUtKLEtBQUwsQ0FBV0MsUUFBWCxJQUF1QixJQUF2QixJQUErQixLQUFLRCxLQUFMLENBQVdDLFFBQVgsSUFBdUIsQ0FBMUQsRUFDSSxPQUFPLGdDQUFQO0FBQ0osbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBZ0IscUJBQUtELEtBQUwsQ0FBV0M7QUFBM0IsYUFBUDtBQUNIOzs7O0VBUmVJLE1BQU1DLFM7O0lBV3BCQyxNOzs7QUFDRixvQkFBWVAsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNUQSxLQURTOztBQUVmLGVBQUtRLFVBQUwsR0FBa0IsT0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsUUFBbEI7QUFGZTtBQUdsQjtBQUNEOzs7Ozs7Ozs7bUNBS1dDLEssRUFBTztBQUNkLG1CQUFPLEtBQUtWLEtBQUwsQ0FBV1EsVUFBWCxDQUFzQixLQUFLUixLQUFMLENBQVdXLElBQWpDLENBQVA7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQU87QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQztBQUNILDZCQUFTLEtBQUtILFVBRFg7QUFFRixxQkFBS1IsS0FBTCxDQUFXVyxJQUZUO0FBQUE7QUFBQSxhQUFQO0FBSUg7Ozs7RUFuQmdCTixNQUFNQyxTOztJQXNCckJNLFk7OztBQUNGLDBCQUFZWixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUlBQ1RBLEtBRFM7O0FBRWYsZUFBS2EsS0FBTCxHQUFhLEVBQUVaLFVBQVUsSUFBWixFQUFrQmEsT0FBTyxJQUF6QixFQUFiO0FBQ0EsZUFBS04sVUFBTCxHQUFrQixPQUFLQSxVQUFMLENBQWdCQyxJQUFoQixRQUFsQjtBQUhlO0FBSWxCOztBQUVEOzs7OzttQ0FDV1IsUSxFQUFVO0FBQUE7O0FBQ2pCYywwQkFBYyxLQUFLRixLQUFMLENBQVdDLEtBQXpCO0FBQ0EsZ0JBQUlBLFFBQVFFLFlBQVksWUFBTTtBQUMxQixvQkFBSWYsV0FBVyxPQUFLWSxLQUFMLENBQVdaLFFBQVgsR0FBc0IsQ0FBckM7QUFDQSxvQkFBSUEsWUFBWSxDQUFoQixFQUFtQmMsY0FBY0QsS0FBZDtBQUNuQix1QkFBS0csUUFBTCxDQUFjLEVBQUVoQixVQUFVQSxRQUFaLEVBQWQ7QUFDSCxhQUpXLEVBSVQsSUFKUyxDQUFaO0FBS0EsbUJBQU8sS0FBS2dCLFFBQUwsQ0FBYyxFQUFFaEIsVUFBVUEsUUFBWixFQUFzQmEsT0FBT0EsS0FBN0IsRUFBZCxDQUFQO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZixFQUEyQixNQUFLLE9BQWhDO0FBQ0ksd0NBQUMsTUFBRCxJQUFRLE1BQUssR0FBYixFQUFpQixZQUFZLEtBQUtOLFVBQWxDLEdBREo7QUFFSSx3Q0FBQyxNQUFELElBQVEsTUFBSyxJQUFiLEVBQWtCLFlBQVksS0FBS0EsVUFBbkMsR0FGSjtBQUdJLHdDQUFDLE1BQUQsSUFBUSxNQUFLLElBQWIsRUFBa0IsWUFBWSxLQUFLQSxVQUFuQztBQUhKLGlCQUZKO0FBT0ksb0NBQUMsS0FBRCxJQUFPLFVBQVUsS0FBS0ssS0FBTCxDQUFXWixRQUE1QixHQVBKO0FBUUksK0NBQU8sSUFBRyxhQUFWLEVBQXdCLEtBQUksK0JBQTVCLEVBQTRELFNBQVEsTUFBcEU7QUFSSixhQURKO0FBWUg7Ozs7RUEvQnNCSSxNQUFNQyxTOztBQWtDakNZLFNBQVNDLE1BQVQsQ0FDSSxvQkFBQyxZQUFELE9BREosRUFFSWpCLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGSiIsImZpbGUiOiJ0aW1lcndyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kLW9mLXRpbWUnKS5wbGF5KClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy50aW1lTGVmdCA9PSBudWxsIHx8IHRoaXMucHJvcHMudGltZUxlZnQgPT0gMClcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgICAgIHJldHVybiA8aDE+VGltZSBsZWZ0OiB7dGhpcy5wcm9wcy50aW1lTGVmdH08L2gxPlxuICAgIH1cbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyID0gdGhpcy5zdGFydFRpbWVyLmJpbmQodGhpcylcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIG5ldyB0aW1lciAocmVzZXQpIGZyb21cbiAgICAgKiBhIHVzZXIgY2xpY2suIENhbGxzIHN0YXJ0VGltZXJcbiAgICAgKiBmcm9tIEBUaW1lcldyYXBwZXJcbiAgICAgKi9cbiAgICBzdGFydFRpbWVyKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXJ0VGltZXIodGhpcy5wcm9wcy50aW1lKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT0nYnRuLWRlZmF1bHQgYnRuJ1xuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGFydFRpbWVyfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWV9IHNlY29uZHNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICB9XG59XG5cbmNsYXNzIFRpbWVyV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHRpbWVMZWZ0OiBudWxsLCB0aW1lcjogbnVsbCB9XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlcnMgdGhlIG5ldyB0aW1lciAocmVzZXQpXG4gICAgc3RhcnRUaW1lcih0aW1lTGVmdCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUudGltZXIpXG4gICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHZhciB0aW1lTGVmdCA9IHRoaXMuc3RhdGUudGltZUxlZnQgLSAxXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPT0gMCkgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lTGVmdDogdGltZUxlZnQgfSlcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB0aW1lTGVmdDogdGltZUxlZnQsIHRpbWVyOiB0aW1lciB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPGgyPlRpbWVyPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpbWU9XCI1XCIgc3RhcnRUaW1lcj17dGhpcy5zdGFydFRpbWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpbWU9XCIxMFwiIHN0YXJ0VGltZXI9e3RoaXMuc3RhcnRUaW1lcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aW1lPVwiMTVcIiBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRpbWVyIHRpbWVMZWZ0PXt0aGlzLnN0YXRlLnRpbWVMZWZ0fSAvPlxuICAgICAgICAgICAgICAgIDxhdWRpbyBpZD1cImVuZC1vZi10aW1lXCIgc3JjPVwicmVzb3VyY2VzL2ZsdXRlX2NfbG9uZ18wMS53YXZcIiBwcmVsb2FkPVwiYXV0b1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lcldyYXBwZXIgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVyLWFwcCcpXG4pIl19