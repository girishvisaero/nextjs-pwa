"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

/**
 * WithLayout is a higher-order component that wraps its children with a fixed-height header and footer.
 *
 * @param {Object} props - The props object containing the following properties:
 *   @param {React.ReactNode} [props.topContent=null] - The content to be displayed in the top (header) section.
 *   @param {React.ReactNode} [props.bottomContent=null] - The content to be displayed in the bottom (footer) section.
 *   @param {React.ReactNode} props.children - The content to be displayed within the main body of the layout.
 * @returns {React.ReactNode} The wrapped layout with the provided top and bottom content, and the provided children.
 */
const WithLayout = ({
  topContent = null,
  bottomContent = null,
  children,
  headerClasses = "",
  footerClasses = "",
  contentClasses = "",
}) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight);
    }
  }, [headerRef, footerRef, topContent, bottomContent]);

  return (
    <div style={{ position: "fixed", height: "100vh", width: "100%" }}>
      {topContent && (
        <nav
          className={cn("bg-primary text-white custom-shadow px-2 py-3", headerClasses)}
          style={{ position: "fixed", width: "100%", top: 0 }}
          ref={headerRef}
        >
          {topContent}
        </nav>
      )}
      <div
        // write all css in tailwind
        className={cn("bg-white p-3", contentClasses)}
        style={{
          overflowY: "auto",
          height: "100%",
          paddingTop: topContent ? headerHeight : 0,
          paddingBottom: bottomContent ? footerHeight : 0,
        }}
      >
        {children}
      </div>
      {bottomContent && (
        <footer
          className={cn("bg-white custom-shadow px-2 py-3 ", footerClasses)}
          style={{ position: "fixed", width: "100%", bottom: 0 }}
          ref={footerRef}
        >
          {bottomContent}
        </footer>
      )}
    </div>
  );
};

export default WithLayout;
