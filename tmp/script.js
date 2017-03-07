'use strict';

var _react = require('../gulp/node_modules/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('../gulp/node_modules/react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
var breadcrumb = 'Yuta Ozaki';
var currentMenu = 'Top';

// メニュー項目変更
var menuChange = function menuChange(txt) {
	currentMenu = txt;
	console.log(currentMenu);
};

// ヘッダー
var Header = function Header(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'header' },
		_react2.default.createElement(
			'h1',
			null,
			props.breadcrumb
		)
	);
};

// サイドバー（全体）
var MenuItem = function MenuItem(props) {
	return _react2.default.createElement(
		'li',
		{ onClick: menuChange(props.menutext) },
		props.menutext
	);
};

// サイドバー（個別）
var MenuList = function MenuList(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'menu' },
		_react2.default.createElement(
			'ul',
			null,
			props.menulist.map(function (menutext) {
				return _react2.default.createElement(MenuItem, { menutext: menutext, key: menutext });
			})
		)
	);
};

// レンダリング
_reactDom2.default.render(_react2.default.createElement(
	'div',
	null,
	_react2.default.createElement(Header, { breadcrumb: breadcrumb }),
	_react2.default.createElement(MenuList, { menulist: menulist })
), document.getElementById('content'));