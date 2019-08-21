import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {getPages, Link, safePrefix} from '../utils';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img')} />
              <div id="content" class="site-content">
                <main id="main" class="site-main inner">
                  <div class="post-feed">
                    {_.map(display_posts, (post, post_idx) => (
                    <article key={post_idx} class="post">
                      <header class="post-header">
                        <h2 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                        <div class="post-meta">
                          Published on <time class="published"
                            datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                      </header>
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <div class="post-content">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      </div>
                      <p class="read-more">
                        <Link class="read-more-link" to={safePrefix(_.get(post, 'url'))}>Keep reading <span class="icon-arrow-right" aria-hidden="true" /></Link>
                      </p>
                    </article>
                    ))}
                  </div>
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img')} />
              </div>
            </Layout>
        );
    }
}
