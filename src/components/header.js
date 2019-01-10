import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import colors from '../utils/colors'
import presets from "../utils/presets"
import Icon from "../images/logo/gatsby-icon.svg"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"
import typography, { rhythm, options, scale } from "../utils/typography"

const navItemTopOffset = `1.8rem`

const assignActiveStyles = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { style: styles.navItem.active } : {}
  
const NavItem = ({ linkTo, title, children }) => (
  <li css={styles.li}>
    <Link to={linkTo} getProps={assignActiveStyles} css={styles.navItem} title={title}>
      {children}
    </Link>
  </li>
)

const Header = ({ pathname }) => {
  const isHomepage = pathname === '/'
  return (
    <header css={{
      backgroundColor: isHomepage ? `transparent` : `rgba(255,255,255,0.975)`,
      height: presets.headerHeight,
      left: 0,
      position: isHomepage ? `` : `relative`,
      right: 0,
      top: isHomepage
        ? `calc(${presets.bannerHeight} + ${rhythm(
            options.blockMarginBottom
          )})`
        : presets.bannerHeight,
      zIndex: 2,
      "&:after": {
        content: `''`,
        position: `absolute`,
        bottom: 0,
        left: 0,
        right: 0,
        width: `100%`,
        height: 1,
        zIndex: -1,
        background: isHomepage ? `transparent` : colors.ui.light,
      },
      [presets.Tablet]: {
        position: isHomepage ? `` : `fixed`,
      },
      paddingLeft: `env(safe-area-inset-left)`,
      paddingRight: `env(safe-area-inset-right)`,
    }}>
      <div 
        css={{
          ...styles.containerInner,
          ...(isHomepage
            ? {
                paddingLeft: vP,
                paddingRight: vP,
                [presets.Hd]: {
                  paddingLeft: vPHd,
                  paddingRight: vPHd,
                },
                [presets.VHd]: {
                  paddingLeft: vPVHd,
                  paddingRight: vPVHd,
                },
                [presets.VVHd]: {
                  paddingLeft: vPVVHd,
                  paddingRight: vPVVHd,
                },
              }
            : {}),
          }}>
        <Link to="/" css={styles.logoLink}>
          <img src={Icon} css={styles.logo} alt="" aria-hidden="true" />
        </Link>
        <nav
          className="navigation"
          aria-label="Primary Navigation"
          css={styles.navContainer}
        >
          <ul css={styles.ulContainer}>
            <NavItem linkTo="/404/" title="演示DEMO">演示DEMO</NavItem>
            <NavItem linkTo="/404/" title="技术亮点">技术亮点</NavItem>
            <NavItem linkTo="/404/" title="用户案例">用户案例</NavItem>
            <NavItem linkTo="/docs/" title="文档中心">文档中心</NavItem>
            <NavItem linkTo="/404/" title="OEM合作">OEM合作</NavItem>
            <NavItem linkTo="/404/" title="报价体系">报价体系</NavItem>
            <NavItem linkTo="/about/" title="关于游龙">关于游龙</NavItem>
          </ul>
        </nav>
        <div css={styles.markDown}>
          <Link
            to="/quick-start/"
            title="快速上手"
            css={{
              color: isHomepage ? colors.ui.light : colors.gatsbyDarker,
              float: 'right',
              marginBottom: `32.5px`,
              marginRight: '30px',
              textDecoration: 'none',
              "&:hover": {
                color: isHomepage ? colors.skyLight : `#1890FF`,
              },
            }}
          >
            <b>快速上手</b>
          </Link>
          <a
            href="http://www.siteview.com/sites/siteview/home/download.html"
            title="软件下载"
            css={{
              color: isHomepage ? colors.ui.light : colors.gatsbyDarker,
              float: 'right',
              marginBottom: `32.5px`,
              marginRight: '30px',
              textDecoration: 'none',
              "&:hover": {
                color: isHomepage ? colors.skyLight : `#1890FF`,
              },
            }}
          >
            <b>软件下载</b>
          </a>
        </div>
      </div>
    </header>
)}

const styles = {
  backGround: {
    background: '',
    marginBottom: '0rem',
    height: presets.headerHeight,
  },
  containerInner: {
    alignItems: `center`,
    display: `flex`,
    fontFamily: typography.options.headerFontFamily.join(`,`),
    height: `100%`,
    margin: `0 auto`,
    paddingLeft: rhythm(3 / 4),
    paddingRight: rhythm(3 / 4),
    width: `100%`,
  },
  href: {
    color: 'black',
    marginRight: '10px',
    textDecoration: 'none',
  },
  logo: {
    height: 28,
    margin: 0,
    [presets.Tablet]: {
      height: `2.33rem`,
    },
  },
  logoLink: {
    float: 'left',
    marginRight: '30px',
    minWidth: 130,
    textDecoration: 'none',
  },
  markDown: {
    alignSelf: `flex-end`,
    display: `flex`,
    marginLeft: `auto`,
  },
  navContainer: {
    display: `none`,
    [presets.Tablet]: {
      alignSelf: `flex-end`,
      display: `flex`,
    },
  },
  navItem: {
    ...scale(-1 / 3),
    borderBottom: `0.125rem solid transparent`,
    color: `inherit`,
    display: `block`,
    letterSpacing: `0.03em`,
    marginRight: '10px',
    WebkitFontSmoothing: `antialiased`,
    lineHeight: `calc(${presets.headerHeight} - ${navItemTopOffset})`,
    position: `relative`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    top: 0,
    transition: `color ${presets.animation.speedDefault} ${
      presets.animation.curveDefault
    }`,
    zIndex: 1,
    active: {
      color: colors.skyDark,
    },
  },
  socialContainer: {
    float: 'left',
    marginRight: '30px',
    textDecoration: 'none',
  },
  ulContainer: {
    display: `none`,
    [presets.Tablet]: {
      alignSelf: `flex-end`,
      display: `flex`,
      flexGrow: 1,
      margin: 0,
      marginLeft: rhythm(1 / 4),
      listStyle: `none`,
      maskImage: `linear-gradient(to right, transparent, white ${rhythm(
        1 / 8
      )}, white 98%, transparent)`,
      overflowX: `auto`,
    },
  },
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
