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
`instance/fractus.sqlite3`. Crie uma conta no site para salvar o progresso; a API
emite um JWT de acesso com validade de 8 horas.

## Executar a versão compilada

```powershell
npm run build
py app.py
```

Abra `http://127.0.0.1:5000`. Em produção, hospede o Flask separadamente do GitHub Pages e configure
`FLASK_SECRET_KEY` e `JWT_SECRET_KEY` com valores aleatórios, secretos e
persistentes. Para chamadas entre domínios, configure `FRONTEND_ORIGIN` no Flask
com a origem do site (por exemplo, `https://cardosomi.github.io`) e
`VITE_API_URL` durante a compilação com a URL da API (por exemplo,
`https://api.exemplo.com`). Nunca coloque as chaves secretas no frontend.

Para gerar os arquivos do site publicado em `https://cardosomi.github.io/Fractus/`,
use `npm run build:pages` e publique a pasta `dist` no GitHub Pages. O comando
`npm run build` continua gerando a versão local servida pelo Flask.
