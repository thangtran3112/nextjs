"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePickerClick() {
    //forward the click from styled button to input
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      // when readAsDataURL is done, onload hooks will be called to save result
      setPickedImage(fileReader.result);
    };
    // readAsDataURL reads a file as a data URL, which canbe used for image src
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        {/* hidden input with classes.input */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        {/* button with type="button" to avoid submitting the form, default type="submit" */}
        <button
          type="button"
          className={classes.button}
          onClick={handlePickerClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
