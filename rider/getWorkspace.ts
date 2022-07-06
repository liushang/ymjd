import path from 'path'
import { getPackages } from '@manypkg/get-packages'

export const getWorkspace = async () => {
  console.log('bere')
  const wk = await getPackages(path.resolve(__dirname, '../'))
  console.log(wk)
  return wk
}
