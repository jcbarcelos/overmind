import React from "react";
import { Container } from "./styles";
import { passwordRegex, emailRegex } from "../../utils/utils";
import { toast } from "react-toastify";
export default function InputAdornments() {
  const [nome, setNome] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  const handleSubmit = () => {
    if (passwordRegex(password) === true) {
      toast.success("Salvo com sucesso!");
    } else {
      toast.error("Error na senha!");
    }
  };
  return (
    <Container>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            Nome completo
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-6">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            placeholder="1234 Main St"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="col-6">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Apartment, studio, or floor"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>
    </Container>
  );
}
