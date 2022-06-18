import Start from './modules/Start.js';
import Keyboard from './modules/Keyboard.js';
import CachePanel from './modules/Panels/CachePanel.js';
import HistoryPanel from './modules/Panels/HistoryPanel.js';
import RoutesPanel from './modules/Panels/RoutesPanel.js';
import VariablesPanel from './modules/Panels/VariablesPanel.js';
import PackagesPanel from './modules/Panels/PackagesPanel.js';
import MailPanel from './modules/Panels/MailPanel.js';

document.addEventListener('DOMContentLoaded', () => {
  const toolbar = Start.init();
  toolbar.initialize();
  Keyboard.init(toolbar);

  // Init Panels
  CachePanel.init();
  RoutesPanel.init();
  HistoryPanel.onEvent(toolbar);
  VariablesPanel.onEvent(toolbar);
  PackagesPanel.onEvent();
  MailPanel.onEvent();
});
