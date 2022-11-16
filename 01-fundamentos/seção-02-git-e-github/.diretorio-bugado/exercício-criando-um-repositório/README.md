Primeira alteração
Agora vamos explicar o passo a passo de como o versionamento funciona:
O primeiro passo é ter uma pasta versionada e criar uma estrutura inicial e fazemos isso utilizando o comando git init;
O segundo passo é criar uma branch nova com o comando git checkout nome-da-branch ou git checkout -b nome-da-branch (Nota: para que uma nova branch possa ser criada, é necessário que a branch master tenha alguma alteração. Qualquer arquivo pode ser criado neste caso e nem precisa ser preenchido com algum conteúdo);
A partir das ramificações você já consegue ir criando as atualizações de seu projeto;
Para que as atualizações entrem em estado de staging é necessário dar um comando git add nome-do-arquivo (ou "git add ." para adicionar todos os arquivos modificados);
Para commitar e deixar os arquivos prontos para serem mesclados ao projeto principal, basta dar o comando git commit -m "comentário breve a respeito da atualização";
E a partir daí você já consegue mesclar as atualizações. Basta dar o comando git merge branch-desejado para que ele seja mesclado ao branch atual (Nota: O merge sempre vai mesclar o branch mencionado ao branch em que você está. É possível mesclar branches secundários com outros branches secundários, mas para alterar o projeto principal sempre lembre de voltar ao branch master);
Obs.: Para se locomover entre branches use o código git checkout branch-desejado.