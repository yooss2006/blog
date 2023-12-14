import { redirect } from "next/navigation";
import { NextPage } from "next";

export default function Home(): NextPage {
  redirect("/blog");
}
