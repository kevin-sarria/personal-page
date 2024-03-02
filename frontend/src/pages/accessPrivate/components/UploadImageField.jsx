import { FiUpload } from 'react-icons/fi';

export const UploadImageField = ({ onChangeImg }) => {

    if(!onChangeImg) return;

  return (
    <div className="field">

        <label htmlFor="imagen">
            <div className="upload-image">
                <FiUpload />
                <p>Subir Imagen</p>
            </div>
        </label>

        <input
            type="file"
            name='imagen'
            id='imagen'
            onChange={onChangeImg}
            hidden={true}
            accept='image/png, image/jpg, image/jpeg, image/webp'
        />
        
    </div>
  )
}