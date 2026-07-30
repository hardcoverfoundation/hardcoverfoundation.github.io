#!/bin/bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESOURCE_DIR="$(cd "$REPO_DIR/.." && pwd)/project-resources"

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code is not installed or is not available in PATH."
  echo "Install/configure Claude Code, then rerun this script."
  exit 1
fi

if [ ! -d "$RESOURCE_DIR" ]; then
  echo "Project resources were not found at:"
  echo "  $RESOURCE_DIR"
  echo
  echo "Expected structure:"
  echo "  ~/Developer/hardcoverfoundation/"
  echo "    hardcoverfoundation.github.io/"
  echo "    project-resources/"
  exit 1
fi

cd "$REPO_DIR"
exec claude --add-dir "$RESOURCE_DIR"
