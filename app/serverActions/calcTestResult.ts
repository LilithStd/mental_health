// app/tests/actions/calcTestResult.ts
'use server'

export async function calcTestResult(formData: FormData) {
  const answers = Object.fromEntries(formData)
console.log(answers)
  let total = 0
    
  for (const key in answers) {
    total += Number(answers[key])
  }

  if (total < 5) {
    return { result: 'LOW' }
  }

  if (total < 10) {
    return { result: 'MEDIUM' }
  }

  return { result: 'HIGH' }
}
