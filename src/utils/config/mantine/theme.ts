import s from "./theme.module.scss";
import { createTheme, Input } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    Input: Input.extend({
      classNames: {
        input: s["inputInput"],
        section: s["inputSection"],
      },
    })
    // Select: Select.extend({
    //     classNames: {
    //         root: s["selectRoot"],
    //         wrapper: s["selectWrapper"],
    //         dropdown: s["selectDropdown"],
    //         options: s["selectOptions"],
    //         option: s["selectOption"],
    //         input: s["selectInput"],
    //         label: s["selectLabel"],
    //     },
    // }),
  },
});
