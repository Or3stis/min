/*global tabs addTab */

const addTabButton = document.getElementById('add-tab-button')

addTabButton.addEventListener('click', function (e) {
  const newTab = tabs.add({}, tabs.getIndex(tabs.getSelected()) + 1)
  addTab(newTab)
})
