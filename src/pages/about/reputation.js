import React from "react"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import typography from "../../utils/typography"
import { itemListAbout } from "../../utils/sidebar/item-list"

const WantPage = () => (
    <Layout location={window.location} itemList={itemListAbout}>
        <SEO title="About" />
        <p>hello 33</p>
        <div css={styles.footer}>
            <Footer />
        </div>
    </Layout>
)

const styles = {
    footer: {
        background: `dimGray`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingTop: 0,
        paddingBottom: 0,
    }
}

export default WantPage