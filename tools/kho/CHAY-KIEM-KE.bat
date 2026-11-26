@echo off
chcp 65001 >nul
title Lemonmath - kiem ke TaiLieuToan
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0kiem-ke.ps1"
echo.
pause
