import Home from "../../theme_1/Login"
function myPluginOne(editor){
    editor.BlockManager.add('my-first-block', {
      label: 'HOME PAGE',
      content: "<h1>Hellooo</h1>",
    });
}
export default myPluginOne;