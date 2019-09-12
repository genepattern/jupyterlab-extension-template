// Import the CSS file
require('../style/index.css');

// Import any JupyterLab of Phosphor objects you need, like below
import { ILayoutRestorer } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
import { Message } from '@phosphor/messaging';
import { Widget } from '@phosphor/widgets';

/**
 * Used to set up the extension when it is loaded
 */
function activate(app, palette, restorer) {
    console.log('blank-extension is activated!');
    // TODO: Implement initilization code here

    // Add an application command
    const command = 'blankextension:open';
    app.commands.addCommand(command, {
        label: 'Blank Extension',
        execute: () => {
            console.log('Running the open command');
            // TODO: Implement code for when you open the extension in the command palette
        }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: 'Example' });
}

// The extension object must be this file's main export
export default [{
  id: 'blank-extension',                        // Unique ID for the extension
  autoStart: true,                              // Whether to load the extension on launch
  requires: [ICommandPalette, ILayoutRestorer], // Required JupyterLab objects are passed to activate() function
  activate: activate                            // Function to call when the extension is loaded
}];