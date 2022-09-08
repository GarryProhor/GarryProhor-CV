import React from 'react';
import ContentLoader from "react-content-loader";

const SkeletonBlog = () => {
    return (
        <ContentLoader
            speed={2}
            width={410}
            height={430}
            viewBox="0 0 410 430"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="20" ry="20" width="410" height="230" />
            <rect x="25" y="255" rx="0" ry="0" width="300" height="20" />
            <rect x="25" y="293" rx="0" ry="0" width="350" height="50" />
            <rect x="25" y="361" rx="0" ry="0" width="350" height="50" />
        </ContentLoader>
    );
};

export default SkeletonBlog;