export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';
import './astro_63bc8839.mjs';
import 'clsx';
import 'html-escaper';

const page = () => import('./pages/index_3afbb2f0.mjs').then(n => n.i);

export { page };
