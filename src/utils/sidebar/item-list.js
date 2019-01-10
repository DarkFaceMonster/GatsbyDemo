import SAMSidebar from "../../data/sidebars/sam-links.yaml"
import NNMSidebar from "../../data/sidebars/nnm-links.yaml"
import AboutSidebar from "../../data/sidebars/about-links.yaml"
import DocsSidebar from "../../data/sidebars/document-links.yaml"
import StarterSidebar from "../../data/sidebars/starter-links.yaml"
import InfoSidebar from "../../data/sidebars/monitorInfo-links.yaml"

const createHash = link => {
  let index = -1
  if (link) index = link.indexOf(`#`)
  return index >= 0 ? link.substr(index + 1) : false
}

const extenditemList = itemList => {
  itemList.forEach(section => {
    if (section.items) extendItem(section.items, section.title)
  })
  return itemList
}

const extendItem = (items, parentTitle) => {
  items.forEach(item => {
    item.hash = createHash(item.link)
    item.parentTitle = parentTitle
    if (item.items) extendItem(item.items, item.title)
  })
}

const itemListSAM = extenditemList(SAMSidebar).map(item => {
  return { ...item, key: `sam` }
})

const itemListNNM = extenditemList(NNMSidebar).map(item => {
  return { ...item, key: `one` }
})

const itemListAbout = extenditemList(AboutSidebar).map(item => {
  return { ...item, key: `one` }
})

const itemListDocs = extenditemList(DocsSidebar).map(item => {
  return { ...item, key: `sam` }
})

const itemListStarter = extenditemList(StarterSidebar).map(item => {
  return { ...item, key: `one` }
})

const itemListInfo = extenditemList(InfoSidebar).map(item => {
  return { ...item, key: `sam` }
})

export { itemListSAM, itemListNNM, itemListAbout, itemListStarter, itemListInfo, itemListDocs, }
