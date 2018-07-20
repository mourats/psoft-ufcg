package singleton;

public class Configuracao {

	private static Configuracao instancia;

	private Configuracao() {
		
	}

	public static Configuracao obterInstancia() {
		if (instancia == null)
			instancia = new Configuracao();

		return instancia;
	}
}
