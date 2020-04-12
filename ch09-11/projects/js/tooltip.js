'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return React.createElement(
                'div',
                { style: { display: 'inline' } },
                React.createElement(
                    'span',
                    { style: { colo: 'blue' },
                        onMouseEnter: this.toggle,
                        onMouseOut: this.toggle },
                    this.props.children
                ),
                React.createElement(
                    'div',
                    { className: 'tooltip bottom',
                        style: style,
                        role: 'tooltip' },
                    React.createElement('div', { className: 'tooltip-arrow' }),
                    React.createElement(
                        'div',
                        { className: 'tooltip-inner' },
                        this.props.text
                    )
                )
            );
        }
    }]);

    return Tooltip;
}(React.Component);

ReactDOM.render(React.createElement(
    'div',
    null,
    'The tooltip or infotip or a hint is a common ',
    React.createElement(
        Tooltip,
        { text: ' form of user interface that allows users to interact with electronic devices' },
        'graphical user interface'
    ),
    ' element. It is used in conjunction with a ',
    React.createElement(
        Tooltip,
        { text: 'current position for user interaction on a computer monitor' },
        'cursor'
    ),
    ', usually a pointer.'
), document.getElementById('tooltip'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC90b29sdGlwLmpzeCJdLCJuYW1lcyI6WyJUb29sdGlwIiwicHJvcHMiLCJzdGF0ZSIsIm9wYWNpdHkiLCJ0b2dnbGUiLCJiaW5kIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwic2V0U3RhdGUiLCJzdHlsZSIsInpJbmRleCIsImRpc3BsYXkiLCJjb2xvIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWY7Ozs7O0FBRmUsc0hBQ1RBLEtBRFM7O0FBT2YsY0FBS0MsS0FBTCxHQUFhLEVBQUVDLFNBQVMsS0FBWCxFQUFiO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBUmU7QUFTbEI7Ozs7aUNBRVE7QUFDTDs7OztBQURLLHdDQUtzQ0MsU0FBU0MsV0FBVCxDQUFxQixJQUFyQixDQUx0QztBQUFBLGdCQUthQyxHQUxiLHlCQUtFQyxTQUxGO0FBQUEsZ0JBSzhCQyxJQUw5Qix5QkFLa0JDLFVBTGxCOztBQU9MLGlCQUFLQyxRQUFMLENBQWM7QUFDVlQseUJBQVMsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE9BRFg7QUFFVkssd0JBRlU7QUFHVkU7QUFIVSxhQUFkO0FBS0g7OztpQ0FFUTtBQUNMLGdCQUFNRyxRQUFRO0FBQ1ZDLHdCQUFTLEtBQUtaLEtBQUwsQ0FBV0MsT0FBWixHQUF1QixJQUF2QixHQUE4QixDQUFDLElBRDdCO0FBRVZBLHlCQUFTLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxPQUZYO0FBR1ZLLHFCQUFLLENBQUMsS0FBS04sS0FBTCxDQUFXTSxHQUFYLElBQWtCLENBQW5CLElBQXdCLEVBSG5CO0FBSVZFLHNCQUFNLENBQUMsS0FBS1IsS0FBTCxDQUFXUSxJQUFYLElBQW1CLENBQXBCLElBQXlCO0FBSnJCLGFBQWQ7QUFNQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssT0FBTyxFQUFDSyxTQUFTLFFBQVYsRUFBWjtBQUNJO0FBQUE7QUFBQSxzQkFBTSxPQUFPLEVBQUNDLE1BQU0sTUFBUCxFQUFiO0FBQ0ksc0NBQWMsS0FBS1osTUFEdkI7QUFFSSxvQ0FBWSxLQUFLQSxNQUZyQjtBQUdLLHlCQUFLSCxLQUFMLENBQVdnQjtBQUhoQixpQkFESjtBQU1RO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ksK0JBQU9KLEtBRFg7QUFFSSw4QkFBSyxTQUZUO0FBR1EsaURBQUssV0FBVSxlQUFmLEdBSFI7QUFJUTtBQUFBO0FBQUEsMEJBQUssV0FBVSxlQUFmO0FBQ0ssNkJBQUtaLEtBQUwsQ0FBV2lCO0FBRGhCO0FBSlI7QUFOUixhQURKO0FBaUJIOzs7O0VBbERpQkMsTUFBTUMsUzs7QUFxRDVCZCxTQUFTZSxNQUFULENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDaUQ7QUFBQyxlQUFEO0FBQUEsVUFBUyxNQUFLLCtFQUFkO0FBQUE7QUFBQSxLQURqRDtBQUFBO0FBRXFGO0FBQUMsZUFBRDtBQUFBLFVBQVMsTUFBSyw2REFBZDtBQUFBO0FBQUEsS0FGckY7QUFBQTtBQUFBLENBREosRUFNSUMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQU5KIiwiZmlsZSI6InRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzaW5nIHRoZSBvcGFjaXR5IENTUyBAcHJvcGVydHkgXG4gICAgICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSB0cmFuc3BhcmVuY3kgb2YgZWxlbWVudHMsXG4gICAgICAgICAqIHZhbHVlIGlzIGJldHdlZW4gMCBhbmQgMSAoZGVmYXVsdClcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG9wYWNpdHk6IGZhbHNlIH1cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogb2Zmc2V0TGV0IGFuZCBvZmZzZXRUb3AgYXJlIERPTSBOb2RlIHByb3BlcnRpZXMgZnJvbSBIVE1MIHN0YW5kYXJkOlxuICAgICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qge29mZnNldFRvcDogdG9wLCBvZmZzZXRMZWZ0OiBsZWZ0fSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAhdGhpcy5zdGF0ZS5vcGFjaXR5LFxuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB6SW5kZXg6ICh0aGlzLnN0YXRlLm9wYWNpdHkpID8gMTAwMCA6IC0xMDAwLFxuICAgICAgICAgICAgb3BhY2l0eTogK3RoaXMuc3RhdGUub3BhY2l0eSxcbiAgICAgICAgICAgIHRvcDogKHRoaXMuc3RhdGUudG9wIHx8IDApICsgMjAsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5zdGF0ZS5sZWZ0IHx8IDApIC0gMzBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvOiAnYmx1ZSd9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcCBib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2PlxuICAgICAgICBUaGUgdG9vbHRpcCBvciBpbmZvdGlwIG9yIGEgaGludCBpcyBhIGNvbW1vbiA8VG9vbHRpcCB0ZXh0PVwiIGZvcm0gb2YgdXNlciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgdXNlcnMgdG8gaW50ZXJhY3Qgd2l0aCBlbGVjdHJvbmljIGRldmljZXNcIj5cbiAgICAgICAgICAgIGdyYXBoaWNhbCB1c2VyIGludGVyZmFjZTwvVG9vbHRpcD4gZWxlbWVudC4gSXQgaXMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgPFRvb2x0aXAgdGV4dD1cImN1cnJlbnQgcG9zaXRpb24gZm9yIHVzZXIgaW50ZXJhY3Rpb24gb24gYSBjb21wdXRlciBtb25pdG9yXCI+XG4gICAgICAgICAgICAgY3Vyc29yPC9Ub29sdGlwPiwgdXN1YWxseSBhIHBvaW50ZXIuXG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwJylcbikiXX0=