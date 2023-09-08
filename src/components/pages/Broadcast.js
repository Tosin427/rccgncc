import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/broadcast/Content';

const pagelocation = "Broadcast";

class Broadcast extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Martalaa - Mega Church & Shop - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <footer className="sigma_footer footer-2 sigma_footer-dark">
                    <Footer />
                </footer>
            </Fragment>
        );
    }
}

export default Broadcast;