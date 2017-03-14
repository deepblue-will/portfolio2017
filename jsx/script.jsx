import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import ReactCSSTransitionGroup from '../node_modules/react-addons-css-transition-group';

// const menulist = ['Top', 'Works', 'About', 'Skills', 'FAQ', 'Contact'];
const menulist = ['Top', 'Works', 'About', 'Contact'];

const works = [
	{
		title: '30Blocks',
		imgsrc: 'img/30blocks.png',
		time: '2013年6月',
		text: 'ブロック崩しというか、ブロック崩されというか。ブロックを操作して迫り来るボールを回避し、より長時間生存することを目指すゲーム。崩されるブロックの気持ち、一度だけでも考えて欲しい。自己顕示欲が強いのでJSに移植して公開しようとしています。',
		link: '',
		linktext: ''
	},
	{
		title: 'Michi',
		imgsrc: 'img/michi.png',
		time: '2014年冬',
		text: '函館西部地区という、観光客しか行かないオシャレな街があって、そこに本学の学生が行きたくなるような動機付けをする何かを作ろうというグループ課題。フィールドワークの中で、坂が多く非常に立体的な街並みと、入り組んだ細い道とが織りなすダンジョン感に興奮を覚えた尾崎がメンバーにそのコンセプトを熱弁し、「AR技術を用いてるゆるキャラと一緒に西部地区を散歩する」というサービスを提案。そもそものコンセプトが際どかったので反応は悪かったほか、キャラデザインがなってないとか、ごついゴーグルを着用してお洒落な街並みを歩くことへの違和感などが指摘されて、ああ作りたいものを作るだけじゃだめなんだなあと猛省することになりました。',
		link: 'img/michi.pdf',
		linktext: 'Slide(PDF)'
	},
	{
		title: 'Lobin',
		imgsrc: 'img/lobin.png',
		time: '2014年冬',
		text: 'さわれない事物をtangible（触れる、体験できる、みたいな意味）にするものを作るという謎のグループ課題による成果物。グループメンバーの「プレゼントって、誰から何をもらったかは関係なくて、開ける瞬間のワクワクが大切だよね」というハートフルな一言からコンセプトが決定し、「何気ないメッセージにプレゼントのワクワク感を付与して相手に贈ることのできるデバイス」を提案。主にプロトタイプ製作を担当したものの、当時ネットワーク技術に全く疎かった尾崎は「ビンに仕込んだArduinoをPCに接続し、光センサーでビンの開閉を判定してマイクで録音した音声をあらかじめ相手方のビン（に接続されたPC）と共有しているGoogle Driveの共有フォルダに上書き保存する」というトンデモアルゴリズムで実装した。動きはしたけど、今思えば普通にAjaxで実装したな〜と全身がかゆくなります。PVは音声後入れしてるので全くのデタラメです。',
		link: 'https://www.youtube.com/watch?v=bSw8a13kTqE',
		linktext: 'Promotion Video(YouTube)'
	},
	{
		title: '移動プラネタリウム祭',
		imgsrc: 'img/planeta.jpg',
		time: '2015年',
		text: '1年間かけて特定のテーマに対するアプローチを続け、何らかの成果を出そう！というプロジェクト学習科目。チームメンバー11人で話し合い、プラネタリウムに対する既成概念を破壊したいとの思いから、通年のテーマを「インタラクティブなコンテンツを作成する」に決定して活動。ビニールシートを切った貼ったしてエアードームを作り、3DCGを駆使した映像番組などの製作が行われるなか、尾崎はレーザーカッターで切り抜いた木材と2色ライトを用いて行う3D影絵の脚本、演出、小道具の実製作と実演を行っていた。前述したコンテンツを提げて地元の小学校や児童館に出向き、上映会を繰り返してノウハウを掴むまでが前期であり、後期にはいよいよゲーム製作を行った。ゲームは、プラネタリウムを宇宙船に見立てて、観客である子供達に左右に動いてもらい、宇宙船を操縦するというもので、この時、子供達の動きを認識してゲームを操作するためのフラグを返すプログラムを組んだのが尾崎である。子供達の笑顔も、宇宙船の行く末も、すべてを支えていたのは尾崎のアルゴリズムだったのである。',
		link: '',
		linktext: ''
	},
	{
		title: '学内Webサイトリニューアル',
		imgsrc: 'img/student.png',
		time: '2016年7月',
		text: '非常に見づらく格好の悪い本学の学生向けポータルサイトを、機能をそのままにデザインを刷新してユーザビリティを向上させようぜ！という課題の成果物。既存サイトに掲載されている情報の構造化を行った結果、そもそも下層にページを用意するほどコンテンツが存在しないので、タブビュー化することで各機能に対しよりシームレスなアクセスを担保することを試みた。ろくなカンプを作らないまま勢いでコーディングを進めてしまったため、非常にカオスなソースが広がっており、解読は困難を極める。当時はJQueryの存在を知らず、提出直前に友達に教えてもらうまでgetElementByIdを呪文のように繰り返し使ってサイト構築を行っておりました。若かった。',
		link: 'old/student/',
		linktext: 'Visit'
	},
	{
		title: 'Progress Report（仮）',
		imgsrc: 'img/progress.png',
		time: '2016年9月',
		text: '事前に公開されていた「コミュニケーションをハックせよ」という課題に興味を惹かれすぎて参加したインターンシップにて開発。同社が開発したWebRTCフレームワーク「SkyWay」の使用が義務付けられていること以外は何をやってもOKだった。IT企業あるあるなのかも知れないけど、尾崎のバイト先であるweb制作会社では、同じオフィスにいてもチャットで会話をするため、周りの人々が何をやっていて、どれくらい進んでいるのかが全くわからないという事態がよく起きるので、それを打開すべく前述した問題のうち「誰が」「何をしていて」「どのぐらいの進捗か」という3点を可視化するwebアプリケーション。5時間という、狂っているとしか言いようのない時間設定で、コードが読みづらく動作も不安定であるほか、SkyWayの仕様上SSL/TLS通信環境下でないと動作しないため、貧乏学生のフリーサーバでは公開ができないのである。',
		link: '',
		linktext: ''
	}
];

/************************************************************************
 *
 * 共通部分（ヘッダとか）
 *
 ************************************************************************/
// ヘッダ
class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className="header">
				<h1>{this.props.breadcrumb}</h1>
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
				<p>© 2017 Yuta Ozaki</p>
			</div>
		);
	}
}

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
class PageTop extends React.Component {
	render() {
		return (
			<div className="page_content top">
				<div className="top_content">
					<img src="img/nu.png" />
					<p>
						ポップ、シュール、クレイジー<br />
						<small>そんなものをつくっていたい22歳フロントエンドエンジニア</small>
					</p>
				</div>
			</div>
		);
	}
}

/************************************************************************
 *
 * ワークス
 *
 ************************************************************************/

// 個別（詳細）
class WorkSingle extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="work_inner work_single" key={this.props.title} >
				<div className="work_left">
					<div className="work_img">
						<img src={this.props.imgsrc} />
					</div>
				</div>
				<div className="work_right">
					<div className="work_title">
						<h3>{this.props.title}</h3>
					</div>
					<div className="work_time">
						<time>{this.props.time}</time>
					</div>
					<div className="work_text">
						<p>{this.props.text}</p>
						{this.props.link? <a href={this.props.link} target="_blank" className="work_link" >{this.props.linktext}</a> : ''}
					</div>
				</div>
			</div>
		);
	}
}


// 個別
class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="work">
				<WorkSingle title={this.props.title} imgsrc={this.props.imgsrc} time={this.props.time} text={this.props.text} link={this.props.link} linktext={this.props.linktext} key={this.props.title+'-single'} />
			</div>
		);
	}
}

// 全体
class PageWorks extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page_content works">
				{this.props.works.map(
					work =>
					<Work title={work.title} imgsrc={work.imgsrc} caption={work.caption} time={work.time} text={work.text} link={work.link} linktext={work.linktext} key={work.title} />
				)}
			</div>
		);
	}
}

/************************************************************************
 *
 * アバウト
 *
 ************************************************************************/

// 全体
class PageAbout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page_content about">
				<div className="about_text">
					<div className="about_basics">
						<p className="name">
							尾崎 雄太
						</p>
						<p className="info">
							ハコレコドットコム株式会社<br />
							フロントエンドエンジニア
						</p>
						<a className="about_link" href="http://hakoreco.com" target="_blank">Hakoreco.com</a>
						<p className="info">
							公立はこだて未来大学 システム情報科学部<br />
							情報アーキテクチャ学科 情報デザインコース<br />
							櫻沢研究室所属
						</p>
						<a className="about_link" href="http://www.fun.ac.jp/~sakura/" target="_blank">SakuLab</a>
					</div>
					<div className="about_history">
						<p>
							1994年9月、台風26号の接近に伴う嵐の中、東京都八王子市で誕生。
						</p>
						<p>
							3歳にして父親の書斎でMacに触れ、Adobe Photoshopをオモチャに遊び、中学校時代にはHSPを用いたゲーム開発に没頭する傍らC#を学ぶというスーパーエンジニア街道を歩むも、共学・普通科の高校で3年間のリア充生活を送ったことで完全に鈍化。バンドと演劇に高校生活の大方すべてを費やす文系高校生然とした生活を送る。
						</p>
						<p>
							受験期に観たドラマ「リッチマン・プアウーマン」の影響から、プログラマになれば石原さとみと付き合えると信じ理転。完全にノリで海<small>（津軽海峡）</small>を渡り情報系大学に進学するも気の迷いからデザイン専攻に進み、顔の怖い教授の誘いからデザインはおろかITとおおよそ関係のない生物物理系分野の研究室に配属。<br />
							ホームレスになったり休学したりと多難な中、Web制作会社でアルバイトをしつつ、人間が起こす認知的順応（プロジェクション）に関する研究を行う。
						</p>
						<p>
							くだらないものと、広末涼子と、90年代が好き。<br />
							デザインと、エンジニアリングと、認知科学・生物物理を使って、今日も何かをつくる。。
						</p>
					</div>
				</div>

			</div>
		);
	}
}

/************************************************************************
 *
 * スキルズ
 *
 ************************************************************************/

// 全体
class PageSkills extends React.Component {
	render() {
		return (
			<div className="page_content skills">
				<h1>skills</h1>
			</div>
		);
	}
}

/************************************************************************
 *
 * コンタクト
 *
 ************************************************************************/

// 全体
class PageContact extends React.Component {
	render() {
		return (
			<div className="page_content contact">
				<p className="contact_topic">mail</p>
				<a className="contact_link" href="mailto:y.ozakix@gmail.com">y.ozakix@gmail.com</a>
				<p className="contact_topic">Facebook</p>
				<a className="contact_link" target="_blank" href="https://www.facebook.com/profile.php?id=100008275025437">Yuta Ozaki</a>
				<p className="contact_topic">Twitter</p>
				<a className="contact_link" target="_blank" href="https://twitter.com/t0oo0fu">@t0oo0fu</a>
				<p className="contact_topic">GitHub</p>
				<a className="contact_link" target="_blank" href="https://github.com/ozakixx/">ozakixx</a>
			</div>
		);
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
			breadCrumb: 'ozakix/'
		}
		this.pageChange = this.pageChange.bind(this);
	}

	// ページ変更（コンテンツ）
	viewChange(page) {
		if (page === 'Top') {
			this.setState({
				view: <PageTop key={page} />
			});
		}else if (page === 'Works') {
			this.setState({
				view: <PageWorks key={page} works={works} />
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

	// ページ変更（ヘッダ）
	headChange(v) {
		let pageName = (v === 'Top')? '' : v;
		pageName = 'ozakix/' + pageName;
		let bc = '';
		let id = setInterval(
			() => {
				bc += pageName[0];
				pageName = pageName.slice(1);
				this.setState({
					breadCrumb: bc
				});
				if (pageName.length === 0) clearInterval(id);
			},
			50
		);
	}

	// ページ変更（全体）
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
		this.headChange(p);
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
						transitionEnterTimeout={700}
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
