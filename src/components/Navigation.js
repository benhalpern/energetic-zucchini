import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Social from './Social';

export default class Navigation extends React.Component {
    render() {
        return (
            (_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && <React.Fragment>
            <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
              <div class="site-nav-wrap">
                <div class="site-nav-inside">
                  <ul class="menu">
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                    <li key={item_idx} class={'menu-item ' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                      <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                    </li>
                    ))}
                  </ul>
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.has_social') && 
                  <Social {...this.props} />
                  }
                </div>
              </div>
            </nav>
            <button id="menu-toggle" class="menu-toggle"><span class="screen-reader-text">Menu</span><span class="icon-menu"
                aria-hidden="true" /></button>
            </React.Fragment>
        );
    }
}
