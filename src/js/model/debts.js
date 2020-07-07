// Importar arreglo
// const miArreglo = require('../data')
import { debtList } from '../data'

export function getDebtList() {
  return debtList
}
// getTotalAmount
export function getTotalAmount() {
  let sum = 0
  for (let i = 0; i < debtList.length; i++) {
    sum = sum + debtList[i].amount
  }
  return sum
}