import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import ActiveMarkdownTools from './MarkdownEditor';

import '../style/index.css';
import { INotebookTools } from '@jupyterlab/notebook';
function activateMarkdownTest(app: JupyterFrontEnd, nbTools: INotebookTools) {
  nbTools.addItem({tool: new ActiveMarkdownTools(app)});
  
  console.log("ayy");
}

/**
 * Initialization data for the wyswiwyg-editor extension.
 */
const markdownTest: JupyterFrontEndPlugin<void> = {
  id: 'test-markdown',
  autoStart: true,
  requires: [INotebookTools],
  activate: activateMarkdownTest
};


export default markdownTest;
