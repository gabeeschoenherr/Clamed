INSERT INTO public.role(nome_role) VALUES ('ROLE_ADMINISTRADOR');
INSERT INTO public.role(nome_role) VALUES ('ROLE_CADASTRADOR');

INSERT INTO public.usuario(login, nome, senha) VALUES ('luna', 'Luna Sea', '$2a$10$zEkt9o9aOp8mtyv4UkoAJ.4HUfl7YEA0WiP.AW1yaPbYXla3oZM3q');

INSERT INTO public.usuarios_role(usuario_id, role_id)VALUES (1, 1);