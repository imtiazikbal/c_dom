import Link from 'next/link';
import React from 'react';


// Css
import style from './tiny-footer.module.css';

const TinyFooter = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <>

            {/* Tiny Footer */}
            <div className={style.tinyFooter} id="tinyFooter">

                <div className={style.d_flex}>
                    <p> &copy; {year} All Rights Reserved </p>
                    <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>
                </div>

            </div>

        </>

    )

}

export default TinyFooter
