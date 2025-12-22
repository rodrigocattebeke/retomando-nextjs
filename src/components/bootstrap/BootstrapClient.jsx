"use client";
import { useEffect } from "react";

export const BootstrapClient = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return null;
};
