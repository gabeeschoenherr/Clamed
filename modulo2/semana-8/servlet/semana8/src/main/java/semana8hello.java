
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import modal.PessoaModal;
import service.PessoaService;

import java.io.BufferedReader;
import java.io.IOException;

import com.google.gson.Gson;

/**
 * Servlet implementation class semana8hello
 */
@WebServlet("/semana8hello")
public class semana8hello extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private PessoaService service = new PessoaService();
	Gson gson = new Gson();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public semana8hello() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String json ="";
		
		String id = request.getParameter("id");
		if(id != null) {
			json = gson.toJson(this.service.getPessoa(Long.parseLong(id)));
		} else {
			json = gson.toJson(this.service.getPessoas());
			
		}

		
		
		response.getWriter().append(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		BufferedReader reader = request.getReader();
		PessoaModal pessoa = gson.fromJson(reader, PessoaModal.class);
		service.addPessoa(pessoa);
		doGet(request, response);
	}

}
