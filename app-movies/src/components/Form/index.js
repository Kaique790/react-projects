import styles from "./Form.module.css";
import { categories } from '../Category';

function Form() {
  return (
    <section className={styles.container}>
      <h2>Cadastre um video</h2>
      <form>
        <div>
          <label htmlFor="videoUrl">URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite sua URL aqui:"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="videoCategory">Selecione a categoria</label>
          <select name="category" id="selectcategory">
            <option value="-">Selecione uma cartegoria</option>
            { categories.map(category => <option value={category} >{ category }</option>) }
          </select>
        </div>
        <div>
            <button>Cadastrar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
