

````markdown
# Meu Primeiro Aplicativo React

Bem-vindo ao meu primeiro projeto em React! Este é um aplicativo simples criado do zero com o objetivo de aprender e aplicar conceitos fundamentais do React utilizando Vite.

---

## Sobre o Projeto

Este projeto é um aplicativo React básico, desenvolvido para explorar os fundamentos da criação de interfaces com React e Vite. Ele inclui:

- Configuração inicial de um projeto React com Vite.
- Personalização de uma interface com uma mensagem de boas-vindas.
- Geração de uma versão otimizada para produção.
- Hospedagem da versão estática em uma instância AWS EC2.
- Uso de Git e GitHub para controle de versão e armazenamento do código.

O projeto foi pensado para ser simples, mas abrange etapas práticas e desafiadoras de desenvolvimento e deploy.

---

## Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário.
- **Vite:** Ferramenta de build rápida para projetos front-end.
- **Node.js e npm:** Ambiente e gerenciador de pacotes para execução e dependências.
- **AWS EC2:** Serviço de hospedagem para deploy da aplicação estática.
- **Git e GitHub:** Controle de versão e armazenamento do código-fonte.

---

## Etapas do Desenvolvimento

1. Inicializei o projeto React utilizando Vite.  
2. Personalizei a interface com uma mensagem inicial.  
3. Executei o comando `npm run build` para gerar os arquivos otimizados na pasta `dist`.  
4. Copiei a pasta `dist` para uma instância EC2 na AWS usando `scp`.  
5. Conectei-me à instância via SSH.  
6. Iniciei o servidor com `npx serve -s ./dist -l 3113` para disponibilizar a aplicação.  
7. Versionei o código com Git e publiquei no GitHub.

---

## Como Executar Localmente

Para rodar o projeto no seu computador, siga os passos abaixo:

```bash
git clone https://github.com/Painspablo/My-first-react-app.git
cd My-first-react-app
npm install
npm run dev
````

Abra o navegador e acesse:
`http://localhost:3000`

---

## Como Gerar a Versão de Produção

Para criar os arquivos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist`, prontos para hospedagem.

---

## Como Hospedar na AWS EC2

Para hospedar a aplicação em uma instância EC2, siga estas etapas:

1. Configure uma instância EC2 com o sistema operacional Ubuntu.

2. Copie a pasta `dist` para a instância usando o comando:

```bash
scp -r -i /caminho/para/sua-chave.pem dist ubuntu@SEU_IP_PUBLICO:/home/ubuntu/
```

3. Conecte-se à instância via SSH:

```bash
ssh -i /caminho/para/sua-chave.pem ubuntu@SEU_IP_PUBLICO
```

4. Instale o pacote `serve`, caso ainda não esteja instalado:

```bash
npm install -g serve
```

5. Navegue até o diretório onde a pasta `dist` foi copiada e inicie o servidor:

```bash
serve -s . -l 3113
```

6. Acesse a aplicação no navegador pelo endereço:

```
http://SEU_IP_PUBLICO:3113
```

---

## Contribuições

Este é um projeto de aprendizado, mas sugestões e melhorias são bem-vindas!
Sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório.

---

