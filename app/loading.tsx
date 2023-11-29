import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
