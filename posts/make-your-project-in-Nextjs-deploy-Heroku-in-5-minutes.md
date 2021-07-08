---
title: "Faça seu projeto em Next.js, deploy Heroku em 5 minutos"
date: "2021-07-07"
---

<p>Quando comecei meus estudos sobre deploy, tinha zero experiencia com produção. Como estudante de uma escola de desenvolvimento web, sempre tive o luxo de ter um cronogrma com tudo, que deveria estudar para me tornar um bom profissional da area. Mas sempre fui gulouso. hoje em dia eu já passei pelo modulo de deploy:<p>

<p>Embora a implantação possa parecer assustadora, não precisa ser.</p>

<p>Na verdade, este tutorial irá provar como você pode implementar seu aplicativo Next.js com facilidade e rapidez no Heroku.</p>

#### Pré-requisitos para este tutorial:

- **Git**
- **Heroku** _Se você não tiver uma, crie uma conta <a href="https://signup.heroku.com/"> aqui</a>_
- **Heroku CLI** _Se você não tiver configurado, <a href="https://devcenter.heroku.com/articles/heroku-cli">aqui</a>_
- **Node.js** _No momento da escrita, Next.js requer Node.js 12 ou posterior. Para obter a nova versão, <a href="https://nodejs.org/en/">aqui</a>_

### (Opcional)

<p>Crie um aplicativo Next.js se ainda não tiver um
Estou assumindo que, se você está lendo este post, provavelmente tem um em execução no seu host local. Mas, para ter 100% de certeza, vou mostrar como fazer uma configuração.</p>

```lang-js
npx create-next-app
```

#### OR

```lang-js
yarn create next-app
```

<p>Passe pela configuração da criação e quando terminar, você pode tentar iniciar o servidor de desenvolvimento.</p>

```lang-js
npm run dev
```

#### OR

```lang-js
yarn dev
```

### Etapa 1.

**Atualize seu package.json**

<p>O Heroku executa seus aplicativos em contêineres Linux chamados de dynos . Quando o Heroku executa um dinamômetro da web, ele define uma variável chamada $PORT. Para receber solicitações de entrada, você precisa se conectar a esta porta.</p>

<p>Para fazer isso, vá para o package.json de nível raiz e atualize o script de inicialização:</p>

```lang-js
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start -p $PORT"
}
```

<p>Adicione o -p $PORT para uma ligação bem-sucedida<p/>

_Dica: para mais informações sobre os diferentes tipos de dynos e como funcionam, <a href="https://devcenter.heroku.com/articles/dynos">aqui está a documentação do Heroku</a>._

### Etapa 2.

<p>Confirme seu código com git
init, usaremos o git para enviar nosso código ao Heroku. É por isso que você deve transformar seu aplicativo em um repositório git.</p>

```lang-js
git init
git add .
git commit -m "Initial commit"
```

### Etapa 3.

<p>Crie um aplicativo Heroku
Você precisa estar logado na CLI do Heroku para fazer isso ( você pode fazer isso com o comando heroku login ). Assim que estiver, você pode seguir:</p>

```lang-js
heroku create $APP_NAME
```

<small>Por exemplo, _heroku craete my-super-duper-amazing-app_ ( apenas uma ideia; )</small>

### Etapa 4.

<p>Envie seu código para o aplicativo Heroku</p>
<p>Com seu código confirmado e seu aplicativo Heroku criado, agora você está pronto para enviar este código para seu aplicativo.</p>

```lang-js
git push heroku master
```

**Dica:** <p>Se você estiver em um branch diferente do master (digamos, principal ou de produção), você pode enviar seu código da seguinte forma:</p>

```lang-js
git push heroku [your branch name]:master
```

<smaill>Por exemplo, _git push heroku production: master_

<p>Depois de concluída a implantação, você pode acessar seu aplicativo em https: // [APP_NAME].herokuapp.com/.
</p></small>

<p>Yahoo!! Pronto!!</p>

## Possíveis Erros

#### 1. Erro R10 ( tempo limite de inicialização ) ->

> O processo da Web falhou ao vincular a $PORT dentro de 60 segundos após o lançamento.

> Você confirmou seu código, enviou-o para seu aplicativo Heroku, abriu uma guia para visualizar seu novo aplicativo brilhante e ... nada carrega. Pior, você recebe uma mensagem informando que ocorreu um erro.

<p>Primeiro, execute este comando para ver seus logs:</p>

```lang-js
`heroku logs --tail`
```

<p>E, bam!</p>

```lang-js
Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
```

<p>Não entre em pânico. O que provavelmente aconteceu é que você se esqueceu de atualizar seu **package.json**. Volte para esse arquivo e certifique-se de que seu script de inicialização possui:</p>

```lang-js
"scripts": {
  ...
  "start": "next start -p $PORT"
}
```

#### 2. Nenhum cache de construção encontrado. Configure o cache de construção para reconstruções mais rápidas

> Você pode ver isso quando enviar seu código ao Heroku e seu aplicativo estiver sendo compilado. Não é um erro, mas um aviso. Isso não prejudicará seu projeto, mas resultará em compilações mais lentas.

> Para obter mais informações, você pode ler a documentação do Next.js sobre o assunto .

<p>Para corrigir isso, vá para o seu package.json e adicione:</p>

```lang-js
"cacheDirectories": [".next/cache"]
```

<p>Em seu package.json
Dicas e truques após a implantação
Depois de concluir a implantação, aqui está uma lista de coisas que você pode querer configurar para um bom funcionamento de seu aplicativo.</p>

## Defina suas variáveis ​​de ambiente no Heroku

<p>Você tem duas maneiras de definir as variáveis ​​de ambiente no Heroku.</p>

### 1. Por meio do terminal

<p>Você pode ver primeiro todas as suas variáveis:</p>

```lang-js
heroku config

#If you just created your app, the result will probably be blank
```

<p>Defina uma nova variável. Isso irá reiniciar seu aplicativo também.</p>

```lang-js
heroku config:set FOO=bar
```

<p>Remova uma variável</p>

```lang-js
heroku config:unset FOO
```

### 2. Por meio do painel

<p>Outra maneira de adicionar / editar / remover variáveis ​​de ambiente é por meio do painel.</p>

<p>Acesse https://dashboard.heroku.com/apps apps e selecione seu aplicativo. Navegue até Configurações. Em Config Vars, você poderá fazer todas as alterações necessárias.</p>

### Configurando variáveis ​​de ambiente no Heroku

<p>Em seu painel e na guia Configurações.
Implantação automatizada
Se você tem uma conta no Github, pode estar interessado no recurso de implantação automatizada do Heroku. Isso significa que toda vez que você enviar suas alterações para um branch específico, digamos produção, essas alterações serão automaticamente enviadas para seu aplicativo Heroku.</p>

<p>Para fazer isso, vá para o seu painel e selecione seu aplicativo. Na guia Deploy , procure o método Deployment.</p>

## Implantação automatizada no Heroku

<p>Se você tem uma conta no Github, pode estar interessado no recurso de implantação automatizada do Heroku. Isso significa que toda vez que você enviar suas alterações para um branch específico, digamos produção, essas alterações serão automaticamente enviadas para seu aplicativo Heroku.</p>

<p>A partir daí, você pode conectar sua conta Github. Feito isso, você pode selecionar um repositório e um branch.</p>

<p>Para fazer isso, vá para o seu painel e selecione seu aplicativo. Na guia Implementar, procure Método de implementação.</p>

<br/>

<p>Se você gostou deste artigo, venha me seguir no <a href="https://www.linkedin.com/in/edibertooliveira">Linkedin</a></p>
