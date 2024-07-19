"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const SomeClientComponent = () => {
  const { t } = useTranslation();
  return <div className="text-center">{t("cc.heading")}</div>;
};

export default SomeClientComponent;
