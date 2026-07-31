@echo off
cd /d "%~dp0"
set WRANGLER_LOG_PATH=.wrangler\wrangler.log
node.exe node_modules\vinext\dist\cli.js dev
