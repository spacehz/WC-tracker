@echo off
title World Cup Watch - local server
cd /d "%~dp0"
echo ================================================
echo   Starting World Cup Watch...
echo   When you see "Ready on http://127.0.0.1:8788"
echo   open that address in your browser.
echo   Keep THIS window open while using the site.
echo   Press Ctrl+C here to stop the server.
echo ================================================
echo.
npx --yes wrangler@latest pages dev . --port 8788
pause
