import React from 'react';

import {Link, safePrefix} from '../utils';

export default class HeaderAlt extends React.Component {
    render() {
        return (
            <header id="header-alt" class="site-header-alt">
              <nav id="single-navigation" class="site-navigation-alt" aria-label="Main Navigation">
                <Link class="home-link" to={safePrefix('/')}><span class="icon-arrow-left"
                    aria-hidden="true" /> All Articles</Link>
              </nav>
            </header>
        );
    }
}
