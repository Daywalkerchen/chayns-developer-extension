import React, { Fragment } from 'react';
import CopyText from '../CopyText/CopyText';

export default () => {
    const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    return (
        <Fragment>
            <h2 className="chayns__background-color">
                Lorem Ipsum
            </h2>
            <CopyText content={LOREM_IPSUM} />
        </Fragment>
    );
};
