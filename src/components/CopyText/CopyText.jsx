import React, { useState } from 'react';
import copyToClipboard from '../../utils/copyToClipboard';
import './CopyText.scss';

export default ({ content }) => {
    const stringContent = `${content || ''}`.trim();
    const [wasCopied, setWasCopied] = useState(false);

    const handleCopyToClipboard = () => {
        copyToClipboard(stringContent);
        setWasCopied(true);
        setTimeout(() => {
            setWasCopied(false);
        }, 100);
    };

    return (
        <div
            className={`copyText ${wasCopied && 'copyText--copied'} chayns__border-color`}
            onClick={handleCopyToClipboard}
        >
            {stringContent}
        </div>
    );
};
