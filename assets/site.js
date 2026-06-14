(function () {
  const copyButtons = document.querySelectorAll("[data-copy-target]");

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textArea);
    return copied;
  }

  async function copyText(targetSelector, button) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const text = target.innerText || target.textContent || "";
    const original = button.textContent;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text.trim());
      } else if (!fallbackCopy(text.trim())) {
        throw new Error("Copy command failed");
      }
      button.textContent = "복사됨";
      button.classList.add("is-copied");
      window.setTimeout(() => {
        button.textContent = original;
        button.classList.remove("is-copied");
      }, 1600);
    } catch (error) {
      button.textContent = "복사 실패";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1600);
    }
  }

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      copyText(button.getAttribute("data-copy-target"), button);
    });
  });

  const searchInput = document.querySelector("[data-widget-search]");
  const widgetItems = Array.from(document.querySelectorAll("[data-widget-item]"));

  if (searchInput && widgetItems.length) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      widgetItems.forEach((item) => {
        const haystack = [
          item.getAttribute("data-title"),
          item.getAttribute("data-tags"),
          item.textContent
        ].join(" ").toLowerCase();

        item.hidden = query.length > 0 && !haystack.includes(query);
      });
    });
  }
})();
