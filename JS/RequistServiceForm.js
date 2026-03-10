    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modalOverlay");

    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
    
    const gFileInput = document.getElementById("attachment");
    const gFileName = document.getElementById("g-file-name");
    
    gFileInput.addEventListener("change", () => {
      gFileName.textContent = gFileInput.files.length > 0
      ? gFileInput.files[0].name
      : document.querySelector("#g-file-name").getAttribute("data-lang") || "لم يتم اختيار ملف";
    });
    
    
        document.getElementById("serviceForm").addEventListener("submit", function (e) {
          // e.preventDefault();
          alert("تم إرسال طلبك بنجاح!");
          this.reset();
          modal.classList.add("hidden");
        });

