import { modules } from './PNotifyCore';
import Component, { key, defaults } from './PNotifyDesktopComponent.html';

Component.key = key;

Component.defaults = defaults;

// Register the module with PNotify.
modules[key] = Component;