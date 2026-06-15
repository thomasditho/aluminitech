# Aluminitech

Plataforma moderna de doação e incentivo para projetos brasileiros de inovação em alumínio e tecnologia de alta performance. Desenvolvido com foco em segurança de ponta, performance excepcional e experiência de interface fluida.

---

## 🚀 Tecnologias Prontas para Produção e Ofuscação

Esta aplicação utiliza uma infraestrutura robusta, combinando performance cliente/servidor com segurança de nível militar contra vazamento de propriedade intelectual e engenharia reversa no frontend:

- **Frontend:** React 19 + TypeScript + Tailwind CSS (V4)
- **Servidor Independente:** Express (construído para escuta em alto tráfego com CJS Bundling)
- **Segurança de Código (Anti-Inspect & Anti-Clone):**
  - **Cloaker Nativo:** Proteção contra atalhos de desenvolvedor (F12, Ctrl/Cmd + Shift + I/J/C), cópias (`Ctrl+C`), recortes (`Ctrl+X`), e clique direito.
  - **Auto-Debugger Loop:** Desestabiliza ferramentas de inspeção do navegador que tentam interceptar a página em execução.
  - **Ofuscador de Produção:** Integrado na compilação do Vite via segurança polinomial e embaralhamento de strings criptográficas por meio de `javascript-obfuscator` pós-compilação. Não publica Source Maps.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js** instalado (v18 ou superior)
- Um gerenciador de pacotes como **npm** ou **yarn**

### Passo a Passo

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as credenciais e ambiente:**
   Crie ou edite o arquivo `.env` na raiz do projeto com as chaves necessárias da sua operação (exemplo: credenciais Stripe, etc.):
   ```env
   # .env
   GEMINI_API_KEY=sua_chave_ou_token_aqui
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação em `http://localhost:3000`.

---

## 📦 Compilação e Produção (Build)

Para realizar o empacotamento completo do código (efetuando a ofuscação dos artefatos JavaScript e gerando o servidor otimizado em `/dist/server.cjs`):

```bash
npm run build
```

Para rodar a versão de produção localmente após o build:

```bash
npm run start
```
