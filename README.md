# projeto-voluntario-ong
Prova Leonardo - ADS UniCesumar Londrina

# Plataforma Voluntária

Acesse o projeto online: [https://zaaanca.github.io/projeto-voluntario-ong/](https://zaaanca.github.io/projeto-voluntario-ong/)

## Sobre o Projeto
A Plataforma Voluntária é uma aplicação web desenvolvida para conectar pessoas dispostas a ajudar com ONGs e instituições que precisam de apoio em diversas áreas, como educação, saúde, meio ambiente, doações e muito mais. O objetivo é facilitar o encontro entre voluntários e causas reais, promovendo impacto social positivo de forma simples e acessível.

## Funcionalidades
- **Cadastro de Necessidades:** Instituições podem cadastrar suas demandas detalhando o tipo de ajuda, localização, contato e descrição.
- **Busca e Filtros:** Voluntários podem buscar oportunidades por título, descrição ou filtrar por tipo de necessidade.
- **Listagem Dinâmica:** Todas as necessidades cadastradas ficam disponíveis em uma grade responsiva, facilitando a visualização e o contato.
- **Preenchimento Automático de Endereço:** Ao informar o CEP, o sistema busca automaticamente rua, bairro, cidade e estado via ViaCEP.
- **Persistência Local:** As necessidades são salvas no navegador do usuário (localStorage), garantindo que os dados não se percam ao recarregar a página.
- **Design Responsivo:** Interface adaptada para desktop, tablet e celular, com navegação intuitiva e visual moderno.

## Como Usar
1. **Acesse a plataforma:** [https://zaaanca.github.io/projeto-voluntario-ong/](https://zaaanca.github.io/projeto-voluntario-ong/)
2. **Ver oportunidades:** Clique em "Ver Necessidades" para visualizar todas as demandas cadastradas. Use a busca e os filtros para encontrar oportunidades do seu interesse.
3. **Cadastrar necessidade:** Se você representa uma ONG ou instituição, clique em "Cadastrar Necessidade" e preencha o formulário. O endereço é preenchido automaticamente pelo CEP.
4. **Contato:** Entre em contato diretamente com a instituição pelo e-mail ou telefone informado na necessidade.

## Estrutura do Projeto
```
projeto-voluntario-ong/
├── index.html                # Página inicial com apresentação e navegação
├── cadastrar.html            # Formulário para cadastro de necessidades
├── necessidades.html         # Listagem e busca de necessidades
├── css/
│   └── style.css             # Estilos e responsividade
├── js/
│   └── app.js                # Lógica de cadastro, busca, filtros e renderização
└── README.md                 # Documentação do projeto
```

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- [ViaCEP API](https://viacep.com.br/) para busca de endereço

## Objetivo Social
A plataforma foi criada para facilitar o engajamento social, tornando mais fácil para voluntários encontrarem causas e para ONGs divulgarem suas necessidades. O projeto é totalmente gratuito, sem fins lucrativos e pode ser adaptado para diferentes realidades e cidades.

---
