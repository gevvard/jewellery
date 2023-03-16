import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import {BiImageAdd} from "@react-icons/all-files/bi/BiImageAdd";
import css from"./uploading.modale.scss"


const Uploading =  ({images, setImages})=> {

  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    // <div className="">
      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["png"]}
      >
        {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              className={css.button}
              onClick={onImageUpload}
              disabled={imageList.length === 1}
              {...dragProps}
            >
              <BiImageAdd></BiImageAdd>
              Add image
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}></button>
            <div className="image-items" >
            {imageList.map((image, index) => (
               <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="300px" />
                <div className="image-item__btn-wrapper">
                  {/*<button onClick={() => onImageUpdate(index)}>Update</button>*/}
                  <button onClick={() => onImageRemove(index)}>remove</button>
                </div>
             </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
  );
}
export default Uploading