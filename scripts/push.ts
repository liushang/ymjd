import fs from 'fs-extra'
import path from 'path'
import execa from 'execa'

import { getWorkspace } from '../rider/getWorkspace'

const changesetConfigPath = path.resolve(__dirname, '../.changeset/config.json')

const push = async () => {
  const MONOREPO = await getWorkspace()

  const appNameList: string[] = []

  MONOREPO.packages.forEach(submodule => {
    const isPravite = submodule.packageJson?.private
    if (isPravite) {
      appNameList.push(submodule.packageJson.name)
    }
  })

  const config = fs.readJsonSync(changesetConfigPath, { encoding: 'utf-8' })
  config.ignore = appNameList
  fs.writeJsonSync(changesetConfigPath, config, {
    encoding: 'utf-8',
    spaces: 2,
  })

  console.log(`refresh changeset ignore app name list over.`)

  await execa.command(`pnpm changeset`, { stdio: 'inherit' })
}

push()
