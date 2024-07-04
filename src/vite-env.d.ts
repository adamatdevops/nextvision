/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'react';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}