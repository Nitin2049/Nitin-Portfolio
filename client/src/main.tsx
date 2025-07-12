import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// PWA SW registration
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Show a prompt to user to refresh the app
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
});

createRoot(document.getElementById("root")!).render(<App />);
