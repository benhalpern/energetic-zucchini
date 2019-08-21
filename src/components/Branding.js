import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Branding extends React.Component {
    render() {
        return (
            <div class="site-branding">
              {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
              <p class="site-logo">
                <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))}
                    alt="Logo" /></Link>
              </p>
              }
              {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
              <h1 class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
               : 
              <p class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
              }
              {_.get(this.props, 'pageContext.site.siteMetadata.header.tagline') && 
              <p class="site-description">{_.get(this.props, 'pageContext.site.siteMetadata.header.tagline')}</p>
              }
            </div>
        );
    }
}
