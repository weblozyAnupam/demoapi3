const Tabs = document.querySelectorAll(".Tab");
const TabsContent = document.querySelector(".TabsContent");
let widthOfTabsContent = TabsContent.offsetWidth;

window.addEventListener("resize", () => {
  widthOfTabsContent = TabsContent.offsetWidth;
});

Tabs.forEach((Tab, index) => {
  Tab.addEventListener("click", () => {
    Tabs.forEach((Tab) => Tab.classList.remove("active"));
    Tab.classList.add("active");
    TabsContent.style.transform = `translateX(-${
      widthOfTabsContent * index
    }px)`;
  });
});
