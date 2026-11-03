# Fractus

## Executar em desenvolvimento

Instale as dependências do frontend e do Flask:

```powershell
npm install
py -m pip install -r requirements.txt
```

Inicie o servidor Flask e o Vite em terminais separados:

```powershell
py app.py
npm run dev
```

Abra o endereço exibido pelo Vite. Durante o desenvolvimento, as chamadas `/api`
são encaminhadas ao Flask. O progresso fica no banco SQLite
`instance/fractus.sqlite3`; o navegador mantém apenas o cookie de sessão que
identifica o perfil anônimo.

## Executar a versão compilada

```powershell
npm run build
py app.py
```

Abra `http://127.0.0.1:5000`. Em produção, defina `FLASK_SECRET_KEY` com um
segredo aleatório e persistente antes de iniciar o Flask.
