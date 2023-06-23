import React, { ReactNode } from "react";
import PropTypes from "prop-types";


export const Layout = (props) => (
    <div className="w-full min-h-[calc(100vh-4rem)] pb-8 antialiased text-gray-700 bg-[#F3F2EF]">
        {props.meta}
        <div className="mt-[4rem] pt-8">
            <div className="">{props.children}</div>
        </div>
    </div>
);

Layout.propTypes = {
    displayNav: PropTypes.bool.isRequired,
    displayFooter: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    displayNav: true,
    displayFooter: true,
};