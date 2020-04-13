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

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        /**
         * Using the opacity CSS @property 
         * you can change the transparency of elements,
         * value is between 0 and 1 (default)
         */
        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.state = { opacity: false };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Tooltip, [{
        key: 'toggle',
        value: function toggle() {
            /**
             * offsetLet and offsetTop are DOM Node properties from HTML standard:
             * https://developer.mozilla.org/en-US/docs/Web/API/Node
             */
            var _ReactDOM$findDOMNode = ReactDOM.findDOMNode(this),
                top = _ReactDOM$findDOMNode.offsetTop,
                left = _ReactDOM$findDOMNode.offsetLeft;

            this.setState({
                opacity: !this.state.opacity,
                top: top,
                left: left
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                zIndex: this.state.opacity ? 1000 : -1000,
                opacity: +this.state.opacity,
                top: (this.state.top || 0) + 20,
                left: (this.state.left || 0) - 30
            };
            return React.createElement('div', { style: { display: 'inline' } }, React.createElement('span', { style: { colo: 'blue' },
                onMouseEnter: this.toggle,
                onMouseOut: this.toggle }, this.props.children), React.createElement('div', { className: 'tooltip bottom',
                style: style,
                role: 'tooltip' }, React.createElement('div', { className: 'tooltip-arrow' }), React.createElement('div', { className: 'tooltip-inner' }, this.props.text)));
        }
    }]);

    return Tooltip;
}(React.Component);

ReactDOM.render(React.createElement('div', null, 'The tooltip or infotip or a hint is a common ', React.createElement(Tooltip, { text: ' form of user interface that allows users to interact with electronic devices' }, 'graphical user interface'), ' element. It is used in conjunction with a ', React.createElement(Tooltip, { text: 'current position for user interaction on a computer monitor' }, 'cursor'), ', usually a pointer.'), document.getElementById('tooltip'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTAuNi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwicHJvamVjdHMvanN4L3Rvb2x0aXAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxVOzs7QUFDRixhQUFBLE9BQUEsQ0FBQSxLQUFBLEVBQW1CO0FBQUEsd0JBQUEsSUFBQSxFQUFBLE9BQUE7O0FBRWY7Ozs7O0FBRmUsWUFBQSxRQUFBLDJCQUFBLElBQUEsRUFBQSxDQUFBLFFBQUEsU0FBQSxJQUFBLE9BQUEsY0FBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7O0FBT2YsY0FBQSxLQUFBLEdBQWEsRUFBRSxTQUFmLEtBQWEsRUFBYjtBQUNBLGNBQUEsTUFBQSxHQUFjLE1BQUEsTUFBQSxDQUFBLElBQUEsQ0FBZCxLQUFjLENBQWQ7QUFSZSxlQUFBLEtBQUE7QUFTbEI7Ozs7aUNBRVE7QUFDTDs7OztBQURLLGdCQUFBLHdCQUtzQyxTQUFBLFdBQUEsQ0FMdEMsSUFLc0MsQ0FMdEM7QUFBQSxnQkFBQSxNQUFBLHNCQUFBLFNBQUE7QUFBQSxnQkFBQSxPQUFBLHNCQUFBLFVBQUE7O0FBT0wsaUJBQUEsUUFBQSxDQUFjO0FBQ1YseUJBQVMsQ0FBQyxLQUFBLEtBQUEsQ0FEQSxPQUFBO0FBRVYscUJBRlUsR0FBQTtBQUdWLHNCQUFBO0FBSFUsYUFBZDtBQUtIOzs7aUNBRVE7QUFDTCxnQkFBTSxRQUFRO0FBQ1Ysd0JBQVMsS0FBQSxLQUFBLENBQUQsT0FBQyxHQUFELElBQUMsR0FBNkIsQ0FENUIsSUFBQTtBQUVWLHlCQUFTLENBQUMsS0FBQSxLQUFBLENBRkEsT0FBQTtBQUdWLHFCQUFLLENBQUMsS0FBQSxLQUFBLENBQUEsR0FBQSxJQUFELENBQUEsSUFISyxFQUFBO0FBSVYsc0JBQU0sQ0FBQyxLQUFBLEtBQUEsQ0FBQSxJQUFBLElBQUQsQ0FBQSxJQUF5QjtBQUpyQixhQUFkO0FBTUEsbUJBQ0ksTUFBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssT0FBTyxFQUFDLFNBQWIsUUFBWSxFQUFaLEVBQUEsRUFDSSxNQUFBLGFBQUEsQ0FBQSxNQUFBLEVBQUEsRUFBTSxPQUFPLEVBQUMsTUFBZCxNQUFhLEVBQWI7QUFDSSw4QkFBYyxLQURsQixNQUFBO0FBRUksNEJBQVksS0FGaEIsTUFBQSxFQUFBLEVBR0ssS0FBQSxLQUFBLENBQVcsUUFIaEIsQ0FESixFQU1RLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLFdBQUwsZ0JBQUE7QUFDSSx1QkFESixLQUFBO0FBRUksc0JBRkosU0FBQSxFQUFBLEVBR1EsTUFBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssV0FIYixlQUdRLEVBQUEsQ0FIUixFQUlRLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLFdBQUwsZUFBQSxFQUFBLEVBQ0ssS0FBQSxLQUFBLENBQVcsSUFEaEIsQ0FKUixDQU5SLENBREo7QUFpQkg7Ozs7RUFsRGlCLE1BQU0sUzs7QUFxRDVCLFNBQUEsTUFBQSxDQUNJLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsK0NBQUEsRUFDaUQsTUFBQSxhQUFBLENBQUEsT0FBQSxFQUFBLEVBQVMsTUFBVCwrRUFBQSxFQUFBLEVBQUEsMEJBQUEsQ0FEakQsRUFBQSw2Q0FBQSxFQUVxRixNQUFBLGFBQUEsQ0FBQSxPQUFBLEVBQUEsRUFBUyxNQUFULDZEQUFBLEVBQUEsRUFBQSxRQUFBLENBRnJGLEVBQUEsc0JBQUEsQ0FESixFQU1JLFNBQUEsY0FBQSxDQU5KLFNBTUksQ0FOSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICAvKipcbiAgICAgICAgICogVXNpbmcgdGhlIG9wYWNpdHkgQ1NTIEBwcm9wZXJ0eSBcbiAgICAgICAgICogeW91IGNhbiBjaGFuZ2UgdGhlIHRyYW5zcGFyZW5jeSBvZiBlbGVtZW50cyxcbiAgICAgICAgICogdmFsdWUgaXMgYmV0d2VlbiAwIGFuZCAxIChkZWZhdWx0KVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgb3BhY2l0eTogZmFsc2UgfVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvZmZzZXRMZXQgYW5kIG9mZnNldFRvcCBhcmUgRE9NIE5vZGUgcHJvcGVydGllcyBmcm9tIEhUTUwgc3RhbmRhcmQ6XG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB7b2Zmc2V0VG9wOiB0b3AsIG9mZnNldExlZnQ6IGxlZnR9ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcylcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICF0aGlzLnN0YXRlLm9wYWNpdHksXG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHpJbmRleDogKHRoaXMuc3RhdGUub3BhY2l0eSkgPyAxMDAwIDogLTEwMDAsXG4gICAgICAgICAgICBvcGFjaXR5OiArdGhpcy5zdGF0ZS5vcGFjaXR5LFxuICAgICAgICAgICAgdG9wOiAodGhpcy5zdGF0ZS50b3AgfHwgMCkgKyAyMCxcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLnN0YXRlLmxlZnQgfHwgMCkgLSAzMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZSd9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG86ICdibHVlJ319XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwIGJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxkaXY+XG4gICAgICAgIFRoZSB0b29sdGlwIG9yIGluZm90aXAgb3IgYSBoaW50IGlzIGEgY29tbW9uIDxUb29sdGlwIHRleHQ9XCIgZm9ybSBvZiB1c2VyIGludGVyZmFjZSB0aGF0IGFsbG93cyB1c2VycyB0byBpbnRlcmFjdCB3aXRoIGVsZWN0cm9uaWMgZGV2aWNlc1wiPlxuICAgICAgICAgICAgZ3JhcGhpY2FsIHVzZXIgaW50ZXJmYWNlPC9Ub29sdGlwPiBlbGVtZW50LiBJdCBpcyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYSA8VG9vbHRpcCB0ZXh0PVwiY3VycmVudCBwb3NpdGlvbiBmb3IgdXNlciBpbnRlcmFjdGlvbiBvbiBhIGNvbXB1dGVyIG1vbml0b3JcIj5cbiAgICAgICAgICAgICBjdXJzb3I8L1Rvb2x0aXA+LCB1c3VhbGx5IGEgcG9pbnRlci5cbiAgICA8L2Rpdj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXAnKVxuKSJdfQ==
