import React from "react";
import { useSetLang } from "./context";
import { useT } from "./context";

export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello!")}</h1>
      <button onClick={() => setLang("ek")}>{t("Translate")}</button>
    </>
  );
};
