import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {htmlToReact} from '../utils';
import Footer from '../components/Footer';

export default class Contact extends React.Component {
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
                      <form name="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact-form"
                        class="contact-form">
                        <p class="screen-reader-text">
                          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <p class="form-row">
                          <label class="form-label">Name *</label>
                          <input type="text" name="name" placeholder="Your name..." class="form-input"/>
                        </p>
                        <p class="form-row">
                          <label class="form-label">Email *</label>
                          <input type="email" name="email" placeholder="Your email address..." class="form-input"/>
                        </p>
                        <p class="form-row">
                          <label class="form-label">Message *</label>
                          <textarea name="message" placeholder="Your message..." class="form-textarea" rows="7" />
                        </p>
                        <input type="hidden" name="form-name" value="contactForm" />
                        <p class="form-row">
                          <button type="submit" class="button">Send Message</button>
                        </p>
                      </form>
                    </div>
                  </article>
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.frontmatter.img_path')} />
              </div>
            </Layout>
        );
    }
}
