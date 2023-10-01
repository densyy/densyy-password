# Densyy - Password

1. Instalação
```
pnpm add densyy-password
```

2. Utilização
```
/* ---- Requires ---- */

const helperPassword = require('densyy-password')

/* ---- Exemplos ---- */

const key = process.env.BCRYPT_KEY
const senha = '123456798'

const senhaCriptada = await helperPassword.encrypt(senha, key)
const senhaOk = await helperPassword.check(senha, senhaCriptada, key)
```
