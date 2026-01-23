import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

export default function ScrollToHash() {
   const { hash } = useLocation();

   useEffect(() => {
      if (!hash) return;

      const element = document.querySelector(hash);
      if (!element) return;

      const y =
         element.getBoundingClientRect().top +
         window.pageYOffset -
         NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
   }, [hash]);

   return null;
}
