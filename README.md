# ProjectFono - Portal de Fonoaudiologia

Este é um projeto híbrido que combina uma aplicação moderna em **React + Vite** com um site institucional estático. O portal foi desenvolvido para a **Faculdade Ciências Médicas de Minas Gerais** (CMMG) como um projeto acadêmico focado na área de Fonoaudiologia.

## 🚀 Arquitetura do Projeto

O projeto utiliza uma arquitetura híbrida para permitir o desenvolvimento de funcionalidades modernas enquanto mantém um site institucional simples e rápido.

- **Frontend Moderno (App):** Localizado na pasta `src/`, desenvolvido com React, TypeScript e Tailwind CSS. É o ponto de entrada principal do projeto (`localhost:8080/`).
- **Site Institucional (Estático):** Localizado em `public/fono/`. É um site puro (HTML/CSS) acessível via a rota `/fono/index.html`. Ele serve como a base informativa sobre as áreas de atuação (Audição, Fala e Deglutição).

## 🛠️ Tecnologias Utilizadas

- **Vite:** Ferramenta de build e servidor de desenvolvimento ultra-rápido.
- **React 18:** Biblioteca para construção da interface do usuário.
- **TypeScript:** Superset do JavaScript para tipagem estática.
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
- **Shadcn UI:** Componentes de interface reutilizáveis e acessíveis.
- **FontAwesome:** Ícones para as redes sociais e contatos.

## 📁 Estrutura de Pastas

```text
ProjectFono/
├── public/
│   ├── fono/          # Site Institucional Estático (HTML/CSS)
│   │   ├── index.html # Home do site estático
│   │   └── styles.css # Estilos oficiais da faculdade
│   └── img/           # Ativos de imagem (Logos, etc.)
├── src/
│   ├── components/    # Componentes React (Shadcn UI)
│   ├── pages/         # Páginas do App React
│   ├── App.tsx        # Configuração de rotas e provedores
│   └── main.tsx       # Ponto de entrada do React
├── index.html         # Ponto de entrada do Vite (Raiz)
└── package.json       # Dependências e scripts
```

## 🔧 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   - App React: `http://localhost:8080/`
   - Site Estático: `http://localhost:8080/fono/index.html`

## 🎨 Cores Oficiais (CMMG)

O projeto segue a identidade visual oficial da instituição:
- **Principal:** `#00C6CC` (Destaques e Cards)
- **Escuro:** `#009799` (Cabeçalhos e Navegação)
- **Fundo:** Branco Puro (`#FFFFFF`)

## 📄 Licença

Este é um projeto acadêmico desenvolvido para a Faculdade Ciências Médicas de Minas Gerais.
