import React from 'react'
import { Link } from "gatsby"
import SEO from '../components/seo'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{marginTop: `100px`}}>
      <h1 style={{marginLeft: `220px`}}>NOT FOUND</h1>
      <h4 style={{marginLeft: `220px`}}>You just hit a route that doesn&#39;t exist... the sadness.</h4>
      <Link to="/" style={{textDecorationLine: 'none'}}>
        <h4 style={{marginLeft: `220px`}}>返回主页</h4>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
