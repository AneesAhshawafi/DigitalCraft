        const lang = localStorage.getItem("preferredLanguage") || "ar";
        document.documentElement.style.setProperty("--image-before-position", lang === "ar" ? "31px" : "233px");
        document.documentElement.style.setProperty("--special-heading-p-margin", lang === "ar" ? "-20px 0 0" : "-40px 0 0");
        document.documentElement.style.setProperty("--special-heading-p-margin-mobile", lang === "ar" ? "-10px 0 0" : "-27px 0 0");
        document.documentElement.style.setProperty("--fa-bars-margin-left", lang === "ar" ? "40px" : "0px");
        document.documentElement.style.setProperty("--fa-bars-margin-right", lang === "ar" ? "0" : "40px");
