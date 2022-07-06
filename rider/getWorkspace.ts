import path from 'path'
import { getPackages } from '@manypkg/get-packages'

export const getWorkspace = async () => {
  const wk = await getPackages(path.resolve(__dirname, '../'))
  return wk
}
