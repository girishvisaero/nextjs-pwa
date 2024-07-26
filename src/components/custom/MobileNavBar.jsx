"use client";

import { cn } from "@/lib/utils";
import React from "react";

/**
 * Renders a mobile navigation bar component with a border, shadow, and text color.
 *
 * @param {string} className - Optional class name for custom styling.
 * @param {string} headerName - Required to display for the header name
 * @return {JSX.Element} A div element containing the navigation bar.
 */

const MobileNavBar = ({ className = "", headerName = "" }) => {
  return <div className={className}>{headerName}</div>;
};

export default MobileNavBar;
