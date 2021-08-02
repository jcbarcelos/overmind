import React, { useState, useRef, useEffect }  from "react";
import { Container } from "./styles";
import { passwordRegex, emailRegex } from "../../utils/utils";
import { toast } from "react-toastify";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
export default function InputAdornments()  {


  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [disabilitado, setdDisabilitado] = useState(true);
  const [colorButtonSave, setColorButtonSave] = useState("light");
  const [passwordVisibled, setPasswordVisibled] = useState("password");
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [iconsSenha, setIconsSenha] = useState(true);

  const nomeRef = useRef();
  const emailRef = useRef();
  const telefoneRef = useRef();
  const passwordRef = useRef();
  
  useEffect(() => {

    if (nome.length == 0) {
      setNomeError("Nome é obrigatorio");
      nomeRef.current.focus(); 
    } else {
      setNomeError("");
    }
    if (email.length == 0) {
      setEmailError("Email é obrigatorio");
      emailRef.current.focus(); 
    } else {
      if (emailRegex(email) === true) {
        setEmailError("");
      } else {
        setEmailError("Email teve conter @ ");
      }
    }
    if (telefone.length == 0) {
      setTelefoneError("Telefone é obrigatorio");
      telefoneRef.current.focus();
    } else {
      setTelefoneError("");
    }
    if (password.length == 0) {
      setPasswordError("Password é obrigatorio");
      passwordRef.current.focus();
    } else {
      if (passwordRegex(password)) {
        setPasswordError("");
      } else {
        setdDisabilitado(true);
        setPasswordError(
          "A senha deve conter numero, caracter, letra maiscula e minuscula!"
        );
      }
    }
    if (
      nome.length !== 0 &&
      password.length !== 0 &&
      email.length !== 0 &&
      telefone.length !== 0 &&
      passwordRegex(password)
    ) {
      setdDisabilitado(false);
      
      setColorButtonSave("primary");
    }else{
      setColorButtonSave("light");
    }
  }, [
    nome,
    email,
    telefone,
    password,
    disabilitado,
    colorButtonSave,
    iconsSenha
    
  ]);

  const clean = () => {
    setNome("");
    setNomeError("");
    setPassword("");
    setPasswordError("");
    setEmail("");
    setEmailError("");
    setTelefone("");
    setTelefoneError("");
    setColorButtonSave("light");
    setdDisabilitado(true);
  };
  const visbled = (status) => {
    if (!status == true) {
      setPasswordStatus(!status);
      setPasswordVisibled("password");
      setIconsSenha(true);
    } else {
      setPasswordStatus(!status);
      setPasswordVisibled("text");
      setIconsSenha(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nome.length !== 0 &&
      password.length !== 0 &&
      email.length !== 0 &&
      telefone.length !== 0 &&
      passwordRegex(password)
    ) {
      clean();
      toast.success("Salvo com sucesso !");
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
            value={nome}
            ref={nomeRef}
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
            value={email}
            ref={emailRef}
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
            value={telefone}
            ref={telefoneRef}
            placeholder="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <div style={{ color: "red", fontSize: 12 }}>{telefoneError}</div>
        </div>
        <div className="col-6">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <button
                className="btn btn-outline-link"
                type="button"
                id="button-addon1"
                onClick={(e) => visbled(passwordStatus)}
              >
           
                {iconsSenha == true ? (
                  <BsFillEyeSlashFill />
                ) : (
                  <BsFillEyeFill />
                )}
              </button>
            </div>
            <input
              type={`${passwordVisibled}`}
              className="form-control"
              id="password"
              value={password}
              ref={passwordRef}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ color: "red", fontSize: 12 }}>{passwordError}</div>
        </div>

        <div className="col-12">
          <button
            type="button"
            className={`btn btn-${colorButtonSave} `}
            onClick={handleSubmit}
            disabled={disabilitado}
          >
            Enviar
          </button>
        </div>
      </div>
    </Container>
  );
}
