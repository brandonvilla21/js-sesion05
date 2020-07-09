import {getDebtList, getTotalAmount, getDebtById} from '../model/debts'
import { generateTemplate } from '../view/debts'

export async function fillDebtList() {
  // Obtener el div que contiene la lista
  const debtListElement = document.getElementById('debt-list')
  // 1. Obtener la lista de deudas (debtList)
  const debtList = await getDebtList()
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

 /**
  * Agregar la funcionalidad para cuando el input sea vacio
  * enotonces nos muestre la lista con todos los elementos de nuvo
  * 
  * Verificar si el input esta vacio
  * Si esta vacio => Devolver la lista completa
  * Si no esta vacio => Devolver el unico elemento por ID
  */
export function searchDebt() {
  const element = document.getElementById('search-form')
  const input = document.getElementById('debt-id')
  const debtListElement = document.getElementById('debt-list')
  
  element.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
      const debtObject = await getDebtById(input.value) // { amount: .., user: {}, ... }
      const template = generateTemplate(debtObject.amount, debtObject.user.name) // <a> ... </a>
      debtListElement.innerHTML = template
    } catch (error) {
      console.error(error)
    }
  })

}

/**
 * Obtener el total correcto de los elementos que provienen de la API
 */
export function fillTotalAmount() {
  // Obtener el elemento del DOM sobre el que vamos a agregar la informacion
  const totalElement = document.getElementById('total-amount')
  // Obtener la informacion el total
  const total = getTotalAmount()
  // Enviar la informacion al DOM
  totalElement.textContent = total
}