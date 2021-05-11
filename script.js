const exampleText = `# Welcome to this Markdown Previewer!

## This is a sub-header...
### this is a 3rd level header, and here\'s some other cool stuff:

Here\'s some code, \`<div></div>\`, between two backticks.

\`\`\`
// this is multi-line code:

function multiLineExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

By using the stars you can make text **bold**
Or use underscores for _italic_.
You can even do **_both!_**
And use tildes for ~~crossing stuff out~~.

You can also make [links](https://www.freecodecamp.com), and
> Block Quotes!

It is even possible to create tables:

Header 1 | Header 2 | Another Header?
------------ | ------------- | -------------
Some content | more content | more....
And here. | Okay. | I think you get it.

- And then there are lists.
  - You can bullet them.
     - With different indentation levels.
        - That look like this.


1. It is easy to make numbered lists.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Image from Lorem Picsum](https://picsum.photos/40/60)`;

class MdPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: exampleText };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }
  render() {
    const markerlib = marked(this.state.markdown, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-md-6" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", name: "editor", style: { minWidth: '100%' }, rows: "45", value: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { class: "col-md-6" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: markerlib } }))));



  }}


function App() {
  ReactDOM.render( /*#__PURE__*/React.createElement(MdPreview, null), document.getElementById('root'));
}

App();