import React from 'react';
import styles from './loading.module.css';
const loading = () => {
    return (
        <div className="flex items-center justify-center text-center">
            <div className={styles.loader}></div>
        </div>
    );
};

export default loading;
