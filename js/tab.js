/*=============================================================================================================*/
const tabs = document.querySelectorAll("._tabs"),
  tabContents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("active");
    });
    target.classList.add("active");

    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
