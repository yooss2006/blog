import BlogCategory from "@/features/blog/components/blog-category";
import React from "react";
import NavBar from "@/components/layout/sidebar/nav-bar";
import ToggleSidebarContainer from "./toggle-sidebar-container";
import User from "@/components/user";

export default function Sidebar() {
  return (
    <ToggleSidebarContainer>
      <User />
      <NavBar />
      <div className="px-2 flex-1">
        <BlogCategory />
      </div>
    </ToggleSidebarContainer>
  );
}
