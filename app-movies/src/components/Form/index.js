import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  // Valide URL
  function valideUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

    if(!regex.test(url) || url.length < 43) {
        setErrors('ERRO: URL inválida!')
        return false
    } 
    return url.substring(32, 43);
  }

  function onSave (event) {
    event.preventDefault();

    // Validations
    const urlVideo = valideUrl(url);

    if(!category || category === "-") {
      setErrors("Escolha uma categoria!");
      return
    }
    
    if (!urlVideo) {
      setErrors('URL inválida!');
      return
    }
    setErrors('');
    
    const newVideo = { url, category };
    setVideos([...videos, newVideo]);
    localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
    setUrl('');
    setCategory('');
  }

  return (
    <section className={styles.container}>
      <h2>Cadastre um video</h2>
      <form onSubmit={onSave}>
        <div>
          <label htmlFor="videoUrl">URL do vídeo</label>
          <input
            id="videoUrl"
            type="text"
            placeholder="Digite sua URL aqui:"
            required={true}
            value={url}
            minLength={43}
            maxLength={43}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="videoCategory">Selecione a categoria</label>
          <select
            name="category"
            id="videoCategory"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="-">Selecione uma cartegoria</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        {errors && (
          <div className={styles.errors}>
            { errors }
          </div>
        )}
        
      </form>
    </section>
  );
}

export default Form;
