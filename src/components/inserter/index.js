/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { useState, useEffect, useMemo, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import getIcons from './../../icons';
import { flattenIconsArray, getIconTypes } from './../../utils';
import ContentHeader from './content-header';
import IconGrid from './icon-grid';
import Sidebar from './sidebar';



function resizeScrollers() {

	const getEl = (theSelector) => {
		return window.document.querySelector(theSelector); 
	}
	
	var tmpModal = getEl('.components-modal__content')
	var tmpHeader = getEl('.components-modal__header');
	var tmpSB = getEl('.icon-inserter__sidebar__search')

	var tmpBuffer = 4;

	var tmpMH = tmpModal.clientHeight;
	var tmpHH = tmpHeader.clientHeight;
	var tmpSH = tmpSB.clientHeight;
	
	var tmpCBH = tmpMH - tmpSH - tmpBuffer;

	var tmpCatBox = getEl('.icon-inserter__sidebar__category-type.components-menu-group');
	var tmpIconsBox = getEl('.icon-inserter__content');
	tmpCatBox.style.height = tmpCBH + 'px';
	tmpIconsBox.style.height = (tmpCBH + tmpSH ) + 'px';

}

export default function InserterModal( props ) {
	const { isInserterOpen, setInserterOpen, attributes, setAttributes } =
		props;
	const iconsByType = getIcons();
	const iconTypes = getIconTypes( iconsByType );

	//---- NEW CODE TO RESIZE SCROLLERS TO MODAL SIZE - WJF
	
	//--- Resize scrollable elements when dialog is openned
	useEffect(() => {
		if( isInserterOpen ){
			//--- Trigger looking for it
			resizeScrollers();
		}
	}, [isInserterOpen]);


	//--- Resize scrollable on window change
	useEffect(() => {
		//--- Handle window resize
		const handleResize = () => {
			resizeScrollers();
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, []);

	//--- END WJF CODE

	// Get the default type, and if there is none, get the first type.
	const defaultType = useMemo( () => {
		const defaultTypes = iconTypes.filter( ( type ) => type.isDefault );
		return defaultTypes.length !== 0 ? defaultTypes : [ iconTypes[ 0 ] ];
	}, [ iconTypes ] );

	const [ searchInput, setSearchInput ] = useState( '' );
	const [ currentCategory, setCurrentCategory ] = useState(
		'all__' + defaultType[ 0 ]?.type
	);
	const [ iconSize, setIconSize ] = useState( () => {
		const storedSettings = window.localStorage.getItem( 'icon_block' );
		return storedSettings
			? JSON.parse( storedSettings )?.preview_size || 24
			: 24;
	} );

	useEffect( () => {
		const settings = JSON.parse(
			window.localStorage.getItem( 'icon_block' ) || '{}'
		);
		settings.preview_size = iconSize;
		window.localStorage.setItem( 'icon_block', JSON.stringify( settings ) );
	}, [ iconSize ] );

	const iconsAll = useMemo(
		() => flattenIconsArray( iconsByType ),
		[ iconsByType ]
	);

	// Move the filtering logic to a separate function
	const getFilteredIcons = useCallback( () => {
		if ( searchInput ) {
			return iconsAll.filter( ( icon ) => {
				const input = searchInput.toLowerCase();
				const iconName = icon.title.toLowerCase();

				if ( iconName.includes( input ) ) {
					return true;
				}

				return (
					icon?.keywords?.some( ( keyword ) =>
						keyword.includes( input )
					) || false
				);
			} );
		}

		if ( currentCategory.startsWith( 'all__' ) ) {
			const categoryType = currentCategory.replace( 'all__', '' );
			return (
				iconsByType.find( ( type ) => type.type === categoryType )
					?.icons || []
			);
		}

		return iconsAll.filter(
			( icon ) => icon?.categories?.includes( currentCategory ) || false
		);
	}, [ searchInput, currentCategory, iconsAll, iconsByType ] );

	if ( ! isInserterOpen ) {
		return null;
	}

	function updateIconAtts( name, hasNoIconFill ) {
		setAttributes( {
			icon: '',
			iconName: name,
			hasNoIconFill,
		} );
		setInserterOpen( false );
	}

	function onClickCategory( category ) {
		setCurrentCategory( category );
	}

	return (
		<Modal
			className="wp-block-outermost-icon-inserter__modal"
			title={ __( 'Icon Library', 'icon-block' ) }
			onRequestClose={ () => setInserterOpen( false ) }
			isFullScreen
		>
			<div
				className={ classnames( 'icon-inserter', {
					'is-searching': searchInput,
				} ) }
			>
				<Sidebar
					iconsByType={ iconsByType }
					currentCategory={ currentCategory }
					onClickCategory={ onClickCategory }
					searchInput={ searchInput }
					setSearchInput={ setSearchInput }
				/>
				<div className="icon-inserter__content">
					<ContentHeader
						searchInput={ searchInput }
						shownIconsCount={ getFilteredIcons().length }
						iconSize={ iconSize }
						setIconSize={ setIconSize }
					/>
					<IconGrid
						shownIcons={ getFilteredIcons() }
						iconSize={ iconSize }
						updateIconAtts={ updateIconAtts }
						attributes={ attributes }
					/>
				</div>
			</div>
		</Modal>
	);
}
