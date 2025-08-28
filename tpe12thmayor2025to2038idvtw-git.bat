cd "C:\Users\chbon\Documents\tpe12thmayor2025to2038idvtw_azure_devops_repos"
git init
git add .
git commit -m "20250829 v1"
git remote add origin https://chbondg@dev.azure.com/chbondg/tpe12thmayor2025to2038idvtw/_git/tpe12thmayor2025to2038idvtw.git
git checkout -b all
git push -u origin --all
pause
git pull origin main --rebase