import styles from "./uploader.module.css";
import { firebaseConfig } from "../../service/firebase";
import Icon from "../icon/icon";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

const Uploader = () => {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    contents: "",
    productImages: [],
  });

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const uploadImages = (images) => {
    const uploadPromises = images.map((fileItem) => {
      const storageRef = ref(storage, "choice_images/" + fileItem.name);
      const uploadTask = uploadBytesResumable(storageRef, fileItem);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          () => {},
          (error) => {
            console.error("Upload failed:", error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log("File available at", url);
              resolve(url);
            });
          }
        );
      });
    });

    return Promise.all(uploadPromises);
  };

  const changeImage = async (e) => {
    setUploading(true);
    const result = await uploadImages(Array.from(e.target.files));
    setFormData({
      ...formData,
      productImages: result,
    });
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <section className={styles.h1}>투표 등록</section>
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <div className={styles.inlined}>
          <label className={styles.label} htmlFor="title">
            투표명
          </label>
          <input
            onChange={handleChange}
            type="text"
            className={styles.input}
            id="title"
            required
          />
        </div>
        <div className={styles.inlined}>
          <label className={styles.label} htmlFor="contents">
            설명
          </label>
          <textarea
            className={styles.contents}
            id="contents"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <div className={styles.inlined}>
          <label htmlFor="category" className={styles.label}>
            카테고리
          </label>
          <select
            name="category"
            onChange={handleChange}
            className={styles.select}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div> */}
        <div className={styles.inlined}>
          <label className={styles.label} htmlFor="images">
            후보 이미지
          </label>

          <input
            type="file"
            className={styles.input}
            id="images"
            multiple
            accept="image/*"
            onChange={changeImage}
          />
        </div>
        <div className={styles.images}>
          {formData.productImages.length === 0 ? (
            <Icon size={"160px"}>image_search</Icon>
          ) : (
            <div className={styles.imagePreview}>
              {formData.productImages.map((src) => (
                <img key={src} src={src} alt="preview" />
              ))}
            </div>
          )}
        </div>
        <button className={styles.button} type="submit" disabled={uploading}>
          {!uploading ? "등록하기" : "이미지 업로딩..."}
        </button>
      </form>
    </div>
  );
};
export default Uploader;
