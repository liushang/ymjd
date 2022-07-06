
# 安装预依赖脚本

set -e

echo "===== 开始打包通用包 ====="

TEMPLATE_CLI_DIR=${CODE_ROOT}/libs/template-cli

# [without marin]: 存在才去构建依赖，否则走外部 bnpm
if [[ -d ${TEMPLATE_CLI_DIR} ]] || [[ $1 == "--force" ]]; then
  if [ ! -n "${CI}" ]; then
    echo "[deps] use pnpm build deps..."
    # 本地开发的时候，走 pnpm 构建即可，并且优化了 source map, 如果不这么做会点不到代码里
    pnpm -r --filter ./libs run build:local
  else
    echo "[deps] use turbo build deps..."
    # 走 turbo 构建 with cache
    pnpm turbo run build --scope="@bilibili/marin-config-wp5" --no-deps --include-dependencies
  fi
else
  echo "===== 这个场景你不需要任何通用包 ====="
fi


echo "===== 通用包构建完毕 ====="
