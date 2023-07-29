/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
	addCard,
	addSubmenu,
	alignCenter,
	alignJustify,
	alignLeft,
	alignNone,
	alignRight,
	archive,
	arrowDown,
	arrowLeft,
	arrowRight,
	arrowUp,
	atSymbol,
	aspectRatio,
	audio,
	backup,
	blockDefault,
	blockTable,
	border,
	box,
	brush,
	bug,
	button,
	buttons,
	calendar,
	cancelCircleFilled,
	caption,
	capturePhoto,
	captureVideo,
	category,
	chartBar,
	check,
	chevronDown,
	chevronLeft,
	chevronRight,
	chevronRightSmall,
	chevronUp,
	chevronUpDown,
	classic,
	close,
	closeSmall,
	cloudUpload,
	cloud,
	code,
	cog,
	color,
	column,
	columns,
	comment,
	commentAuthorAvatar,
	commentAuthorName,
	commentContent,
	commentEditLink,
	commentReplyLink,
	copy,
	cover,
	create,
	crop,
	currencyDollar,
	currencyEuro,
	currencyPound,
	customPostType,
	desktop,
	dragHandle,
	drawerLeft,
	drawerRight,
	download,
	edit,
	external,
	file,
	filter,
	flipHorizontal,
	flipVertical,
	formatBold,
	formatCapitalize,
	formatIndent,
	formatIndentRTL,
	formatItalic,
	formatListBullets,
	formatListBulletsRTL,
	formatListNumbered,
	formatListNumberedRTL,
	formatLtr,
	formatLowercase,
	formatOutdent,
	formatOutdentRTL,
	formatRtl,
	formatStrikethrough,
	formatUnderline,
	formatUppercase,
	fullscreen,
	gallery,
	globe,
	grid,
	group,
	handle,
	heading,
	help,
	helpFilled,
	inbox,
	institution,
	home,
	html,
	image,
	info,
	insertAfter,
	insertBefore,
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
	key,
	keyboardClose,
	keyboardReturn,
	layout,
	lifesaver,
	lineDashed,
	lineDotted,
	lineSolid,
	link,
	linkOff,
	list,
	listItem,
	listView,
	lock,
	lockOutline,
	lockSmall,
	login,
	loop,
	mapMarker,
	media,
	mediaAndText,
	megaphone,
	menu,
	mobile,
	more,
	moreHorizontal,
	moreHorizontalMobile,
	moreVertical,
	moveTo,
	navigation,
	overlayText,
	pageBreak,
	customLink,
	page,
	pages,
	paragraph,
	payment,
	percent,
	positionCenter,
	positionLeft,
	positionRight,
	pencil,
	people,
	pin,
	plugins,
	plusCircleFilled,
	plusCircle,
	plus,
	post,
	postAuthor,
	postCategories,
	postContent,
	postComments,
	postCommentsCount,
	postCommentsForm,
	postDate,
	postExcerpt,
	postFeaturedImage,
	postList,
	postTerms,
	previous,
	next,
	preformatted,
	pullLeft,
	pullRight,
	pullquote,
	queryPagination,
	queryPaginationNext,
	queryPaginationNumbers,
	queryPaginationPrevious,
	quote,
	receipt,
	redo,
	removeBug,
	removeSubmenu,
	replace,
	reset,
	resizeCornerNE,
	reusableBlock,
	rotateLeft,
	rotateRight,
	row,
	rss,
	search,
	seen,
	separator,
	settings,
	shadow,
	share,
	shield,
	shortcode,
	shuffle,
	siteLogo,
	stack,
	starEmpty,
	starFilled,
	starHalf,
	store,
	stretchFullWidth,
	styles,
	shipping,
	stretchWide,
	subscript,
	superscript,
	swatch,
	symbol,
	symbolFilled,
	tableColumnAfter,
	tableColumnBefore,
	tableColumnDelete,
	tableRowAfter,
	tableRowBefore,
	tableRowDelete,
	table,
	tag,
	termDescription,
	footer,
	header,
	sidebar,
	textColor,
	tablet,
	tip,
	title,
	tool,
	trash,
	trendingDown,
	trendingUp,
	typography,
	undo,
	ungroup,
	unlock,
	unseen,
	update,
	upload,
	verse,
	video,
	warning,
	widget,
} from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	amazon,
	bandcamp,
	behance,
	chain,
	codepen,
	deviantart,
	dribbble,
	dropbox,
	etsy,
	facebook,
	feed,
	fivehundredpx,
	flickr,
	foursquare,
	goodreads,
	google,
	github,
	instagram,
	lastfm,
	linkedin,
	mail,
	mastodon,
	meetup,
	medium,
	patreon,
	pinterest,
	pocket,
	redditSolid,
	reddit,
	skype,
	snapchat,
	soundcloud,
	spotify,
	telegram,
	threads,
	tiktok,
	tumblr,
	twitch,
	twitter,
	vimeo,
	vk,
	whatsapp,
	wordpress,
	yelp,
	youtube,
} from './wordpress/social';

// Temporary icon specifications that are not yet in the NPM package.
import { sparkles } from './wordpress/temp';

const wordpressSocialIcons = [
	{
		isDefault: true,
		name: 'wordpress',
		title: 'WordPress',
		icon: wordpress,
		categories: [ 'logos' ],
	},
	{
		name: 'fivehundredpx',
		title: '500px',
		icon: fivehundredpx,
		categories: [ 'logos' ],
	},
	{
		name: 'amazon',
		title: 'Amazon',
		icon: amazon,
		categories: [ 'logos' ],
	},
	{
		name: 'bandcamp',
		title: 'Bandcamp',
		icon: bandcamp,
		categories: [ 'logos' ],
	},
	{
		name: 'behance',
		title: 'Behance',
		icon: behance,
		categories: [ 'logos' ],
	},
	{
		name: 'chain',
		title: 'Link',
		icon: chain,
	},
	{
		name: 'codepen',
		title: 'CodePen',
		icon: codepen,
		categories: [ 'logos' ],
	},
	{
		name: 'deviantart',
		title: 'DeviantArt',
		icon: deviantart,
		categories: [ 'logos' ],
	},
	{
		name: 'dribbble',
		title: 'Dribbble',
		icon: dribbble,
		categories: [ 'logos' ],
	},
	{
		name: 'dropbox',
		title: 'Dropbox',
		icon: dropbox,
		categories: [ 'logos' ],
	},
	{
		name: 'etsy',
		title: 'Etsy',
		icon: etsy,
		categories: [ 'logos' ],
	},
	{
		name: 'facebook',
		title: 'Facebook',
		icon: facebook,
		categories: [ 'logos' ],
	},
	{
		name: 'feed',
		title: 'RSS Feed',
		icon: feed,
		categories: [ 'logos' ],
	},
	{
		name: 'flickr',
		title: 'Flickr',
		icon: flickr,
		categories: [ 'logos' ],
	},
	{
		name: 'foursquare',
		title: 'Foursquare',
		icon: foursquare,
		categories: [ 'logos' ],
	},
	{
		name: 'goodreads',
		title: 'Goodreads',
		icon: goodreads,
		categories: [ 'logos' ],
	},
	{
		name: 'google',
		title: 'Google',
		icon: google,
		categories: [ 'logos' ],
	},
	{
		name: 'github',
		title: 'GitHub',
		icon: github,
		categories: [ 'logos' ],
	},
	{
		name: 'instagram',
		title: 'Instagram',
		icon: instagram,
		categories: [ 'logos' ],
	},
	{
		name: 'lastfm',
		title: 'Last.fm',
		icon: lastfm,
		categories: [ 'logos' ],
	},
	{
		name: 'linkedin',
		title: 'LinkedIn',
		icon: linkedin,
		categories: [ 'logos' ],
	},
	{
		name: 'mail',
		title: 'Mail',
		keywords: [ 'email', 'e-mail' ],
		icon: mail,
	},
	{
		name: 'mastodon',
		title: 'Mastodon',
		icon: mastodon,
		categories: [ 'logos' ],
	},
	{
		name: 'meetup',
		title: 'Meetup',
		icon: meetup,
		categories: [ 'logos' ],
	},
	{
		name: 'medium',
		title: 'Medium',
		icon: medium,
		categories: [ 'logos' ],
	},
	{
		name: 'patreon',
		title: 'Patreon',
		icon: patreon,
		categories: [ 'logos' ],
	},
	{
		name: 'pinterest',
		title: 'Pinterest',
		icon: pinterest,
		categories: [ 'logos' ],
	},
	{
		name: 'pocket',
		title: 'Pocket',
		icon: pocket,
		categories: [ 'logos' ],
	},
	{
		name: 'reddit-solid',
		title: 'Reddit Solid',
		icon: redditSolid,
		categories: [ 'logos' ],
	},
	{
		name: 'reddit',
		title: 'Reddit',
		icon: reddit,
		categories: [ 'logos' ],
	},
	{
		name: 'skype',
		title: 'Skype',
		icon: skype,
		categories: [ 'logos' ],
	},
	{
		name: 'snapchat',
		title: 'Snapchat',
		icon: snapchat,
		categories: [ 'logos' ],
	},
	{
		name: 'soundcloud',
		title: 'SoundCloud',
		icon: soundcloud,
		categories: [ 'logos' ],
	},
	{
		name: 'spotify',
		title: 'Spotify',
		icon: spotify,
		categories: [ 'logos' ],
	},
	{
		name: 'telegram',
		title: 'Telegram',
		icon: telegram,
		categories: [ 'logos' ],
	},
	{
		name: 'threads',
		title: 'Threads',
		icon: threads,
		categories: [ 'logos' ],
	},
	{
		name: 'tiktok',
		title: 'TikTok',
		icon: tiktok,
		categories: [ 'logos' ],
	},
	{
		name: 'tumblr',
		title: 'Tumblr',
		icon: tumblr,
		categories: [ 'logos' ],
	},
	{
		name: 'twitch',
		title: 'Twitch',
		icon: twitch,
		categories: [ 'logos' ],
	},
	{
		isDefault: true,
		name: 'twitter',
		title: 'Twitter',
		icon: twitter,
		categories: [ 'logos' ],
	},
	{
		name: 'vimeo',
		title: 'Vimeo',
		icon: vimeo,
		categories: [ 'logos' ],
	},
	{
		name: 'vk',
		title: 'VK',
		icon: vk,
		categories: [ 'logos' ],
	},
	{
		name: 'whatsapp',
		title: 'WhatsApp',
		icon: whatsapp,
		categories: [ 'logos' ],
	},
	{
		name: 'yelp',
		title: 'Yelp',
		icon: yelp,
		categories: [ 'logos' ],
	},
	{
		name: 'youtube',
		title: 'YouTube',
		icon: youtube,
		categories: [ 'logos' ],
	},
];

const wordpressIcons = [
	{
		name: 'addCard',
		title: __( 'Add Card', 'icon-block' ),
		icon: addCard,
	},
	{
		name: 'addSubmenu',
		title: __( 'Add Submenu', 'icon-block' ),
		icon: addSubmenu,
		categories: [ 'arrows' ],
	},
	{
		name: 'alignCenter',
		title: __( 'Align Center', 'icon-block' ),
		icon: alignCenter,
		categories: [ 'editor' ],
	},
	{
		name: 'alignJustify',
		title: __( 'Align Justify', 'icon-block' ),
		icon: alignJustify,
		categories: [ 'editor' ],
	},
	{
		name: 'alignLeft',
		title: __( 'Align Left', 'icon-block' ),
		icon: alignLeft,
		categories: [ 'editor' ],
	},
	{
		name: 'alignNone',
		title: __( 'Align None', 'icon-block' ),
		icon: alignNone,
		categories: [ 'editor' ],
	},
	{
		name: 'alignRight',
		title: __( 'Align Right', 'icon-block' ),
		icon: alignRight,
		categories: [ 'editor' ],
	},
	{
		name: 'archive',
		title: __( 'Archive', 'icon-block' ),
		icon: archive,
		categories: [ 'blocks' ],
	},
	{
		name: 'arrowDown',
		title: __( 'Arrow Down', 'icon-block' ),
		icon: arrowDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowLeft',
		title: __( 'Arrow Left', 'icon-block' ),
		icon: arrowLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowRight',
		title: __( 'Arrow Right', 'icon-block' ),
		icon: arrowRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowUp',
		title: __( 'Arrow Up', 'icon-block' ),
		icon: arrowUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'atSymbol',
		title: __( 'At Symbol', 'icon-block' ),
		icon: atSymbol,
	},
	{
		name: 'aspectRatio',
		title: __( 'Aspect Ratio', 'icon-block' ),
		icon: aspectRatio,
		categories: [ 'media' ],
	},
	{
		name: 'audio',
		title: __( 'Audio', 'icon-block' ),
		icon: audio,
		categories: [ 'media' ],
	},
	{
		name: 'backup',
		title: __( 'Backup', 'icon-block' ),
		icon: backup,
	},
	{
		name: 'blockDefault',
		title: __( 'Block Default', 'icon-block' ),
		icon: blockDefault,
		categories: [ 'blocks' ],
	},
	{
		name: 'blockTable',
		title: __( 'Block Table', 'icon-block' ),
		icon: blockTable,
	},
	{
		name: 'border',
		title: __( 'Border', 'icon-block' ),
		icon: border,
	},
	{
		name: 'box',
		title: __( 'Box', 'icon-block' ),
		icon: box,
	},
	{
		name: 'brush',
		title: __( 'Brush', 'icon-block' ),
		icon: brush,
	},
	{
		name: 'bug',
		title: __( 'Bug', 'icon-block' ),
		icon: bug,
	},
	{
		name: 'button',
		title: __( 'Button', 'icon-block' ),
		icon: button,
		categories: [ 'blocks' ],
	},
	{
		name: 'buttons',
		title: __( 'Buttons', 'icon-block' ),
		icon: buttons,
		categories: [ 'blocks' ],
	},
	{
		name: 'calendar',
		title: __( 'Calendar', 'icon-block' ),
		icon: calendar,
		categories: [ 'blocks' ],
	},
	{
		name: 'cancelCircleFilled',
		title: __( 'Cancel - Circle Filled', 'icon-block' ),
		icon: cancelCircleFilled,
	},
	{
		name: 'caption',
		title: __( 'Caption', 'icon-block' ),
		icon: caption,
	},
	{
		name: 'capturePhoto',
		title: __( 'Capture Photo', 'icon-block' ),
		icon: capturePhoto,
		categories: [ 'media' ],
	},
	{
		name: 'captureVideo',
		title: __( 'Capture Video', 'icon-block' ),
		icon: captureVideo,
		categories: [ 'media' ],
	},
	{
		name: 'category',
		title: __( 'Category', 'icon-block' ),
		icon: category,
		categories: [ 'blocks' ],
	},
	{
		name: 'chartBar',
		title: __( 'Chart Bar', 'icon-block' ),
		icon: chartBar,
	},
	{
		name: 'check',
		title: __( 'Check', 'icon-block' ),
		icon: check,
	},
	{
		name: 'chevronDown',
		title: __( 'Chevron Down', 'icon-block' ),
		icon: chevronDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronLeft',
		title: __( 'Chevron Left', 'icon-block' ),
		icon: chevronLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronRight',
		title: __( 'Chevron Right', 'icon-block' ),
		icon: chevronRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronRightSmall',
		title: __( 'Chevron Right - Small', 'icon-block' ),
		icon: chevronRightSmall,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronUp',
		title: __( 'Chevron Up', 'icon-block' ),
		icon: chevronUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronUpDown',
		title: __( 'Chevron Up/Down', 'icon-block' ),
		icon: chevronUpDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'classic',
		title: __( 'Classic', 'icon-block' ),
		icon: classic,
		categories: [ 'blocks' ],
	},
	{
		name: 'close',
		title: __( 'Close', 'icon-block' ),
		icon: close,
	},
	{
		name: 'closeSmall',
		title: __( 'Close - Small', 'icon-block' ),
		icon: closeSmall,
	},
	{
		name: 'cloudUpload',
		title: __( 'Cloud Upload', 'icon-block' ),
		icon: cloudUpload,
		categories: [ 'arrows' ],
	},
	{
		name: 'cloud',
		title: __( 'Cloud', 'icon-block' ),
		icon: cloud,
	},
	{
		name: 'code',
		title: __( 'Code', 'icon-block' ),
		icon: code,
		categories: [ 'blocks' ],
	},
	{
		name: 'cog',
		title: __( 'Cog', 'icon-block' ),
		icon: cog,
	},
	{
		name: 'color',
		title: __( 'Color', 'icon-block' ),
		icon: color,
	},
	{
		name: 'column',
		title: __( 'Column', 'icon-block' ),
		icon: column,
		categories: [ 'blocks' ],
	},
	{
		name: 'columns',
		title: __( 'Columns', 'icon-block' ),
		icon: columns,
		categories: [ 'blocks' ],
	},
	{
		name: 'comment',
		title: __( 'Comment', 'icon-block' ),
		icon: comment,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentAuthorAvatar',
		title: __( 'Comment Author Avatar', 'icon-block' ),
		icon: commentAuthorAvatar,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentAuthorName',
		title: __( 'Comment Author Name', 'icon-block' ),
		icon: commentAuthorName,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentContent',
		title: __( 'Comment Content', 'icon-block' ),
		icon: commentContent,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentEditLink',
		title: __( 'Comment Edit Link', 'icon-block' ),
		icon: commentEditLink,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentReplyLink',
		title: __( 'Comment Reply Link', 'icon-block' ),
		icon: commentReplyLink,
		categories: [ 'blocks' ],
	},
	{
		name: 'copy',
		title: __( 'Copy', 'icon-block' ),
		icon: copy,
	},
	{
		name: 'cover',
		title: __( 'Cover', 'icon-block' ),
		icon: cover,
		categories: [ 'blocks' ],
	},
	{
		name: 'create',
		title: __( 'Create', 'icon-block' ),
		icon: create,
	},
	{
		name: 'crop',
		title: __( 'Crop', 'icon-block' ),
		icon: crop,
	},
	{
		name: 'currencyDollar',
		title: __( 'Currency Dollar', 'icon-block' ),
		icon: currencyDollar,
	},
	{
		name: 'currencyEuro',
		title: __( 'Currency Euro', 'icon-block' ),
		icon: currencyEuro,
	},
	{
		name: 'currencyPound',
		title: __( 'Currency Pound', 'icon-block' ),
		icon: currencyPound,
	},
	{
		name: 'customPostType',
		title: __( 'Custom Post Type', 'icon-block' ),
		icon: customPostType,
	},
	{
		name: 'desktop',
		title: __( 'Desktop', 'icon-block' ),
		icon: desktop,
		categories: [ 'devices' ],
	},
	{
		name: 'dragHandle',
		title: __( 'Drag Handle', 'icon-block' ),
		icon: dragHandle,
	},
	{
		name: 'drawerLeft',
		title: __( 'Drawer Left', 'icon-block' ),
		icon: drawerLeft,
		keywords: [ 'column' ],
	},
	{
		name: 'drawerRight',
		title: __( 'Drawer Right', 'icon-block' ),
		icon: drawerRight,
		keywords: [ 'column' ],
	},
	{
		name: 'download',
		title: __( 'Download', 'icon-block' ),
		icon: download,
		categories: [ 'arrows' ],
	},
	{
		name: 'edit',
		title: __( 'Edit', 'icon-block' ),
		icon: edit,
	},
	{
		name: 'external',
		title: __( 'External', 'icon-block' ),
		icon: external,
	},
	{
		name: 'file',
		title: __( 'File', 'icon-block' ),
		icon: file,
	},
	{
		name: 'filter',
		title: __( 'Filter', 'icon-block' ),
		icon: filter,
		keywords: [ 'triangle' ],
	},
	{
		name: 'flipHorizontal',
		title: __( 'Flip Horizontal', 'icon-block' ),
		icon: flipHorizontal,
	},
	{
		name: 'flipVertical',
		title: __( 'Flip Vertical', 'icon-block' ),
		icon: flipVertical,
	},
	{
		name: 'formatBold',
		title: __( 'Format Bold', 'icon-block' ),
		icon: formatBold,
		categories: [ 'editor' ],
	},
	{
		name: 'formatCapitalize',
		title: __( 'Format Capitalize', 'icon-block' ),
		icon: formatCapitalize,
		categories: [ 'editor' ],
	},
	{
		name: 'formatIndent',
		title: __( 'Format Indent', 'icon-block' ),
		icon: formatIndent,
		categories: [ 'editor' ],
	},
	{
		name: 'formatIndentRTL',
		title: __( 'Format Indent RTL', 'icon-block' ),
		icon: formatIndentRTL,
	},
	{
		name: 'formatItalic',
		title: __( 'Format Italic', 'icon-block' ),
		icon: formatItalic,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListBullets',
		title: __( 'Format List Bullets', 'icon-block' ),
		icon: formatListBullets,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListBulletsRTL',
		title: __( 'Format List Bullets RTL', 'icon-block' ),
		icon: formatListBulletsRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListNumbered',
		title: __( 'Format List Numbered', 'icon-block' ),
		icon: formatListNumbered,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListNumberedRTL',
		title: __( 'Format List Numbered RTL', 'icon-block' ),
		icon: formatListNumberedRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatLtr',
		title: __( 'Format LTR', 'icon-block' ),
		icon: formatLtr,
		categories: [ 'editor' ],
	},
	{
		name: 'formatLowercase',
		title: __( 'Format Lowercase', 'icon-block' ),
		icon: formatLowercase,
		categories: [ 'editor' ],
	},
	{
		name: 'formatOutdent',
		title: __( 'Format Outdent', 'icon-block' ),
		icon: formatOutdent,
		categories: [ 'editor' ],
	},
	{
		name: 'formatOutdentRTL',
		title: __( 'Format Outdent RTL', 'icon-block' ),
		icon: formatOutdentRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatRtl',
		title: __( 'Format RTL', 'icon-block' ),
		icon: formatRtl,
		categories: [ 'editor' ],
	},
	{
		name: 'formatStrikethrough',
		title: __( 'Format Strikethrough', 'icon-block' ),
		icon: formatStrikethrough,
		categories: [ 'editor' ],
	},
	{
		name: 'formatUnderline',
		title: __( 'Format Underline', 'icon-block' ),
		icon: formatUnderline,
		categories: [ 'editor' ],
	},
	{
		name: 'formatUppercase',
		title: __( 'Format Uppercase', 'icon-block' ),
		icon: formatUppercase,
		categories: [ 'editor' ],
	},
	{
		name: 'fullscreen',
		title: __( 'Fullscreen', 'icon-block' ),
		icon: fullscreen,
		categories: [ 'editor' ],
	},
	{
		name: 'gallery',
		title: __( 'Gallery', 'icon-block' ),
		icon: gallery,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'globe',
		title: __( 'Globe', 'icon-block' ),
		icon: globe,
	},
	{
		name: 'grid',
		title: __( 'Grid', 'icon-block' ),
		icon: grid,
	},
	{
		name: 'group',
		title: __( 'Group', 'icon-block' ),
		icon: group,
		categories: [ 'blocks' ],
	},
	{
		name: 'handle',
		title: __( 'Handle', 'icon-block' ),
		icon: handle,
	},
	{
		name: 'heading',
		title: __( 'Heading', 'icon-block' ),
		icon: heading,
		categories: [ 'blocks' ],
	},
	{
		name: 'help',
		title: __( 'Help', 'icon-block' ),
		icon: help,
	},
	{
		name: 'helpFilled',
		title: __( 'Help - Filled', 'icon-block' ),
		icon: helpFilled,
	},
	{
		name: 'inbox',
		title: __( 'Inbox', 'icon-block' ),
		icon: inbox,
	},
	{
		name: 'institution',
		title: __( 'Institution', 'icon-block' ),
		icon: institution,
	},
	{
		name: 'home',
		title: __( 'Home', 'icon-block' ),
		icon: home,
		categories: [ 'blocks' ],
	},
	{
		name: 'html',
		title: __( 'HTML', 'icon-block' ),
		icon: html,
		categories: [ 'blocks' ],
	},
	{
		isDefault: true,
		name: 'image',
		title: __( 'Image', 'icon-block' ),
		icon: image,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'info',
		title: __( 'Info', 'icon-block' ),
		icon: info,
	},
	{
		name: 'insertAfter',
		title: __( 'Insert After', 'icon-block' ),
		icon: insertAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'insertBefore',
		title: __( 'Insert Before', 'icon-block' ),
		icon: insertBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyLeft',
		title: __( 'Justify Left', 'icon-block' ),
		icon: justifyLeft,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyCenter',
		title: __( 'Justify Center', 'icon-block' ),
		icon: justifyCenter,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyRight',
		title: __( 'Justify Right', 'icon-block' ),
		icon: justifyRight,
		categories: [ 'editor' ],
	},
	{
		name: 'justifySpaceBetween',
		title: __( 'Justify Space Between', 'icon-block' ),
		icon: justifySpaceBetween,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyStretch',
		title: __( 'Justify tretch', 'icon-block' ),
		icon: justifyStretch,
		categories: [ 'editor' ],
	},
	{
		name: 'key',
		title: __( 'Key', 'icon-block' ),
		icon: key,
	},
	{
		name: 'keyboardClose',
		title: __( 'Keyboard Close', 'icon-block' ),
		icon: keyboardClose,
		categories: [ 'editor' ],
	},
	{
		name: 'keyboardReturn',
		title: __( 'Keyboard Return', 'icon-block' ),
		icon: keyboardReturn,
		categories: [ 'editor' ],
	},
	{
		name: 'layout',
		title: __( 'Layout', 'icon-block' ),
		icon: layout,
	},
	{
		name: 'lifesaver',
		title: __( 'Lifesaver', 'icon-block' ),
		icon: lifesaver,
	},
	{
		name: 'lineDashed',
		title:  __( 'Line Dashed', 'icon-block' ),
		icon: lineDashed,
	},
	{
		name: 'lineDotted',
		title:  __( 'Line Dotted', 'icon-block' ),
		icon: lineDotted,
	},
	{
		name: 'lineSolid',
		title:  __( 'Line Solid', 'icon-block' ),
		icon: lineSolid,
	},
	{
		name: 'link',
		title: __( 'Link', 'icon-block' ),
		icon: link,
		categories: [ 'editor' ],
	},
	{
		name: 'linkOff',
		title: __( 'Link Off', 'icon-block' ),
		icon: linkOff,
		categories: [ 'editor' ],
	},
	{
		name: 'list',
		title: __( 'List', 'icon-block' ),
		icon: list,
		categories: [ 'blocks' ],
	},
	{
		name: 'listItem',
		title: __( 'List Item', 'icon-block' ),
		icon: listItem,
		categories: [ 'blocks' ],
	},
	{
		name: 'listView',
		title: __( 'List View', 'icon-block' ),
		icon: listView,
		categories: [ 'editor' ],
	},
	{
		name: 'lock',
		title: __( 'Lock', 'icon-block' ),
		icon: lock,
		categories: [ 'editor' ],
	},
	{
		name: 'lockOutline',
		title: __( 'Lock Outline', 'icon-block' ),
		icon: lockOutline,
		categories: [ 'editor' ],
	},
	{
		name: 'lockSmall',
		title: __( 'Lock Small', 'icon-block' ),
		icon: lockSmall,
		categories: [ 'editor' ],
	},
	{
		name: 'login',
		title: __( 'Login', 'icon-block' ),
		icon: login,
	},
	{
		name: 'loop',
		title: __( 'Loop', 'icon-block' ),
		icon: loop,
		categories: [ 'blocks' ],
	},
	{
		name: 'mapMarker',
		title: __( 'Map Marker', 'icon-block' ),
		icon: mapMarker,
	},
	{
		name: 'media',
		title: __( 'Media', 'icon-block' ),
		icon: media,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'mediaAndText',
		title: __( 'Media & Text', 'icon-block' ),
		icon: mediaAndText,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'megaphone',
		title: __( 'Megaphone', 'icon-block' ),
		icon: megaphone,
	},
	{
		name: 'menu',
		title: __( 'Menu', 'icon-block' ),
		icon: menu,
	},
	{
		name: 'mobile',
		title: __( 'Mobile', 'icon-block' ),
		icon: mobile,
		categories: [ 'devices' ],
	},
	{
		name: 'more',
		title: __( 'More', 'icon-block' ),
		icon: more,
	},
	{
		name: 'moreHorizontal',
		title: __( 'More Horizontal', 'icon-block' ),
		icon: moreHorizontal,
	},
	{
		name: 'moreHorizontalMobile',
		title: __( 'More Horizontal - Mobile', 'icon-block' ),
		icon: moreHorizontalMobile,
	},
	{
		name: 'moreVertical',
		title: __( 'More Vertical', 'icon-block' ),
		icon: moreVertical,
	},
	{
		name: 'moveTo',
		title: __( 'Move To', 'icon-block' ),
		icon: moveTo,
		categories: [ 'arrows' ],
	},
	{
		name: 'navigation',
		title: __( 'Navigation', 'icon-block' ),
		icon: navigation,
	},
	{
		name: 'overlayText',
		title: __( 'Overlay Text', 'icon-block' ),
		icon: overlayText,
	},
	{
		name: 'pageBreak',
		title: __( 'Page Break', 'icon-block' ),
		icon: pageBreak,
	},
	{
		name: 'customLink',
		title: __( 'Custom Link', 'icon-block' ),
		icon: customLink,
	},
	{
		name: 'page',
		title: __( 'Page', 'icon-block' ),
		icon: page,
	},
	{
		name: 'pages',
		title: __( 'Pages', 'icon-block' ),
		icon: pages,
	},
	{
		name: 'paragraph',
		title: __( 'Paragraph', 'icon-block' ),
		icon: paragraph,
	},
	{
		name: 'payment',
		title: __( 'Payment', 'icon-block' ),
		icon: payment,
	},
	{
		name: 'percent',
		title: __( 'Percent', 'icon-block' ),
		icon: percent,
	},
	{
		name: 'positionCenter',
		title: __( 'Position Center', 'icon-block' ),
		icon: positionCenter,
	},
	{
		name: 'positionLeft',
		title: __( 'Position Left', 'icon-block' ),
		icon: positionLeft,
	},
	{
		name: 'positionRight',
		title: __( 'Position Right', 'icon-block' ),
		icon: positionRight,
	},
	{
		name: 'post',
		title: __( 'Post', 'icon-block' ),
		icon: post,
	},
	{
		name: 'pencil',
		title: __( 'Pencil', 'icon-block' ),
		icon: pencil,
	},
	{
		name: 'people',
		title: __( 'People', 'icon-block' ),
		icon: people,
	},
	{
		name: 'pin',
		title: __( 'Pin', 'icon-block' ),
		icon: pin,
	},
	{
		name: 'plugins',
		title: __( 'Plugins', 'icon-block' ),
		icon: plugins,
	},
	{
		name: 'plusCircleFilled',
		title: __( 'Plus Circle - Filled', 'icon-block' ),
		icon: plusCircleFilled,
	},
	{
		name: 'plusCircle',
		title: __( 'Plus Circle', 'icon-block' ),
		icon: plusCircle,
	},
	{
		name: 'plus',
		title: __( 'Plus', 'icon-block' ),
		icon: plus,
	},
	{
		name: 'postAuthor',
		title: __( 'Post Author', 'icon-block' ),
		icon: postAuthor,
		categories: [ 'blocks' ],
	},
	{
		name: 'postCategories',
		title: __( 'Post Categories', 'icon-block' ),
		icon: postCategories,
		categories: [ 'blocks' ],
	},
	{
		name: 'postContent',
		title: __( 'Post Content', 'icon-block' ),
		icon: postContent,
		categories: [ 'blocks' ],
	},
	{
		name: 'postComments',
		title: __( 'Post Comments', 'icon-block' ),
		icon: postComments,
		categories: [ 'blocks' ],
	},
	{
		name: 'postCommentsCount',
		title: __( 'Post Comment Count', 'icon-block' ),
		icon: postCommentsCount,
	},
	{
		name: 'postCommentsForm',
		title: __( 'Post Comments Form', 'icon-block' ),
		icon: postCommentsForm,
		categories: [ 'blocks' ],
	},
	{
		name: 'postDate',
		title: __( 'Post Date', 'icon-block' ),
		icon: postDate,
		categories: [ 'blocks' ],
	},
	{
		name: 'postExcerpt',
		title: __( 'Post Excerpt', 'icon-block' ),
		icon: postExcerpt,
		categories: [ 'blocks' ],
	},
	{
		name: 'postFeaturedImage',
		title: __( 'Post Featured Image', 'icon-block' ),
		icon: postFeaturedImage,
		categories: [ 'blocks' ],
	},
	{
		name: 'postList',
		title: __( 'Post List', 'icon-block' ),
		icon: postList,
		categories: [ 'blocks' ],
	},
	{
		name: 'postTerms',
		title: __( 'Post Terms', 'icon-block' ),
		icon: postTerms,
		categories: [ 'blocks' ],
	},
	{
		name: 'previous',
		title: __( 'Previous', 'icon-block' ),
		icon: previous,
		categories: [ 'arrows' ],
	},
	{
		name: 'next',
		title: __( 'Next', 'icon-block' ),
		icon: next,
		categories: [ 'arrows' ],
	},
	{
		name: 'preformatted',
		title: __( 'Preformatted', 'icon-block' ),
		icon: preformatted,
	},
	{
		name: 'pullLeft',
		title: __( 'Pull Left', 'icon-block' ),
		icon: pullLeft,
	},
	{
		name: 'pullRight',
		title: __( 'Pull Right', 'icon-block' ),
		icon: pullRight,
	},
	{
		name: 'pullquote',
		title: __( 'Pull Quote', 'icon-block' ),
		icon: pullquote,
	},
	{
		name: 'queryPagination',
		title: __( 'Query Pagination', 'icon-block' ),
		icon: queryPagination,
	},
	{
		name: 'queryPaginationNext',
		title: __( 'Query Pagination Next', 'icon-block' ),
		icon: queryPaginationNext,
		categories: [ 'arrows' ],
	},
	{
		name: 'queryPaginationNumbers',
		title: __( 'Query Pagination Numbers', 'icon-block' ),
		icon: queryPaginationNumbers,
	},
	{
		name: 'queryPaginationPrevious',
		title: __( 'Query Pagination Previous', 'icon-block' ),
		icon: queryPaginationPrevious,
		categories: [ 'arrows' ],
	},
	{
		name: 'quote',
		title: __( 'Quote', 'icon-block' ),
		icon: quote,
		categories: [ 'blocks' ],
	},
	{
		name: 'receipt',
		title: __( 'Receipt', 'icon-block' ),
		icon: receipt,
	},
	{
		name: 'redo',
		title: __( 'Redo', 'icon-block' ),
		icon: redo,
		categories: [ 'arrows', 'editor' ],
	},
	{
		name: 'removeBug',
		title: __( 'Remove Bug', 'icon-block' ),
		icon: removeBug,
	},
	{
		name: 'removeSubmenu',
		title: __( 'Remove Submenu', 'icon-block' ),
		icon: removeSubmenu,
	},
	{
		name: 'replace',
		title: __( 'Replace', 'icon-block' ),
		icon: replace,
		categories: [ 'arrows' ],
	},
	{
		name: 'reset',
		title: __( 'Reset', 'icon-block' ),
		icon: reset,
		keywords: [ 'minus' ],
	},
	{
		name: 'resizeCornerNE',
		title: __( 'Resize Corner', 'icon-block' ),
		icon: resizeCornerNE,
		categories: [ 'arrows' ],
	},
	{
		name: 'reusableBlock',
		title: __( 'Reusable Block', 'icon-block' ),
		icon: reusableBlock,
		categories: [ 'arrows' ],
	},
	{
		name: 'rotateLeft',
		title: __( 'Rotate Left', 'icon-block' ),
		icon: rotateLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'rotateRight',
		title: __( 'Rotate Right', 'icon-block' ),
		icon: rotateRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'row',
		title: __( 'Row', 'icon-block' ),
		icon: row,
	},
	{
		name: 'rss',
		title: __( 'RSS', 'icon-block' ),
		icon: rss,
	},
	{
		name: 'search',
		title: __( 'Search', 'icon-block' ),
		icon: search,
		keywords: [ 'magnifying glass' ],
	},
	{
		name: 'seen',
		title: __( 'Seen', 'icon-block' ),
		icon: seen,
		keywords: [ 'eye', 'visible' ],
	},
	{
		name: 'separator',
		title: __( 'Separator', 'icon-block' ),
		icon: separator,
		categories: [ 'blocks' ],
	},
	{
		name: 'settings',
		title: __( 'Settings', 'icon-block' ),
		icon: settings,
	},
	{
		name: 'shadow',
		title: __( 'Shadow', 'icon-block' ),
		icon: shadow,
		keywords: [ 'sun' ],
	},
	{
		name: 'share',
		title: __( 'Share', 'icon-block' ),
		icon: share,
	},
	{
		name: 'shield',
		title: __( 'Shield', 'icon-block' ),
		icon: shield,
	},
	{
		name: 'shortcode',
		title: __( 'Shortcode', 'icon-block' ),
		icon: shortcode,
		categories: [ 'blocks' ],
	},
	{
		name: 'shuffle',
		title: __( 'Shuffle', 'icon-block' ),
		icon: shuffle,
	},
	{
		name: 'siteLogo',
		title: __( 'Site Logo', 'icon-block' ),
		icon: siteLogo,
		categories: [ 'blocks', 'media' ],
	},
	{
		isDefault: true,
		name: 'sparkles',
		title: __( 'Sparkles', 'icon-block' ),
		icon: sparkles,
	},
	{
		name: 'stack',
		title: __( 'Stack', 'icon-block' ),
		icon: stack,
	},
	{
		name: 'starEmpty',
		title: __( 'Star Empty', 'icon-block' ),
		icon: starEmpty,
	},
	{
		name: 'starFilled',
		title: __( 'Star Filled', 'icon-block' ),
		icon: starFilled,
	},
	{
		name: 'starHalf',
		title: __( 'Star Half', 'icon-block' ),
		icon: starHalf,
	},
	{
		name: 'store',
		title: __( 'Store', 'icon-block' ),
		icon: store,
	},
	{
		name: 'stretchFullWidth',
		title: __( 'Stretch Full Width', 'icon-block' ),
		icon: stretchFullWidth,
		categories: [ 'editor' ],
	},
	{
		name: 'styles',
		title: __( 'Styles', 'icon-block' ),
		icon: styles,
	},
	{
		isDefault: true,
		name: 'shipping',
		title: __( 'Shipping', 'icon-block' ),
		icon: shipping,
		keywords: [ 'truck' ],
	},
	{
		name: 'stretchWide',
		title: __( 'Stretch Wide', 'icon-block' ),
		icon: stretchWide,
		categories: [ 'editor' ],
	},
	{
		name: 'subscript',
		title: __( 'Subscript', 'icon-block' ),
		icon: subscript,
		categories: [ 'editor' ],
	},
	{
		name: 'superscript',
		title: __( 'Superscript', 'icon-block' ),
		icon: superscript,
		categories: [ 'editor' ],
	},
	{
		name: 'swatch',
		title: __( 'Swatch', 'icon-block' ),
		icon: swatch,
	},
	{
		name: 'symbol',
		title: __( 'Symbol', 'icon-block' ),
		icon: symbol,
	},
	{
		name: 'symbolFilled',
		title: __( 'Symbol - Filled', 'icon-block' ),
		icon: symbolFilled,
	},
	{
		name: 'tableColumnAfter',
		title: __( 'Table Column After', 'icon-block' ),
		icon: tableColumnAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'tableColumnBefore',
		title: __( 'Table Column Before', 'icon-block' ),
		icon: tableColumnBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'tableColumnDelete',
		title: __( 'Table Column Delete', 'icon-block' ),
		icon: tableColumnDelete,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowAfter',
		title: __( 'Table Row After', 'icon-block' ),
		icon: tableRowAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowBefore',
		title: __( 'Table Row Before', 'icon-block' ),
		icon: tableRowBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowDelete',
		title: __( 'Table Row Delete', 'icon-block' ),
		icon: tableRowDelete,
		categories: [ 'editor' ],
	},
	{
		name: 'table',
		title: __( 'Table', 'icon-block' ),
		icon: table,
	},
	{
		name: 'tag',
		title: __( 'Tag', 'icon-block' ),
		icon: tag,
	},
	{
		name: 'termDescription',
		title: __( 'Term Description', 'icon-block' ),
		icon: termDescription,
		categories: [ 'blocks' ],
	},
	{
		name: 'footer',
		title: __( 'Footer', 'icon-block' ),
		icon: footer,
	},
	{
		name: 'header',
		title: __( 'Header', 'icon-block' ),
		icon: header,
	},
	{
		name: 'sidebar',
		title: __( 'Sidebar', 'icon-block' ),
		icon: sidebar,
	},
	{
		name: 'textColor',
		title: __( 'Text Color', 'icon-block' ),
		icon: textColor,
	},
	{
		name: 'tablet',
		title: __( 'Tablet', 'icon-block' ),
		icon: tablet,
		categories: [ 'devices' ],
	},
	{
		name: 'title',
		title: __( 'Title', 'icon-block' ),
		icon: title,
	},
	{
		name: 'tip',
		title: __( 'Tip', 'icon-block' ),
		icon: tip,
	},
	{
		name: 'tool',
		title: __( 'Tool', 'icon-block' ),
		icon: tool,
	},
	{
		name: 'trash',
		title: __( 'Trash', 'icon-block' ),
		icon: trash,
	},
	{
		name: 'trendingDown',
		title: __( 'Trending Down', 'icon-block' ),
		icon: trendingDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'trendingUp',
		title: __( 'Trending Up', 'icon-block' ),
		icon: trendingUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'typography',
		title: __( 'Typography', 'icon-block' ),
		icon: typography,
	},
	{
		name: 'undo',
		title: __( 'Undo', 'icon-block' ),
		icon: undo,
		categories: [ 'arrows', 'editor' ],
	},
	{
		name: 'ungroup',
		title: __( 'Ungroup', 'icon-block' ),
		icon: ungroup,
		categories: [ 'editor' ],
	},
	{
		name: 'unlock',
		title: __( 'Unlock', 'icon-block' ),
		icon: unlock,
		categories: [ 'editor' ],
	},
	{
		name: 'unseen',
		title: __( 'Unseen', 'icon-block' ),
		icon: unseen,
		keywords: [ 'eye', 'hidden' ],
	},
	{
		name: 'update',
		title: __( 'Update', 'icon-block' ),
		icon: update,
	},
	{
		name: 'upload',
		title: __( 'Upload', 'icon-block' ),
		icon: upload,
		categories: [ 'arrows' ],
	},
	{
		isDefault: true,
		name: 'verse',
		title: __( 'Verse', 'icon-block' ),
		icon: verse,
		categories: [ 'blocks' ],
	},
	{
		name: 'video',
		title: __( 'Video', 'icon-block' ),
		icon: video,
		categories: [ 'media' ],
	},
	{
		name: 'warning',
		title: __( 'Warning', 'icon-block' ),
		icon: warning,
	},
	{
		name: 'widget',
		title: __( 'Widget', 'icon-block' ),
		icon: widget,
	},
];

const icons = [
	{
		isDefault: false,
		type: 'wordpress',
		title: __( 'WordPress', 'icon-block' ),
		icons: [].concat( wordpressSocialIcons, wordpressIcons ),
		categories: [
			{
				name: 'arrows',
				title: __( 'Arrows', 'icon-block' ),
			},
			{
				name: 'blocks',
				title: __( 'Blocks', 'icon-block' ),
			},
			{
				name: 'devices',
				title: __( 'Devices', 'icon-block' ),
			},
			{
				name: 'editor',
				title: __( 'Editor', 'icon-block' ),
			},
			{
				name: 'logos',
				title: __( 'Logos', 'icon-block' ),
			},
			{
				name: 'media',
				title: __( 'Media', 'icon-block' ),
			},
		],
	},
];

// Allow third parties to add their own icon types via filter.
export default function getIcons() {
	return applyFilters( 'iconBlock.icons', icons );
}
