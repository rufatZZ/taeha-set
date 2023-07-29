declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "csstype" {
  interface Properties {
    // Add a CSS Custom Property
    "--bgImage-url"?: "black" | "white";

    // Allow namespaced CSS Custom Properties
    [index: `--theme-${string}`]: any;

    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;

    // ...or allow any other property
    [index: string]: any;
  }
}
