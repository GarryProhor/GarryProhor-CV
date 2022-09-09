import React from 'react';
import ContentLoader from "react-content-loader";


const SkeletonPortfolio = () => {
    return (
        <ContentLoader
            speed={1}
            width={390}
            height={450}
            viewBox="0 0 390 450"
            backgroundColor="hsl(0, 0%, 22%)"
            foregroundColor="hsl(0, 0%, 7%)"
        >
            <rect x="0" y="0" rx="0" ry="0" width="390" height="390" />
            <rect x="0" y="410" rx="0" ry="0" width="160" height="19" />
            <rect x="0" y="431" rx="0" ry="0" width="160" height="19" />
        </ContentLoader>
    );
};

export default SkeletonPortfolio;