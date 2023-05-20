"use strict";
document.addEventListener("click", documentClick);
function documentClick(elem) {
    const targetItem = elem.target;
    if (targetItem.closest(".icon-menu")) document.documentElement.classList.toggle("menu-open");
}

//# sourceMappingURL=index.cea00a9b.js.map
