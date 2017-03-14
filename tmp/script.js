'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('../node_modules/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('../node_modules/react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('../node_modules/react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
var menulist = ['Top', 'Works', 'About', 'Contact'];

var works = [{
	title: '30Blocks',
	imgsrc: 'img/30blocks.png',
	time: '2013年6月',
	text: 'ブロック崩しというか、ブロック崩されというか。ブロックを操作して迫り来るボールを回避し、より長時間生存することを目指すゲーム。崩されるブロックの気持ち、一度だけでも考えて欲しい。自己顕示欲が強いのでJSに移植して公開しようとしています。',
	link: '',
	linktext: ''
}, {
	title: 'Michi',
	imgsrc: 'img/michi.png',
	time: '2014年冬',
	text: '函館西部地区という、観光客しか行かないオシャレな街があって、そこに本学の学生が行きたくなるような動機付けをする何かを作ろうというグループ課題。フィールドワークの中で、坂が多く非常に立体的な街並みと、入り組んだ細い道とが織りなすダンジョン感に興奮を覚えた尾崎がメンバーにそのコンセプトを熱弁し、「AR技術を用いてるゆるキャラと一緒に西部地区を散歩する」というサービスを提案。そもそものコンセプトが際どかったので反応は悪かったほか、キャラデザインがなってないとか、ごついゴーグルを着用してお洒落な街並みを歩くことへの違和感などが指摘されて、ああ作りたいものを作るだけじゃだめなんだなあと猛省することになりました。',
	link: 'img/michi.pdf',
	linktext: 'Slide(PDF)'
}, {
	title: 'Lobin',
	imgsrc: 'img/lobin.png',
	time: '2014年冬',
	text: 'さわれない事物をtangible（触れる、体験できる、みたいな意味）にするものを作るという謎のグループ課題による成果物。グループメンバーの「プレゼントって、誰から何をもらったかは関係なくて、開ける瞬間のワクワクが大切だよね」というハートフルな一言からコンセプトが決定し、「何気ないメッセージにプレゼントのワクワク感を付与して相手に贈ることのできるデバイス」を提案。主にプロトタイプ製作を担当したものの、当時ネットワーク技術に全く疎かった尾崎は「ビンに仕込んだArduinoをPCに接続し、光センサーでビンの開閉を判定してマイクで録音した音声をあらかじめ相手方のビン（に接続されたPC）と共有しているGoogle Driveの共有フォルダに上書き保存する」というトンデモアルゴリズムで実装した。動きはしたけど、今思えば普通にAjaxで実装したな〜と全身がかゆくなります。PVは音声後入れしてるので全くのデタラメです。',
	link: 'https://www.youtube.com/watch?v=bSw8a13kTqE',
	linktext: 'Promotion Video(YouTube)'
}, {
	title: '移動プラネタリウム祭',
	imgsrc: 'img/planeta.jpg',
	time: '2015年',
	text: '1年間かけて特定のテーマに対するアプローチを続け、何らかの成果を出そう！というプロジェクト学習科目。チームメンバー11人で話し合い、プラネタリウムに対する既成概念を破壊したいとの思いから、通年のテーマを「インタラクティブなコンテンツを作成する」に決定して活動。ビニールシートを切った貼ったしてエアードームを作り、3DCGを駆使した映像番組などの製作が行われるなか、尾崎はレーザーカッターで切り抜いた木材と2色ライトを用いて行う3D影絵の脚本、演出、小道具の実製作と実演を行っていた。前述したコンテンツを提げて地元の小学校や児童館に出向き、上映会を繰り返してノウハウを掴むまでが前期であり、後期にはいよいよゲーム製作を行った。ゲームは、プラネタリウムを宇宙船に見立てて、観客である子供達に左右に動いてもらい、宇宙船を操縦するというもので、この時、子供達の動きを認識してゲームを操作するためのフラグを返すプログラムを組んだのが尾崎である。子供達の笑顔も、宇宙船の行く末も、すべてを支えていたのは尾崎のアルゴリズムだったのである。',
	link: '',
	linktext: ''
}, {
	title: '学内Webサイトリニューアル',
	imgsrc: 'img/student.png',
	time: '2016年7月',
	text: '非常に見づらく格好の悪い本学の学生向けポータルサイトを、機能をそのままにデザインを刷新してユーザビリティを向上させようぜ！という課題の成果物。既存サイトに掲載されている情報の構造化を行った結果、そもそも下層にページを用意するほどコンテンツが存在しないので、タブビュー化することで各機能に対しよりシームレスなアクセスを担保することを試みた。ろくなカンプを作らないまま勢いでコーディングを進めてしまったため、非常にカオスなソースが広がっており、解読は困難を極める。当時はJQueryの存在を知らず、提出直前に友達に教えてもらうまでgetElementByIdを呪文のように繰り返し使ってサイト構築を行っておりました。若かった。',
	link: 'old/student/',
	linktext: 'Visit'
}, {
	title: 'Progress Report（仮）',
	imgsrc: 'img/progress.png',
	time: '2016年9月',
	text: '事前に公開されていた「コミュニケーションをハックせよ」という課題に興味を惹かれすぎて参加したインターンシップにて開発。同社が開発したWebRTCフレームワーク「SkyWay」の使用が義務付けられていること以外は何をやってもOKだった。IT企業あるあるなのかも知れないけど、尾崎のバイト先であるweb制作会社では、同じオフィスにいてもチャットで会話をするため、周りの人々が何をやっていて、どれくらい進んでいるのかが全くわからないという事態がよく起きるので、それを打開すべく前述した問題のうち「誰が」「何をしていて」「どのぐらいの進捗か」という3点を可視化するwebアプリケーション。5時間という、狂っているとしか言いようのない時間設定で、コードが読みづらく動作も不安定であるほか、SkyWayの仕様上SSL/TLS通信環境下でないと動作しないため、貧乏学生のフリーサーバでは公開ができないのである。',
	link: '',
	linktext: ''
}];

/************************************************************************
 *
 * 共通部分（ヘッダとか）
 *
 ************************************************************************/
// ヘッダ

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
					this.props.breadcrumb
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
					'\xA9 2017 Yuta Ozaki'
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

/************************************************************************
 *
 * トップ
 *
 ************************************************************************/
// 全体


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
					'div',
					{ className: 'top_content' },
					_react2.default.createElement('img', { src: 'img/nu.png' }),
					_react2.default.createElement(
						'p',
						null,
						'\u30DD\u30C3\u30D7\u3001\u30B7\u30E5\u30FC\u30EB\u3001\u30AF\u30EC\u30A4\u30B8\u30FC',
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'small',
							null,
							'\u305D\u3093\u306A\u3082\u306E\u3092\u3064\u304F\u3063\u3066\u3044\u305F\u304422\u6B73\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2'
						)
					)
				)
			);
		}
	}]);

	return PageTop;
}(_react2.default.Component);

/************************************************************************
 *
 * ワークス
 *
 ************************************************************************/

// 個別（詳細）


var WorkSingle = function (_React$Component5) {
	_inherits(WorkSingle, _React$Component5);

	function WorkSingle(props) {
		_classCallCheck(this, WorkSingle);

		return _possibleConstructorReturn(this, (WorkSingle.__proto__ || Object.getPrototypeOf(WorkSingle)).call(this, props));
	}

	_createClass(WorkSingle, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'work_inner work_single', key: this.props.title },
				_react2.default.createElement(
					'div',
					{ className: 'work_left' },
					_react2.default.createElement(
						'div',
						{ className: 'work_img' },
						_react2.default.createElement('img', { src: this.props.imgsrc })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'work_right' },
					_react2.default.createElement(
						'div',
						{ className: 'work_title' },
						_react2.default.createElement(
							'h3',
							null,
							this.props.title
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'work_time' },
						_react2.default.createElement(
							'time',
							null,
							this.props.time
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'work_text' },
						_react2.default.createElement(
							'p',
							null,
							this.props.text
						),
						this.props.link ? _react2.default.createElement(
							'a',
							{ href: this.props.link, target: '_blank', className: 'work_link' },
							this.props.linktext
						) : ''
					)
				)
			);
		}
	}]);

	return WorkSingle;
}(_react2.default.Component);

// 個別


var Work = function (_React$Component6) {
	_inherits(Work, _React$Component6);

	function Work(props) {
		_classCallCheck(this, Work);

		return _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));
	}

	_createClass(Work, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'work' },
				_react2.default.createElement(WorkSingle, { title: this.props.title, imgsrc: this.props.imgsrc, time: this.props.time, text: this.props.text, link: this.props.link, linktext: this.props.linktext, key: this.props.title + '-single' })
			);
		}
	}]);

	return Work;
}(_react2.default.Component);

// 全体


var PageWorks = function (_React$Component7) {
	_inherits(PageWorks, _React$Component7);

	function PageWorks(props) {
		_classCallCheck(this, PageWorks);

		return _possibleConstructorReturn(this, (PageWorks.__proto__ || Object.getPrototypeOf(PageWorks)).call(this, props));
	}

	_createClass(PageWorks, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content works' },
				this.props.works.map(function (work) {
					return _react2.default.createElement(Work, { title: work.title, imgsrc: work.imgsrc, caption: work.caption, time: work.time, text: work.text, link: work.link, linktext: work.linktext, key: work.title });
				})
			);
		}
	}]);

	return PageWorks;
}(_react2.default.Component);

/************************************************************************
 *
 * アバウト
 *
 ************************************************************************/

// 全体


var PageAbout = function (_React$Component8) {
	_inherits(PageAbout, _React$Component8);

	function PageAbout(props) {
		_classCallCheck(this, PageAbout);

		return _possibleConstructorReturn(this, (PageAbout.__proto__ || Object.getPrototypeOf(PageAbout)).call(this, props));
	}

	_createClass(PageAbout, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page_content about' },
				_react2.default.createElement(
					'div',
					{ className: 'about_text' },
					_react2.default.createElement(
						'div',
						{ className: 'about_basics' },
						_react2.default.createElement(
							'p',
							{ className: 'name' },
							'\u5C3E\u5D0E \u96C4\u592A'
						),
						_react2.default.createElement(
							'p',
							{ className: 'info' },
							'\u30CF\u30B3\u30EC\u30B3\u30C9\u30C3\u30C8\u30B3\u30E0\u682A\u5F0F\u4F1A\u793E',
							_react2.default.createElement('br', null),
							'\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2'
						),
						_react2.default.createElement(
							'a',
							{ className: 'about_link', href: 'http://hakoreco.com', target: '_blank' },
							'Hakoreco.com'
						),
						_react2.default.createElement(
							'p',
							{ className: 'info' },
							'\u516C\u7ACB\u306F\u3053\u3060\u3066\u672A\u6765\u5927\u5B66 \u30B7\u30B9\u30C6\u30E0\u60C5\u5831\u79D1\u5B66\u90E8',
							_react2.default.createElement('br', null),
							'\u60C5\u5831\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u5B66\u79D1 \u60C5\u5831\u30C7\u30B6\u30A4\u30F3\u30B3\u30FC\u30B9',
							_react2.default.createElement('br', null),
							'\u6AFB\u6CA2\u7814\u7A76\u5BA4\u6240\u5C5E'
						),
						_react2.default.createElement(
							'a',
							{ className: 'about_link', href: 'http://www.fun.ac.jp/~sakura/', target: '_blank' },
							'SakuLab'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'about_history' },
						_react2.default.createElement(
							'p',
							null,
							'1994\u5E749\u6708\u3001\u53F0\u98A826\u53F7\u306E\u63A5\u8FD1\u306B\u4F34\u3046\u5D50\u306E\u4E2D\u3001\u6771\u4EAC\u90FD\u516B\u738B\u5B50\u5E02\u3067\u8A95\u751F\u3002'
						),
						_react2.default.createElement(
							'p',
							null,
							'3\u6B73\u306B\u3057\u3066\u7236\u89AA\u306E\u66F8\u658E\u3067Mac\u306B\u89E6\u308C\u3001Adobe Photoshop\u3092\u30AA\u30E2\u30C1\u30E3\u306B\u904A\u3073\u3001\u4E2D\u5B66\u6821\u6642\u4EE3\u306B\u306FHSP\u3092\u7528\u3044\u305F\u30B2\u30FC\u30E0\u958B\u767A\u306B\u6CA1\u982D\u3059\u308B\u508D\u3089C#\u3092\u5B66\u3076\u3068\u3044\u3046\u30B9\u30FC\u30D1\u30FC\u30A8\u30F3\u30B8\u30CB\u30A2\u8857\u9053\u3092\u6B69\u3080\u3082\u3001\u5171\u5B66\u30FB\u666E\u901A\u79D1\u306E\u9AD8\u6821\u30673\u5E74\u9593\u306E\u30EA\u30A2\u5145\u751F\u6D3B\u3092\u9001\u3063\u305F\u3053\u3068\u3067\u5B8C\u5168\u306B\u920D\u5316\u3002\u30D0\u30F3\u30C9\u3068\u6F14\u5287\u306B\u9AD8\u6821\u751F\u6D3B\u306E\u5927\u65B9\u3059\u3079\u3066\u3092\u8CBB\u3084\u3059\u6587\u7CFB\u9AD8\u6821\u751F\u7136\u3068\u3057\u305F\u751F\u6D3B\u3092\u9001\u308B\u3002'
						),
						_react2.default.createElement(
							'p',
							null,
							'\u53D7\u9A13\u671F\u306B\u89B3\u305F\u30C9\u30E9\u30DE\u300C\u30EA\u30C3\u30C1\u30DE\u30F3\u30FB\u30D7\u30A2\u30A6\u30FC\u30DE\u30F3\u300D\u306E\u5F71\u97FF\u304B\u3089\u3001\u30D7\u30ED\u30B0\u30E9\u30DE\u306B\u306A\u308C\u3070\u77F3\u539F\u3055\u3068\u307F\u3068\u4ED8\u304D\u5408\u3048\u308B\u3068\u4FE1\u3058\u7406\u8EE2\u3002\u5B8C\u5168\u306B\u30CE\u30EA\u3067\u6D77',
							_react2.default.createElement(
								'small',
								null,
								'\uFF08\u6D25\u8EFD\u6D77\u5CE1\uFF09'
							),
							'\u3092\u6E21\u308A\u60C5\u5831\u7CFB\u5927\u5B66\u306B\u9032\u5B66\u3059\u308B\u3082\u6C17\u306E\u8FF7\u3044\u304B\u3089\u30C7\u30B6\u30A4\u30F3\u5C02\u653B\u306B\u9032\u307F\u3001\u9854\u306E\u6016\u3044\u6559\u6388\u306E\u8A98\u3044\u304B\u3089\u30C7\u30B6\u30A4\u30F3\u306F\u304A\u308D\u304BIT\u3068\u304A\u304A\u3088\u305D\u95A2\u4FC2\u306E\u306A\u3044\u751F\u7269\u7269\u7406\u7CFB\u5206\u91CE\u306E\u7814\u7A76\u5BA4\u306B\u914D\u5C5E\u3002',
							_react2.default.createElement('br', null),
							'\u30DB\u30FC\u30E0\u30EC\u30B9\u306B\u306A\u3063\u305F\u308A\u4F11\u5B66\u3057\u305F\u308A\u3068\u591A\u96E3\u306A\u4E2D\u3001Web\u5236\u4F5C\u4F1A\u793E\u3067\u30A2\u30EB\u30D0\u30A4\u30C8\u3092\u3057\u3064\u3064\u3001\u4EBA\u9593\u304C\u8D77\u3053\u3059\u8A8D\u77E5\u7684\u9806\u5FDC\uFF08\u30D7\u30ED\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\uFF09\u306B\u95A2\u3059\u308B\u7814\u7A76\u3092\u884C\u3046\u3002'
						),
						_react2.default.createElement(
							'p',
							null,
							'\u304F\u3060\u3089\u306A\u3044\u3082\u306E\u3068\u3001\u5E83\u672B\u6DBC\u5B50\u3068\u300190\u5E74\u4EE3\u304C\u597D\u304D\u3002',
							_react2.default.createElement('br', null),
							'\u30C7\u30B6\u30A4\u30F3\u3068\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u3068\u3001\u8A8D\u77E5\u79D1\u5B66\u30FB\u751F\u7269\u7269\u7406\u3092\u4F7F\u3063\u3066\u3001\u4ECA\u65E5\u3082\u4F55\u304B\u3092\u3064\u304F\u308B\u3002\u3002'
						)
					)
				)
			);
		}
	}]);

	return PageAbout;
}(_react2.default.Component);

/************************************************************************
 *
 * スキルズ
 *
 ************************************************************************/

// 全体


var PageSkills = function (_React$Component9) {
	_inherits(PageSkills, _React$Component9);

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

/************************************************************************
 *
 * コンタクト
 *
 ************************************************************************/

// 全体


var PageContact = function (_React$Component10) {
	_inherits(PageContact, _React$Component10);

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
					'p',
					{ className: 'contact_topic' },
					'mail'
				),
				_react2.default.createElement(
					'a',
					{ className: 'contact_link', href: 'mailto:y.ozakix@gmail.com' },
					'y.ozakix@gmail.com'
				),
				_react2.default.createElement(
					'p',
					{ className: 'contact_topic' },
					'Facebook'
				),
				_react2.default.createElement(
					'a',
					{ className: 'contact_link', target: '_blank', href: 'https://www.facebook.com/profile.php?id=100008275025437' },
					'Yuta Ozaki'
				),
				_react2.default.createElement(
					'p',
					{ className: 'contact_topic' },
					'Twitter'
				),
				_react2.default.createElement(
					'a',
					{ className: 'contact_link', target: '_blank', href: 'https://twitter.com/t0oo0fu' },
					'@t0oo0fu'
				),
				_react2.default.createElement(
					'p',
					{ className: 'contact_topic' },
					'GitHub'
				),
				_react2.default.createElement(
					'a',
					{ className: 'contact_link', target: '_blank', href: 'https://github.com/ozakixx/' },
					'ozakixx'
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


var Content = function (_React$Component11) {
	_inherits(Content, _React$Component11);

	function Content(props) {
		_classCallCheck(this, Content);

		var _this12 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

		_this12.state = {
			page: 'Top',
			view: _react2.default.createElement(PageTop, null),
			breadCrumb: 'ozakix/'
		};
		_this12.pageChange = _this12.pageChange.bind(_this12);
		return _this12;
	}

	// ページ変更（コンテンツ）


	_createClass(Content, [{
		key: 'viewChange',
		value: function viewChange(page) {
			if (page === 'Top') {
				this.setState({
					view: _react2.default.createElement(PageTop, { key: page })
				});
			} else if (page === 'Works') {
				this.setState({
					view: _react2.default.createElement(PageWorks, { key: page, works: works })
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

		// ページ変更（ヘッダ）

	}, {
		key: 'headChange',
		value: function headChange(v) {
			var _this13 = this;

			var pageName = v === 'Top' ? '' : v;
			pageName = 'ozakix/' + pageName;
			var bc = '';
			var id = setInterval(function () {
				bc += pageName[0];
				pageName = pageName.slice(1);
				_this13.setState({
					breadCrumb: bc
				});
				if (pageName.length === 0) clearInterval(id);
			}, 50);
		}

		// ページ変更（全体）

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
			this.headChange(p);
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
								transitionEnterTimeout: 700,
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