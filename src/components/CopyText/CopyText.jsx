import React from 'react';
import copyToClipboard from '../../utils/copyToClipboard';
import './CopyText.scss';

export default ({ content }) => {
    const stringContent = `${content || ''}`.trim();
    return (
        <div
            className="copyText chayns__border-color"
            onClick={() => copyToClipboard(stringContent)}
        >
            {stringContent}
        </div>
    );
};
