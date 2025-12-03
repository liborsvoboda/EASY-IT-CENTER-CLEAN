@ECHO OFF
REM docfx init -o InfoWeb
REM docfx .\docfx.json
REM docfx build .\docfx.json

REM CopyTemplate
rmdir /s /q "E:\Projekty\zEasy\EASY-IT-CENTER\InfoWeb"
xcopy "E:\Projekty\zEasy\EASY-IT-CENTER\EASY-DATA\EICdocfx\*.*" "E:\Projekty\zEasy\EASY-IT-CENTER\" /h /i /c /k /e /r /y

docfx metadata .\docfx.json

for /d %%a in ("E:\Projekty\zEasy\EASY-IT-CENTER\InfoWeb\EASY*") do rmdir /s /q "%%a"

docfx build .\docfx.json --serve


