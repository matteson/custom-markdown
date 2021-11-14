export function customParser(classNames = {}) {
  const customMarker = new RegExp(`<CUSTOM_MARKDOWN></CUSTOM_MARKDOWN>`);

  function customTokenizer(eat, value, silent) {
    const keep = value.match(customMarker);
    if (!keep || keep.index !== 0) return;

    const add = eat('<CUSTOM_MARKDOWN></CUSTOM_MARKDOWN>');

    return add({
      type: 'customMarkdown',
      children: [],
      data: {},
    });
  }

  const Parser = this.Parser;

  // Append our custom block to the parser
  const blockTokenizers = Parser.prototype.blockTokenizers;
  const blockMethods = Parser.prototype.blockMethods;
  blockTokenizers.customBlock = customTokenizer;
  blockMethods.splice(blockMethods.indexOf('list') + 1, 0, 'customBlock');
}
