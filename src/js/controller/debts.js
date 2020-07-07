import {getDebtList} from '../model/debts'
import { generateTemplate } from '../view/debts'

export function fillDebtList() {
  // Obtener el div que contiene la lista
  const debtListElement = document.getElementById('debt-list')
  // 1. Obtener la lista de deudas (debtList)
  const debtList = getDebtList()
  // 2. Generar el template por cada uno de los elementos en la lista
  const templateList = []
  for(let i = 0; i < debtList.length; i++) {
    const debt = debtList[i]
    const template = generateTemplate(debt.amount, debt.user.name)
    templateList.push(template)
  }
  console.log(templateList)
  // 3. Mostrarlos (agregandolos al DOM)
  debtListElement.innerHTML = templateList.join('\n')

}


export function fillTotalAmount() {
  // Obtener el elemento del DOM sobre el que vamos a agregar la informacion

  // Obtener la informacion el total

  // Enviar la informacion al DOM
}