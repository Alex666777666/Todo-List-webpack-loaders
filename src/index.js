import { initTodoListHandlers } from './list/todoList.js'
import { renderTasks } from './list/renderer.js'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  renderTasks()
  initTodoListHandlers()
})

const onStorageChange = e => {
  console.log(e)
  if (e.key !== 'tasksList') {
    return null
  }
  renderTasks()
}

window.addEventListener('storage', onStorageChange)
