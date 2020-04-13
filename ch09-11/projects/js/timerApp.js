(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
            return React.createElement('h1', null, 'Time left: ', this.props.timeLeft);
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
            return React.createElement('button', { type: 'button', className: 'btn-default btn',
                onClick: this.startTimer }, this.props.time, ' seconds');
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
            return React.createElement('div', { className: 'row-fluid' }, React.createElement('h2', null, 'Timer'), React.createElement('div', { className: 'btn-group', role: 'group' }, React.createElement(Button, { time: '5', startTimer: this.startTimer }), React.createElement(Button, { time: '10', startTimer: this.startTimer }), React.createElement(Button, { time: '15', startTimer: this.startTimer })), React.createElement(Timer, { timeLeft: this.state.timeLeft }), React.createElement('audio', { id: 'end-of-time', src: 'resources/flute_c_long_01.wav', preload: 'auto' }));
        }
    }]);

    return TimerWrapper;
}(React.Component);

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwicHJvamVjdHMvanN4L3RpbWVyd3JhcHBlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FNLFE7Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsZ0JBQUksS0FBQSxLQUFBLENBQUEsUUFBQSxJQUFKLENBQUEsRUFBOEI7QUFDMUIseUJBQUEsY0FBQSxDQUFBLGFBQUEsRUFBQSxJQUFBO0FBQ0g7QUFDRCxnQkFBSSxLQUFBLEtBQUEsQ0FBQSxRQUFBLElBQUEsSUFBQSxJQUErQixLQUFBLEtBQUEsQ0FBQSxRQUFBLElBQW5DLENBQUEsRUFDSSxPQUFPLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBUCxJQUFPLENBQVA7QUFDSixtQkFBTyxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBZ0IsS0FBQSxLQUFBLENBQVcsUUFBM0IsQ0FBUDtBQUNIOzs7O0VBUmUsTUFBTSxTOztJQVdwQixTOzs7QUFDRixhQUFBLE1BQUEsQ0FBQSxLQUFBLEVBQW1CO0FBQUEsd0JBQUEsSUFBQSxFQUFBLE1BQUE7O0FBQUEsWUFBQSxTQUFBLDJCQUFBLElBQUEsRUFBQSxDQUFBLE9BQUEsU0FBQSxJQUFBLE9BQUEsY0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7O0FBRWYsZUFBQSxVQUFBLEdBQWtCLE9BQUEsVUFBQSxDQUFBLElBQUEsQ0FBbEIsTUFBa0IsQ0FBbEI7QUFGZSxlQUFBLE1BQUE7QUFHbEI7QUFDRDs7Ozs7Ozs7bUNBS1csSyxFQUFPO0FBQ2QsbUJBQU8sS0FBQSxLQUFBLENBQUEsVUFBQSxDQUFzQixLQUFBLEtBQUEsQ0FBN0IsSUFBTyxDQUFQO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUFPLE1BQUEsYUFBQSxDQUFBLFFBQUEsRUFBQSxFQUFRLE1BQVIsUUFBQSxFQUFzQixXQUF0QixpQkFBQTtBQUNILHlCQUFTLEtBRE4sVUFBQSxFQUFBLEVBRUYsS0FBQSxLQUFBLENBRkUsSUFBQSxFQUFBLFVBQUEsQ0FBUDtBQUlIOzs7O0VBbkJnQixNQUFNLFM7O0lBc0JyQixlOzs7QUFDRixhQUFBLFlBQUEsQ0FBQSxLQUFBLEVBQW1CO0FBQUEsd0JBQUEsSUFBQSxFQUFBLFlBQUE7O0FBQUEsWUFBQSxTQUFBLDJCQUFBLElBQUEsRUFBQSxDQUFBLGFBQUEsU0FBQSxJQUFBLE9BQUEsY0FBQSxDQUFBLFlBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7O0FBRWYsZUFBQSxLQUFBLEdBQWEsRUFBRSxVQUFGLElBQUEsRUFBa0IsT0FBL0IsSUFBYSxFQUFiO0FBQ0EsZUFBQSxVQUFBLEdBQWtCLE9BQUEsVUFBQSxDQUFBLElBQUEsQ0FBbEIsTUFBa0IsQ0FBbEI7QUFIZSxlQUFBLE1BQUE7QUFJbEI7O0FBRUQ7Ozs7O21DQUNXLFEsRUFBVTtBQUFBLGdCQUFBLFNBQUEsSUFBQTs7QUFDakIsMEJBQWMsS0FBQSxLQUFBLENBQWQsS0FBQTtBQUNBLGdCQUFJLFFBQVEsWUFBWSxZQUFNO0FBQzFCLG9CQUFJLFdBQVcsT0FBQSxLQUFBLENBQUEsUUFBQSxHQUFmLENBQUE7QUFDQSxvQkFBSSxZQUFKLENBQUEsRUFBbUIsY0FBQSxLQUFBO0FBQ25CLHVCQUFBLFFBQUEsQ0FBYyxFQUFFLFVBQWhCLFFBQWMsRUFBZDtBQUhRLGFBQUEsRUFBWixJQUFZLENBQVo7QUFLQSxtQkFBTyxLQUFBLFFBQUEsQ0FBYyxFQUFFLFVBQUYsUUFBQSxFQUFzQixPQUEzQyxLQUFxQixFQUFkLENBQVA7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQ0ksTUFBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssV0FBTCxXQUFBLEVBQUEsRUFDSSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsQ0FESixFQUVJLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLFdBQUwsV0FBQSxFQUEyQixNQUEzQixPQUFBLEVBQUEsRUFDSSxNQUFBLGFBQUEsQ0FBQSxNQUFBLEVBQUEsRUFBUSxNQUFSLEdBQUEsRUFBaUIsWUFBWSxLQURqQyxVQUNJLEVBQUEsQ0FESixFQUVJLE1BQUEsYUFBQSxDQUFBLE1BQUEsRUFBQSxFQUFRLE1BQVIsSUFBQSxFQUFrQixZQUFZLEtBRmxDLFVBRUksRUFBQSxDQUZKLEVBR0ksTUFBQSxhQUFBLENBQUEsTUFBQSxFQUFBLEVBQVEsTUFBUixJQUFBLEVBQWtCLFlBQVksS0FBOUIsVUFBQSxFQUFBLENBSEosQ0FGSixFQU9JLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFPLFVBQVUsS0FBQSxLQUFBLENBUHJCLFFBT0ksRUFBQSxDQVBKLEVBUUksTUFBQSxhQUFBLENBQUEsT0FBQSxFQUFBLEVBQU8sSUFBUCxhQUFBLEVBQXdCLEtBQXhCLCtCQUFBLEVBQTRELFNBQTVELE1BQUEsRUFBQSxDQVJKLENBREo7QUFZSDs7OztFQS9Cc0IsTUFBTSxTOztBQWtDakMsU0FBQSxNQUFBLENBQ0ksTUFBQSxhQUFBLENBQUEsWUFBQSxFQURKLElBQ0ksQ0FESixFQUVJLFNBQUEsY0FBQSxDQUZKLFdBRUksQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIFRpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVMZWZ0ID09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtb2YtdGltZScpLnBsYXkoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVMZWZ0ID09IG51bGwgfHwgdGhpcy5wcm9wcy50aW1lTGVmdCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz5cbiAgICAgICAgcmV0dXJuIDxoMT5UaW1lIGxlZnQ6IHt0aGlzLnByb3BzLnRpbWVMZWZ0fTwvaDE+XG4gICAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIgPSB0aGlzLnN0YXJ0VGltZXIuYmluZCh0aGlzKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgbmV3IHRpbWVyIChyZXNldCkgZnJvbVxuICAgICAqIGEgdXNlciBjbGljay4gQ2FsbHMgc3RhcnRUaW1lclxuICAgICAqIGZyb20gQFRpbWVyV3JhcHBlclxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhcnRUaW1lcih0aGlzLnByb3BzLnRpbWUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPSdidG4tZGVmYXVsdCBidG4nXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXJ0VGltZXJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGltZX0gc2Vjb25kc1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIH1cbn1cblxuY2xhc3MgVGltZXJXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdGltZUxlZnQ6IG51bGwsIHRpbWVyOiBudWxsIH1cbiAgICAgICAgdGhpcy5zdGFydFRpbWVyID0gdGhpcy5zdGFydFRpbWVyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VycyB0aGUgbmV3IHRpbWVyIChyZXNldClcbiAgICBzdGFydFRpbWVyKHRpbWVMZWZ0KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS50aW1lcilcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRpbWVMZWZ0ID0gdGhpcy5zdGF0ZS50aW1lTGVmdCAtIDFcbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA9PSAwKSBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVMZWZ0OiB0aW1lTGVmdCB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVMZWZ0OiB0aW1lTGVmdCwgdGltZXI6IHRpbWVyIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8aDI+VGltZXI8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGltZT1cIjVcIiBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGltZT1cIjEwXCIgc3RhcnRUaW1lcj17dGhpcy5zdGFydFRpbWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpbWU9XCIxNVwiIHN0YXJ0VGltZXI9e3RoaXMuc3RhcnRUaW1lcn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGltZXIgdGltZUxlZnQ9e3RoaXMuc3RhdGUudGltZUxlZnR9IC8+XG4gICAgICAgICAgICAgICAgPGF1ZGlvIGlkPVwiZW5kLW9mLXRpbWVcIiBzcmM9XCJyZXNvdXJjZXMvZmx1dGVfY19sb25nXzAxLndhdlwiIHByZWxvYWQ9XCJhdXRvXCI+PC9hdWRpbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFRpbWVyV3JhcHBlciAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXItYXBwJylcbikiXX0=
