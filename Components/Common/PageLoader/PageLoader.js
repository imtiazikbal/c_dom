import React from 'react';
import style from "./pageLoader.module.css";
function PageLoader() {
    return (
        <div id={style.loading}>
            <div id={style.loading_center} >
                <div id={style.loading_center_absolute} >
                    <div className={style.object} id={style.object_one}></div>
                    <div className={style.object} id={style.object_two}></div>
                    <div className={style.object} id={style.object_three}></div>
                    <div className={style.object} id={style.object_four}></div>
                </div>
            </div>
        </div>

    )
}

export default PageLoader