import type { Metadata } from "next";

import { CustomContact, CustomIntro, CustomMethods, CustomProcess, CustomShowcase } from "@/components/custom";

export const metadata: Metadata = { title: "Custom theo yêu cầu" };

export default function CustomPage() {
  return (
    <>
      <CustomIntro />
      <CustomProcess />
      <CustomMethods />
      <CustomShowcase />
      <CustomContact />
    </>
  );
}
