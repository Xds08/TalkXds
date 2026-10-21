# TalkXds — T.X

Protótipo web de chat com identidade visual vermelha, branca e azul, brilho neon vermelho, cadastro/login por e-mail e senha, OAuth pelo GitHub e mensagens privadas entre usuários autenticados.

## 1. Criar o backend (Supabase)
1. Entre em https://supabase.com/ e crie um projeto.
2. Em **SQL Editor**, execute todo o conteúdo de `setup.sql`.
3. Em **Project Settings → API**, copie o **Project URL** e a chave pública **anon/publishable**.
4. Abra `index.html` e substitua:
   - `https://ohxjcxkhayugkxffgync.supabase.co`
   - `sb_publishable_i5Hr0p_LCgVzFhtIB8PQQg_Z1fTuM9s`
5. Não coloque a `service_role` key no navegador. A chave pública anon é apropriada para frontend quando as políticas RLS estão ativadas.

## 2. Ativar login com GitHub
1. No GitHub, abra **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Homepage URL: a URL do site publicado.
3. Authorization callback URL: copie a callback URL exibida em **Supabase → Authentication → Providers → GitHub**.
4. Ative GitHub em **Supabase → Authentication → Providers → GitHub** e informe Client ID e Client Secret do GitHub.
5. Em **Supabase → Authentication → URL Configuration**, configure a Site URL e as Redirect URLs para seu site.

## 3. Publicar para você e seus amigos
Opção simples: GitHub Pages.
1. Crie um repositório público chamado `talkxds`.
2. Envie `index.html`, `setup.sql` e `README.md` para o repositório.
3. No GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
4. Aguarde a URL pública e cadastre-a nas Redirect URLs do Supabase.

Você também pode publicar no Netlify ou Vercel. O arquivo HTML é estático e funciona em navegadores modernos.

## 4. Telefone
O campo telefone neste protótipo é opcional e fica salvo como metadado de cadastro. Para autenticar por SMS/telefone de verdade, ative Phone Auth no Supabase e configure um provedor SMS; é necessário implementar o fluxo de código OTP. Não confunda salvar um número com verificar sua posse.

## Importante
- Sem configurar Supabase, o app mostra a interface, mas cadastro, login e mensagens não funcionam.
- O login GitHub requer configuração de OAuth; não basta apenas publicar o site.
- Esta é uma base inicial, não um mensageiro pronto para produção. Antes de uso amplo, acrescente bloqueio/denúncia, limites anti-spam, política de privacidade, recuperação de conta e testes de segurança.
- O envio de mensagens é privado por regras RLS; o protótipo atual carrega conversas buscando um usuário na lista, sem grupos, chamadas ou criptografia ponta a ponta.
