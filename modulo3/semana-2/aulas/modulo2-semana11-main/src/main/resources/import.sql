-- carrega dados para tabela grupo
INSERT INTO public.grupo(descricao, nome) VALUES ('Grupo de Amigos', 'Amigos');
INSERT INTO public.grupo(descricao, nome) VALUES ('Grupo de Família', 'Família');


-- carrega dados para tabela contato
INSERT INTO public.contato(	email, id_grupo, nome, telefone_celular, telefone_fixo, telefone_trabalho)	VALUES ('brunomourapaz@gmai.com', 1, 'Bruno','9999999', '888888', '888888');