/* global tabs requestAnimationFrame getTabElement */

/* fades out tabs that are inactive */

const tabActivity = {
  minFadeAge: 330000,
  refresh: function () {
    requestAnimationFrame(function () {
      const tabSet = tabs.get()
      const selected = tabs.getSelected()
      const time = Date.now()

      tabSet.forEach(function (tab) {
        if (selected === tab.id) { // never fade the current tab
          getTabElement(tab.id).classList.remove('fade')
          return
        }
        if (time - tab.lastActivity > tabActivity.minFadeAge) { // the tab has been inactive for greater than minActivity, and it is not currently selected
          getTabElement(tab.id).classList.add('fade')
        } else {
          getTabElement(tab.id).classList.remove('fade')
        }
      })
    })
  },
  init: function () {
    setInterval(tabActivity.refresh, 7500)
  }
}
tabActivity.init()
