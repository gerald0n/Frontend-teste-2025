## Importante

- Os projetos serão analisados pela ordem de entrega.
- Candidatos que plagiarem serão desqualificados.
- Projetos que não seguirem as instruções de entrega não serão analisados.

## Instruções

1. Crie um novo projeto Next.js com TypeScript.
2. Utilize a origin `http://localhost:3024` para consumo dos dados da API.
3. Faça commits claros e semânticos.
4. Replique o layout presente no link fornecido [aqui](https://www.figma.com/design/5hZQc5whUDeK8VL40WUCKl/teste-tecnico?node-id=0-1&node-type=canvas&m=dev).
5. Desenvolva o layout com abordagem mobile-first.
6. Implemente duas rotas:
   - **Rota inicial com banner, listagem de cursos e favoritos.**
     - As informações de banner e listagem de cursos não podem ser mockadas.
   - **Rota para um curso específico usando slug.**
     - Cada rota de curso deve ter um banner e uma descrição dinâmicos baseados nos dados do curso (não usar dados mockados).
     - Na página do curso, implemente um botão flutuante que abre um modal para compartilhar o curso (API do WhatsApp - [https://api.whatsapp.com/send?text=](https://api.whatsapp.com/send?text=)).
     - A ação de favoritar deve salvar as informações no `localStorage` para serem exibidas na rota inicial.
     - Permita que o usuário desmarque um curso como favorito, removendo-o da lista de favoritos e do `localStorage`.
     - Redirecione para uma página 404 se a slug do curso não for válida.
7. Não utilizar bibliotecas de componentes pré-fabricados como, Material UI, Shadcn, etc.

## Bônus

- Usar styled-components.
- Testes.
- Faça o deploy da solução em uma hospedagem gratuita, como a Vercel, e adicione o link no README do projeto.
- Implemente novas funcionalidades, se achar pertinente.
- Grave um vídeo de até 5 minutos e adicione o link no README explicando a implementação e os desafios superados.

## Como entregar o projeto

1. Faça um fork deste repositório.
2. Após finalizar, crie uma pull request no repositório original com sua solução.

## Link do deploy

https://evob-iota.vercel.app/
