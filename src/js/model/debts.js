// Importar arreglo
// const miArreglo = require('../data')
import { debtList } from '../data'

export async function getDebtList() {
  try {
    const result = await fetch('http://localhost:5000/debts')
    const data = await result.json()
    return data
  } catch(error) {
    console.error(error)
    alert('Ha ocurrido un problema') 
  }
}

// http://localhost:5000/debts/debtId
export async function getDebtById(debtId) {
  try {
    const result = await fetch(`http://localhost:5000/debts/${debtId}`)
    const data = await result.json()
    return data
  } catch(error) {
    console.error(error)
    alert('Ha ocurrido un problema')
  }
}

/**
 * Modificar esta funcion paraobtener el total de los elementos que vienen de la API
 */
export function getTotalAmount() {
  let sum = 0
  for (let i = 0; i < debtList.length; i++) {
    sum = sum + debtList[i].amount
  }
  return sum
}