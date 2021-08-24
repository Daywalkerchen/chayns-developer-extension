import { Snackbar } from '@material-ui/core';
import React, {
    memo,
    useState
} from 'react';

import copyToClipboard from '../../utils/copyToClipboard';

import './copy-text.scss';

const CopyText = ({ content }) => {
    const stringContent = `${content || ''}`.trim();

    const [wasCopied, setWasCopied] = useState(false);

    const handleCopyToClipboard = () => {
        copyToClipboard(stringContent);

        setWasCopied(true);

        setTimeout(() => {
            setWasCopied(false);
        }, 600);
    };

    return (
        <div
            className={`copyText ${wasCopied && 'copyText--copied'} chayns__border-color`}
            onClick={handleCopyToClipboard}
        >
            {stringContent}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={1000}
                message="Copied"
                open={wasCopied}
            />
        </div>
    );
};

export default memo(CopyText);
