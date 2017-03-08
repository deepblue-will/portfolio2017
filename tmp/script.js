'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('../gulp/node_modules/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('../gulp/node_modules/react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('../gulp/node_modules/react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
var currentMenu = 'Top';

/************************************************************************
 * 
 * 共通部分（ヘッダーとか）
 * 
 ************************************************************************/
// ヘッダー

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				_react2.default.createElement(
					'h1',
					null,
					'Ozaki/' + this.props.breadcrumb
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);
// サイドバー（個別）


var MenuItem = function (_React$Component2) {
	_inherits(MenuItem, _React$Component2);

	function MenuItem(props) {
		_classCallCheck(this, MenuItem);

		return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));
	}

	_createClass(MenuItem, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				{ onClick: this.props.pageChange, 'data-txt': this.props.menutext },
				this.props.menutext
			);
		}
	}]);

	return MenuItem;
}(_react2.default.Component);

// サイドバー（全体）


var MenuList = function (_React$Component3) {
	_inherits(MenuList, _React$Component3);

	function MenuList(props) {
		_classCallCheck(this, MenuList);

		return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this));
	}

	_createClass(MenuList, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'menu' },
				_react2.default.createElement(
					'ul',
					null,
					this.props.menulist.map(function (menutext) {
						return _react2.default.createElement(MenuItem, { menutext: menutext, key: menutext, pageChange: _this4.props.pageChange });
					})
				),
				_react2.default.createElement(
					'p',
					null,
					'(C) 2017',
					_react2.default.createElement('br', null),
					'Yuta Ozaki'
				)
			);
		}
	}]);

	return MenuList;
}(_react2.default.Component);

/************************************************************************
 * 
 * 各ページ
 * 
 ************************************************************************/

var PageTop = function (_React$Component4) {
	_inherits(PageTop, _React$Component4);

	function PageTop() {
		_classCallCheck(this, PageTop);

		return _possibleConstructorReturn(this, (PageTop.__proto__ || Object.getPrototypeOf(PageTop)).apply(this, arguments));
	}

	_createClass(PageTop, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content top' },
				_react2.default.createElement(
					'h1',
					null,
					'top'
				)
			);
		}
	}]);

	return PageTop;
}(_react2.default.Component);

var PageWorks = function (_React$Component5) {
	_inherits(PageWorks, _React$Component5);

	function PageWorks() {
		_classCallCheck(this, PageWorks);

		return _possibleConstructorReturn(this, (PageWorks.__proto__ || Object.getPrototypeOf(PageWorks)).apply(this, arguments));
	}

	_createClass(PageWorks, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content works' },
				_react2.default.createElement(
					'h1',
					null,
					'works'
				)
			);
		}
	}]);

	return PageWorks;
}(_react2.default.Component);

var PageAbout = function (_React$Component6) {
	_inherits(PageAbout, _React$Component6);

	function PageAbout() {
		_classCallCheck(this, PageAbout);

		return _possibleConstructorReturn(this, (PageAbout.__proto__ || Object.getPrototypeOf(PageAbout)).apply(this, arguments));
	}

	_createClass(PageAbout, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content about' },
				_react2.default.createElement(
					'h1',
					null,
					'about'
				)
			);
		}
	}]);

	return PageAbout;
}(_react2.default.Component);

var PageSkills = function (_React$Component7) {
	_inherits(PageSkills, _React$Component7);

	function PageSkills() {
		_classCallCheck(this, PageSkills);

		return _possibleConstructorReturn(this, (PageSkills.__proto__ || Object.getPrototypeOf(PageSkills)).apply(this, arguments));
	}

	_createClass(PageSkills, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content skills' },
				_react2.default.createElement(
					'h1',
					null,
					'skills'
				)
			);
		}
	}]);

	return PageSkills;
}(_react2.default.Component);

var PageFAQ = function (_React$Component8) {
	_inherits(PageFAQ, _React$Component8);

	function PageFAQ() {
		_classCallCheck(this, PageFAQ);

		return _possibleConstructorReturn(this, (PageFAQ.__proto__ || Object.getPrototypeOf(PageFAQ)).apply(this, arguments));
	}

	_createClass(PageFAQ, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content faq' },
				_react2.default.createElement(
					'h1',
					null,
					'faq'
				)
			);
		}
	}]);

	return PageFAQ;
}(_react2.default.Component);

var PageContact = function (_React$Component9) {
	_inherits(PageContact, _React$Component9);

	function PageContact() {
		_classCallCheck(this, PageContact);

		return _possibleConstructorReturn(this, (PageContact.__proto__ || Object.getPrototypeOf(PageContact)).apply(this, arguments));
	}

	_createClass(PageContact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content contact' },
				_react2.default.createElement(
					'h1',
					null,
					'contact'
				)
			);
		}
	}]);

	return PageContact;
}(_react2.default.Component);

/************************************************************************
 * 
 * レンダリング
 * 
 ************************************************************************/


var Content = function (_React$Component10) {
	_inherits(Content, _React$Component10);

	function Content(props) {
		_classCallCheck(this, Content);

		var _this11 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

		_this11.state = {
			page: 'Top',
			view: _react2.default.createElement(PageTop, null),
			breadCrumb: ''
		};
		_this11.pageChange = _this11.pageChange.bind(_this11);
		return _this11;
	}

	_createClass(Content, [{
		key: 'viewChange',
		value: function viewChange(page) {
			if (page === 'Top') {
				this.setState({
					view: _react2.default.createElement(PageTop, { key: page })
				});
			} else if (page === 'Works') {
				this.setState({
					view: _react2.default.createElement(PageWorks, { key: page })
				});
			} else if (page === 'About') {
				this.setState({
					view: _react2.default.createElement(PageAbout, { key: page })
				});
			} else if (page === 'Skills') {
				this.setState({
					view: _react2.default.createElement(PageSkills, { key: page })
				});
			} else if (page === 'FAQ') {
				this.setState({
					view: _react2.default.createElement(PageFAQ, { key: page })
				});
			} else if (page === 'Contact') {
				this.setState({
					view: _react2.default.createElement(PageContact, { key: page })
				});
			}
		}
	}, {
		key: 'pageChange',
		value: function pageChange(e) {
			// 押されたリンクを基に表示するページ種別を取得
			var p = e.currentTarget.getAttribute('data-txt');
			this.setState({
				page: p
			});
			console.log(p);

			// 表示するページを更新
			this.viewChange(p);

			// ヘッダを更新
			if (p !== 'Top') {
				this.setState({
					breadCrumb: p
				});
			} else {
				this.setState({
					breadCrumb: ''
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(Header, { breadcrumb: this.state.breadCrumb }),
				_react2.default.createElement(
					'div',
					{ className: 'content' },
					_react2.default.createElement(MenuList, { menulist: menulist, pageChange: this.pageChange }),
					_react2.default.createElement(
						'div',
						{ className: 'page' },
						_react2.default.createElement(
							_reactAddonsCssTransitionGroup2.default,
							{
								transitionName: 'page',
								transitionEnterTimeout: 400,
								transitionLeaveTimeout: 400 },
							this.state.view
						)
					)
				)
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

// レンダリング


_reactDom2.default.render(_react2.default.createElement(Content, null), document.getElementById('content'));