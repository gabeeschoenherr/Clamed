package service;

import java.util.ArrayList;
import java.util.List;

import modal.PessoaModal;

public class PessoaService {
	private static List<PessoaModal> pessoas = new ArrayList<PessoaModal>();
	
	public void addPessoa(PessoaModal pessoa) {
		pessoa.setId(System.currentTimeMillis());
		this.pessoas.add(pessoa);
		
	}
	public List<PessoaModal> getPessoas(){
		return this.pessoas;
	}
	
	public PessoaModal getPessoa(Long id) {
		if (this.pessoas.isEmpty()) {
			return null;
		}
		for(PessoaModal p: this.pessoas) {
			if (p.getId().equals(id)) {
				return p;
			}
		}
		return null;
	}
}
