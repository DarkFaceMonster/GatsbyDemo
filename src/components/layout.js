import React from 'react'
import Header from "./header"
import PropTypes from 'prop-types'
import { LocaleProvider } from 'antd'
import presets from "../utils/presets"
import zhCN from 'antd/lib/locale-provider/zh_CN'
import PageWithSidebar from "../components/page-with-sidebar"

import './css/layout.css'


class Layout extends React.Component {
  render() {
    const isSidebarDisabled = this.props.isSidebarDisabled || !this.props.itemList
    const isHomepage = window.location.pathname === `/`
    return (
      <div className={isHomepage ? `is-homepage` : ``} css={styles.layout}>
          <Header pathname={window.location.pathname} />
          <div css={{
            paddingTop: presets.bannerHeight,
            paddingLeft: `env(safe-area-inset-left)`,
            paddingRight: `env(safe-area-inset-right)`,
            [presets.Tablet]: {
              margin: `0 auto`,
              paddingTop: isHomepage
                ? presets.bannerHeight
                : `calc(${presets.bannerHeight} + ${presets.headerHeight})`,
            },
          }}>
          <LocaleProvider locale={zhCN}>
            <PageWithSidebar
              disable={isSidebarDisabled}
              itemList={this.props.itemList}
              location={window.location}
              enableScrollSync={this.props.enableScrollSync}
              renderContent={() => this.props.children}
            />
          </LocaleProvider>
        </div>
      </div>
    )
  }
}

const styles = {
  layout: {
    margin: 'auto 0',
    padding: '0rem 0rem 0rem',
    paddingTop: 0,
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout