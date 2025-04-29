import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  profession: string;
  privacyPolicy: boolean;
}

export function BadForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  function onSubmit() {
    alert("Cadastrado com sucesso");
  }

  const watchPassword = watch("password");

  return (
    <form className="app-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu nome"
          {...register("name", { required: "O campo nome é obrigatório" })}
        />
        {errors?.name && (
          <p className="error-message">{errors?.name.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          {...register("email", { required: "O e-mail é obrigatório" })}
        />
        {errors?.email && (
          <p className="error-message">{errors?.email.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          className={errors?.password && "input-error"}
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: "A senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres",
            },
          })}
        />
        {errors?.password && (
          <p className="error-message">{errors?.password.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Confirmar senha</label>
        <input
          className={errors?.passwordConfirm && "input-error"}
          type="password"
          placeholder="Senha"
          {...register("passwordConfirm", {
            required: "A confirmação é obrigatória",
            validate: (value) => {
              return value === watchPassword
                ? true
                : "As senhas devem ser iguais";
            },
          })}
        />
        {errors?.passwordConfirm && (
          <p className="error-message">{errors?.passwordConfirm.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Profissão</label>
        <select
          {...register("profession", {
            validate: (value) =>
              value !== "0" ? true : "Selecione uma profissão",
          })}
          className={errors?.profession && "input-error"}
        >
          <option value="0">Selecione sua profissão...</option>
          <option value="developer">Desenvolvedor</option>
          <option value="other">Outra</option>
        </select>

        {errors?.profession && (
          <p className="error-message">{errors?.profession.message}</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            {...register("privacyPolicy", {
              required: "O campo política de privacidade é obrigatório",
            })}
          />
          <label>Eu concordo com os termos de privacidade.</label>
        </div>

        {errors?.privacyPolicy && (
          <p className="error-message">{errors?.privacyPolicy.message}</p>
        )}
      </div>

      <div className="form-group">
        <button type="submit">Criar conta</button>
      </div>
    </form>
  );
}
