import BlogCategory from "@/features/blog/components/blog-category";
import React from "react";
import NavBar from "@/components/layout/sidebar/nav-bar";
import ToggleSidebarContainer from "./toggle-sidebar-container";

export default function Sidebar() {
  return (
    <ToggleSidebarContainer>
      <NavBar />
      <div className="px-2 flex-1">
        <BlogCategory />
      </div>
    </ToggleSidebarContainer>
  );
}
