import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useWindowSize } from "@vueuse/core";

export const useAppStore = defineStore("app", () => {
  // 是否展開左邊側欄
  const isLeftSidebarOpen = ref(true);

  // 是否展開右邊側欄
  const isRightSidebarOpen = ref(false);

  const { width } = useWindowSize();

  watch(width, (newWidth) => {
    isLeftSidebarOpen.value = newWidth >= 1024;
    isRightSidebarOpen.value = newWidth >= 1024;
  }, { immediate: true });

  function toggleLeftSidebar() {
    isLeftSidebarOpen.value = !isLeftSidebarOpen.value;
  }

  function toggleRightSidebar() {
    isRightSidebarOpen.value = !isRightSidebarOpen.value;
  }

  return {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    toggleLeftSidebar,
    toggleRightSidebar,
  };
});
