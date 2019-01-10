import React from "react"
import SEO from "../components/seo"
import presets from "../utils/presets"
import Cards from "../components/cards"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Slider from "../components/slider"
import { colors } from "../utils/presets"
import { vP } from "../components/gutters"
import typography from "../utils/typography"
import Companies from "../components/companies"
import MastheadBg from "../components/masthead-bg"
import { rhythm, scale, options } from "../utils/typography"

const IndexPage = () => (
  <div css={{ position: `relative` }}>
    <MastheadBg />
    <Layout>
      <SEO title="Welcome" keywords={['gatsby', 'application', 'react']} />
      <h1 css={styles.slogan}>
        <div css={{ display: `block` }}>
          <span>
            Build
          </span>
          <Slider items={items} />
        </div>
        apps and websites with React
      </h1>
      {/* <Button large to="/sam-it/" overrideCSS={{marginTop: `0rem`, marginLeft: `7rem`, marginBottom: `5rem`}} style={{textDecoration: 'none',}}>
        Get Started →
      </Button> */}
      <div css={styles.contact}>
        <main css={styles.main}>
          <div css={styles.cards}>
            <Cards />
            <Companies />
          </div>
          <Footer />
        </main>
      </div>
    </Layout>
  </div>
)

const items = [
  `blazing fast`, `modern`, `beautiful`, `secure`,
]

const styles = {
  cards: {
    background: `#fff`,
    borderRadius: presets.radiusLg,
    boxShadow: `0 5px 20px rgba(25, 17, 34, 0.1)`,
    display: `flex`,
    flex: `0 1 auto`,
    flexWrap: `wrap`,
    transform: `translateZ(0)`,
    width: `100%`,
  },
  cardHeadLine: {
    ...scale(2 / 5),
    lineHeight: 1.2,
    marginTop: 0,
    [presets.Tablet]: {
      fontSize: scale(1 / 10).fontSize,
    },
    [presets.Desktop]: {
      fontSize: scale(3 / 10).fontSize,
    },
    [presets.VHd]: {
      fontSize: scale(5 / 10).fontSize,
    },
    [presets.VVHd]: {
      fontSize: scale(7 / 10).fontSize,
    },
  },
  contact: {
    flex: `0 0 100%`,
    maxWidth: `100%`,
    padding: rhythm(presets.gutters.default / 2),
    paddingBottom: 0,
    [presets.Hd]: { padding: vP, paddingTop: 50, paddingBottom: 0 },
  },
  futuraParagraph: {
    fontFamily: options.headerFontFamily.join(`,`),
    marginBottom: 0,
  },
  licence: {
    color: colors.ui.bright,
    fontFamily: typography.options.headerFontFamily.join(`,`),
    fontSize: `0.5rem`,
    marginLeft: `auto`,
    textAlign: `right`,
  },
  main:{
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
  },
  slogan: {
    ...scale(0.7),
    color: colors.skyDark,
    lineHeight: 1.2,
    margin: 110,
    marginBottom: `1.2em`,
    padding: 10,
    width: rhythm(10),
    [presets.Mobile]: {
      width: rhythm(10),
    },
    fontSize: scale(3 / 5).fontSize,
    "@media (min-width: 350px)": {
      fontSize: scale(4 / 5).fontSize,
    },
    "@media (min-width: 650px)": {
      fontSize: scale(1).fontSize,
      width: rhythm(12),
    },
    [presets.Tablet]: {
      fontSize: scale(1.1).fontSize,
      width: rhythm(14),
    },
    [presets.Hd]: {
      fontSize: scale(1.4).fontSize,
      width: rhythm(16),
    },
    [presets.VHd]: {
      fontSize: scale(1.5).fontSize,
      width: rhythm(18),
    },
    [presets.VVHd]: {
      fontSize: scale(1.6).fontSize,
      width: rhythm(20),
    },
  },
}

export default IndexPage
