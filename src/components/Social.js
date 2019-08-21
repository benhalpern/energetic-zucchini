import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Social extends React.Component {
    render() {
        return (
            <div class="social-links">
              {_.map(_.get(this.props, 'pageContext.site.data.social.links'), (link, link_idx) => (
              <Link key={link_idx} to={_.get(link, 'url')} target="_blank" rel="noopener"><span class={'fab ' + _.get(link, 'icon')}
                  aria-hidden="true"/><span class="screen-reader-text">{_.get(link, 'title')}</span></Link>
              ))}
            </div>
        );
    }
}
