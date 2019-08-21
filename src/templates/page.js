import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {htmlToReact} from '../utils';
import Footer from '../components/Footer';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.frontmatter.img_path')} />
              <div id="content" class="site-content">
                <main id="main" class="site-main inner">
                  <article class="post page post-full">
                    <header class="post-header">
                      <h1 class="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div class="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                    <div class="post-content">
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                  </article>
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.frontmatter.img_path')} />
              </div>
            </Layout>
        );
    }
}
