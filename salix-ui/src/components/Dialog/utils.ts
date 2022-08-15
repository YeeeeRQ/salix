import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";

export const openDialog = (options: any) => {
  const { title, content, ok, cancel } = options;

  const div = document.createElement("div");
  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible: boolean) => {
            if (!newVisible) {
              app.unmount();
              div.remove();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
