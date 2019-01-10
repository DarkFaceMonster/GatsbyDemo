import React from "react"
import exam1 from "../images/exam/s-exam1.png"
import exam2 from "../images/exam/s-exam2.png"
import exam3 from "../images/exam/s-exam3.png"
import exam4 from "../images/exam/s-exam4.png"
import exam5 from "../images/exam/s-exam5.png"
import exam6 from "../images/exam/s-exam6.png"
import exam7 from "../images/exam/s-exam7.png"
import exam8 from "../images/exam/s-exam8.png"
import { vP } from "../components/gutters"
import presets, { colors } from "../utils/presets"
import { rhythm, scale, options } from "../utils/typography"

const Companies = () => (
  <section css={styles.section}>
    <h1 css={styles.title}>重点客户案例</h1>
    <div css={styles.Description}>
      <p css={styles.futuraParagraph}>
        成功在多个行业落地应用、他们都在用
      </p>
    </div>
    <div>
      <img src={exam1} style={styles.exams} alt="" />
      <img src={exam2} style={styles.exams} alt="" />
      <img src={exam3} style={styles.exams} alt="" />
      <img src={exam4} style={styles.exams} alt="" />
      <img src={exam5} style={styles.exams} alt="" />
      <img src={exam6} style={styles.exams} alt="" />
      <img src={exam7} style={styles.exams} alt="" />
      <img src={exam8} alt="" />
    </div>
  </section>
)

const styles = {
  Description: {
    margin: `0 auto ${rhythm(2)}`,
    maxWidth: rhythm(20),
  },
  exams: {
    marginRight: '20px',
  },
  futuraParagraph: {
    fontFamily: options.headerFontFamily.join(`,`),
    marginBottom: 0,
  },
  section: {
    borderRadius: presets.radiusLg,
    borderTop: `1px solid ${colors.ui.light}`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flex: `1 1 100%`,
    fontFamily: options.headerFontFamily.join(`,`),
    marginTop: rhythm(1),
    padding: vP,
    textAlign: `center`,
    [presets.Tablet]: {
      marginTop: 0,
    },     
  },
  title: {
    ...scale(0.9),
    marginBottom: rhythm(1.5),
  },
}

export default Companies
