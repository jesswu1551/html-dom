import Post from './Post';

const PostList: Post[] = [
    { slug: 'add-or-remove-class-from-an-element', category: 'Basic' },
    { slug: 'allow-to-enter-particular-characters-only', category: 'Intermediate' },
    { slug: 'append-to-an-element', category: 'Basic' },
    { slug: 'attach-event-handlers-inside-other-handlers', category: 'Tip' },
    { slug: 'attach-or-detach-an-event-handler', category: 'Basic' },
    { slug: 'calculate-the-mouse-position-relative-to-an-element', category: 'Basic' },
    { slug: 'calculate-the-size-of-scrollbar', category: 'Intermediate' },
    { slug: 'change-the-website-favicon', category: 'Intermediate' },
    { slug: 'check-an-element-against-a-selector', category: 'Basic' },
    { slug: 'check-if-an-element-has-given-class', category: 'Basic' },
    { slug: 'check-if-an-element-is-a-descendant-of-another', category: 'Basic' },
    { slug: 'check-if-an-element-is-in-the-viewport', category: 'Basic' },
    { slug: 'check-if-an-element-is-scrollable', category: 'Intermediate' },
    { slug: 'check-if-an-element-is-visible-in-a-scrollable-container', category: 'Intermediate' },
    { slug: 'check-if-the-code-is-running-in-the-browser', category: 'Basic' },
    { slug: 'check-if-the-native-date-input-is-supported', category: 'Basic' },
    { slug: 'check-if-the-touch-events-are-supported', category: 'Basic' },
    { slug: 'clone-an-element', category: 'Basic' },
    { slug: 'communication-between-an-iframe-and-its-parent-window', category: 'Intermediate' },
    { slug: 'copy-highlighted-code-to-the-clipboard', category: 'Advanced' },
    { slug: 'copy-text-to-the-clipboard', category: 'Intermediate' },
    { slug: 'count-the-number-of-characters-of-a-textarea', category: 'Basic' },
    { slug: 'create-a-custom-scrollbar', category: 'Advanced' },
    { slug: 'create-a-range-slider', category: 'Advanced' },
    { slug: 'create-an-element', category: 'Basic' },
    { slug: 'create-an-image-comparison-slider', category: 'Advanced' },
    { slug: 'create-one-time-event-handler', category: 'Basic' },
    { slug: 'create-resizable-split-views', category: 'Advanced' },
    { slug: 'detect-clicks-outside-of-an-element', category: 'Basic' },
    { slug: 'detect-if-an-element-is-focused', category: 'Basic' },
    { slug: 'detect-if-the-caps-lock-is-on', category: 'Intermediate' },
    { slug: 'detect-internet-explorer-browser', category: 'Basic' },
    { slug: 'detect-mac-os-browser', category: 'Basic' },
    { slug: 'detect-mobile-browsers', category: 'Basic' },
    { slug: 'detect-the-dark-mode', category: 'Basic' },
    { slug: 'determine-the-height-and-width-of-an-element', category: 'Basic' },
    { slug: 'distinguish-between-left-and-right-mouse-clicks', category: 'Basic' },
    { slug: 'download-a-file', category: 'Intermediate' },
    { slug: 'drag-and-drop-element-in-a-list', category: 'Advanced' },
    { slug: 'drag-and-drop-table-column', category: 'Advanced' },
    { slug: 'drag-and-drop-table-row', category: 'Advanced' },
    { slug: 'drag-to-scroll', category: 'Advanced' },
    { slug: 'execute-code-when-the-document-is-ready', category: 'Basic' },
    { slug: 'export-a-table-to-csv', category: 'Intermediate' },
    { slug: 'get-css-styles-of-an-element', category: 'Basic' },
    { slug: 'get-or-set-the-document-title', category: 'Basic' },
    { slug: 'get-or-set-the-html-of-an-element', category: 'Basic' },
    { slug: 'get-set-and-remove-attributes', category: 'Basic' },
    { slug: 'get-set-and-remove-data-attributes', category: 'Basic' },
    { slug: 'get-siblings-of-an-element', category: 'Basic', },
    { slug: 'get-size-of-the-selected-file', category: 'Basic', },
    { slug: 'get-the-closest-element-by-given-selector', category: 'Basic' },
    { slug: 'get-the-default-value-of-a-css-property', category: 'Intermediate' },
    { slug: 'get-the-direction-of-the-text-selection', category: 'Intermediate' },
    { slug: 'get-the-document-height-and-width', category: 'Basic' },
    { slug: 'get-the-first-scrollable-parent-of-an-element', category: 'Intermediate' },
    { slug: 'get-the-parent-node-of-an-element', category: 'Basic' },
    { slug: 'get-the-position-of-an-element-relative-to-another', category: 'Basic' },
    { slug: 'get-the-position-of-an-element-relative-to-the-document', category: 'Basic' },
    { slug: 'get-the-selected-text', category: 'Basic' },
    { slug: 'get-the-size-of-an-image', category: 'Basic' },
    { slug: 'get-the-text-content-of-an-element', category: 'Basic' },
    { slug: 'go-back-to-the-previous-page', category: 'Basic' },
    { slug: 'highlight-an-element-when-dragging-a-file-over-it', category: 'Intermediate' },
    { slug: 'insert-an-element-after-or-before-other-element', category: 'Basic' },
    { slug: 'insert-given-html-after-or-before-an-element', category: 'Basic' },
    { slug: 'load-a-css-file-dynamically', category: 'Intermediate' },
    { slug: 'load-a-javascript-file-dynamically', category: 'Intermediate' },
    { slug: 'loop-over-a-nodelist', category: 'Basic' },
    { slug: 'make-a-draggable-element', category: 'Advanced' },
    { slug: 'make-a-resizable-element', category: 'Advanced' },
    { slug: 'measure-the-width-of-given-text-of-given-font', category: 'Intermediate' },
    { slug: 'paste-an-image-from-the-clipboard', category: 'Intermediate' },
    { slug: 'paste-as-plain-text', category: 'Intermediate' },
    { slug: 'placeholder-for-a-contenteditable-element', category: 'Intermediate' },
    { slug: 'position-an-element-absolutely-to-another-element', category: 'Intermediate' },
    { slug: 'prepend-to-an-element', category: 'Basic' },
    { slug: 'press-shift-and-enter-for-a-new-line', category: 'Basic' },
    { slug: 'prevent-body-from-scrolling-when-opening-a-modal', category: 'Basic' },
    { slug: 'prevent-the-default-action-of-an-event', category: 'Basic' },
    { slug: 'preview-an-image-before-uploading-it', category: 'Intermediate' },
    { slug: 'print-an-image', category: 'Intermediate' },
    { slug: 'put-cursor-at-the-end-of-an-input', category: 'Basic' },
    { slug: 'redirect-to-another-page', category: 'Basic' },
    { slug: 'reload-the-current-page', category: 'Basic' },
    { slug: 'remove-all-children-of-a-node', category: 'Basic' },
    { slug: 'remove-an-element', category: 'Basic' },
    { slug: 'replace-an-element', category: 'Basic' },
    { slug: 'replace-broken-images', category: 'Basic' },
    { slug: 'resize-an-iframe-to-fit-its-content', category: 'Basic' },
    { slug: 'resize-an-image', category: 'Intermediate' },
    { slug: 'resize-columns-of-a-table', category: 'Advanced' },
    { slug: 'resize-the-width-of-a-text-box-to-fit-its-content-automatically', category: 'Intermediate' },
    { slug: 'save-and-restore-the-text-selection', category: 'Intermediate' },
    { slug: 'scale-a-text-to-fit-inside-of-an-element', category: 'Intermediate' },
    { slug: 'scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container', category: 'Intermediate' },
    { slug: 'scroll-to-an-element', category: 'Basic' },
    { slug: 'scroll-to-an-element-smoothly', category: 'Advanced' },
    { slug: 'scroll-to-top-of-the-page', category: 'Basic' },
    { slug: 'select-an-element-or-list-of-elements', category: 'Basic' },
    { slug: 'select-the-children-of-an-element', category: 'Basic' },
    { slug: 'select-the-text-content-of-an-element', category: 'Basic' },
    { slug: 'select-the-text-of-a-textarea-automatically', category: 'Basic' },
    { slug: 'serialize-form-data-into-a-query-string', category: 'Basic' },
    { slug: 'set-css-style-for-an-element', category: 'Basic' },
    { slug: 'show-a-custom-context-menu-at-clicked-position', category: 'Intermediate' },
    { slug: 'show-a-ghost-element-when-dragging-an-element', category: 'Intermediate' },
    { slug: 'show-a-loading-indicator-when-an-iframe-is-being-loaded', category: 'Intermediate' },
    { slug: 'show-or-hide-an-element', category: 'Basic' },
    { slug: 'show-or-hide-table-columns', category: 'Advanced' },
    { slug: 'sort-a-table-by-clicking-its-headers', category: 'Advanced' },
    { slug: 'strip-html-from-a-given-text', category: 'Basic' },
    { slug: 'submit-a-form-with-ajax', category: 'Basic' },
    { slug: 'swap-two-nodes', category: 'Basic' },
    { slug: 'toggle-an-element', category: 'Basic' },
    { slug: 'toggle-password-visibility', category: 'Basic' },
    { slug: 'trigger-an-event', category: 'Basic' },
    { slug: 'unwrap-an-element', category: 'Basic' },
    { slug: 'upload-files-with-ajax', category: 'Basic' },
    { slug: 'wrap-an-element-around-a-given-element', category: 'Basic' },
    { slug: 'zoom-an-image', category: 'Advanced' },
];

export default PostList;
