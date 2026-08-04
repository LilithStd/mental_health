// app/tests/actions/calcTestResult.ts
'use server'

import { TEST_RESULT } from "@/translate/testPage/testPage"
import { LocaleType } from "@/app/types/types"

export async function calcTestResult(formData: FormData, locale: LocaleType) {
  const answers = Object.fromEntries(formData)
  let total = 0
    
  for (const key in answers) {
    total += Number(answers[key])
  }

  if (total <= 4 && total >= 0) {
    return { result: TEST_RESULT[locale].none }
  }

  if (total >= 5 && total <= 9) {
    return { result: TEST_RESULT[locale].mild }
  }

  if (total >= 10 && total <= 14) {
    return { result: TEST_RESULT[locale].moderate }
  }

  if (total >= 15 && total <= 19) {
    return { result: TEST_RESULT[locale].modereteSevere }
  }

  if (total >= 20 && total <= 27) {
    return { result: TEST_RESULT[locale].severe }
  }
}
