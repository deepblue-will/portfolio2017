import React from '../gulp/node_modules/react';
import ReactDOM from '../gulp/node_modules/react-dom';

const menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
let breadcrumb = 'Yuta Ozaki';
let currentMenu = 'Top';

// メニュー項目変更
const menuChange = txt => {
	currentMenu = txt;
	console.log(currentMenu);
}

// ヘッダー
const Header = props =>
	<div className="header">
		<h1>{props.breadcrumb}</h1>
	</div>

// サイドバー（全体）
const MenuItem = props =>
	<li onClick={menuChange(props.menutext)}>{props.menutext}</li>

// サイドバー（個別）
const MenuList = props =>
	<div className="menu">
		<ul>
			{props.menulist.map(menutext => <MenuItem menutext={menutext} key={menutext} />)}
		</ul>
	</div>

// レンダリング
ReactDOM.render(
	<div>
	<Header breadcrumb={breadcrumb} />
	<MenuList menulist={menulist} />
	</div>,
	document.getElementById('content')
);

