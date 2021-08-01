import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { passwordRegex, emailRegex } from "../../utils/utils";
import { toast } from "react-toastify";
import _ from "lodash";
export default function InputAdornments() {
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneError, setTelefoneError] = useState("");

  useEffect(() => {
    console.log('====================================');
    console.log(telefone);
    console.log('====================================');
    if (nome.length == 0) {
      setNomeError("Nome é obrigatorio");
    } else {
      setNomeError("");
    }
    if (email.length == 0) {
      setEmailError("Email é obrigatorio");
    } else {
      setEmailError("");
    }
    if (telefone.length == 0) {
      setTelefoneError("Telefone é obrigatorio");
    } else {
      setTelefoneError("");
    }
    if (password.length == 0) {
      setPasswordError("Password é obrigatorio");
    } else {
      if (passwordRegex(password) === true) {
        setPasswordError("");
      } else {
        setPasswordError(
          "A senha deve conter numero, caracter, letra maiscula e minuscula!"
        );
      }
    }
  }, [nome, email, telefone, password]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("====================================");

    console.log(nome);
    console.log(telefone);
    console.log(email);
    console.log(password);
    console.log("====================================");
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
            placeholder="Nome"
          />
          <div style={{ color: "red", fontSize: 12 }}>{nomeError}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ color: "red", fontSize: 12 }}>{emailError}</div>
        </div>
        <div className="col-6">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            placeholder="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <div style={{ color: "red", fontSize: 12 }}>{telefoneError}</div>
        </div>
        <div className="col-6">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Apartment, studio, or floor"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ color: "red", fontSize: 12 }}>{PasswordError}</div>
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
