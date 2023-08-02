import Image from "next/image";
import { useState, useRef } from "react";
import styles from "../styles/forms.module.css";

export default function Forms() {
  const [exibirImagem, setExibirImagem] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setExibirImagem(true);
  };

  const handleFecharImagem = () => {
    setExibirImagem(false);
    handleResetForm();
  };

  const handleResetForm = () => {
    formRef.current.reset();
  };

  return (
    <>
      <div className={styles.forms}>
        <h1>Formulário de Vaga</h1>
        <div className={styles.container}>
          <form ref={formRef} action="#" method="POST" onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nome">
                Nome:
              </label>
              <input
                className={styles.input}
                type="text"
                id="nome"
                name="nome"
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="email">
                Email:
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="link">
                Link para portifólio:
              </label>
              <input
                className={styles.input}
                type="url"
                id="link"
                name="link"
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="texto">
                Por que você quer fazer parte da Jojos?
              </label>
              <textarea
                className={styles.inputt}
                id="texto"
                name="texto"
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>
            <div className={styles.group}>
              <input
                type="submit"
                value="Enviar Formulário"
                className={styles.submit}
              />
            </div>
          </form>
        </div>
      </div>

      {exibirImagem && (
        <div className={styles.imagemOverlay} onClick={handleFecharImagem}>
        <div className={styles.imagemWrapper}>
          <Image
            src="/images/forms.svg"
            alt="Formulario enviado"
            width={809}
            height={364}
          />
        </div>
        </div>
      )}
    </>
  );
}
