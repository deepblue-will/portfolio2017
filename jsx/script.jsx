import React from '../gulp/node_modules/react';
import ReactDOM from '../gulp/node_modules/react-dom';
import ReactCSSTransitionGroup from '../gulp/node_modules/react-addons-css-transition-group';

const menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
let currentMenu = 'Top';

/************************************************************************
 * 
 * 共通部分（ヘッダーとか）
 * 
 ************************************************************************/
// ヘッダー
class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className="header">
				<h1>{'Ozaki/' + this.props.breadcrumb}</h1>
			</div>
		);
	}
}
// サイドバー（個別）
class MenuItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li onClick={this.props.pageChange} data-txt={this.props.menutext}>{this.props.menutext}</li>
		);
	}
}

// サイドバー（全体）
class MenuList extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div className="menu">
				<ul>
					{this.props.menulist.map(
						menutext =>
							<MenuItem menutext={menutext} key={menutext} pageChange={this.props.pageChange} />
					)}
				</ul>
				<p>(C) 2017<br />Yuta Ozaki</p>
			</div>
		);
	}
}

/************************************************************************
 * 
 * 各ページ
 * 
 ************************************************************************/

class PageTop extends React.Component {
	render() {
		return (
			<div className="page_content top"><h1>top</h1></div>
		);
	}
}

class PageWorks extends React.Component {
	render() {
		return <div className="page_content works"><h1>works</h1></div>;
	}
}

class PageAbout extends React.Component {
	render() {
		return <div className="page_content about"><h1>about</h1></div>;
	}
}

class PageSkills extends React.Component {
	render() {
		return <div className="page_content skills"><h1>skills</h1></div>;
	}
}

class PageFAQ extends React.Component {
	render() {
		return <div className="page_content faq"><h1>faq</h1></div>;
	}
}

class PageContact extends React.Component {
	render() {
		return <div className="page_content contact"><h1>contact</h1></div>;
	}
}

/************************************************************************
 * 
 * レンダリング
 * 
 ************************************************************************/
class Content extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			page: 'Top',
			view: <PageTop />,
			breadCrumb: ''
		}
		this.pageChange = this.pageChange.bind(this);
	}

	viewChange(page) {
		if (page === 'Top') {
			this.setState({
				view: <PageTop key={page} />
			});
		}else if (page === 'Works') {
			this.setState({
				view: <PageWorks key={page} />
			});
		}else if (page === 'About') {
			this.setState({
				view: <PageAbout key={page} />
			});
		}else if (page === 'Skills') {
			this.setState({
				view: <PageSkills key={page} />
			});
		}else if (page === 'FAQ') {
			this.setState({
				view: <PageFAQ key={page} />
			});
		}else if (page === 'Contact') {
			this.setState({
				view: <PageContact key={page} />
			});
		}
	}

	pageChange(e) {
		// 押されたリンクを基に表示するページ種別を取得
		const p = e.currentTarget.getAttribute('data-txt');
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
		}else {
			this.setState({
				breadCrumb: ''
			});
		}
	}

	render() {
		return (
			<div className="container">
				<Header breadcrumb={this.state.breadCrumb} />
				<div className="content">
					<MenuList menulist={menulist} pageChange={this.pageChange} />
					<div className="page">
						<ReactCSSTransitionGroup
						transitionName="page"
						transitionEnterTimeout={400}
						transitionLeaveTimeout={400}>
							{this.state.view}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			</div>
		);
	}
}

// レンダリング
ReactDOM.render(
	<Content />,
	document.getElementById('content')
);

