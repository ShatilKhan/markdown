function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
# heading
## heading 2

[A link](www.facebook.com)

Inline \`<div></div>\`

block code

\`\`\`
let x=1;
\`\`\`


- list item 1
- list item 2

![React](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)


**Bold Text**

> Block Quotes!

`;


//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {

    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-4" }, "Convert Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Markdown:"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control p-2", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded p-2", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));