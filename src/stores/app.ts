import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";
import { useWindowSize } from "@vueuse/core";

export const useAppStore = defineStore("app", () => {
  // 是否展開左邊側欄
  const isLeftSidebarOpen = ref(true);

  // 是否展開右邊側欄
  const isRightSidebarOpen = ref(false);

  const isOverlayOpen = computed(() => {
    // 當左邊側欄或右邊側欄展開時，overlay 也應該展開
    // 但是如果寬度大於等於 1024px，則不展開 overlay
    return (isLeftSidebarOpen.value || isRightSidebarOpen.value) && width.value < 1024;
  });

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
    isOverlayOpen,
    toggleLeftSidebar,
    toggleRightSidebar,
  };
});
