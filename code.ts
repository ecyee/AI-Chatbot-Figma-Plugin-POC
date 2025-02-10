figma.showUI(__html__, {
    width: 400,
    height: 600,
    themeColors: true
  });
  
  // Function to handle UI messages
  async function handleMessage(msg: { type: string }) {
    if (msg.type === 'ui-ready') {
      console.log('UI is ready');
    }
  }
  
  // Handle messages from the UI
  figma.ui.onmessage = handleMessage;