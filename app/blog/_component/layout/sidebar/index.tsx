import BlogCategory from "@/app/blog/_component/blog-category";
import React from "react";
import NavBar from "@/app/blog/_component/layout/sidebar/nav-bar";
import ToggleSidebarContainer from "./toggle-sidebar-container";
import User from "@/components/user";

export default function Sidebar() {
  return (
    <ToggleSidebarContainer>
      <User />
      <NavBar />
      <div className="px-8 flex-1 text-sm">
        <BlogCategory />
      </div>
    </ToggleSidebarContainer>
  );
}
