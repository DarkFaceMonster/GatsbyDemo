import React from "react"
import styled from "@emotion/styled"
import typography from "../utils/typography"
import ARCode from "../images/footer/s-weixin.jpg"
import presets, { colors } from "../utils/presets"
import { Link } from "gatsby";

const Footer = () => (
  <>
  <div css={styles.footer}>
    <div css={styles.footerLink}>
      <SubTitle>公司动态</SubTitle>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20180328001.html">中科院成都公司借SITEVIEW ITOSS实现一体化IT运维</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20180108001.html">湖南省公安厅实施SITEVIEW ITOSS一体化IT运营支撑系统</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20171121001.html">游龙出席中国信息技术主管大会 创新助力大型企业IT业务群高可运营</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20170629001.html">会聊天的IT运维系统，SITEVIEW又领2017网管论坛北京主旋律</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20170515001.html">基于HTML5网页远程桌面，企业IT运维集中远程管理黑科技级大功能</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/siteview/home/news/news-20170111001.html">SITEVIEW ITOSS助淮水北调运营信息化系统健康稳定高可用</a></div>
      <div><a css={styles.more} href="http://www.siteview.com/sites/siteview/home/news.html">查看更多》</a></div>
    </div>
    <div css={styles.footerLink}>
      <SubTitle>产品推荐</SubTitle>
      <div><a css={styles.link} href="http://www.siteview.com/sites/itoss/home.html">SITEVIEW ITOSS 一体化网络监测与运维支撑系统</a></div>
      <div><Link css={styles.link} to="/sam-it/">SITEVIEW SAM 服务器与应用管理</Link></div>
      <div><Link css={styles.link} to="/nnm/">SITEVIEW NNM 网络设备管理</Link></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/itoss/home/itsm.html">SITEVIEW ITSM IT服务管理</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/itoss/home/deeplog.html">SITEVIEW Deeplog 海量日志分析系统</a></div>
      <div><a css={styles.link} href="http://www.siteview.com/sites/itoss/home/Screendisplay.html">SITEVIEW 多终端大屏展示</a></div>
    </div>
    <div css={styles.footerLink}>
      <SubTitle>关注公众号</SubTitle>
      <img src={ARCode} style={{padding: '0px 0rem 5rem',}} alt="WexinCode" />
    </div>
    <div css={styles.footerLink}>
      <SubTitle>联系我们</SubTitle>
      <div style={styles.info}>010－5165 5987</div>
      <div style={styles.info}>135 2083 0552（彭先生 , 微信同号）</div>
      <div style={styles.info}>contact@dragonflow.com </div>
      <div style={styles.info}>北京市海淀区苏州街16号神州数码大厦5层</div>
    </div>
  </div> 
  <div css={styles.licence}>
    <div>© 2019北京游龙网网络科技有限公司版权所有</div>
    <div>京ICP备14004049-1号</div>
  </div>
  </>
)

const SubTitle = styled(`h5`)`
  color: ${colors.ui.light};
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  margin-top: 2rem;
  margin-Right: 5rem;
  
  ${presets.Desktop} {
    margin-left: 0rem;
    margin-bottom: 1rem;
  }
`

const styles ={
  footer:{
      borderRadius: presets.radiusLg,
      display: `flex`,
      flex: `0 1 auto`,
      flexWrap: `wrap`,
      transform: `translateZ(0)`,
      width: `100%`,
  },
  footerLink: {
    color:colors.ui.light,
    float: "left",
    margin: "0 auto",
  },
  info: {
    color: `aliceBlue`, 
    fontFamily: typography.options.headerFontFamily.join(`,`),
    padding: '0px 0rem',
  },
  licence: {
      color: `aliceBlue`,
      fontFamily: typography.options.headerFontFamily.join(`,`),
      fontSize: `0.5rem`,
      marginLeft: `auto`,
      textAlign: `right`,
  },
  link: {
    color: `aliceBlue`, 
    fontFamily: typography.options.headerFontFamily.join(`,`),
    fontSize: `0.8rem`,
    textDecoration:"none",
  },
  more: {
    color: `aliceBlue`,
    fontSize: `0.5rem`,
    marginLeft: `auto`,
    textDecoration: `none`,
  },
}
export default Footer
