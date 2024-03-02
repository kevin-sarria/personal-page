export const AddRecord = ({ addRecord }) => {

  if( !addRecord ) return;

  return (
    <div className="addRecord">
        <div className="addRecord__container" onClick={addRecord}>
            <span>+</span>
        </div>
    </div>
  )
}
