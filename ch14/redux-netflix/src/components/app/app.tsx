import React from 'react';
import { connect } from 'react-redux';
import styles from './app.css'

interface Props {
    children: JSX.Element[]
}

function App({ children }: Props): JSX.Element {
    return (
        <div className={styles.app}>
            {children}
        </div>
    );
}

export const ConnectedApp = connect()(App)