import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-rst extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-rst',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-rst is activated!');
  }
};

export default extension;
