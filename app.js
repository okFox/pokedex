import Component from './Component.js';
import Header from './src/Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

    }

    renderHTML() {
        return `<div></div>`;
    }
//closes class App line
}


export default App;