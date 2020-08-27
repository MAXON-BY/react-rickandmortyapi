import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="page notfound-page">

            <section>
                <div className="container">
                    <div className="notfound">
                        <p className="notfound-404">404</p>
                        <p className="notfound-text">Page not found</p>

                        <Link to="/">Go Home Page</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NotFoundPage;