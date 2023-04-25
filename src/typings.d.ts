declare module '*.html';
declare module '*.css';
declare module '*.scss';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.jsx' {
  const content: any;
  export default content;
}

declare module '*.mdx' {
  let MDXComponent: any;
  export default MDXComponent;
}

declare module '*.md' {
  let content: string;
  export default content;
}