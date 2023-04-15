// Core
import { ref } from "vue";
import { defineStore } from "pinia";
// Modules
import { links } from "@/assets/data/links";
// Types
import { ILink } from "@/types/ILink";
import { IUser } from "@/types/IUser";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const count = ref(0);
  const errorMsg = ref<Object | null>();
  const input = ref("Test");
  const language = ref({});
  const loading = ref(false);
  const userInfo = ref<IUser | null>();
  const authenticated = ref(false);

  // Methods
  const doIncrement = () => {
    count.value++;
  };

  const doDecrement = () => {
    count.value--;
  };

  const getLink = (value: string) => {
    return links.find((link) => link.type === value) as ILink;
  };

  // Return
  return {
    count,
    errorMsg,
    input,
    links,
    language,
    loading,
    userInfo,
    authenticated,
    doIncrement,
    doDecrement,
    getLink,
  };
});

// Export
export { useExamplePiniaStore };
