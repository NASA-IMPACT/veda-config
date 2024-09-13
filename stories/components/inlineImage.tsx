import React from "$veda-ui/@types/react";
import T from 'prop-types';

import Image, { Caption } from "$veda-ui-scripts/components/common/blocks/images";

const InlineImage = ({ src, alt, align, attrAuthor, attrUrl, width, caption }) => {
    const imageAlign = align ? align : 'center';
    return (
        <div style={{float: imageAlign}}>
            <Image
                src={src}
                alt={alt}
                align={imageAlign}
                attrAuthor={attrAuthor}
                attrUrl={attrUrl}
                width={width}
            />
            <div style={{width: width}}>
            <Caption>
                {caption}
            </Caption>
        </div>
    </div>
    )
};

InlineImage.propTypes = {
    src: T.string,
    alt: T.string,
    align: T.string,
    attrAuthor: T.string,
    attrUrl: T.string,
    width: T.string,
    caption: T.string,
};  

export default InlineImage;
