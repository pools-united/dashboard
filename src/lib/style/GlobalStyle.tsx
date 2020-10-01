import { createGlobalStyle, css } from "styled-components/macro";

const MainRules = css`
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  /* Disable all default css for html elements */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    vertical-align: baseline;
  }
  /* TODO: Delete After */
  section {
    width: 600px;
    height: 1100px;
    border: 2px solid;
    margin: 2px;
  }

  a:active {
    text-decoration: none;
    outline: none;
    border: none;
    /* background-color:transparent; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a {
    text-decoration: none;
    outline: none;
    border: none;
    /* background-color:transparent; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a:visited {
    text-decoration: none;
    outline: none;
    border: none;
    /* background-color:transparent; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a:focus {
    text-decoration: none;
    outline: none;
    border: none;
    /* background-color:transparent; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${MainRules}



`;

export default GlobalStyle;
